import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "../features/carSlice";
import modalSlice from "../features/modalSlice";

import reviewModalSlice from "../features/reviewSlice";

export const store = configureStore({
    reducer: {
        cars : carsReducer,
        modal : modalSlice,
        reviewModal : reviewModalSlice,
    }
})