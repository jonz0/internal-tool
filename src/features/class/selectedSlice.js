import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
  name: "select",
  initialState: {
    value: [],
  },
  reducers: {
    newSelect: (state, action) => {
      state.value.push(action.payload);
    },
    removeSelect: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { newSelect, removeSelect } = selectedSlice.actions;

export default selectedSlice.reducer;
