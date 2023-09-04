import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
};

export const userHandler = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const isLogged = (state) => state.user.isLoggedIn;
export const getToken = (state) => state.user.token;

export const { login, logout, setAuthToken } = userHandler.actions;

export default userHandler.reducer;
