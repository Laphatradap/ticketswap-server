const db = require("../db");
const Sequelize = require("sequelize");
const Ticket = require("../Ticket/model")
const User = require("../User/model")

const Event = db.define("event", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});

Ticket.belongsTo(Event)
Event.hasMany(Ticket)

module.exports = Event;

