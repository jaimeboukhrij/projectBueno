
require("dotenv").config();
require("./db");


const express = require("express");
const hbs = require("hbs");
const app = express();
const {isLogged, isPassenger, isDriver } = require("./middlewares/loggedRoles.middleware")


const projectName = "Iron Car";

app.locals.appTitle = `${projectName}`;

require("./config")(app)
require('./config/session.config')(app)

app.use(isLogged)
app.use(isPassenger)
app.use(isDriver)

require("./routes")(app)
require("./error-handling")(app);

module.exports = app;
