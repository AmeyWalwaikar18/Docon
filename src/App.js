import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import OpenRoute from "./components/OpenRoute";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Security from "./pages/Security";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Booking from "./Dashboard/Patient/Booking";
import History from "./Dashboard/Patient/History";
import Doctor from "./Dashboard/Doctor/Doctor";
import DocRequests from "./Dashboard/Doctor/DocRequests";
import AddPrescription from "./Dashboard/Doctor/AddPrescription";
import MyProfile from "./Dashboard/MyProfile";
import Settings from "./Settings/index";
import Error from "./pages/Error";
import BookingForm from "./Dashboard/Patient/BookingForm";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DateValidationDisablePast from "./Dashboard/Patient/BasicDateTimePicker";

function App({children}) {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="App w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="security" element={<Security />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.PATIENT && (
            <>
              <Route
                path="dashboard/appointment-booking"
                element={<Booking />}
              />
              <Route
                path="dashboard/appointment-booking/form"
                element={<BookingForm />}
              />
              <Route path="dashboard/history/:id" element={<History />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.DOCTOR && (
            <>
              <Route path="dashboard/doctor" element={<Doctor />} />
              <Route
                path="dashboard/appointment-requests"
                element={<DocRequests />}
              />
              <Route
                path="dashboard/add-prescription"
                element={<AddPrescription />}
              />
            </>
          )}
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
