import { toast } from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { logout } from "./authAPI"
// import { useSelector } from "react-redux"
import {setUser} from "../../slices/profileSlice";
import { useSelector } from "react-redux";

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

export function updateDisplayPicture(token, formData) {
    // const {user} = useSelector((state) => state.profile);
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Display Picture Updated Successfully.Please re-login to see the updated changes.")
      dispatch(setUser(response.data.data))
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}

// export function updateProfile(token, formData) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     try {
//       const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
//         Authorization: `Bearer ${token}`,
//       })
//       console.log("UPDATE_PROFILE_API API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//     //   console.log("hi");
//       const userImage = response.data.updatedUserDetails.image && response.data.updatedUserDetails
//         ? response.data.updatedUserDetails.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`;
//         // console.log("bye");
//       dispatch(
//         setUser({ ...response.data.profileDetails, image: userImage })
//         // setUser({ ...response.data.updatedUserDetails })

//       )
//       toast.success("Profile Updated Successfully")
//     } catch (error) {
//       console.log("UPDATE_PROFILE_API API ERROR............", error)
//       toast.success("Profile Updated. Please Relogin to see the changes")
//     }
//     toast.dismiss(toastId)
//   }
// }

export function updateProfile(token, formData) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...");
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        // const token = JSON.parse(localStorage.getItem('token'));
        // console.log("hushhh",userData);
  
        // Assuming user data includes user's image
        // const userImage = userData.image || `https://api.dicebear.com/5.x/initials/svg?seed=${userData.firstName} ${userData.lastName}`;
  
        // Update the profile data with user's image
        // const updatedProfileData = { ...formData};
  
        // Make API call to update profile
        const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
          Authorization: `Bearer ${token}`,
        });
  
        // Dispatch action to update user data in Redux state
        dispatch(setUser({...response.data.profileDetails,...userData}));
  
        toast.success("Profile Updated Successfully. Please re-login to see the updated changes.");
        console.log("aaa",userData);
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Profile Update Failed. Please try again.");
      }
      toast.dismiss(toastId);
    };
  }
  
// import { useSelector } from "react-redux";

// export function updateProfile(token, formData) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...");
//     try {
//     //   const user = useSelector((state) => state.profile.user); // Move useSelector outside

//       // Make API call to update profile
//       console.log("Above response");
//       const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
//         Authorization: `Bearer ${token}`,
//       });

//       const profileDetails = response.data.profileDetails;

//       console.log(profileDetails);

//       console.log("Below Response");

//       // Check if the profile update was successful
//       if (response.data.success) {
//         // If successful, update the user's image if available
//         const userImage = user.image || `https://api.dicebear.com/5.x/initials/svg?seed=${user.firstName} ${user.lastName}`;
//         const updatedUserData = { ...user, ...profileDetails, image: userImage };
//         // Dispatch action to update user data in Redux state
//         dispatch(setUser(updatedUserData));

//         // Display success toast message
//         toast.success("Profile Updated Successfully");
//       } else {
//         // Display error toast message if profile update failed
//         toast.error("Profile Update Failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       toast.error("Profile Update Failed. Please try again.");
//     }
//     toast.dismiss(toastId);
//   };
// }

  

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}