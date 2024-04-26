const BASE_URL = 'http://localhost:4000/api/v1';

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  DOCTORS_API: BASE_URL + "/auth/doctors",
  SET_NOTIFICATIONS_API: BASE_URL + "/auth/appointment-booking",
  GET_NOTIFICATIONS_API: BASE_URL + "/auth/get-notifications"
}

export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/contact",
}

export const bookingEmailEndpoint = {
  BOOKING_EMAIL_API: BASE_URL + "/booking-email",
  SAVING_DATE_TIME_API: BASE_URL + "/book-appointment",
  FETCH_BOOKED_DATE_TIME: BASE_URL + "/booked-dates-times",
  GET_BOOKINGS_FOR_DOCTOR: BASE_URL + "/get-booking-requests",
  DELETE_BOOKING_ENDPOINT: BASE_URL + "/get-booking-requests",
  REJECTION_BOOKING_API: BASE_URL + "/rejection-email",
  ACCEPTANCE_BOOKING_API: BASE_URL + "/acceptance-email",
  UPDATE_REQUEST_API: BASE_URL + "/bookings/accept/request"
}

export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}

export const prescriptionEndpoint = {
  SET_PRESCRIPTION_API: BASE_URL + "/auth/prescription/set-prescription",
  GET_PRESCRIPTION_API: BASE_URL + "/auth/prescription/get-prescription",
}
