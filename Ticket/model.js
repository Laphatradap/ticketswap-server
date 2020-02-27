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
