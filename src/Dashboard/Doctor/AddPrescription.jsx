import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setPrescritpion } from "../../services/operations/prescriptionAPI";

const AddPrescription = () => {
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save the prescription data
    console.log("Prescription Data", data);
    reset();

    dispatch(setPrescritpion(data));
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" rounded-md text-slate-700 px-3 py-2"
        >
          <h1 className="text-[22px] mt-[25px] font-medium">
            Prescription from Doctor {user?.firstName} {user?.lastName}
          </h1>
          <h3>
            Reach out to the doctor at {user?.email} for furthur assistance.
          </h3>
          <div className="flex space-x-8 mt-[40px] mb-[10px]">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="firstName"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="lastName"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>
          <div className="flex space-x-8 mt-[25px] mb-[30px]">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="disease"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Disease
              </label>
              <textarea
                type="text"
                name="disease"
                id="disease"
                placeholder="Enter the disease"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("disease", { required: true })}
              />
              {errors.disease && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter the disease.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="symptoms"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Symptoms
              </label>
              <textarea
                name="symptoms"
                id="symptoms"
                placeholder="Enter the symptoms"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("symptoms", { required: true })}
              ></textarea>
              {errors.symptoms && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter the symptoms.
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-[100%]">
            <label
              htmlFor="medicines"
              className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
            >
              Medicines
            </label>
            <textarea
              name="medicines"
              id="medicines"
              placeholder="Enter the medicines"
              className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md h-[150px] w-full"
              {...register("medicines", { required: true })}
            ></textarea>
            {errors.medicines && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter the medicines.
              </span>
            )}
          </div>
          <div className="flex space-x-8 mt-[20px] mb-[30px]">
            {/* <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="date"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select the date.
                </span>
              )}
            </div> */}
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="date"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                max={new Date().toISOString().split("T")[0]} // Set the max attribute to current date
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please select the date.
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label
                htmlFor="email"
                className="lable-style text-[14px] text-left ml-1 font-normal text-richblack-5"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="form-style px-3 py-3 bg-[#2C333F] text-[#999DAA] rounded-md"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your email.
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="my-[20px] border-[2px] font-medium bg-yellow-300 px-3 py-2 rounded-md "
          >
            Save Prescription
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPrescription;
