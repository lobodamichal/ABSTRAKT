import { configureStore } from "@reduxjs/toolkit";

import allProductsSlice from "./all-products-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    allProducts: allProductsSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer
  },
});

export default store;
