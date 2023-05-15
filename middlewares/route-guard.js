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


//para que solo el admin y el user editen su propio perfil

// const checkOwnerOrPm = (req, res, next) => {

//     const {id_student} = req.params
    
//   if(req.session.currentUser._id === id_student || req.session.currentUser.role === "PM" ){
//     next()
//   }else{
//     res.render("students/profile-page")
//   }
 
// }

module.exports = { isLoggedIn, isLoggedOut, checkRoles }