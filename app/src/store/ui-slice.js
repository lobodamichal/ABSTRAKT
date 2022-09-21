import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    error: "",
    isLoading: false,
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
    setShowModal(state, action) {
      state.showModal = !state.showModal;
    },
    setModalContent(state, action) {
      state.modalContent = action.payload
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
