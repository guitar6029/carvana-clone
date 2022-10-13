import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "../features/carSlice";
import modalSlice from "../features/modalSlice";

export const store = configureStore({
    reducer: {
        cars : carsReducer,
        modal : modalSlice
    }
})