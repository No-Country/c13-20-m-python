import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersLogin = createSlice({
  name: "userLogin",
  initialState,
  reducers: {},
});
