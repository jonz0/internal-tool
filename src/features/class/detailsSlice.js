import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
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
      state.value = action.payload;
    },
    clearDetails: (state, action) => {
      state.value = {
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
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDetails, clearDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
