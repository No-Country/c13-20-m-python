import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

export const eventsHandler = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const getEvents = (state) => state.events;

export const { setEvents } = eventsHandler.actions;

export default eventsHandler.reducer;
