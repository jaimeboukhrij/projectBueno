const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const Trip = require('../models/Trip.model')
const Review = require('../models/Review.model')

const { isLoggedOut, isLoggedIn, checkRoles } = require('../middlewares/route-guard')
const uploaderMiddleware = require('../middlewares/uploader.middleware')



router.get("/myProfile", isLoggedIn, (req, res, next) => {

    const { _id: idProfile } = req.session.currentUser

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
    const { name, secondName, email, phoneNumber, aptitudes } = req.body

    if (req.file) {
        const { path: imageUrl } = req.file
        User
            .findByIdAndUpdate(id, { name, secondName, email, phoneNumber, aptitudes, imageUrl })
            .then(() => res.redirect("/"))
            .catch(err => console.log(err))
    } else {
        User
            .findByIdAndUpdate(id, { name, secondName, email, phoneNumber, aptitudes })
            .then(() => res.redirect("/"))
            .catch(err => console.log(err))
    }
})


router.post("/profile/:id", isLoggedIn, (req, res, next) => {

    const { _id: idProfile } = req.session.currentUser
    User
        .findById(idProfile)
        .then(user => res.render("users/profiles", user))
        .catch(err => next(err))


})

router.get("/myProfile/MyTrips", (req, res, next) => {

  const { _id: user } = req.session.currentUser

  Trip
    .find({ "passengers": { $eq: user } })
    .then(trips => {
      if (trips.length > 0) {
        res.render("profile/my-profile-trips", { trips, user })
      } else {
        res.send("no hay viaje")
      }
    })
    .catch(err => next(err))
})

router.get("/myProfile/myReviews", (req, res, next) => {

  const { _id: owner } = req.session.currentUser


  Review
  .find({addressee: owner})
  .populate("owner")
  .then(review => res.render("profile/my-reviews", {review} ))
  .catch(err => next(err))
  

  //BUSCAR LAS REVIEWS DE ESE USUARIO

})


module.exports = router