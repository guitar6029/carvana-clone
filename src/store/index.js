import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "../features/carSlice";

export const store = configureStore({
    reducer: {
        cars : carsReducer,
    }
})