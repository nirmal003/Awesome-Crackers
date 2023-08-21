import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload.product;
    },

    // deleteData: (state, action) => {
    //   state.data = state.data.filter((c) => c.id !== action.payload);
    // },

    // updateData: (state, action) => {
    //   state.data.map((c) => {
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

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
