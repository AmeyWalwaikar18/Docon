import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/doctor",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Appointments Requests",
    path: "/dashboard/appointment-requests",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Prescription",
    path: "/dashboard/add-prescription",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Appointment Booking",
    path: "/dashboard/appointment-booking",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "History",
    path: "/dashboard/history/:id",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscBookmark",
  },
];
