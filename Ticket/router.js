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

router.get("/tickets", async (req, res, next) => {
  try {
    const tickets = await Ticket
      .findAll({ include: [Event] })
      res.send(tickets)
  } catch(error) {
    next(error)
  }
})

router.post("/tickets", async (req, res, next) => {
  try {
    await Ticket.create(req.body).then(ticket => {
      res.json(ticket);
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router