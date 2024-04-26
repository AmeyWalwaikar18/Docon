import { toast } from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { prescriptionEndpoint } from "../apis";
import { addPrescription } from "../../slices/prescriptionSlice";

const { SET_PRESCRIPTION_API, GET_PRESCRIPTION_API } = prescriptionEndpoint;

export function setPrescritpion(prescriptionData) {
  return async (dispatch) => {
    const toastId = toast.loading("Saving Prescription...");
    try {
      const response = await apiConnector(
        "POST",
        SET_PRESCRIPTION_API,
        prescriptionData
      );

      console.log("prescription details", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Prescription Saved Successfully");
    } catch (error) {
      console.log("SAVE PRESCRIPTION API ERROR............", error);
      // Show error toast
      toast.error("Failed to Save Prescription");
    }
    toast.dismiss(toastId);
  };
}


export function getPrescritpion(id) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading Prescriptions...");
    //   console.log("yaya");
      try {
        const response = await apiConnector(
          "POST",
          GET_PRESCRIPTION_API,
          {
            id,
          }
        );
  
        console.log("prescription details", response);
  
        dispatch(addPrescription(response));

        if (!response.data.success) {
          throw new Error(response.data.message);
        }
  
        toast.success("Prescriptions Loaded Successfully");
      } catch (error) {
        console.log("LOAD PRESCRIPTIONS API ERROR............", error);
        // Show error toast
        toast.error("Failed to Load Prescriptions");
      }
      toast.dismiss(toastId);
    };
  }
  