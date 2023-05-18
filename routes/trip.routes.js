const express = require('express')
const router = express.Router()
const Trip = require("../models/Trip.model")


router.get("/createTrip", (req, res, next) => res.render("trip/create-trip"))
router.post("/createTrip", (req, res, next) => {
  const { origin, destination, originId, destinationId, departureDate, arrivalDate, price, carModel, carTuition } = req.body
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


router.get("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination", (req, res, next) => {
  const { idDestination, idOrigin, date } = req.params
  Trip
    .find({ $and: [{ "origin.id": { $eq: idOrigin } }, { "destination.id": { $eq: idDestination } }, { "departureDay": { $eq: date } }] })
    .populate({
      path: "owner"

    })
    .then(trips => {

      const formattedTrips = trips.map(elm => {

        elmCopy = { ...elm._doc, joined: false }

        if (elmCopy.passengers.includes(req.session.currentUser._id)) { elmCopy.joined = true }
        else { elmCopy.joined = false }
        console.log(elmCopy.joined)
        return elmCopy
      })
      if (trips.length > 0) { res.render("trip/list-trip", { formattedTrips }) }
      else { res.send("no hay viaje") }
    })
    .catch(err => next(err))
})

router.post("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination", (req, res, next) => {
  const { idTrip } = req.body
  const { _id: newPass } = req.session.currentUser
  Trip
    .findById(idTrip)
    .then(trip => {
      const newPassengers = [...trip.passengers, newPass]
      Trip.findByIdAndUpdate(idTrip, { passengers: newPassengers })
        .then(() => res.redirect("/"))
    })

    .catch(err => next(err))
})


router.post("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination/details", (req, res, next) => {
  const { idTrip } = req.body
  const { _id: newPass } = req.session.currentUser
  Trip
    .findById(idTrip)
    .populate({
      path: "passengers"

    })
    .then(trip => {
      res.render("trip/detail-trip", { trip })
    })
    .catch(err => next(err))
})





module.exports = router