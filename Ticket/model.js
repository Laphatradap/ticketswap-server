const db = require("../db");
const Sequelize = require("sequelize");
const Event = require("../Event/model")

const Ticket = db.define("ticket", {
  sellerName: Sequelize.STRING,
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});

Ticket.belongsTo(Event)

module.exports = Ticket;