const express = require("express")
const router = express.Router()
const { BookingEmailController,fetchBookedDatesTimes,bookAppointment,getAllBookingsByEmail,deleteBookingById,RejectionEmailController,updateBookingRequestStatus,AcceptanceEmailController } = require("../controllers/BookingEmail");

router.post("/booking-email", BookingEmailController);
router.post("/rejection-email", RejectionEmailController);
router.post("/acceptance-email", AcceptanceEmailController);
router.get("/booked-dates-times",fetchBookedDatesTimes);
router.post("/book-appointment", bookAppointment);
router.post("/get-booking-requests", getAllBookingsByEmail);
router.put("/bookings/accept/request", updateBookingRequestStatus);
router.delete("/get-booking-requests", deleteBookingById);

module.exports = router