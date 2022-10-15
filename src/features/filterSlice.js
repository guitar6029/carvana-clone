import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../cars";

const initialState = {
  cars: cars,
  carType: "all",
  carMinPrice: 1,
  carMaxPrice: 15000,
  carMinMiles: 100,
  carMaxMiles: 25000,
  carMake: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    
  },
});

export default filterSlice.reducer;
