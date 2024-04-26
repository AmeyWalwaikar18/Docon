const { BookingEmail } = require("../mail/templates/BookingEmail");
const mailSender = require("../utils/mailSender");
// import {Booking} from "../models/Booking";
const Booking = require("../models/Booking");
const { RejectionEmail } = require("../mail/templates/RejectionEmail");
const { AcceptanceEmail } = require("../mail/templates/AcceptanceEmail");

exports.BookingEmailController = async (req, res) => {
  const { email, firstName, lastName, userEmail, selectedDateTime } = req.body;
  console.log(req.body);
  console.log("Date and time for email", selectedDateTime);
  const selectedDateTimeNew = new Date(selectedDateTime);

  // Format the date and time in a readable format
  const formattedDate = selectedDateTimeNew.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = selectedDateTimeNew.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  console.log(`Appointment Date: ${formattedDate}`);
  console.log(`Appointment Time: ${formattedTime}`);

  try {
    const emailRes = await mailSender(
      userEmail,
      "Booking Appointent Confirmation",
      BookingEmail(email, firstName, lastName, formattedDate,formattedTime)
    );
    console.log("Email Res ", emailRes);
    return res.status(200).json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
};


// bookingController.js

exports.fetchBookedDatesTimes = async (req, res) => {
    try {
        // Fetch booked dates and times from the database or any other data source
        console.log("Fetching booked dates and times...");
        const bookedDatesTimes = await Booking.find(); // Fetch all fields of the Booking model
        console.log("Fetched booked dates and times:", bookedDatesTimes);

        // Send the booked dates and times as a response
        return res.status(200).json({
            success: true,
            data: {
                bookedDatesTimes: bookedDatesTimes
            },
            message: "Booked dates and times fetched successfully"
        });
    } catch (error) {
        console.error('Error fetching booked dates and times:', error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch booked dates and times. Please try again later."
        });
    }
};

  // Assuming you have already configured your Express app and set up the necessary routes and middleware

// Controller function to handle form submission and store the date and time entry
exports.bookAppointment = async (req, res) => {
  try {
    // Extract data from the request body
    const { email, firstName, lastName, selectedDateTime,userEmail } = req.body;
    console.log("SPD",userEmail);

    // Create a new Booking document
    const booking = new Booking({
      // email is doctor email
      email,
      userEmail,
      firstName,
      lastName,
      selectedDateTime
    });

    // Save the Booking document to the database
    await booking.save();

    // Respond with success message
    res.status(200).json({ success: true, message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ success: false, message: "Failed to book appointment. Please try again later." });
  }
};


exports.getAllBookingsByEmail = async (req, res) => {
  try {
    // Extract the email from the request parameters or query string
    const {email} = req.body;
    console.log("amey",email);
    
    // Find all bookings that match the email
    const bookings = await Booking.find({ email });

    // Respond with the list of bookings
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    console.error("Error fetching bookings by email:", error);
    res.status(500).json({ success: false, message: "Failed to fetch bookings by email. Please try again later." });
  }
};


exports.deleteBookingById = async (req, res) => {
  const {bookingId} = req.body; // Get booking id 

  try {
    // Find the booking by id and delete it
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully", deletedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


exports.RejectionEmailController = async (req, res) => {
  const { email,userEmail, firstName, lastName, selectedDateTime } = req.body;
  console.log(req.body);
  console.log("Date and time for email", selectedDateTime);
  const selectedDateTimeNew = new Date(selectedDateTime);

  // Format the date and time in a readable format
  const formattedDate = selectedDateTimeNew.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = selectedDateTimeNew.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  console.log(`Appointment Date: ${formattedDate}`);
  console.log(`Appointment Time: ${formattedTime}`);

  try {
    const emailRes = await mailSender(
      userEmail,
      "Docon Appointment Rejection",
      RejectionEmail(email, firstName, lastName, formattedDate,formattedTime)
    );
    console.log("Email Res ", emailRes);
    return res.status(200).json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
};


exports.AcceptanceEmailController = async (req, res) => {
  const { email,userEmail, firstName, lastName, selectedDateTime } = req.body;
  console.log(req.body);
  console.log("Date and time for email", selectedDateTime);
  const selectedDateTimeNew = new Date(selectedDateTime);

  // Format the date and time in a readable format
  const formattedDate = selectedDateTimeNew.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = selectedDateTimeNew.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  console.log(`Appointment Date: ${formattedDate}`);
  console.log(`Appointment Time: ${formattedTime}`);

  try {
    const emailRes = await mailSender(
      userEmail,
      "Docon Appointment Confirmed",
      AcceptanceEmail(email, firstName, lastName, formattedDate,formattedTime)
    );
    console.log("Email Res ", emailRes);
    return res.status(200).json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong...",
    });
  }
};


// Controller function to update the request status of a booking by ID
exports.updateBookingRequestStatus = async (req, res) => {
  const { bookingId } = req.body;

  try {
    // Find the booking by ID and update its request status
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { request: true }, // Update the request status to true
      { new: true } // Return the updated booking after the update operation
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking request status updated successfully", updatedBooking });
  } catch (error) {
    console.error("Error updating booking request status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
