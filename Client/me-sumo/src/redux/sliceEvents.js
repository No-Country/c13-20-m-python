import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  filteredEvents: [],
  filteredEventsCategories: [],
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
    setFilteredEventsCategories: (state, action) => {
      state.filteredEventsCategories = action.payload;
    },
  },
});

export const getEvents = (state) => state.events.events;
export const getFilteredEvents = (state) => state.events.filteredEvents;
export const getFilteredEventsCategories = (state) =>
  state.events.filteredEventsCategories;

export const { setEvents, setFilteredEvents, setFilteredEventsCategories } =
  eventsHandler.actions;

export default eventsHandler.reducer;
