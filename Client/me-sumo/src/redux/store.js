import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";
import eventsHandler from "./sliceEvents";
import interestsHandler from "./sliceInterests";
import createEventHandler from "./sliceCreateEvent";
import ticketsHandler from "./sliceTickets";

export const store = configureStore({
  reducer: {
    user: userHandler,
    events: eventsHandler,
    interests: interestsHandler,
    tickets: ticketsHandler,
    createEvent: createEventHandler,
  },
});
