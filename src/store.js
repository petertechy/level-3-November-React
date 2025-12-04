import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counterSlice";
import productSlice from "./redux/productSlice";

export const store = configureStore({
  reducer: { counterSlice, productSlice },
});
