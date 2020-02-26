const { Router } = require("express");
const Event = require("./model");
const Ticket = require("../Ticket/model");

const router = new Router();

// router.get("/events", async (req, res, next) => {
//   try {
//     const events = await Event.findAll();
//     res.send(events);
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/events", async (req, res, next) => {
  // console.log("req query", req.query)
  try {
    const events = await Event.findAll({ include: [Ticket] });
    res.send(events);
  } catch (error) {
    next(error);
  }
});

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
      include: [Ticket],
      where: {
        id: req.params.id
      }
    });
    // console.log("OneEvent", oneEvent);
    if(!req.params.id) {
      res.status(404).send("Event not found!")
    } else {
      res.json(oneEvent)
    }
  } catch(error) {
    next(error)
  }
});

// const data = [{
//   name: "Mysteryland",
//   description: "Each year, the Mysteryland dance festival transforms a patch of land 20 kilometres from Amsterdam into a magical place with fairytale surroundings, themed stages, open fields and intimate spaces.",
//   start_date: "2020-08-28",
//   end_date: "2020-08-30",
//   imgUrl: "https://media.iamsterdam.com/ndtrc/Images/93/9384efb1-632d-484c-9e77-ee1e712cb590/cd59808c-5c71-4362-b78c-30aa5625ad59.jpg",
//   createdAt: new Date(),
//   updatedAt: new Date()
// },
// {
//   name: "Sonic Acts Academy 2020",
//   description: "Sonic Acts Academy is a three-day festival of innovative audio-visual and performative art and critical thinking, motivated by ecological, political, technological and social change in our environment. From 21 to 23 February 2020 in Amsterdam, the Academy transforms partnering institutions – Paradiso, De Brakke Grond, Stedelijk Museum Amsterdam and OT301 – into a thought-provoking space for new developments in artistic research.",
//   start_date: "2020-02-21",
//   end_date: "2020-02-23",
//   imgUrl: "https://media.iamsterdam.com/ndtrc/Images/ca/ca47665e-5188-48ff-8d37-76c27845e8cc/2019_10_29_sa_academy_PARADISO_2.png?w=1200&h=675&scale=both&mode=crop&quality=70",
//   createdAt: new Date(),
//   updatedAt: new Date()
// }]

// router.bulkCreate(data)
//   .then(() => {
//     return Event.findAll()
//   })
//   .then(function(response) {
//     res.json(response)
//   })
//   .catch(function(error) {
//     res.json(error)
//   })

module.exports = router;
