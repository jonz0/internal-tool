import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
  name: "attendees",
  initialState: {
    value: [],
  },
  reducers: {
    setAttendees: (state, action) => {
      console.log("action");
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAttendees } = classSlice.actions;

export default classSlice.reducer;
