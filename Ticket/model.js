const db = require("../db");
const Sequelize = require("sequelize");
const User = require("../User/model");

const Ticket = db.define("ticket", {
  price: Sequelize.FLOAT,
  description: Sequelize.STRING(511),
  imgUrl: Sequelize.STRING(511)
});

Ticket.belongsTo(User);

// startUpdb = async () => {
//   try {
//     await Ticket.sync({force: false})
//     await Ticket.bulkCreate([
//       {
//         price: 35.59,
//         description: "1 X Regular",
//         imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffm.cnbc.com%2Fapplications%2Fcnbc.com%2Fresources%2Fimg%2Feditorial%2F2014%2F05%2F01%2F101634823-ticket.1910x1000.jpg&f=1&nofb=1",
//         userId: 1,
//         eventId: 1
//       },
//       {
//         price: 50,
//         description: "1 X Regular",
//         imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fconcert-ticket-template-concert-party-or-festival-ticket-design-with-vector-id879125540%3Fk%3D6%26m%3D879125540%26s%3D170667a%26w%3D0%26h%3DOXAlZzopRO7PDVESr1HCI-ajCJMJ-eIJoi0JyOx_H_E%3D&f=1&nofb=1",
//         userId: 2,
//         eventId: 1
//       }
//     ])
//   } catch (err) {
//     console.error(err)
//   }
// }
// // startUpdb()

// startUpdb = async () => {
//   try {
//     await Ticket.sync({force: false})
//     // await Promise.all(tickets.map(t => Ticket.create(t)))
//     await Ticket.bulkCreate(tickets)
//   } catch(err) {
//     console.error(err)
//   }
// }
// startUpdb()

// Ticket.sync({ force: false })
// .then(() => {
//   Promise.all(tickets.map(t => Ticket.create(t)));
// })
// .catch(err => {
//   console.error(err);
// });

module.exports = Ticket;
