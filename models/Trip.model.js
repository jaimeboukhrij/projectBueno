const { Schema, model } = require("mongoose");
const User = require('../models/User.model');

const tripSchema = new Schema({
    origin: {
        name: String,
        id: String,
    },
    destination: {
        name: String,
        id: String,
    },
    departureDate: Date,
    arrivalDate: Date,
    departureDay: String,
    price: {
        type: String,
        trim: true,
        required: true
    },
    owner: {
        ref: 'User',
        type: Schema.Types.ObjectId,


    },
    passengers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

const Trip = model("Trip", tripSchema);

module.exports = Trip;
