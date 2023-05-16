
require("dotenv").config();
require("./db");


const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);


const projectName = "Iron Car";

app.locals.appTitle = `${projectName}`;


require('./config/session.config')(app)

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const apiRoutes = require("./routes/api.routes");
app.use("/api", apiRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/", userRoutes);

const tripRoutes = require("./routes/trip.routes");
app.use("/", tripRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

//  To handle errors. 
require("./error-handling")(app);

module.exports = app;
