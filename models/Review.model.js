const { Schema, model } = require("mongoose");


const reviewSchema = new Schema(
    {
        rating: {
           type: Number

        },
        text: {
            type: String
        }
    },
    {
        timestamps: true,
    });

const Review = model("Review", reviewSchema);

module.exports = Review;
