const User = require("../models/User");
const Prescription = require("../models/PrescriptionDetails");
const mongoose = require("mongoose");

exports.setPrescription = async (req, res) => {
  try {
    const { disease, symptoms, firstName, lastName, email, date, medicines } =
      req.body;

    // Data validation
    if (
      !disease ||
      !date ||
      !medicines ||
      !symptoms ||
      !email ||
      !firstName ||
      !lastName
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create a new prescription
    const newPrescription = new Prescription({
      firstName: firstName,
      lastName: lastName,
      email: email,
      disease: disease,
      symptoms: symptoms,
      medicines: medicines,
      date: date,
    });

    console.log("Hello");

    // Save the new notification
    await newPrescription.save();

    console.log("hi");

    existingUser.prescriptionDetails.push(newPrescription._id);

    console.log("Heya");

    // Save the updated user document
    await existingUser.save();

    console.log("Heeeeuuu");

    // Populate user details
    const populatedUser = await User.findById(existingUser._id)
      .populate("additionalDetails")
      .populate("notifications")
      .populate("prescriptionDetails");

    console.log("bye");

    // Return response with updated user details
    return res.status(200).json({
      success: true,
      user: populatedUser,
      message: "User's prescription form has been updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:
        "User's prescription form could not be updated due to some internal error.",
    });
  }
};

exports.getPrescription = async (req, res) => {
  try {
    console.log("AAA");
    const {id} = req.body;

    console.log("BBB", id);
    // Find user by email
    const user = await User.findById({_id:id}).populate("prescriptionDetails");

    console.log("Walwaikar", user);

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Extract prescription from user object
    const prescriptions = user.prescriptionDetails;

    // Prepare response
    const response = {
      count: prescriptions.length,
      prescriptions: prescriptions.map((prescription) => {
        return {
          id: prescription._id,
          email: prescription.email,
          disease: prescription.disease,
          firstName: prescription.firstName,
          lastName: prescription.lastName,
          symptoms: prescription.symptoms,
          medicines: prescription.medicines,
          date: prescription.date,
        };
      }),
    };

    // Return response
    return res.status(200).json({
      success: true,
      ...response, // Spread the response object
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
