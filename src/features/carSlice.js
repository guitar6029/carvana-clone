import {createSlice} from "@reduxjs/toolkit";
import { cars } from "../cars";


const initialState = {
    cars : cars,
    priceRangeValue : 39000,
    carType : null,
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
        filterByCarType : (state, action) => {
            const carType = action.payload;
            state.carType = carType;
            
            state.cars =  carType === 'all' ? cars : cars.filter(car => car.type === state.carType)
        }
    }
});


export const {
    filterByPrice,
    filterByCarType,
} = carSlice.actions;

export default carSlice.reducer;