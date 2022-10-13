import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    changeQuantity(state, action) {
      action.payload.increase ? state[action.payload.index].quantity++ : state[action.payload.index].quantity--
    },
    addToCart(state, action) {
      const idString = `${action.payload.id}.${action.payload.variant.id}`;
      const idsArray = state.map(
        (element) => `${element.id}.${element.variant.id}`
      );
      if (!idsArray.includes(idString)) {
        state.push(action.payload);
      } else {
        const idIndex = idsArray.indexOf(idString);
        state[idIndex].quantity += action.payload.quantity;
      }
    },
    removeFromCart(state, action) {
      state.splice(action.payload, 1)
    },
    clearCart(state) {
      state = []
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
