import { configureStore } from '@reduxjs/toolkit';

import allProductsSlice from './all-products-slice';

const store = configureStore({
    reducer: { allProducts: allProductsSlice.reducer }
});

export default store;