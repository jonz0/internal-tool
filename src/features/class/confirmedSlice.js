import { createSlice } from "@reduxjs/toolkit";

export const confirmedSlice = createSlice({
  name: "confirmed",
  initialState: {
    value: [],
  },
  reducers: {
    setConfirmed: (state, action) => {
      state.value = action.payload;
    },
    removeConfirmed: (state, action) => {
      const index = state.value.indexOf(action.payload);
      if (index !== -1) {
        state.value.splice(index, 1);
      }
    },
    addConfirmed: (state, action) => {
      let temp = [...state.value];
      temp.push(action.payload);
      state.value = temp;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setConfirmed, removeConfirmed, addConfirmed } =
  confirmedSlice.actions;

export default confirmedSlice.reducer;
