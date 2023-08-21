import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const dataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },

    // deleteUser: (state, action) => {
    //   state.user = state.user.filter((c) => c.id !== action.payload);
    // },

    // updateUser: (state, action) => {
    //   state.user.map((c) => {
    //     if (c.id === action.payload.id) {
    //       c.id = action.payload.id;
    //       c.qty = action.payload.qty;
    //       c.offerPrice = action.payload.offerPrice;
    //       c.totalPrice = action.payload.totalPrice;
    //       c.discountPrice = action.payload.discountPrice;
    //       c.product = action.payload.product;
    //     }
    //     return c;
    //   });
    // },
  },
});

export const { addUser } = dataSlice.actions;

export default dataSlice.reducer;
