import { configureStore } from '@reduxjs/toolkit';

import allProductsSlice from './all-products-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: { allProducts: allProductsSlice.reducer, cart: cartSlice.reducer}
});

export default store;