import { configureStore } from '@reduxjs/toolkit';

import allProductsSlice from './all-products-slice';
import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: { allProducts: allProductsSlice.reducer, cart: cartSlice.reducer, ui: uiSlice.reducer}
});

export default store;