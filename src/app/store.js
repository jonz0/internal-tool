import { configureStore } from "@reduxjs/toolkit";
import { userAgentFromString } from "next/server";
import attendees from "../features/class/detailsSlice";
import staging from "../features/class/removeStaging";
import manage from "../features/class/adminSlice";
import select from "../features/class/selectedSlice";

export default configureStore({
  reducer: {
    details: attendees,
    removeStaging: staging,
    admin: manage,
    selected: select,
  },
});
