import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../reviews";

const initialState = {
  reviews: reviews,
  isOpened: false,
  clickedOnCloseIcon: false,
  inputValue: "",
  isTyping: false,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpened = !state.isOpened;
    },
    closeModal: (state, action) => {
      state.isOpened = !state.isOpened;
    },
    filterReviewByUserInput: (state, action) => {
      const value = action.payload;
      state.inputValue = value;
          state.reviews = reviews.filter(user => {
            let reg2 = new RegExp( state.inputValue, 'ig');
            return user.comment.match(reg2);
       });
      
    },
  },
});

export const { openModal, closeModal, filterReviewByUserInput } =
  reviewSlice.actions;

export default reviewSlice.reducer;
