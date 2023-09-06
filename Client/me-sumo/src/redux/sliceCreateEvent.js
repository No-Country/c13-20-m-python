import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventData: {},
};

export const createEventHandler = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    // setEventName: (state, action) => {
    //   state.eventData = { ...state.eventData, name: action.payload };
    // },
    // setEventDescription: (state, action) => {
    //   state.eventData = { ...state.eventData, description: action.payload };
    // },
    // setEventCapacity: (state, action) => {
    //   state.eventData = { ...state.eventData, capacity: action.payload };
    // },
    // setEventDate: (state, action) => {
    //   state.eventData = { ...state.eventData, date: action.payload };
    // },
    // setTicketPrice: (state, action) => {
    //   state.eventData = { ...state.eventData, ticketPrice: action.payload };
    // },
    // setCategories: (state, action) => {
    //   state.eventData = { ...state.eventData, categories: action.payload };
    // },
    setImage: (state, action) => {
      state.eventData = { ...state.eventData, event_images: action.payload };
    },
  },
});

export const getEventData = (state) => state.eventData;

export const { setImage } = createEventHandler.actions;

export default createEventHandler.reducer;
