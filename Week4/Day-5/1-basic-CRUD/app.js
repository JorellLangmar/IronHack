// ENV VARIABLES
require("dotenv").config();

// DATABASE CONNECTION
require("./config/mongodb");

// REQUIRED DEPENDENCIES
const express = require("express");
const app = express();
const hbs = require("hbs");

// TEMPLATE ENGINE CONFIG
app.use(express.static(__dirname + "/public")); // set the public folder (where browser can download files from)
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

// BODY PARSER HERE
// ....

// ROUTES
app.use(require("./routes/pages"));
app.use("api", require("./routes/api"));

module.exports = app;
