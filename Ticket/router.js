const { Router } = require("express");
const Ticket = require("./model");
const Event = require("../Event/model")

const router = new Router();

// router.get("/tickets", async (req, res, next) => {
//   try {
//     const tickets = await Ticket.findAll();
//     res.send(tickets);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/tickets", async (req, res, next) => {
//   try {
//     const tickets = await Ticket
//       .findAll({ include: [Event] })
//       res.send(tickets)
//   } catch(error) {
//     next(error)
//   }
// })

router.post("/tickets", async (req, res, next) => {
  try {
    await Ticket.create(req.body).then(ticket => {
      res.json(ticket);
    });
  } catch (error) {
    next(error);
  }
});

// router.get("/tickets/:id", async (req, res, next) => {
//   // console.log("what is REQ.PARAMS", req.params.id)
//   try {
//     const ticketId = await Ticket.findByPk(req.params.id);
//     if (!ticketId) {
//       res.status(404).send("Ticket not found!");
//     } else {
//       res.json(ticketId);
//     }
//   } catch(error) {
//     next(error)
//   }
// });

router.get("/tickets/:id", async (req, res, next) => {
  try {
    const oneTicket = await Ticket.findAll({
      where: {
        id: req.params.id
      }
    })
    if(!req.params.id) {
      res.status(404).send("Event not found!")
    } else {
      res.json(oneTicket)
    }

  }catch(error) {
    next(error)
  }
})

module.exports = router