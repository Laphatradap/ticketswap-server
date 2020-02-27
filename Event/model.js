const db = require("../db");
const Sequelize = require("sequelize");
const Ticket = require("../Ticket/model");
// const events = require("../dummydata/events-data");

const Event = db.define("event", {
  name: Sequelize.STRING,
  description: Sequelize.STRING(511),
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  imgUrl: Sequelize.STRING(511)
});

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

// startUpdb = async () => {
//   try {
//     await Event.sync({ force: false })
//     await Event.bulkCreate(events)
//   } catch(err) {
//     console.error(err)
//   }
//     // .then(() => {
//     //   // console.log("events", events.length);
//     //   Promise.all(events.map(e => Event.create(e)));
//     // })
//     // .catch(err => {
//     //   console.error(err);
//     // });
// }


// async () => {
//   await Event.sync({ force: false })
//     .then(() => {
//     console.log("events", events.length);

//     const id = Event.findByPk(1);
//     console.log("id", id);

//     if (id === null) {
//       Event.bulkCreate(events, { validate: true })
//         .then(() => {
//           console.log("created");
//         })
//         .catch(err => {
//           console.log("failed");
//           console.log(err);
//         });
//     }
//   });
// };
// startUpdb()

module.exports = Event;
