import { useState, useEffect } from "react";
import MainNav from "../MainNav/MainNav";
import SearchBar from "../SearchBar/SearchBar";
import CarDisplay from "./CarDisplay/CarDisplay";
import { useSelector, useDispatch } from "react-redux";
import "./Cars.css";
import { filterByPrice } from "../../features/carSlice";

function Cars() {

  const dispatch = useDispatch();

  const {cars, priceRangeValue} = useSelector((store: any) => store.cars)
  console.log(cars);


  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const priceVal = Number(e.target.value);
    dispatch(filterByPrice(priceVal));
    
  };

  

   useEffect(() => {
      
   }, [cars]);

  return (
    <div className="section_column">
      <MainNav />
      <SearchBar />
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
        <div className="filter_option_title">
          <h3>Car Type</h3>
        </div>
        <div className="filter_checkbox_container">
          <div>
            <input type="checkbox" name="SUV" id="" />
            <label htmlFor="SUV">SUV</label>
          </div>
          <div>
            <input type="checkbox" name="Coupes" id="" />
            <label htmlFor="Coupes">Coupes</label>
          </div>
          <div>
            <input type="checkbox" name="Hatchbacks" id="" />
            <label htmlFor="Hatchbacks">Hatchbacks</label>
          </div>
          <div>
            <input type="checkbox" name="Convertables" id="" />
            <label htmlFor="Convertables">Convertables</label>
          </div>
          <div>
            <input type="checkbox" name="Sedans" id="" />
            <label htmlFor="Sedans">Sedans</label>
          </div>
          <div>
            <input type="checkbox" name="Trucks" id="" />
            <label htmlFor="Trucks">Trucks</label>
          </div>
        </div>
      </div>
      <CarDisplay cars={cars} />
    </div>
  );
}

export default Cars;
