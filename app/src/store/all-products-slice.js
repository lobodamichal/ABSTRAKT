import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products.json";
import sortProducts from "../helpers/sortProducts";

const allProductsSlice = createSlice({
  name: "all-products",
  initialState: { products },
  reducers: {
    sortProducts(state, action) {
      let key = "";
      switch (action.payload.type) {
        case "price":
          key = "variant.medium.price";
          sortProducts(state.products, key, action.payload.order);
          break;
        case "popularity":
          key = "sold";
          sortProducts(state.products, key, action.payload.order);
          break;
        case "author":
          key = "author";
          sortProducts(state.products, key, action.payload.order);
          break;
        case "name":
          key = "name";
          sortProducts(state.products, key, action.payload.order);
          break;
        case "date released":
          key = "since";
          sortProducts(state.products, key, action.payload.order);
          break;
        default:
          break;
      }
    },
    buyProduct(state, payload) {},
    likeProduct(state, payload) {},
  },
});

export const allProductsActions = allProductsSlice.actions;

export default allProductsSlice;
