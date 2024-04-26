const mongoose = require("mongoose");
const profileSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    //   required: true,
    },
    contactNumber: {
      type: Number,
      trim: true,
    //   required: true,
    },
    about: {
      type: String,
      trim: true,
    //   required: true,
    },
    height: {
      type: Number,
      trim: true,
    //   required: true,
    },
    weight: {
      type: Number,
      trim: true,
    //   required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
