// // // BasicDateTimePicker.jsx
// // import React from 'react';
// // import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// // import dayjs from 'dayjs';

// // const BasicDateTimePicker = ({ setSelectedDateTime }) => {
// //   const currentDate = dayjs();

// //   const handleDateTimeChange = (dateTime) => {
// //     setSelectedDateTime(dateTime); // Update selected date and time in parent component
// //   };

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <DemoContainer components={['DateTimePicker']}>
// //         <DateTimePicker
// //           label="Please enter the date and time of your appointment"
// //           minDate={currentDate}
// //           onChange={handleDateTimeChange}
// //         />
// //       </DemoContainer>
// //     </LocalizationProvider>
// //   );
// // };

// // export default BasicDateTimePicker;

// // BasicDateTimePicker.jsx
// import React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs"; // Import dayjs library

// const BasicDateTimePicker = ({ selectedDateTime, setSelectedDateTime, bookedDatesTimes }) => {
//   const currentDate = dayjs(); // Get the current date using dayjs

//   // Function to handle date and time change
//   const handleDateTimeChange = (dateTime) => {
//     setSelectedDateTime(dateTime);
//   };

//   // Function to disable booked dates and times
//   const isDateDisabled = (date) => {
//     // Check if the date is in the bookedDatesTimes array
//     return bookedDatesTimes.some((bookedDateTime) => {
//       return dayjs(date).isSame(bookedDateTime, "minute");
//     });
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateTimePicker"]}>
//         <DateTimePicker
//           label="Please enter the date and time of your appointment"
//           minDate={currentDate} // Set minDate to ensure date is in the future
//           value={selectedDateTime}
//           onChange={handleDateTimeChange} // Call handleDateTimeChange on change
//           disableDateTime={isDateDisabled} // Disable booked dates and times
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// };

// export default BasicDateTimePicker;

// import React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs";

// const BasicDateTimePicker = ({
//   selectedDateTime,
//   setSelectedDateTime,
//   bookedDatesTimes,
// }) => {
//   const currentDate = dayjs();

//   const handleDateTimeChange = (dateTime) => {
//     setSelectedDateTime(dateTime);
//   };

//   const isDateTimeDisabled = (dateTime) => {
//     return bookedDatesTimes.some((bookedDateTime) =>
//       dayjs(dateTime).isSame(bookedDateTime, "minute")
//     );
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateTimePicker"]}>
//         <DateTimePicker
//           label="Please enter the date and time of your appointment"
//           minDate={currentDate}
//           value={selectedDateTime}
//           onChange={handleDateTimeChange}
//           disableDateTime={isDateTimeDisabled} // Pass isDateTimeDisabled to disableDateTime prop
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// };

// export default BasicDateTimePicker;

// import React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs";

// const BasicDateTimePicker = ({
//   selectedDateTime,
//   setSelectedDateTime,
//   bookedDatesTimes,
// }) => {
//   const currentDate = dayjs();

//   const handleDateTimeChange = (dateTime) => {
//     setSelectedDateTime(dateTime);
//   };

//   const isDateTimeDisabled = (dateTime) => {
//     const disabledDate = dayjs("2024-04-20");
//     return dayjs(dateTime).isSame(disabledDate, "day");
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateTimePicker"]}>
//         <DateTimePicker
//           label="Please enter the date and time of your appointment"
//           minDate={currentDate}
//           value={selectedDateTime}
//           onChange={handleDateTimeChange}
//           disableDateTime={isDateTimeDisabled} // Pass isDateTimeDisabled to disableDateTime prop
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// };

// export default BasicDateTimePicker;

// import React from "react";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import dayjs from "dayjs";

// const BasicDateTimePicker = ({
//   selectedDateTime,
//   setSelectedDateTime,
//   bookedDatesTimes,
// }) => {
//   const currentDate = dayjs();

//   const handleDateTimeChange = (dateTime) => {
//     setSelectedDateTime(dateTime);
//   };

