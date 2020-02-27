const bcrypt = require("bcrypt");
const User = require("../User/model")

module.exports = async function() {
  // Users' dummy data
  const [jenny, harry, ron] = await Promise.all(
    [
      {
        username: "Jenny",
        email: "jenny@user.com",
        password: bcrypt.hashSync("123", 10)
      },
      {
        username: "Harry",
        email: "harry@user.com",
        password: bcrypt.hashSync("123", 10)
        
      },
      {
        name: "Ron",
        email: "ron@user.com",
        password: bcrypt.hashSync("123", 10)
      }
    ].map(u => User.create(u))
  );

  console.log("dummy in place")

}