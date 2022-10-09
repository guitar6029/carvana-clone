import { useEffect } from "react";
import { Car } from "../../CarType";
import CarDisplayItem from "./CarDisplayItem/CarDisplayItem";
import "./CarDisplay.css";

type Props = {
  cars: Car[];
};

function CarDisplay({ cars }: Props) {


  return (
    <div className="car_display">
      {cars.length < 1 && <div><h3>No cars with that price range...</h3></div>}
      {cars.map((car) => (
        <CarDisplayItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarDisplay;
