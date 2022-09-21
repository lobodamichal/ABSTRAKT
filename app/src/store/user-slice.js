import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    idToken: "",
    isLogged: false,
  },
  reducers: {
    setIdToken(state, action) {
      state.idToken = action.payload;
    },
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
