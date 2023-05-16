const express = require('express')
const router = express.Router()
const Trip = require("../models/Trip.model")


router.get("/createTrip", (req, res, next) => res.render("trip/create-trip"))

router.post("/createTrip", (req, res, next) => {
  const { origin, destination, originId, destinationId, departureDate, arrivalDate, price, carModel, carTuition } = req.body

  req.session.currentUser._id
  const org = {
    name: origin,
    id: originId
  }
  const dest = {
    name: destination,
    id: destinationId
  }
  const departureDay = departureDate.slice(0, 10)
  const { _id: owner } = req.session.currentUser


  Trip
    .create({ origin: org, destination: dest, departureDate, arrivalDate, price, carModel, carTuition, owner, departureDay })
    .then(() => res.redirect("/"))
    .catch(err => next(err))

})




module.exports = router