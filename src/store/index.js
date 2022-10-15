import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/carSlice";
import modalSlice from "../features/modalSlice";
import reviewSlice from "../features/reviewSlice";
import filterOptionsSlice from "../features/filterSlice";

export const store = configureStore({
    reducer: {
        cars : carsReducer,
        modal : modalSlice,
        reviews : reviewSlice,
        filter : filterOptionsSlice
    }
})