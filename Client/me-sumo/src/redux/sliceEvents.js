import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  filteredEvents: [],
};

export const eventsHandler = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setFilteredEvents: (state, action) => {
      state.filteredEvents = action.payload;
    },
  },
});

export const getEvents = (state) => state.events.events;
export const getFilteredEvents = (state) => state.events.filteredEvents;

export const { setEvents, setFilteredEvents } = eventsHandler.actions;

export default eventsHandler.reducer;
