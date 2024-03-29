const express = require('express')
const router = express.Router()
const Trip = require("../models/Trip.model")
const User = require('../models/User.model')
const { formatJoiningTrips } = require('../utils/format-joining-trips')
const { isLoggedIn } = require('../middlewares/route-guard')
const { dateComparation } = require('../utils/format-joining-trips')
const { onTrip } = require('../utils/format-joining-trips')


router.get("/createTrip", (req, res, next) => {

  res.render("trip/create-trip")
})


router.post("/createTrip", (req, res, next) => {

  const { origin, destination, originId, destinationId, departureDate, arrivalDate, price, carModel, carTuition } = req.body

  const org = { name: origin, id: originId }
  const dest = { name: destination, id: destinationId }

  const departureDay = departureDate.slice(0, 10)
  const { _id: owner } = req.session.currentUser

  const car = {
    model: carModel,
    tuition: carTuition
  }

  Trip
    .create({ origin: org, destination: dest, departureDate, arrivalDate, price, carModel, carTuition, owner, departureDay })
    .then(() => {
      User
        .findByIdAndUpdate(owner, { car })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
    })
    .catch(err => next(err))
})




router.get("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination", (req, res, next) => {

  const { idDestination, idOrigin, date } = req.params

  Trip
    .find({ $and: [{ "origin.id": { $eq: idOrigin } }, { "destination.id": { $eq: idDestination } }, { "departureDay": { $eq: date } }] })
    .populate({ path: "owner" })
    .then(trips => {

      const formattedTrips = formatJoiningTrips(trips, req.session.currentUser)

      if (trips.length > 0) {
        res.render("trip/list-trip", { formattedTrips })
      } else {
        res.send("no hay viaje")
      }
    })
    .catch(err => next(err))
})


router.post("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination", (req, res, next) => {

  const { date, origin, destination, idOrigin, idDestination } = req.params
  const { idTrip } = req.body
  const { _id: newPassenger } = req.session.currentUser

  Trip
    .findById(idTrip)
    .then(trip => {
      const passengers = [...trip.passengers, newPassenger]
      return Trip.findByIdAndUpdate(idTrip, { passengers })
    })
    .then(() => res.redirect(`/seachTrip/${date}/${origin}/${destination}/${idOrigin}/${idDestination}/${idTrip}/details`))
    .catch(err => next(err))
})


router.get("/seachTrip/:date/:origin/:destination/:idOrigin/:idDestination/:id/details", isLoggedIn, (req, res, next) => {

  const { id } = req.params
  const { _id: RevOwner } = req.session.currentUser
  Trip
    .findById(id)
    .populate({ path: "passengers" })
    .then(trip => {
      time = dateComparation(trip.arrivalDate)
      let isOntrip = onTrip(RevOwner, trip)
      console.log("enpoint", isOntrip)

      res.render("trip/detail-trip", { trip, time, RevOwner, isOntrip })
    })
    .catch(err => next(err))
})






module.exports = router


