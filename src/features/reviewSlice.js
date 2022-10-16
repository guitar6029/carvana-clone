import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../reviews";

const initialState = {
  reviews: reviews,
  isOpened: false,
  clickedOnCloseIcon: false,
  inputValue: "",
  clickedOnFlagReview: false,
  
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    /* opens the modal when user click on the view all reviews */
    openModal: (state, action) => {
      state.isOpened = !state.isOpened;
    },
    /** closes the modal once the user click X or the user presses down ESC key (gets handled in ReviewModal useEffect) */
    closeModal: (state, action) => {
      state.isOpened = !state.isOpened;
    },
    /** get user input, uses regex for anything matching in the comment string of each review */
    filterReviewByUserInput: (state, action) => {
      const value = action.payload;
      state.inputValue = value;
          state.reviews = reviews.filter(user => {
            let regx = new RegExp( state.inputValue, 'ig');
            return user.comment.match(regx);
          
       });
      
    },
    clearReviewUserInput: (state) => {
      state.inputValue = "";
      state.reviews = reviews.map(review => review);
    },
    displayFlagReviewModal: (state) => {
      state.clickedOnFlagReview = true;
    },
    hideFlagReviewModal: (state) => {
      state.clickedOnFlagReview = false;
    }
  },
});

export const { openModal, closeModal, filterReviewByUserInput, clearReviewUserInput, displayFlagReviewModal, hideFlagReviewModal } =
  reviewSlice.actions;

export default reviewSlice.reducer;
