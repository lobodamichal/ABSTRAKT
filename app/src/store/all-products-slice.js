import { createSlice } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
  name: "all-products",
  initialState: {
    products: [],
  },
  reducers: {
    insertProducts(state, action) {
      state.products = action.payload
    }
  },
});

export const allProductsActions = allProductsSlice.actions;

export default allProductsSlice;
