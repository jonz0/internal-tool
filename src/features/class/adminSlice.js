import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "manage",
  initialState: {
    value: "",
  },
  reducers: {
    setManage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setManage } = adminSlice.actions;

export default adminSlice.reducer;
