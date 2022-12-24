import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "staging",
  initialState: {
    value: {
      valid: false,
      username: "",
    },
  },
  reducers: {
    setSession: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSession } = sessionSlice.actions;

export default sessionSlice.reducer;
