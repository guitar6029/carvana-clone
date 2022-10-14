import { createSlice} from "@reduxjs/toolkit";
import { reviews } from "../reviews";


const initialState = {
    reviews: reviews,
    isOpened: false,
}


const reviewSlice = createSlice({
   name: 'reviews',
   initialState,
   reducers: {

    openModal : (state, action) => {
        state.isOpened = !state.isOpened;
    },
    closeModal : (state, action) => {
        state.isOpened = !state.isOpened;
    }

   }


   
});

export const {
   openModal, closeModal
} = reviewSlice.actions;


export default reviewSlice.reducer;