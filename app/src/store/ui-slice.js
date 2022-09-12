import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isLoading: false,
        showModal: false
    },
    reducers: {
        changeIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;