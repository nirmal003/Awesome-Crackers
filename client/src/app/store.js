import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../components/home/dataSlice";
import cartSlice from "../components/product/cartSlice";
import userSlice from "../pages/estimate/userSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    cart: cartSlice,
    user: userSlice,
  },
});
