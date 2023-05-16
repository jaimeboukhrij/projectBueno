const express = require('express')
const router = express.Router()
const Trip = require("../models/Trip.model")
const { isLoggedIn, checkRoles } = require("../middlewares/route-guard")




router.get("/createTrip", isLoggedIn, checkRoles("driver"), (req, res, next) => res.render("trip/create-trip"))

router.post("/createTrip", isLoggedIn, checkRoles("driver"), (req, res, next) => {
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
        .populate("owner")
        .then(trip => {
            if (trip.length > 0) { res.render("trip/list-trip", { trip }) }
            else { (res.send("no hay viaje")) }
        })
        .catch(err => next(err))
})




module.exports = router