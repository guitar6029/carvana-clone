import { useEffect } from "react";
import MainNav from "../MainNav/MainNav";
import SearchBar from "../SearchBar/SearchBar";
import CarDisplay from "./CarDisplay/CarDisplay";
import { useSelector, useDispatch } from "react-redux";
import { filterByPrice, filterByCarType } from "../../features/carSlice";
import "./Cars.css";

function Cars() {
  const dispatch = useDispatch();

  const { cars, priceRangeValue } = useSelector((store: any) => store.cars);

  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const priceVal = Number(e.target.value);
    dispatch(filterByPrice(priceVal));
    
  };

  const handleCarType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(filterByCarType(value));
    console.log(value);
  }
  
  useEffect(() => {
    //dispatch(updateCars);
  }, [cars, dispatch]);

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
          <select name="car_type" onChange={handleCarType}>
            <option selected value="Select Car Type">Select Car Type</option>
            <option value="all">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
            <option value="Coupe">Coupe</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Convetable">Convertable</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
      </div>
      <CarDisplay cars={cars} />
    </div>
  );
}

export default Cars;
