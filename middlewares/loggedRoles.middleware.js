

const isLogged = (req, res , next) => {
     res.locals.isLogged = req.session.currentUser
     next()
}

const isPassenger = (req, res , next) => {
    res.locals.isPassenger = req.session.currentUser?.role === "passenger"
    next()
}

const isDriver = (req, res , next) => {
   res.locals.isDriver = (req.session.currentUser?.role === "driver" || req.session.currentUser?.role === "admin")
    next()
}

module.exports = {isLogged, isPassenger, isDriver }