import {createSlice} from "@reduxjs/toolkit";
import { cars } from "../cars";


const initialState = {
    cars : cars,
    priceRangeValue : 39000,
    carType : null,
    carMiles : 14000,
    carMake: null,
    search: null,
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
        },
        filterByMiles : (state, action) => {
            const miles = action.payload;
            state.carMiles = miles;

            state.cars = cars.filter(car => Number(car.mileage) <= state.carMiles)
        },
        filterByCarMake : (state, action) => {
            const carMake = action.payload;
            state.carMake = carMake;
            state.cars = carMake === 'all' ? cars : cars.filter( car => car.make === carMake);
        },
        filterBySearch : (state,action) => {
            const value = action.payload;
            state.search = value;
            state.cars = value === null ? cars : cars.filter( car => car.make.toLowerCase() === value.toLowerCase() || car.model.toLowerCase() === value.toLowerCase() || car.year === value || car.type.toLowerCase() === value);
        }
    }
});


export const {
    filterByPrice,
    filterByCarType,
    filterByMiles,
    filterByCarMake,
    filterBySearch,
} = carSlice.actions;

export default carSlice.reducer;