//   const isDateTimeDisabled = (dateTime) => {
//     const disabledDate = dayjs("2024-04-20 16:00"); // Set the specific date and time
//     return dayjs(dateTime).isSame(disabledDate, "minute"); // Check if the given dateTime matches the disabledDate
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DateTimePicker"]}>
//         <DateTimePicker
//           label="Please enter the date and time of your appointment"
//           minDate={currentDate}
//           value={selectedDateTime}
//           onChange={handleDateTimeChange}
//           disableDateTime={isDateTimeDisabled} // Pass isDateTimeDisabled to disableDateTime prop
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// };

// export default BasicDateTimePicker;

import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const BasicDateTimePicker = ({
  selectedDateTime,
  setSelectedDateTime,
  bookedDatesTimes,
}) => {
  const currentDate = dayjs();

  const handleDateTimeChange = (dateTime) => {
    setSelectedDateTime(dateTime);
  };

  // const isDateTimeDisabled = (dateTime) => {
  //   // Convert bookedDatesTimes to an array of dayjs objects
  //   const bookedDatesTimesArray = bookedDatesTimes.map((dateTimeString) =>
  //     dayjs(dateTimeString)
  //   );

  //   const date = "2024-04-18T09:15:00.000Z";
  //   date.disable = true;

  //   console.log("Displaying dateTime", bookedDatesTimesArray);

  //   // Check if the given dateTime matches any of the booked dates and times
  //   return bookedDatesTimesArray.some((bookedDateTime) =>
  //     bookedDateTime.isSame(dateTime, "minute")
  //   );
  // };

  const isDateTimeDisabled = (dateTime) => {
    // Convert bookedDatesTimes to an array of dayjs objects
    const bookedDatesTimesArray = bookedDatesTimes.map((dateTimeString) =>
      dayjs(dateTimeString)
    );
  
    // Convert the specific date to a dayjs object
    const specificDateTime = dayjs("2024-04-18T09:15:00.000Z");
  
    // Check if the given dateTime matches any of the booked dates and times
    const isBooked = bookedDatesTimesArray.some((bookedDateTime) =>
      bookedDateTime.isSame(dateTime, "minute")
    );
  
    // Check if the given dateTime matches the specific date and time to be disabled
    const isDisabledDateTime = dateTime.isSame(specificDateTime, "minute");
  
    // Return true if the dateTime is booked or matches the specific date and time to be disabled
    return isBooked || isDisabledDateTime;
  };
  


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Please enter the date and time of your appointment"
          minDate={currentDate}
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          disableDateTime={isDateTimeDisabled}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default BasicDateTimePicker;

// import React from 'react';
// import { ConfigProvider, DatePicker, Space, Typography } from 'antd';
// import en from 'antd/es/date-picker/locale/en_US';
// import enUS from 'antd/es/locale/en_US';
// import dayjs from 'dayjs';
// import buddhistEra from 'dayjs/plugin/buddhistEra';
// dayjs.extend(buddhistEra);
// const { Title } = Typography;

// // Component level locale
// const buddhistLocale = {
//   ...en,
//   lang: {
//     ...en.lang,
//     fieldDateFormat: 'BBBB-MM-DD',
//     fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
//     yearFormat: 'BBBB',
//     cellYearFormat: 'BBBB',
//   },
// };

// // ConfigProvider level locale
// const globalBuddhistLocale = {
//   ...enUS,
//   DatePicker: {
//     ...enUS.DatePicker,
//     lang: buddhistLocale.lang,
//   },
// };
// const defaultValue = dayjs('2024-01-01');
// const BasicDateTimePicker = () => {
//   const onChange = (_, dateStr) => {
//     console.log('onChange:', dateStr);
//   };
//   return (
//     <Space direction="vertical">
//       {/* <Title level={4}>By ConfigProvider</Title> */}
//       <ConfigProvider locale={globalBuddhistLocale}>
//         <Space direction="vertical">
//           {/* <DatePicker defaultValue={defaultValue} onChange={onChange} /> */}
//           <DatePicker defaultValue={defaultValue} showTime onChange={onChange} />
//         </Space>
//       </ConfigProvider>
//     </Space>
//   );
// };
// export default BasicDateTimePicker;
