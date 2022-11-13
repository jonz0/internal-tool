import { createSlice } from "@reduxjs/toolkit";

export const classSlice = createSlice({
  name: "attendees",
  initialState: {
    value: {
      id: "",
      name: "",
      start: "",
      end: "",
      type: "",
      maxSpots: 0,
      openSpots: 0,
      classOpen: false,
      attendees: [],
      message: "",
      instructor: "",
    },
  },
  reducers: {
    setDetails: (state, action) => {
      console.log("action");
      console.log(action.payload);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDetails } = classSlice.actions;

export default classSlice.reducer;
