import { configureStore } from "@reduxjs/toolkit";
import { userAgentFromString } from "next/server";
import attendees from "../features/class/detailsSlice";
import staging from "../features/class/removeStaging";
import session from "../features/class/sessionSlice";

export default configureStore({
  reducer: {
    details: attendees,
    removeStaging: staging,
    user: session,
  },
});
