import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayed: false,
  requestedTestDrive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    /********
     *
     * opens the modal if customer click on Test Drive
     */
    openModal: (state, action) => {
      state.isDisplayed = !state.isDisplayed;
     
    },
    /*******
     *
     * closes the modal if customer hits cancel
     */
    closeModal: (state, action) => {
      state.isDisplayed = !state.isDisplayed;
    },
    /****
     * feedback dialog is displayed after customer
     * submits their information
     */
    customerFeedback: (state, action) => {
      state.requestedTestDrive = !state.requestedTestDrive;
    },
    /******
     * closes the modal after customer submits the test drive request
     *  */
    close: (state, action) => {
      state.isDisplayed = false;
      state.requestedTestDrive = false;
    },
  },
});

export const { openModal, closeModal, customerFeedback, close } =
  modalSlice.actions;
export default modalSlice.reducer;
