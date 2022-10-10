import React, { useEffect } from "react";
import MainNav from "../MainNav/MainNav";
import SearchBar from "../SearchBar/SearchBar";
import CarDisplay from "./CarDisplay/CarDisplay";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByPrice,
  filterByCarType,
  filterByMiles,
  filterByCarMake,
  filterBySearch,
} from "../../features/carSlice";
import "./Cars.css";
import { Car } from "../../Car";

function Cars() {
  const dispatch = useDispatch();

  const { cars, priceRangeValue, carMiles } = useSelector(
    (store: any) => store.cars
  );

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const priceVal = Number(e.target.value);
    dispatch(filterByPrice(priceVal));
  };

  const handleCarType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(filterByCarType(value));
    console.log(value);
  };

  const handleCarMake = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(filterByCarMake(value));
  };

  const handleMiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const miles = e.target.value;
    dispatch(filterByMiles(miles));
    console.log(miles);
  };

  useEffect(() => {}, [cars, dispatch]);

  return (
    <div className="section_column">
      <MainNav />
      <SearchBar />

      <div className="filter_container">
        <div className="filter_option_container">
          <div className="filter_option_title">
            <h3>Price</h3>
          </div>
          ${priceRangeValue}
          <input
            type="range"
            min="0"
            max="139000"
            value={priceRangeValue}
            onChange={handlePriceRange}
          />
          <div className="price_range_nums">
            <span>$0</span>
            <span>$139000</span>
          </div>
        </div>
        <div className="filter_option_container">
          <div>
            <h3 className="filter_option_title">Miles</h3>
          </div>
          {carMiles}
          <input
            type="range"
            min="10"
            max="150000"
            value={carMiles}
            onChange={handleMiles}
          />
          <div className="price_range_nums">
            <span>10</span>
            <span>150000</span>
          </div>
        </div>
        <div className="filter_option_container">
          <div className="filter_option_title">
            <h3>Car Type</h3>
          </div>
          <div className="filter_select_container">
            <select name="car_type" onChange={handleCarType} defaultValue="all">
              <option value="Select Car Type">Select Car Type</option>
              <option value="all">All Types</option>
              {cars.map((car: Car) => (
                <option value={car.type}>{car.type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="filter_option_container">
          <div className="filter_option_title">
            <h3>Car Make</h3>
          </div>
          <div className="filter_select_container">
            <select name="car_type" onChange={handleCarMake} defaultValue="all">
              <option value="Select Car Type">Select Car Make</option>
              <option value="all">All Types</option>
              {cars.map((car: Car) => (
                <option value={car.make}>{car.make}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <CarDisplay cars={cars} />
    </div>
  );
}

export default Cars;
