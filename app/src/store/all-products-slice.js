import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products.json";
import sortProducts from "../helpers/sortProducts";

const allProductsSlice = createSlice({
  name: "all-products",
  initialState: { products },
  reducers: {
    sortProducts(state, action) {
      switch (action.payload.type) {
        case "price":
          sortProducts(state.products, "variant.medium.price", action.payload.order);
          break;
        case "popularity":
          sortProducts(state.products, "sold", action.payload.order);
          break;
        case "author":
          sortProducts(state.products, "author", action.payload.order);
          break;
        case "name":
          sortProducts(state.products, "name", action.payload.order);
          break;
        case "date released":
          sortProducts(state.products, "since", action.payload.order);
          break;
        default:
          break;
      }
    },
    likeProduct(state, action) {
      console.log(`id liked: ${action.payload}`)
    },
    buyProduct(state, payload) {},
  },
});

export const allProductsActions = allProductsSlice.actions;

export default allProductsSlice;
