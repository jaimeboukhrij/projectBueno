const express = require('express')
const router = express.Router()
const Trip = require("../models/Trip.model")



router.get("/createTrip", (req, res, next) => res.render("trip/create-trip"))

router.post("/createTrip/:idOri/:idDest", (req, res, next) => {
  res.send(req.body)

  // const { origin, destination, departureDate, arrivalDate, price, driver, carModel, carTuition } = req.body

  // const originTrip = {
  //     name: origin,
  //     location:{
  //         coordinates:[34567,345678]
  //     }
  //   }

  // const destinationTrip = {
  //     name: destination,
  //     location:{
  //         coordinates:[34567,345678]
  //     }
  //   }


  //    Trip
  //    .create({ origin:originTrip, destination:destinationTrip, departureDate, arrivalDate, price, driver, carModel,carTuition })
  //    .then((trip)=> console.log("viaje creado en BBDD", trip))
  //    .catch(err => next(err))


})

module.exports = router