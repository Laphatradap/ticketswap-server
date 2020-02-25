const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRoutes = require("./User/router");
const eventRoutes = require("./Event/router");
const ticketRoutes = require("./Ticket/router")

const port = process.env.PORT || 4000;
const app = express();

app
  .use(bodyParser.json())
  .use(cors())
  .use(userRoutes)
  .use(eventRoutes)
  .use(ticketRoutes)
  .listen(port, () => console.log("listening on port " + port));
