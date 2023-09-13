import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventSelected: {},
  ticketsAdquired: [],
  buyerData: {},
};

export const ticketsHandler = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    setEventSelected: (state, action) => {
      state.eventSelected = action.payload;
    },
    setTicketsAdquired: (state, action) => {
      state.ticketsAdquired = action.payload;
    },
    setBuyerData: (state, action) => {
      state.buyerData = action.payload;
    },
  },
});

export const getEventSelected = (state) => state.tickets.eventSelected;
export const getTicketsAdquired = (state) => state.tickets.ticketsAdquired;
export const getBuyerData = (state) => state.tickets.buyerData;

export const { setEventSelected, setTicketsAdquired, setBuyerData } =
  ticketsHandler.actions;

export default ticketsHandler.reducer;
