import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import eventsHandler from "./sliceEvents";
import interestsHandler from "./sliceInterests";

export const store = configureStore({
  reducer: {
    user: userHandler,
    events: eventsHandler,
    interests: interestsHandler,
  },
});
