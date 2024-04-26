const User = require("../models/User");
const Notifications = require("../models/Notifications");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
require("dotenv").config();
const mongoose = require("mongoose");
const Profile = require("../models/Profile");

exports.sendOTP = async (req, res) => {
  try {
    //fetch email from request ki body
    const { email } = req.body;

    //check if user already exists
    const checkUserPresent = await User.findOne({ email });

    //if user exists,then return a response
    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User already registered",
      });
    }

    //generate otp
    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated: ", otp);

    //check unique otp or not
    const result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }

    const otpPayload = { email, otp };

    //create an entry in db for OTP
    const otpBody = await OTP.create(otpPayload);
    console.log(otpBody);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    // Fetch data from request body
    const { email, password } = req.body;

    // Validate data
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user by email
    const user = await User.findOne({ email })
      .populate("additionalDetails")
      .populate("notifications")
      .populate("prescriptionDetails");

    // Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not registered. Please sign up first",
      });
    }

    console.log("Retrieved user:", user);
    console.log("Retrieved user password:", user.password);
    console.log("Provided password:", password);

    // Check if both password and user.password are defined
    if (!password || !user.password) {
      return res.status(500).json({
        success: false,
        message:
          "Internal Server Error: Password or hashed password is undefined",
      });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match
    if (passwordMatch) {
      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };

      // Generate JWT token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      user.token = token;
      user.password = undefined;

      // Create cookie and send response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged In Successfully",
      });
    } else {
      // If passwords don't match
      return res.status(401).json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    // Handle any other errors
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Login Failed. Please try again",
    });
  }
};

// exports.signUp = async (req, res) => {
//   try {
//     //data fetch from req ki body
//     const {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//       accountType,
//       // contactNumber,
//       otp
//     } = req.body;

//     //data validation
//     if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
//       return res.status(403).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     //match passwords
//     if (password !== confirmPassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Passwords do not match, please try again",
//       });
//     }

//     //check user already exists or not
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     // Find the most recent OTP for the email
//     const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
//     console.log(response);
//     if (response.length === 0) {
//     	// OTP not found for the email
//     	return res.status(400).json({
//     		success: false,
//     		message: "The OTP is not valid now",
//     	});
//     } else if (otp !== response[0].otp) {
//     	// Invalid OTP
//     	return res.status(400).json({
//     		success: false,
//     		message: "The OTP is not valid",
//     	});
//     }

//     //hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user
//     let approved = "";
//     approved === "Doctor" ? (approved = false) : (approved = true);
//     // console.log("hi");

//     //create the profile entry for each individual user
//     const profileDetails = await Profile.create({
//       gender:null,
//       dateOfBirth:null,
//       contactNumber:null,
//       about:null,
//       height:null,
//       weight:null,
//     });

//     //entry create in db
//     const user = await User.create({
//       _id: new mongoose.Types.ObjectId(),
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       accountType: accountType,
//       approved: approved,
//       additionalDetails: profileDetails._id,
//       image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
//     });
//     console.log("bye");
//     //return response
//     return res.status(200).json({
//       success: true,
//       user,
//       message: "User is registered successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "User cannot be registered. Please try again",
//     });
//   }
// };

exports.signUp = async (req, res) => {
  try {
    // data fetch from req ki body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      // contactNumber,
      otp,
    } = req.body;

    // data validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // match passwords
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match, please try again",
      });
    }

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid now",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the profile entry for each individual user
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      contactNumber: null,
      about: null,
      height: null,
      weight: null,
    });

    // const notificationDetails = await Notifications.create({
    //   message: null,
    //   request: null,
    //   timing: null,
    //   date: null,
    //   firstName:null,
    //   lastName:null,
    //   userEmail:null
    // });

    // Create the user
    // let approved = "";
    // approved === "Doctor" ? (approved = false) : (approved = true);

    const user = await User.create({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType: accountType,
      // approved: approved,
      additionalDetails: profileDetails._id,
      notifications: [],
      prescriptionDetails: [],
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });

    // Populate the additionalDetails field with the profileDetails
    const populatedUser = await User.findById(user._id)
      .populate("additionalDetails")
      .populate("notifications")
      .populate("prescriptionDetails");

    // Return response with populated user details
    return res.status(200).json({
      success: true,
      user: populatedUser,
      message: "User is registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again",
    });
  }
};

