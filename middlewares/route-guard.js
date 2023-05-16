const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect('/logIn')
}
const isLoggedOut = (req, res, next) => {
    !req.session.currentUser ? next() : res.redirect('/')
}

const checkRoles = (...admittedRoles) => (req, res, next) => {

    const isAdmitted = admittedRoles.includes(req.session.currentUser.role)

    if (isAdmitted) {
        next()
    } else {
        res.render('auth/login', { errorMessage: 'Acceso no autorizado' })
    }
}

module.exports = { isLoggedIn, isLoggedOut, checkRoles }