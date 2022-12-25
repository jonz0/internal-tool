import { configureStore } from "@reduxjs/toolkit";
import { userAgentFromString } from "next/server";
import attendees from "../features/class/detailsSlice";
import staging from "../features/class/removeStaging";

export default configureStore({
  reducer: {
    details: attendees,
    removeStaging: staging,
  },
});
