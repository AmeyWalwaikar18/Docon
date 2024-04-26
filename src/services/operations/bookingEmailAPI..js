import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { bookingEmailEndpoint } from "../apis";

const {
  BOOKING_EMAIL_API,
  SAVING_DATE_TIME_API,
  FETCH_BOOKED_DATE_TIME,
  GET_BOOKINGS_FOR_DOCTOR,
  DELETE_BOOKING_ENDPOINT,
  REJECTION_BOOKING_API,
  ACCEPTANCE_BOOKING_API,
  UPDATE_REQUEST_API
} = bookingEmailEndpoint;

export async function sendBookingEmailMessage(formData) {
  const toastId = toast.loading("Sending message..."); // Assuming you are using a toast library for displaying notifications
  let success = false;
  try {
    console.log("BEFORE Calling BACKEND API FOR BOOKING EMAIL", formData);
    const response = await apiConnector("POST", BOOKING_EMAIL_API, formData);
    console.log("AFTER Calling BACKEND API FOR BOOKING EMAIL");
    // console.log("CONTACT_US_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    success = true;
    toast.success("Message sent successfully!");
  } catch (error) {
    console.log("BOOKING_EMAIL_API API ERROR............", error);
    toast.error("Failed to send message");
  }
  toast.dismiss(toastId);
  return success;
}

export async function sendRejectionEmailMessage(email,userEmail,firstName,lastName,selectedDateTime) {
  const toastId = toast.loading("Sending message..."); // Assuming you are using a toast library for displaying notifications
  let success = false;
  try {
    console.log("BEFORE Calling BACKEND API FOR BOOKING EMAIL",{email,userEmail,firstName,lastName,selectedDateTime});
    const response = await apiConnector("POST", REJECTION_BOOKING_API,{email,userEmail,firstName,lastName,selectedDateTime});
    console.log("AFTER Calling BACKEND API FOR BOOKING EMAIL");
    // console.log("CONTACT_US_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    success = true;
    toast.success("Message sent successfully!");
  } catch (error) {
    console.log("BOOKING_EMAIL_API API ERROR............", error);
    toast.error("Failed to send message");
  }
  toast.dismiss(toastId);
  return success;
}


export async function sendAcceptanceEmailMessage(email,userEmail,firstName,lastName,selectedDateTime) {
  const toastId = toast.loading("Sending message..."); // Assuming you are using a toast library for displaying notifications
  let success = false;
  try {
    console.log("BEFORE Calling BACKEND API FOR BOOKING EMAIL",{email,userEmail,firstName,lastName,selectedDateTime});
    const response = await apiConnector("POST", ACCEPTANCE_BOOKING_API,{email,userEmail,firstName,lastName,selectedDateTime});
    console.log("AFTER Calling BACKEND API FOR BOOKING EMAIL");
    // console.log("CONTACT_US_API API RESPONSE............", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    success = true;
    toast.success("Message sent successfully!");
  } catch (error) {
    console.log("BOOKING_EMAIL_API API ERROR............", error);
    toast.error("Failed to send message");
  }
  toast.dismiss(toastId);
  return success;
}



export async function fetchBookedDatesTimesFromAPI() {
  try {
    const toastId = toast.loading("Fetching booked dates and times..."); // Assuming you are using a toast library for displaying notifications
    console.log("Hello");
    // Make a GET request to fetch booked dates and times from the backend API using apiConnector
    const response = await apiConnector("GET", FETCH_BOOKED_DATE_TIME);

    console.log("bubye", response);
    // Dismiss the loading toast
    toast.dismiss(toastId);

    // Check if the response was successful
    // if (!response.success) {
    //   throw new Error(response.message);
    // }

    console.log("hurrah", response.data.data.bookedDatesTimes);

    // Return the booked dates and times from the response data
    return response.data.data.bookedDatesTimes;
  } catch (error) {
    console.error("Error fetching booked dates and times:", error);
    toast.error("Failed to fetch booked dates and times");
    throw error; // Re-throw the error to handle it in the calling function
  }
}

export async function sendBookingData(formData) {
  const toastId = toast.loading("Sending booking data..."); // Display loading toast

  try {
    const response = await apiConnector("POST", SAVING_DATE_TIME_API, formData);
    toast.success("Booking data sent successfully!"); // Display success toast
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error sending booking data:", error);
    toast.error("Failed to send booking data"); // Display error toast
    throw error; // Re-throw the error
  } finally {
    toast.dismiss(toastId); // Dismiss the loading toast
  }
}

export async function getAllBookings(email) {
  // const toastId = toast.loading("Fetching bookings..."); // Assuming you are using a toast library for displaying notifications
  let bookings = [];
  console.log("hrhrhr", email);

  try {
    console.log("BEFORE Calling BACKEND API FOR FETCHING BOOKINGS");
    const response = await apiConnector("POST", GET_BOOKINGS_FOR_DOCTOR, {
      email,
    });
    console.log("AFTER Calling BACKEND API FOR FETCHING BOOKINGS", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    bookings = response.data.data;

    if(bookings.length > 0){
      toast.success("Bookings fetched successfully!");
    }
    return bookings;
  } catch (error) {
    console.log("FETCH_BOOKINGS_API ERROR:", error);
    toast.error("Failed to fetch bookings");
  }
  // toast.dismiss(toastId);
  return bookings;
}

// doc accept and reject buttons
export async function deleteBookingById(bookingId) {
  try {
    console.log("BEFORE Calling BACKEND API FOR DELETING BOOKING");
    const response = await apiConnector("DELETE", DELETE_BOOKING_ENDPOINT, {
      bookingId,
    });
    console.log("AFTER Calling BACKEND API FOR DELETING BOOKING", response);

    toast.success("Booking deleted successfully!");
  } catch (error) {
    console.log("DELETE_BOOKING_API ERROR:", error);
    toast.error("Failed to delete booking");
  }
}

// export async function updateBookingRequestStatus(bookingId, status) {
//   try {
//     // Make a request to the backend API to update the booking request status
//     const response = await apiConnector("PUT",UPDATE_REQUEST_API, { status,bookingId });
    
//     if (!response.data.success) {
//       throw new Error(response.data.message);
//     }

//     toast.success("Updates have been done successfully. Please refresh to see the updated changes.");

//     return response.data.data; // Return the updated booking data
//   } catch (error) {
//     console.error('Error updating booking request status:', error);
//     throw error; // Throw the error for handling in the calling code
//   }
// }


export async function updateBookingRequestStatus(bookingId, status) {
  try {
    // Make a request to the backend API to update the booking request status
    const response = await apiConnector("PUT", UPDATE_REQUEST_API, { status, bookingId });

    console.log("arreee",response);

    // toast.success("Updates have been done successfully. Please refresh to see the updated changes.");

    // Return the updated booking data
    return response.data.data;
  } catch (error) {
    console.error('Error updating booking request status:', error);
    throw error; // Throw the error for handling in the calling code
  }
}
