import { Car } from "../../../CarType";
import {BsDot} from 'react-icons/bs';
import { Link } from "react-router-dom";
import "./CarDisplayItem.css";

type Props = {
  car: Car;
};

function CarDisplayItem({ car }: Props) {

  const carDetailLink = `/cars/vehicle/${car.id}`;

  return (
    <div className="car_display_item">
      <Link to={carDetailLink}>
      <div className="img_container">
        <img src={car.image} alt="" />
      </div>
      </Link>
      <div className="car_info">
        <div className="car_top_row">
          <h3 className="car_year">{car.year}</h3>
          <h3 className="car_make">{car.make}</h3>
          <h3 className="car_model">{car.model}</h3>
        </div>
        <div className="car_middle_row">
          <h5 className="car_tier">{car.tier}</h5>
          <BsDot/>
          <h5 className="car_miles"> {car.mileage.toLocaleString()} miles</h5>
        </div>

        <div>
          <h3 className="car_price">${car.price.toLocaleString()}</h3>
        </div>
      </div>
    </div>
  );
}

export default CarDisplayItem;
