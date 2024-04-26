const express = require("express");
const router = express.Router();

const {
  setPrescription,
  getPrescription
} = require("../controllers/Prescription");

// Route for setting the prescription form
router.post("/set-prescription", setPrescription);

// Route for getting all the prescription forms
router.post("/get-prescription", getPrescription);

module.exports = router;
