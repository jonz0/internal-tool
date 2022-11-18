import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../features/class/detailsSlice";
import removeStaging from "../features/class/removeStaging";

export default configureStore({
  reducer: {
    details: detailsReducer,
    removeStaging: removeStaging,
  },
});
