const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const Review = require('../models/Review.model')
const Trip = require("../models/Trip.model")


router.get("/createReview/:id", (req, res, next) => {
  const { id: idTrip } = req.params
  Trip
    .findById(idTrip)
    .populate("owner")
    .populate("passengers")
    .then(trip => {

      res.render("reviews/create-review", { trip, idTrip })
    })
    .catch(err => next(err))
})


router.post("/createReview/:id", (req, res, next) => {

  const { addressee, rating, text } = req.body
  const { _id: owner } = req.session.currentUser
  Review
    .create({ addressee, rating, text, owner })
    .then(res.redirect("/"))
    .catch(err => next(err))
});





module.exports = router