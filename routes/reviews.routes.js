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


router.post("/createReview", (req, res, next) => {
  const { addressee, rating, text } = req.body;
  const { _id: owner } = req.session.currentUser;

  User.findById(addressee)
    .then((user) => {
      Review.create({ rating, text, owner, addressee })
        .then((review) => {
          console.log("review creada en bbdd", review);
          // Resto del código
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});




module.exports = router