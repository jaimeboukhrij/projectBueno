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




module.exports = { formatJoiningTrips, dateComparation }