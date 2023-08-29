import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
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
    },
  },
});

export const isLogged = (state) => state.user.isLoggedIn;
console.log(isLogged);

export const { login, logout } = userHandler.actions;

export default userHandler.reducer;
