import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/redux/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
