const express = require("express");
const router = express.Router();

const {
  login,
  signUp,
  sendOTP,
  user_get_users,
  setNotifications,
  getNotifications
} = require("../controllers/Auth");

// Route for user login
router.post("/login", login);

// Route for user signup
router.post("/signup", signUp);

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP);

// getting the router
router.get("/doctors", user_get_users);

//setting the notifications for doctors
router.post("/appointment-booking",setNotifications);

router.get("/get-notifications",getNotifications);

module.exports = router;
