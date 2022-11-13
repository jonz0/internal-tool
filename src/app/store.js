import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../features/class/detailsSlice";

export default configureStore({
  reducer: {
    details: detailsReducer,
  },
});
