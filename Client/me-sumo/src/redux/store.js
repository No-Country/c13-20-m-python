import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import eventsHandler from "./sliceEvents";
import interestsHandler from "./sliceInterests";
import createEventHandler from "./sliceCreateEvent";

export const store = configureStore({
  reducer: {
    user: userHandler,
    events: eventsHandler,
    interests: interestsHandler,
    createEvent: createEventHandler,
  },
});
