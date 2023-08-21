import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },

    deleteCart: (state, action) => {
      state.cart = state.cart.filter((c) => c.id !== action.payload);
    },

    deleteAllCart: (state, action) => {
      state.cart = [];
    },

    updateCart: (state, action) => {
      state.cart.map((c) => {
        if (c.id === action.payload.id) {
          c.id = action.payload.id;
          c.qty = action.payload.qty;
          c.offerPrice = action.payload.offerPrice;
          c.totalPrice = action.payload.totalPrice;
          c.discountPrice = action.payload.discountPrice;
          c.product = action.payload.product;
        }
        return c;
      });
    },
  },
});

export const { addCart, deleteCart, deleteAllCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
