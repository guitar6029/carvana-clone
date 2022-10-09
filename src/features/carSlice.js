import {createSlice} from "@reduxjs/toolkit";
import { cars } from "../cars";


const initialState = {
    cars : cars,
    priceRangeValue : 39000,
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        filterByPrice : (state, action) => {
            const priceVal = action.payload;
            state.priceRangeValue = priceVal;
            state.cars = cars.filter(car => car.price < state.priceRangeValue)
            console.log(cars);
        },
    }
});


export const {
    filterByPrice,
} = carSlice.actions;

export default carSlice.reducer;