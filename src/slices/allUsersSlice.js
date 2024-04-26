import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: {},
  loading: false,
};

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: initialState,
  reducers: {
    setAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setAllUsers, setLoading } = allUsersSlice.actions;
export default allUsersSlice.reducer;
