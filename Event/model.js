const db = require("../db");
const Sequelize = require("sequelize");

const Event = db.define("event", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  start_date: Sequelize.STRING,
  end_date: Sequelize.STRING,
  imgUrl: Sequelize.STRING
});




module.exports = Event;

