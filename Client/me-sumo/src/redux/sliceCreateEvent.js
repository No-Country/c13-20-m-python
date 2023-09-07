import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventData: {},
  categories: [],
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
  },
});

export const { setCategories, setEvent } = createEventHandler.actions;

export default createEventHandler.reducer;
