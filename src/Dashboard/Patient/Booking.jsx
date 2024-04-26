import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetails } from "../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../utils/constants";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDoctorDetails());
  }, [dispatch]);

  const { allUsers } = useSelector((state) => state.allUsers);

  console.log("hehe", allUsers);

  return (
    <div>
      <h1 className="flex mx-auto w-full justify-center mb-[40px] text-[30px] font-medium">
        Doctor's List
      </h1>
      {allUsers &&
        allUsers.map((user) =>
          user?.accountType === ACCOUNT_TYPE.DOCTOR ? (
            <div
              key={user.id}
              className="flex md:flex-row flex-col items-center text-slate-200 justify-between rounded-md border-[1px] border-richblack-700 bg-slate-800 p-8 px-12"
            >
              <div className="flex md:flex-row flex-col items-center gap-x-4">
                <img
                  src={user?.image}
                  alt={`profile-${user?.firstName}`}
                  className="aspect-square  mx-auto md:m-0 w-[78px] rounded-full object-cover"
                />
                <div className="space-y-1 mt-3 md:mt-0 text-center md:text-left">
                  <p className="text-lg font-semibold text-richblack-5">
                    {user?.firstName + " " + user?.lastName}
                  </p>
                  <p className="text-sm text-richblack-300">{user?.email}</p>
                </div>
              </div>
              <button className="ml-4 px-3 py-2 rounded-md bg-yellow-300 text-slate-800 font-medium" onClick={() => navigate("/dashboard/appointment-booking/form")}>Book Appointment</button>
            </div>
          ) : null
        )}
      {/* this component for actual booking form */}
      <div></div>
    </div>
  );
};

export default Booking;
