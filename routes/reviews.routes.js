const express = require('express')
const router = express.Router()
const User = require('../models/User.model')
const Review = require('../models/Review.model')


router.get("/createReview", (req, res, next) => {

  User
    .find()
    .then(users => res.render("reviews/create-review", { users }))
    .catch(err => next(err))
})


router.post("/createReview/:id", (req, res, next) => {

  const { addressee, rating, text } = req.body;
  const { _id: owner } = req.session.currentUser;

  User.findById(addressee)
    .then((addresseeUser) => {
      const addresseeId = addresseeUser.id;
      return Review.create({ rating, text, owner, addressee: addresseeId });
    })
    .then((review) => {
      res.redirect("/")
    })
    .catch((err) => next(err));
});





module.exports = router