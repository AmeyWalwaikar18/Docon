import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prescriptions: [],
  loading: false,
};

const prescriptionsSlice = createSlice({
  name: "prescriptions",
  initialState: initialState,
  reducers: {
    addPrescription(state, action) {
      state.prescriptions = action.payload;
    },
    // clearPrescriptions(state) {
    //   state.prescriptions = [];
    // },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { addPrescription, setLoading } = prescriptionsSlice.actions;
export default prescriptionsSlice.reducer;
