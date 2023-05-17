
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


module.exports = { isLogged, isPassenger, isDriver, userName, userRole }