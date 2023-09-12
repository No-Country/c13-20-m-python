import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventData: {},
  categories: [],
  ticket: [],
};

export const createEventHandler = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.eventData = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setTicket: (state, action) => {
      state.ticket = action.payload;
    },
  },
});

export const getEventData = (state) => state.createEvent.eventData;
export const getCategoriesData = (state) => state.createEvent.categories;
export const getTicketData = (state) => state.createEvent.ticket;

export const { setCategories, setEvent, setTicket } =
  createEventHandler.actions;

export default createEventHandler.reducer;
