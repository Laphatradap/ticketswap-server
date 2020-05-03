const { Router } = require("express");
const Sequelize = require("sequelize");

const Ticket = require("./model");
const Comment = require("../Comment/model")
const User = require("../User/model")
const router = new Router();
 
router.post("/tickets", async (req, res, next) => {
  try {
    await Ticket.create(req.body).then(ticket => {
      res.json(ticket);
    });
  } catch (error) {
    next(error);
  }
});


router.get("/tickets/:id", async (req, res, next) => {
  try {
    // Calculate risk score
    let ticket = await Ticket.findAll({
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      where: {
        id: req.params.id
      }
    })
    ticket = ticket[0].dataValues
    // console.log("TICKET", ticket)

    // 1) Initialize risk score to 0
    let riskScore = 0
    // console.log('initial', riskScore)

    // 2) Check if it's the only ticket, add 10%
    let ticketCount = await Ticket.findAll({
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'n_tickets']],
      where: {
        userId: ticket.userId 
      }
    })
    ticketCount = ticketCount[0].dataValues.n_tickets
    if (ticketCount == 1) {
      riskScore += 10
    }
    // console.log('after ticketcount', riskScore)

    // 3) Check if cheaper than avg price, add x%
    let avgPricePerEvent = await Ticket.findAll({
      attributes: [[Sequelize.fn('AVG', Sequelize.col('price')), 'avg_price']],
      where: {
        eventId: ticket.eventId
      }
    })
    avgPricePerEvent = avgPricePerEvent[0].dataValues.avg_price
    let priceDiff = ((avgPricePerEvent - ticket.price) / avgPricePerEvent) * 100
    if(priceDiff < -10) {
      riskScore -= 10
    } else {
      riskScore += priceDiff
    }
    // console.log('after price check', riskScore)

    // 4) Check if ticket is added biz hours, deduct 10%, if not, add 10%
    let creationHour = await Ticket.findAll({
      where: {
        createdAt: ticket.createdAt
      }
    })
    creationHour = creationHour[0].dataValues.createdAt.getHours()
    // console.log("creationHour", creationHour.getHours())
    if(9 <= creationHour && creationHour < 17) {
      riskScore -= 10
    } else {
      riskScore += 10
    }
    // console.log('after time check', riskScore)

    // 5) Check if more than 3 comments, add 5%
    let commentCount = await Comment.findAll({
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'n_comments']],
      where: {
        ticketId: ticket.id 
      }
    })
    commentCount = commentCount[0].dataValues.n_comments
    // console.log("OUTPUT: commentCount", commentCount)
    if(commentCount > 3) {
      riskScore += 5
    }
    // console.log('after comment check', riskScore)

    // 6) Limit risk score between 5% and 95%
    if(riskScore < 5) {
      riskScore = 5
    } else if (riskScore > 95) {
      riskScore = 95
    }
    // console.log("riskScore", riskScore)

    //return object
    if(!req.params.id) {
      res.status(404).send("Event not found!")
    } else {
      res.json({ ticket, riskScore })
    }
  } catch(error) {
    next(error)
  }
})

module.exports = router;
