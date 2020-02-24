const express = require("express");

const app = express();
const port = process.env.PORT || 4000

const cors = require("cors")
const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParser = require("body-parser");
app.use(bodyParser.json())

const userRoutes = require('./User/router')
app.use(userRoutes)

app.listen(port, () => console.log("listening on port " + port)); 