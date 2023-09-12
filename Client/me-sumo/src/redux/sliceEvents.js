import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterEventsBy: [],
  filteredEventsCategories: [],
  filteredEvents: [],
  events: [],
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
    setFilterEventsBy: (state, action) => {
      state.filterEventsBy = action.payload;
    },
  },
});

export const getEvents = (state) => state.events.events;
export const getFilteredEvents = (state) => state.events.filteredEvents;
export const getFilteredEventsCategories = (state) =>
  state.events.filteredEventsCategories;
export const getFilterEventsBy = (state) => state.events.filterEventsBy;

export const {
  setEvents,
  setFilteredEvents,
  setFilteredEventsCategories,
  setFilterEventsBy,
} = eventsHandler.actions;

export default eventsHandler.reducer;
