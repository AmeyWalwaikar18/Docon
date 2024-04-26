const mongoose = require('mongoose');

// Define the schema for the Booking model
const bookingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  request:{
    type: Boolean,
    default: false
  },
  userEmail: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  selectedDateTime: {
    type: Date,
    required: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the Booking model using the schema
const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
