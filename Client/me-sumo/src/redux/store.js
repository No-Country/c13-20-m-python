import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import eventsHandler from "./sliceEvents";

export const store = configureStore({
  reducer: {
    user: userHandler,
    events: eventsHandler,
  },
});
