import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayed: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action ) => {
      state.isDisplayed = !state.isDisplayed;
    },
    closeModal: (state, action) => {
      state.isDisplayed = !state.isDisplayed;
    },
  },
});


export const { openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;