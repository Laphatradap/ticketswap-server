const { Router } = require("express");
const Event = require("./model");
const Ticket = require("../Ticket/model");
const User = require("../User/model");
const { Op } = require("sequelize");

const router = new Router();

// router.get("/events", async (req, res, next) => {
//   try {
//     const events = await Event.findAll();
//     res.send(events);
//   } catch (error) {
//     next(error);
//   }
// });

// get current date into string for comparison
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd

router.get("/events", async (req, res, next) => {
  // console.log("req query", req.query)
  try {
    const events = await Event.findAll({
      include: [Ticket],
      where: {
        end_date: {
          [Op.gt]: today
        }
      }
    });
    res.send(events);
  } catch (error) {
    next(error);
  }
});

// router.get("/events", async (req, res, next) => {
//   // console.log("req query", req.query)
//   try {
//     const events = await Event.findAll({ include: [Ticket] });
//     res.send(events);
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/events", async (req, res, next) => {
  try {
    await Event.create(req.body).then(event => {
      res.json(event);
    });
  } catch (error) {
    next(error);
  }
});

// router.get("/events/:id", async (req, res, next) => {
//   console.log("what is REQ.PARAMS", req.params.id)
//   const eventId = await Event.findByPk(req.params.id);
//   if (!eventId) {
//     res.status(404).send("Event not found!");
//   } else {
//     res.json(eventId);
//   }
// });

router.get("/events/:id", async (req, res, next) => {
  try {
    const oneEvent = await Event.findAll({
      include: [
        {
          model: Ticket,
          attributes: ["id", "price", "description", "imgUrl", "userId"]
        }
      ],
      where: {
        id: req.params.id
      }
    });
    // console.log("OneEvent", oneEvent);
    if (!req.params.id) {
      res.status(404).send("Event not found!");
    } else {
      res.json(oneEvent);
    }
  } catch (error) {
    next(error);
  }
});

router.put("/events/:id", (req, res, next) =>
  Event.findByPk(req.params.id)
    .then(event => event.update(req.body))
    .then(event => res.send(event))
    .catch(next)
);

module.exports = router;
