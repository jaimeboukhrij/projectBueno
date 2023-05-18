require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

app.locals.appTitle = "Iron Car"

require("./config")(app)
require('./config/session.config')(app)

const { updateUserInfo } = require("./middlewares/loggedRoles.middleware")
app.use(updateUserInfo)

require("./routes")(app)
require("./error-handling")(app)

module.exports = app