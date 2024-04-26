import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookingById,
  getAllBookings,
  sendAcceptanceEmailMessage,
  sendRejectionEmailMessage,
  updateBookingRequestStatus,
} from "../../services/operations/bookingEmailAPI.";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const DocRequests = () => {
  const user = useSelector((state) => state.profile);
  const newEmail = user.user.email;
  const dispatch = useDispatch();
  const [bookings, setBookings] = useState(null); // Define bookings in component state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBookings = await getAllBookings(newEmail);
        console.log("Printing Bookings", fetchedBookings);
        setBookings(fetchedBookings); // Update bookings state with fetched data
        // Dispatch action with bookings if needed
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, [dispatch, newEmail]);

  // Function to format date and time
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };

  // Function to handle booking rejection
  const handleRejectBooking = async (bookingId) => {
    try {
      // Find the rejected booking from the bookings array
      const rejectedBooking = bookings.find(
        (booking) => booking._id === bookingId
      );
      if (rejectedBooking) {
        // Extract the necessary details
        const {
          createdAt,
          email,
          firstName,
          lastName,
          selectedDateTime,
          userEmail,
          _id,
        } = rejectedBooking;

        // Log the details of the rejected booking
        console.log("Rejected Booking Details:");
        console.log("createdAt:", createdAt);
        console.log("email:", email);
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("selectedDateTime:", selectedDateTime);
        console.log("userEmail:", userEmail);
        console.log("_id:", _id);

        // Call the function to send an email to the userEmail
        sendRejectionEmailMessage(
          email,
          userEmail,
          firstName,
          lastName,
          selectedDateTime
        );
      } else {
        console.log("Rejected Booking Details not found.");
      }

      await deleteBookingById(bookingId);

      // After successful deletion, fetch bookings again to update the UI
      const updatedBookings = await getAllBookings(newEmail);
      setBookings(updatedBookings);
    } catch (error) {
      console.error("Error rejecting booking:", error);
    }
  };

  const handleAcceptBooking = async (bookingId) => {
    try {

      // Find the rejected booking from the bookings array
      const rejectedBooking = bookings.find(
        (booking) => booking._id === bookingId
      );
      if (rejectedBooking) {
        // Extract the necessary details
        const {
          createdAt,
          email,
          firstName,
          lastName,
          selectedDateTime,
          userEmail,
          _id,
        } = rejectedBooking;

        // Log the details of the rejected booking
        console.log("Rejected Booking Details:");
        console.log("createdAt:", createdAt);
        console.log("email:", email);
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("selectedDateTime:", selectedDateTime);
        console.log("userEmail:", userEmail);
        console.log("_id:", _id);

        // Call the function to send an email to the userEmail
        sendAcceptanceEmailMessage(
          email,
          userEmail,
          firstName,
          lastName,
          selectedDateTime
        );
      } else {
        console.log("Rejected Booking Details not found.");
      }
      
      // Update the booking's request field to true
      await updateBookingRequestStatus(bookingId, true);
  
      // After successful update, fetch bookings again to update the UI
      const updatedBookings = await getAllBookings(newEmail);
      setBookings(updatedBookings);
  
    } catch (error) {
      console.error("Error accepting booking:", error);
    }
  };
  

  return (
    <div>
      <div>
        {bookings && bookings.length > 0 && (
          <div>
            {bookings
              .filter((booking) => !booking.request) // Filter out bookings where request is true
              .map((booking) => (
                <div
                  key={booking._id}
                  className="flex mb-8 border-2 py-6 px-0 space-x-10 rounded-md bg-slate-800 text-slate-300 mx-auto justify-around"
                >
                  <div className="text-left">
                    <h1 className="text-[20px]">
                      Appointment Booking Request from {booking.firstName}{" "}
                      {booking.lastName}
                    </h1>
                    <h1 className="text-[18px]">Email: {booking.userEmail}</h1>
                    <h1 className="text-[18px]">
                      Appointment request Date and Time:{" "}
                      {formatDateTime(booking.selectedDateTime)}
                    </h1>
                  </div>
                  <div className="flex space-x-6 items-center">
                    <button
                      onClick={() => handleAcceptBooking(booking._id)}
                      className="flex items-center space-x-1 font-medium bg-yellow-400 px-3 py-2 rounded-md w-fit h-fit text-slate-900"
                    >
                      <div>Accept</div>
                      <div>
                        <TiTick />
                      </div>
                    </button>
                    <button
                      onClick={() => handleRejectBooking(booking._id)}
                      className="flex items-center font-medium space-x-1 rounded-md px-3 py-2 bg-red-600 h-fit text-slate-50"
                    >
                      <div>Reject</div>
                      <div>
                        <RxCross2 />
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            {bookings.filter((booking) => !booking.request).length === 0 && (
              <div className="flex justify-center items-center text-[25px] h-80 my-auto">
                No appointment requests found
              </div>
            )}
          </div>
        )}
        {!bookings ||
          (bookings.length === 0 && (
            <div className="flex justify-center items-center text-[25px] h-80 my-auto">
              No appointment requests found
            </div>
          ))}
      </div>
    </div>
  );
};

export default DocRequests;
