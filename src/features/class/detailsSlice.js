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
    removeFromDetails: (state, action) => {
      let temp = state.value.attendees;
      for (var i = temp.length - 1; i >= 0; --i) {
        if (action.payload.includes(temp[i].id)) {
          console.log("removed user", state.value.attendees[i]);
          temp.splice(i, 1);
        }
      }
      state.value = {
        id: state.value.id,
        name: state.value.name,
        start: state.value.start,
        end: state.value.end,
        type: state.value.temp,
        maxSpots: state.value.maxSpots,
        openSpots: state.value.openSpoits,
        classOpen: state.value.classOpen,
        attendees: temp,
        message: state.value.message,
        instructor: state.value.instructor,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDetails, clearDetails, removeFromDetails } =
  detailsSlice.actions;

export default detailsSlice.reducer;
