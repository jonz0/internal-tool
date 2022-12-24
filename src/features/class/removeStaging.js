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
  },
});

// Action creators are generated for each case reducer function
export const { setToRemove } = stagingSlice.actions;

export default stagingSlice.reducer;
