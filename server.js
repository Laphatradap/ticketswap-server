const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// const authMiddleware = require("./auth/authMiddleware")
const userRoutes = require("./User/router");
const eventRoutes = require("./Event/router");
const ticketRoutes = require("./Ticket/router")
const commentRoutes = require("./Comment/router")
const port = process.env.PORT || 4000;
const app = express();

app
  .use(bodyParser.json())
  .use(cors())
  .use(userRoutes)
  .use(eventRoutes)
  .use(ticketRoutes)
  .use(commentRoutes)
  .listen(port, () => console.log("listening on port " + port));