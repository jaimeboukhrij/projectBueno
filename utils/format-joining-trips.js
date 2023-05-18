const formatJoiningTrips = (trips, user) => trips.map(elm => {
    return {
        ...elm._doc,
        joined: elm._doc.passengers.includes(user._id)
    }
})

module.exports = { formatJoiningTrips }