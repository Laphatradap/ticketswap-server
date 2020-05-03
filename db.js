const Sequelize = require("sequelize");
const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);
// const tickets = require("../dummydata/tickets-data");

db.sync({ force: false })
  .then(() => console.log("DB schema updated"))
  .catch(console.error);

module.exports = db;
