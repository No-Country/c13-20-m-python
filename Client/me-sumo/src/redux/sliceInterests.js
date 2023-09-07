import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  interests: [],
};

export const interestsHandler = createSlice({
  name: "interests",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setInterests: (state, action) => {
      state.interests = action.payload;
    },
  },
});

export const getInterests = (state) => state.interests;
export const getLocation = (state) => state.location;

export const { setLocation, setInterests } = interestsHandler.actions;

export default interestsHandler.reducer;
