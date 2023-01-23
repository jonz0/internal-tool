import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
  name: "select",
  initialState: {
    value: [],
  },
  reducers: {
    addSelect: (state, action) => {
      state.value.push(action.payload);
    },
    removeSelect: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
    clearSelect: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSelect, removeSelect, clearSelect } = selectedSlice.actions;

export default selectedSlice.reducer;
