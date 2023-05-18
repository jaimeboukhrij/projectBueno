module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const apiRoutes = require("./api.routes.js")
    app.use("/api", apiRoutes);

    const userRoutes = require("./user.routes");
    app.use("/", userRoutes);

    const tripRoutes = require("./trip.routes");
    app.use("/", tripRoutes);

    const reviewsRoutes = require("./reviews.routes");
    app.use("/", reviewsRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

}