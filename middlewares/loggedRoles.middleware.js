const Trip = require("../models/Trip.model")

const isLogged = (req, res, next) => {
    res.locals.isLogged = req.session.currentUser
    next()
}

const isPassenger = (req, res, next) => {
    res.locals.isPassenger = req.session.currentUser?.role === "passenger"
    next()
}

const isDriver = (req, res, next) => {
    res.locals.isDriver = (req.session.currentUser?.role === "driver" || req.session.currentUser?.role === "admin")
    next()
}

const userName = (req, res, next) => {
    if (req.session.currentUser) { res.locals.userName = req.session.currentUser.name }
    next()
}

const userRole = (req, res, next) => {
    if (req.session.currentUser) { res.locals.userRole = req.session.currentUser.role }

    next()
}

const isOnTrip = (req, res, next) => {
    res.locals.isOnTrip = "0"
    const session = req.session.currentUser
    if (session) {
        const { _id } = req.session.currentUser
        Trip
            .find({ passengers: _id })
            .then(trip => {
                console.log(trip.length)
                if (trip.length > 0) {
                    res.locals.isOnTrip = true
                    console.log('dentro del if', res.locals.isOnTrip)
                }
                else { res.locals.isOnTrip = false }
            })
            .catch(err => next(err))
    }
    console.log("jjjjjjj", res.locals.isOnTrip)
    next()
}
console.log("jejej",)



module.exports = { isLogged, isPassenger, isDriver, userName, userRole, isOnTrip }