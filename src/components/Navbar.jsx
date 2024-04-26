// import React from "react";
// import logo from "../assets/Logo-Docon.svg";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { ACCOUNT_TYPE } from "../utils/constants";
// import ProfileDropdown from "../components/ProfileDropDown";

// const Navbar = () => {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);

//   return (
//     <div className="pt-[30px] px-[50px] w-full text-xl text-slate-500 pb-5 shadow-md">
//       <nav className="items-center w-[98%] flex gap-x-[220px]">
//         {/* logo ke liye */}
//         {/* 1st div */}
//         <div>
//           <Link to="/">
//             <img src={logo} alt="docon-logo" />
//           </Link>
//         </div>
//         {/* 2nd div */}
//         <div className="flex items-center gap-x-8">
//           <Link to="/">
//             <div className="hover:border-b-4 hover:border-sky-500 pb-2">
//               Home
//             </div>
//           </Link>
//           <Link to="/product">
//             <div className="hover:border-b-4 hover:border-sky-500 pb-2">
//               Product
//             </div>
//           </Link>
//           <Link to="/security">
//             <div className="hover:border-b-4 hover:border-sky-500 pb-2">
//               Security
//             </div>
//           </Link>
//         </div>
//         {/* 3rd div */}
//         <div className="flex items-center space-x-10">
//           {token === null && (
//             <Link to="/login">
//               <button className="hover:border-b-4 hover:border-sky-500 pb-2">
//                 Login
//               </button>
//             </Link>
//           )}
//           {token === null && (
//             <Link to="/signup">
//               <button className="hover:border-b-4 hover:border-sky-500 pb-2">
//                 Signup
//               </button>
//             </Link>
//           )}
//           <Link to="/signup">
//             {token === null && (
//               <button className="bg-blue-500 font-medium text-slate-50 px-8 py-3 rounded-lg">
//                 Join Us Now
//               </button>
//             )}
//           </Link>
//           {token !== null && <ProfileDropdown />}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import logo from "../assets/Logo-Docon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../utils/constants";
import ProfileDropdown from "../components/ProfileDropDown";
import '../App.css';

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  return (
    <div className="pt-5 px-5 w-full text-xl text-slate-500 pb-5 shadow-md">
      <nav className="flex items-center mx-auto justify-between w-[96%]">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="docon-logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-x-8">
          <Link to="/">
            <div className="nav-link pb-2">
              Product
            </div>
          </Link>
          <Link to="/security">
            <div className="nav-link pb-2">
              Security
            </div>
          </Link>
        </div>

        {/* Auth Links */}
        <div className="flex items-center space-x-10">
          {token === null && (
            <Link to="/login">
              <button className="nav-link pb-2">
                Login
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="nav-link pb-2">
                Signup
              </button>
            </Link>
          )}
          <Link to="/signup">
            {token === null && (
              <button className="bg-blue-500 font-medium text-slate-50 px-8 py-3 rounded-lg">
                Join Us Now
              </button>
            )}
          </Link>
          {token !== null && <ProfileDropdown />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

