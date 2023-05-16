const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const tripSchema = new Schema(
    {
        origin: {
            name: String,
            location: {
                type: {
                    type: String
                },
                coordinates: [Number],
            },
        },
        destination: {
            name: String,
            location: {
                type: {
                    type: String
                },
                coordinates: [Number],
            },
        },
        departureDate: Date,
        arrivalDate: Date,
        price: {
            type: String,
            trim: true,
            required: true
        },
            owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        passengers: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],

    },
    {
        timestamps: true,
    });

const Trip = model("Trip", tripSchema);

module.exports = Trip;