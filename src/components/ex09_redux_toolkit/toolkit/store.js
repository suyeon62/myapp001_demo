import { configureStore } from "@reduxjs/toolkit";
import numberReducer from "./numberSlice";
import nameReducer from "./nameSlice";

export const store = configureStore({
  reducer: {
    number: numberReducer,
    name: nameReducer,
  },
});
