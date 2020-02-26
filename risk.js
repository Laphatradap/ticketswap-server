
const Ticket = require("./model");
// const Event = require("../Event/model")
// const User = require("./User/model")
// const Comment = require("./Comment/model")

const numberOfTickets = Ticket.findAll({
  attributes: [
    'id',
    [sequelize.fn('COUNT', sequelize.col('id')), 'n_tickets']
  ]
})

console.log(numberOfTickets)

module.exports = Risk