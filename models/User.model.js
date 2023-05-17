const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    secondName: {
      type: String,
      trim: true,
      required: true,
    },
    imageUrl: String,
    role: {
      type: String,
      enum: ["driver", "passenger", "admin"],
      required: true,
    },
    dni: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    car: {
      model: String,
      tuition: String,
    },
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }],
    aptitudes: [String]
  },
  {
    timestamps: true,
  });

const User = model("User", userSchema);

module.exports = User;