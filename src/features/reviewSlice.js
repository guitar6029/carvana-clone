import { createSlice } from "@reduxjs/toolkit";
import { reviews } from "../reviews";

const initialState = {
  reviews: reviews,
  isOpened: false,
  clickedOnCloseIcon: false,
  inputValue: "",
  clickedOnFlagReview: false,
  flaggedThisReview: false,
  commentID: null,
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
      state.reviews = reviews.filter((user) => {
        let regx = new RegExp(state.inputValue, "ig");
        return user.comment.match(regx);
      });
    },
    clearReviewUserInput: (state) => {
      state.inputValue = "";
      state.reviews = reviews.map((review) => review);
    },
    displayFlagReviewModal: (state) => {
      state.clickedOnFlagReview = true;
    },
    hideFlagReviewModal: (state) => {
      state.clickedOnFlagReview = false;
    },
    flagThisReviewComment: (state) => {
      state.flaggedThisReview = true;
      state.clickedOnFlagReview = false;
      state.reviews = state.reviews.filter(review => review.id !== state.commentID);
      
    },
    getCommentID: (state, action) => {
      const _commentID = action.payload;
      state.commentID = _commentID;
    },
  },
});

export const {
  openModal,
  closeModal,
  getCommentID,
  filterReviewByUserInput,
  clearReviewUserInput,
  displayFlagReviewModal,
  hideFlagReviewModal,
  flagThisReviewComment,
} = reviewSlice.actions;

export default reviewSlice.reducer;
