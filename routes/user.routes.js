const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const saltRounds = 10
const User = require('../models/User.model')
const { isLoggedOut, isLoggedIn, checkRoles } = require('../middlewares/route-guard')
const userApiHandler = require("../services/user-api.service")
const uploaderMiddleware = require('../middlewares/uploader.middleware')



router.get("/myProfile", isLoggedIn, (req, res, next) => {

    const idProfile = req.session.currentUser._id

    User
        .findById(idProfile)
        .then(user => res.render("profile/my-profile", user))
        .catch(err => next(err))
})


router.get("/myProfile/:id/edit", isLoggedIn, (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .then(user => res.render("profile/my-profile-edit", { user }))
        .catch(err => next(err))
})




router.post("/myProfile/:id/edit", uploaderMiddleware.single('imageUrl'), (req, res, next) => {

    const { id } = req.params
    const { path: imageUrl } = req.file
    const { username, name, secondName, email, phoneNumber, aptitudes } = req.body

    User
        .findByIdAndUpdate(id, { username, name, secondName, email, phoneNumber, aptitudes, imageUrl })
        .then(() => res.redirect("/"))
        .catch(err => console.log(err))

})

router.get("/seachTrip/:origin/:destination/:idorigin/:iddestination", (req, res, next) => {
    res.send(req.params)
})

module.exports = router