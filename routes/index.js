module.exports = app => {

    const indexRoutes = require("./index.routes");
    app.use("/", indexRoutes);

    const userRoutes = require("./user.routes");
    app.use("/myProfile", userRoutes);

    const tripRoutes = require("./trip.routes");
    app.use("/", tripRoutes);

    const reviewsRoutes = require("./reviews.routes");
    app.use("/", reviewsRoutes);

    const authRoutes = require("./auth.routes");
    app.use("/", authRoutes);

}