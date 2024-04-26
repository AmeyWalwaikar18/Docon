import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { formattedDate } from "../utils/dateFormatter";
// import IconBtn from "../../common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  console.log("hellos",user);
  console.log("huhu",user.additionalDetails);

  return (
    <>
      <h1 className="mb-14 ml-16 md:ml-10 text-3xl font-medium text-richblack-5">
        {user?.firstName} {user?.lastName}'s Profile
      </h1>
      <div className="flex md:flex-row flex-col items-center text-slate-200 justify-between rounded-md border-[1px] border-richblack-700 bg-slate-800 p-8 px-12">
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

        <Link
          to="/dashboard/settings"
          className="bg-yellow-300 text-slate-900 mt-5 md:mt-0 px-3 py-1 flex items-center gap-1 rounded-md font-medium"
        >
          <button>Edit</button>
          <RiEditBoxLine />
        </Link>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px]  border-richblack-700 text-slate-200 bg-slate-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <Link
            to="/dashboard/settings"
            className="bg-yellow-300 px-3 py-1 text-slate-900 flex items-center gap-1 rounded-md font-medium"
          >
            <button>Edit</button>
            <RiEditBoxLine />
          </Link>
        </div>
        <p
          className={`${
            user?.about
              ? "text-richblack-5 text-left"
              : "text-richblack-400 text-left"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 text-slate-200 bg-slate-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <Link
            to="/dashboard/settings"
            className="bg-yellow-300 px-3 py-1 text-slate-900 flex items-center gap-1 rounded-md font-medium"
          >
            <button>Edit</button>
            <RiEditBoxLine />
          </Link>
        </div>
        <div className="flex md:flex-row flex-col gap-y-5 md:gap-y-0 max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                First Name
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">Email</p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Gender
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Height
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.additionalDetails?.height} cms
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Last Name
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Phone Number
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Date Of Birth
              </p>
              <p className="text-sm text-left font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-left text-richblack-600">
                Weight
              </p>
              <p className="text-sm font-medium text-left text-richblack-5">
                {user?.additionalDetails?.weight} kgs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
