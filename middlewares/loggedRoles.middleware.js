const updateUserInfo = (req, res, next) => {

    res.locals.loggedUser = {
        user: req.session.currentUser,
        name: req.session.currentUser?.name,
        image: req.session.currentUser?.imageUrl,
        role: req.session.currentUser?.role,
        isPassengerandIslogg: req.session.currentUser && req.session.currentUser?.role === "passenger",
        isPassenger: req.session.currentUser?.role === "passenger",
        isDriverOrAdmin: req.session.currentUser?.role === "driver" || req.session.currentUser?.role === "admin",
    }
    next()

}

module.exports = { updateUserInfo }