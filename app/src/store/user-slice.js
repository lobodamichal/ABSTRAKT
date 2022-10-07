import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { userData: {} },
  reducers: {
    setUserState(state, action) {
      state.userData = action.payload;
    },
    setAccountDetails(state, action) {
      state.userData.accountDetails = action.payload;
    },
    loveProduct(state, action) {
      if (!state.userData.lovedProducts.includes(action.payload))
        state.userData.lovedProducts.push(action.payload);
      else {
        const elementIndex = state.userData.loveProducts.indexOf(action.payload);
        state.userData.loveProducts.splice(elementIndex, 1)
      }
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
