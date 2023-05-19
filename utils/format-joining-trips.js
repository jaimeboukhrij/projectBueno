const formatJoiningTrips = (trips, user) => trips.map(elm => {
    return {
        ...elm._doc,
        joined: elm._doc.passengers.includes(user?._id)
    }
})

const dateComparation = function compararFechaActualCon(fecha) {
    var fechaActual = new Date();
    var fechaComparar = new Date(fecha);
    if (fechaActual > fechaComparar) {
        return true
    } else {
        return false
    }
}

const onTrip = function isOntrip(idUser, trip) {
    let isOnTrip = false
    trip.passengers.forEach(passenger => {
        console.log(passenger.id.toString(), idUser.toString())
        if (passenger.id.toString() === idUser.toString()) return isOnTrip = true

    });

    return isOnTrip
}




module.exports = { formatJoiningTrips, dateComparation, onTrip }