// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import BasicDateTimePicker from "./BasicDateTimePicker";
// import {
//   fetchBookedDatesTimesFromAPI,
//   sendBookingEmailMessage,
//   sendBookingData,
// } from "../../services/operations/bookingEmailAPI.";

// const BookingForm = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const user = useSelector((state) => state.profile);
//   const [selectedDateTime, setSelectedDateTime] = React.useState(null); // State to hold selected date and time
//   const [bookedDatesTimes, setBookedDatesTimes] = React.useState([]);

//   //   useEffect(() => {
//   //     // Fetch booked dates and times from backend API
//   //     const fetchBookedDatesTimes = async () => {
//   //       try {
//   //         // Make API call to fetch booked dates and times
//   //         const response = await fetchBookedDatesTimesFromAPI();
//   //         // Assuming the response is an array of booked dates and times
//   //         setBookedDatesTimes(response);
//   //         console.log("yippee",bookedDatesTimes);
//   //       } catch (error) {
//   //         console.error("Error fetching booked dates and times:", error);
//   //       }
//   //     };

//   //     // Call the function to fetch booked dates and times
//   //     fetchBookedDatesTimes();
//   //   }, []);

//   // Modify the useEffect hook to fetch booked dates and times from the backend
//   useEffect(() => {
//     const fetchBookedDatesTimes = async () => {
//       try {
//         const response = await fetchBookedDatesTimesFromAPI();
//         console.log("Printing response", response);
//         // Assuming the response contains an array of objects with 'selectedDateTime' field
//         const result = response.map((booking) => booking.selectedDateTime);
//         console.log(result);
//         setBookedDatesTimes(result);
//         console.log("yippee", bookedDatesTimes);
//       } catch (error) {
//         console.error("Error fetching booked dates and times:", error);
//       }
//     };

//     fetchBookedDatesTimes();
//   },[]);


  

//   const onSubmit = async (formData) => {
//     // Combine form data with user's first name, last name, and selectedDateTime
//     const data = {
//       ...formData,
//       userEmail: user.user.email,
//       firstName: user.user.firstName,
//       lastName: user.user.lastName,
//       selectedDateTime: selectedDateTime, // Add selected date/time to form data
//     };

//     // Handle form submission (e.g., send data to backend, dispatch action, etc.)
//     console.log(data);
//     console.log("Date and time", data.selectedDateTime.$d);

//     const res = await sendBookingEmailMessage(data);
//     console.log("Printing result", res);

//     const response = await sendBookingData(data);
//     // Handle success response
//     console.log("Booking data sent successfully:", response);

//     // Reset the form after submission
//     reset();
//   };

//   return (
//     <div className="w-full h-full flex flex-col mx-auto">
//       <div>
//         <h1 className="text-[22px] font-medium pb-[15px]">Appointment Form</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* Booking date */}
//           <div className="flex flex-col mx-auto w-[450px]">
//             <h1 className="pb-3 pt-8 text-[16px] font-normal text-left">
//               Select Date and Time:
//             </h1>
//             <div className="w-[450px] mb-[35px] mx-auto">
//               {/* Pass setSelectedDateTime as prop to BasicDateTimePicker */}
//               <BasicDateTimePicker
//                 setSelectedDateTime={setSelectedDateTime}
//                 bookedDatesTimes={bookedDatesTimes}
//               />
//             </div>
//             <div className="flex flex-col gap-2 mb-[35px]">
//               <label
//                 htmlFor="email"
//                 className="lable-style text-[16px] mb-3 text-left ml-1 font-normal text-richblack-5"
//               >
//                 Doctor's Email:
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter Doctor's Email id"
//                 className="form-style px-3 py-3 border-[1px] border-slate-700 text-[#000000] rounded-md"
//                 {...register("email", { required: true })}
//               />
//               {errors.email && (
//                 <span className="-mt-1 text-[12px] text-blue-600">
//                   Please enter your email.
//                 </span>
//               )}
//             </div>
//           </div>
//           <button
//             className="bg-yellow-300 text-slate-800 px-3 py-1 font-medium border-[1px] border-black rounded-md"
//             type="submit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import BasicDateTimePicker from "./BasicDateTimePicker";
import {
  fetchBookedDatesTimesFromAPI,
  sendBookingEmailMessage,
  sendBookingData,
} from "../../services/operations/bookingEmailAPI.";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.profile);
  const [selectedDateTime, setSelectedDateTime] = React.useState(null);
  const [bookedDatesTimes, setBookedDatesTimes] = React.useState(() => {
    // Retrieve bookedDatesTimes from local storage
    const storedBookedDatesTimes = localStorage.getItem("bookedDatesTimes");
    return storedBookedDatesTimes ? JSON.parse(storedBookedDatesTimes) : [];
  });

  useEffect(() => {
    const fetchBookedDatesTimes = async () => {
      try {
        const response = await fetchBookedDatesTimesFromAPI();
        const result = response.map((booking) => booking.selectedDateTime);
        setBookedDatesTimes(result);
        // Save bookedDatesTimes to local storage
        localStorage.setItem("bookedDatesTimes", JSON.stringify(result));
        console.log("yippee", result); // Log the result after setting state
        console.log("maggi",bookedDatesTimes);
      } catch (error) {
        console.error("Error fetching booked dates and times:", error);
      }
    };

    fetchBookedDatesTimes();
  }, []);

  const onSubmit = async (formData) => {
    const data = {
      ...formData,
      userEmail: user.user.email,
      firstName: user.user.firstName,
      lastName: user.user.lastName,
      selectedDateTime: selectedDateTime,
    };

    console.log(data,data.userEmail);
    console.log("Date and time", data.selectedDateTime.$d);

    const res = await sendBookingEmailMessage(data);
    console.log("Printing result", res);

    const response = await sendBookingData(data);
    console.log("Booking data sent successfully:", response);

    reset();
  };

  return (
    <div className="w-full h-full flex flex-col mx-auto">
      <div>
        <h1 className="text-[22px] font-medium pb-[15px]">Appointment Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mx-auto w-[450px]">
            <h1 className="pb-3 pt-8 text-[16px] font-normal text-left">
              Select Date and Time:
            </h1>
            <div className="w-[450px] mb-[35px] mx-auto">
              <BasicDateTimePicker
                setSelectedDateTime={setSelectedDateTime}
                bookedDatesTimes={bookedDatesTimes}
              />
            </div>
            <div className="flex flex-col gap-2 mb-[35px]">
              <label
                htmlFor="email"
                className="lable-style text-[16px] mb-3 text-left ml-1 font-normal text-richblack-5"
              >
                Doctor's Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Doctor's Email id"
                className="form-style px-3 py-3 border-[1px] border-slate-700 text-[#000000] rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-blue-600">
                  Please enter your email.
                </span>
              )}
            </div>
          </div>
          <button
            className="bg-yellow-300 text-slate-800 px-3 py-1 font-medium border-[1px] border-black rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
