import { createSlice } from "@reduxjs/toolkit";

export const stagingSlice = createSlice({
  name: "staging",
  initialState: {
    value: [],
  },
  reducers: {
    setToRemove: (state, action) => {
      state.value.push(action.payload);
    },
    deselect: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
    clear: (state, action) => {
      state.value = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToRemove, deselect, clear } = stagingSlice.actions;

export default stagingSlice.reducer;
