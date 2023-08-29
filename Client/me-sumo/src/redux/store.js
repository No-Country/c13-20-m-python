import { configureStore } from "@reduxjs/toolkit";
import userHandler from "./sliceLogin";

export const store = configureStore({
  reducer: {
    user: userHandler,
  },
});
