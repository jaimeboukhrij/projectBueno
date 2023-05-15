const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models/User.model')
const uploaderMiddleware = require('../middlewares/uploader.middleware')

// const { isLoggedOut } = require('../middlewares/route-guard')
// const userApiHandler = require("../services/user-api.service")


router.get("/signUp", (req, res, next) => res.render("auth/signUp"))

router.post("/signUp",uploaderMiddleware.single('imageUrl') ,(req, res, next) => {

    const { path: imageUrl } = req.file
    const { username, name, secondName,password, role, dni, email, phoneNumber, aptitudes} = req.body
    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => {
    
            User.create({ username, name, secondName, imageUrl, password: hashedPassword, role, dni, email, phoneNumber, aptitudes})
        })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
    
})

router.get(("/logIn"), (req, res, next) => res.render("auth/logIn"))

router.post(("/logIn"), (req, res, next) => {

    const { email, password } = req.body
    if (email === "" || password === "") {
        res.render('auth/logIn', { errorMessage: 'Los campos son obligatorios' })
        return
     }

    User
        .findOne({ email })
        .then(user => {

            if (!user) {
                res.render('auth/logIn', { errorMessage: 'Usuario no reconocido' })
                return
            }

            if (!bcrypt.compareSync(password, user.password)) {
                res.render('auth/logIn', { errorMessage: 'Contraseña incorrecta' })
                return
            }

           req.session.currentUser = user 
            res.redirect("/")
        })
        .catch(err => next(err))
})


router.get('/logOut', (req, res, next) => {
    req.session.destroy(() => res.redirect('/logIn'))
})


module.exports = router