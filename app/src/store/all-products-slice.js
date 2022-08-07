import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products.json";

const allProductsSlice = createSlice({
  name: "all-products",
  initialState: { products },
  reducers: {
    buyProduct(state, payload) {},
    likeProduct(state, payload) {},
    sortProducts(state, payload) {}
  },
});

export const allProductsActions = allProductsSlice.actions;

export default allProductsSlice;
