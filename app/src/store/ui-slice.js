import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    error: "",
    isLoading: false,
    isLogged: false,
    showModal: false,
    modalContent: "",
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setShowModal(state) {
      state.showModal = !state.showModal;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload;
    },
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