// exports.user_get_users = async (req, res, next) => {
//   User.find()
//     .then((users) => {
//       const response = {
//         count: users.length,
//         Users: users.map((user) => {
//           return {
//             id: user._id,
//             email: user.email,
//             password: user.password,
//           };
//         }),
//       };
//       res.status(200).json(response);
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: err,
//       });
//     });
// };

exports.user_get_users = async (req, res) => {
  try {
    // find all the users
    User.find()
      .then((users) => {
        const response = {
          count: users.length,
          Users: users.map((user) => {
            return {
              id: user._id,
              email: user.email,
              password: user.password,
              accountType: user.accountType,
              firstName: user.firstName,
              lastName: user.lastName,
              image: user.image,
            };
          }),
        };
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Interval Server Error",
    });
  }
};

// exports.setNotifications = async (req, res) => {
//   try {
//     const { time, date, message, request, email,firstName,lastName,userEmail } = req.body;

//     // Data validation
//     if (!time || !date || !message || !request || !email || !firstName || !lastName || !userEmail ) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Find user by email
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }

//     // Find notifications by user's notifications ID
//     const notificationDetails = await Notifications.findById(
//       existingUser.notifications
//     );

//     // Update notification details
//     notificationDetails.message = message;
//     notificationDetails.time = time;
//     notificationDetails.date = date;
//     notificationDetails.request = request;
//     notificationDetails.firstName = firstName;
//     notificationDetails.lastName = lastName;
//     notificationDetails.userEmail = userEmail;

//     // notificationDetails.push(existingUser.notifications._id);

//     // Save the updated notification details
//     await notificationDetails.save();


//     // Populate user details
//     const populatedUser = await User.findById(existingUser._id)
//       .populate("additionalDetails")
//       .populate("notifications");

//     // Return response with updated user details
//     return res.status(200).json({
//       success: true,
//       user: populatedUser,
//       message: "User's notifications field has been updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "User's notifications could not be updated due to some internal error.",
//     });
//   }
// };


exports.setNotifications = async (req, res) => {
  try {
    const { time, date, message, request, email, firstName, lastName, userEmail } = req.body;

    // Data validation
    if (!time || !date || !message || !request || !email || !firstName || !lastName || !userEmail ) {
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

    // Create a new notification
    const newNotification = new Notifications({
      message: message,
      time: time,
      date: date,
      request: request,
      firstName: firstName,
      lastName: lastName,
      userEmail: userEmail
    });

    console.log("Hello");

    // Save the new notification
    await newNotification.save();

    console.log("hi");


    // Push the ObjectId of the new notification into the user's notifications array
    existingUser.notifications.push(newNotification._id);

    console.log("Heya");


    // Save the updated user document
    await existingUser.save();

    console.log("Heeeeuuu");


    // Populate user details
    const populatedUser = await User.findById(existingUser._id)
      .populate("additionalDetails")
      .populate("notifications");

    console.log("bye");


    // Return response with updated user details
    return res.status(200).json({
      success: true,
      user: populatedUser,
      message: "User's notifications field has been updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User's notifications could not be updated due to some internal error.",
    });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).populate("notifications");

    // Check if user exists
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Extract notifications from user object
    const notifications = user.notifications;

    // Prepare response
    const response = {
      count: notifications.length,
      notifications: notifications.map((notification) => {
        return {
          id: notification._id,
          email: notification.userEmail,
          message: notification.message,
          firstName: notification.firstName,
          lastName: notification.lastName,
          request: notification.request,
          time: notification.time,
          date: notification.date
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
