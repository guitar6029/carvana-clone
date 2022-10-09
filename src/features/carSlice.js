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
        filterByPrice : (state, {payload}) => {
            const priceVal = payload.price;
            state.priceRangeValue = priceVal;
            state.cars.filter(car => car.price <= priceVal)
        },
    }
});


export const {
    filterByPrice
} = carSlice.actions;

export default carSlice.reducer;