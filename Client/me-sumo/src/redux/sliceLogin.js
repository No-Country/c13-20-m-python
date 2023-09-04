import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  id: null,
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
      state.id = null;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const isLogged = (state) => state.user.isLoggedIn;
export const getToken = (state) => state.user.token;
export const getId = (state) => state.user.id;

export const { login, logout, setAuthToken, setAuthId } = userHandler.actions;

export default userHandler.reducer;
