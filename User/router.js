const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const { toJWT } = require("../auth/jwt");
const auth = require("../auth/authMiddleware")

const router = new Router();

router.get("/user", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (e) {
    next(e);
  }
});

router.post("/user", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return response.status(400).send("Missing username, email or password");
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  try {
    await User.create({
      ...req.body,
      password: hashedPassword
    });
    res.status(201).send("User created");
  } catch (error) {
    console.log(error.name);

    switch (error.name) {
      case "SequelizeUniqueConstraintError":
        return res.status(400).send({ message: "Email not unique" });
      default:
        return res.status(400).send("Bad request");
    }
  }
});

router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    res.status(400).send({
      message: "User with that email does not exist"
    });
  } else if (bcrypt.compareSync(password, user.password)) {
    const token = toJWT({ id: user.id });
    res.status(200).send({ token: token });
  } else {
    res.status(400).send({
      message: "Password was incorrect"
    });
  }
});


module.exports = router;
