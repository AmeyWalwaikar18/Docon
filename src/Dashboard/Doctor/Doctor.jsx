import React, { useEffect, useState } from "react";
import { getAllBookings } from "../../services/operations/bookingEmailAPI.";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const user = useSelector((state) => state.profile);
  const newEmail = user.user.email;
  const dispatch = useDispatch();
  const [fetchedBookings, setFetchedBookings] = useState([]);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBookings = await getAllBookings(newEmail);
        console.log("Fetched Bookings:", fetchedBookings); // Log the fetched data
        setFetchedBookings(fetchedBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchData();
  }, [dispatch, newEmail]);

  return (
    <div>
      {fetchedBookings.length > 0 ? (
        <div>
          {fetchedBookings
            .filter((booking) => booking.request)
            .map((booking) => (
              <div
                key={booking._id}
                className="flex mb-8 border-2 px-0 py-6 space-x-10 rounded-md bg-slate-800 text-slate-300 mx-auto justify-around"
              >
                <div className="text-left">
                  <h1 className="text-[20px]">
                    Appointment of {booking.firstName} {booking.lastName}
                  </h1>
                  <h1 className="text-[18px]">Email: {booking.userEmail}</h1>
                  <h1 className="text-[18px]">
                    Appointment Date and Time:{" "}
                    {formatDateTime(booking.selectedDateTime)}
                  </h1>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center text-[25px] h-80 my-auto">
          No appointment requests found
        </div>
      )}
    </div>
  );
};

export default Doctor;
