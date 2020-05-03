const Sequelize = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// startUpdb = async () => {
//   try {
//     await User.sync({force: false})
//     await User.bulkCreate([
//       {
//         username: "Jenny",
//         email: "jenny@user.com",
//         password: bcrypt.hashSync("123", 10)
//       },
//       {
//         username: "Harry",
//         email: "harry@user.com",
//         password: bcrypt.hashSync("123", 10)
        
//       },
//       {
//         name: "Ron",
//         email: "ron@user.com",
//         password: bcrypt.hashSync("123", 10)
//       }
//     ])
//   } catch (err) {
//     console.error(err)
//   }
// }
// // startUpdb()

module.exports = User;