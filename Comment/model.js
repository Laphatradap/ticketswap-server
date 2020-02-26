const db = require("../db");
const Sequelize = require("sequelize");
const User = require("../User/model")
const Ticket = require("../Ticket/model")

const Comment = db.define("comment", {
  text: Sequelize.STRING
});

Comment.belongsTo(User)
Comment.belongsTo(Ticket)
Ticket.hasMany(Comment)

module.exports = Comment;