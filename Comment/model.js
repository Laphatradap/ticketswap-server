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

// startUpdb = async () => {
//   try {
//     await Comment.sync({force:false})
//     await Comment.bulkCreate([
//       {
//         text: "I bought the ticket from this guy once, fast response",
//         userId: 1,
//         eventId: 1
//       },
//       {
//         text: "Follow! dont want to miss this!",
//         userId: 2,
//         eventId: 1
//       },
//       {
//         text: "Great Event! too bad it's too expensive",
//         userId: 2,
//         eventId: 2
//       }
//     ])
//   } catch (err) {
//     console.error(err)
//   }
// }

// // startUpdb()

module.exports = Comment;