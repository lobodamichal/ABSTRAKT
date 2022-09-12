import { createSlice } from "@reduxjs/toolkit";
import sortProducts from "../helpers/sortProducts";
import firstVariant from "../helpers/firstVariant";

const allProductsSlice = createSlice({
  name: "all-products",
  initialState: {
    products: [],
    optionSortSetup: {
      orders: ["up", "down"],
      values: ["popularity", "price", "author", "name", "date released"],
    },
  },
  reducers: {
    insertProducts(state, action) {
      state.products = action.payload
    },
    sortProducts(state, action) {
      switch (action.payload.type) {
        case "price":
          const indexOfLowestPriceVariant = (el) =>
            `variants[${el.variants.indexOf(
              firstVariant(el.variants, "price")
            )}].price`;

          sortProducts(
            state.products,
            indexOfLowestPriceVariant,
            action.payload.order
          );
          break;
        case "popularity":
          sortProducts(state.products, () => "sold", action.payload.order);
          break;
        case "author":
          sortProducts(state.products, () => "author", action.payload.order);
          break;
        case "name":
          sortProducts(state.products, () => "name", action.payload.order);
          break;
        case "date released":
          sortProducts(state.products, () => "since", action.payload.order);
          break;
      }
    },
    likeProduct(state, action) {
      console.log(`id liked: ${action.payload}`);
    },
    buyProduct(state, payload) {},
  },
});

export const allProductsActions = allProductsSlice.actions;

export default allProductsSlice;
