import { configureStore } from "@reduxjs/toolkit";
import attendees from "../features/class/detailsSlice";
import removeStaging from "../features/class/removeStaging";

export default configureStore({
  reducer: {
    details: attendees,
    removeStaging: removeStaging,
  },
});
