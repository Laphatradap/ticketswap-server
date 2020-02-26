const db = require("../db");
const Sequelize = require("sequelize");
const User = require("../User/model")

const Ticket = db.define("ticket", {
  price: Sequelize.INTEGER,
  description: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});

Ticket.belongsTo(User)

module.exports = Ticket;