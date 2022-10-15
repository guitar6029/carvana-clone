import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Car } from "../../Car";
import {
  filterByCarMake,
  filterByCarType,
  filterByMiles,
  filterByPrice,
  
} from "../../features/carSlice";
import CarDisplay from "../Cars/CarDisplay/CarDisplay";
import FilterItemRange from "../Cars/FilterItem/FilterItemRange";
import FilterItemSelect from "../Cars/FilterItem/FilterItemSelect";
import MainNav from "../MainNav/MainNav";
import SearchBar from "../SearchBar/SearchBar";
import {IoMdOptions} from "react-icons/io";
import FilterModal from "../Modal/FilterModal/FilterModal";

function CarType() {
  const { type } = useParams();

  console.log(type);
  
  const dispatch = useDispatch();
  const { cars, priceRangeValue, carMiles} = useSelector(
    (store: any) => store.cars
    );

    
  const carMake: string[] = [];
  const carType: string[] = [];

  //removes duplicates car maker
  const uniqueCarMake = cars.filter((car: Car) => {
    const duplicate = carMake.includes(car.make);
    if (!duplicate) {
      carMake.push(car.make);
      return true;
    }

    return false;
  });

  //removes duplicate car models
  const uniqueCarType = cars.filter((car: Car) => {
    const duplicate = carType.includes(car.type);
    if (!duplicate) {
      carType.push(car.type);
      return true;
    }

    return false;
  });

  const handleChange = (title: string, value: string): void => {
    if (title === "Price") {
      dispatch(filterByPrice(Number(value)));
    } else {
      dispatch(filterByMiles(value));
    }
  };

  const handleSelectorChange = (title: string, val: string) => {
    if (title === "Car Type") {
      dispatch(filterByCarType(val));
    } else {
      dispatch(filterByCarMake(val));
    }
  };

  return (
    <div className="section_column">
      <MainNav />
      <SearchBar />
      {/* <FilterModal /> */}
      <div className="filter_container">
        <FilterItemRange
          filterTitle="Price"
          rangeValue={priceRangeValue}
          minRangeVal="0"
          maxRangeVal="139000"
          handleChange={handleChange}
        />
        <FilterItemRange
          filterTitle="Miles"
          rangeValue={carMiles}
          minRangeVal="10"
          maxRangeVal="150000"
          handleChange={handleChange}
        />

        {/* defaultSelectOptionValue="all" */}
        <FilterItemSelect
          title="Car Type"
          selectName="car_type"
          defaultSelectOptionValue="all"
          carArray={carType}
          handleSelectChange={handleSelectorChange}
        />

        <FilterItemSelect
          title="Car Make"
          selectName="car_make"
          defaultSelectOptionValue="all"
          carArray={carMake}
          handleSelectChange={handleSelectorChange}
        />
      </div>

      <CarDisplay cars={cars} />
    </div>
  );
}

export default CarType;
