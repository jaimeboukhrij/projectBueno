const updateUserInfo = (req, res, next) => {

    res.locals.loggedUser = {
        user: req.session.currentUser,
        name: req.session.currentUser.name,
        role: req.session.currentUser.role,
        isPassenger: req.session.currentUser?.role === "passenger",
        isDriverOrAdmin: req.session.currentUser?.role === "driver" || req.session.currentUser?.role === "admin",
    }
    next()

}

module.exports = { updateUserInfo }