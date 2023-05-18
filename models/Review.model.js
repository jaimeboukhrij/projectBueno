const { Schema, model } = require("mongoose");


const reviewSchema = new Schema(
    {
        rating: {
            type: Number
        },
        text: {
            type: String
        },
        owner: {
            ref: 'User',
            type: Schema.Types.ObjectId,
        }
    },
    {
        timestamps: true,
    });

const Review = model("Review", reviewSchema);

module.exports = Review;
