const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const tripSchema = new Schema(
    {
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