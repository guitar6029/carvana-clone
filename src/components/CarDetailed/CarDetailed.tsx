import { useParams } from "react-router-dom";
import { Car } from "../../Car";
import { useSelector } from "react-redux";
//import { openModal } from "../../features/modalSlice";
import MainNav from "../MainNav/MainNav";
import Modal from "../Modal/Modal";

import "./CarDetailed.css";
import CarInformation from "./CarInformation/CarInformation";
import CarPurchaseOptions from "./CarPurchaseOptions/CarPurchaseOptions";

function CarDetailed() {
  const { id } = useParams();
  const { cars } = useSelector((store: any) => store.cars);
  const { isDisplayed } = useSelector((store: any) => store.modal);

  const car = cars.find((car: Car) => {
    return car.id === Number(id);
  });


  //default background image for now
  const styles = {
    backgroundImage:
      "url(https://www.cnet.com/a/img/resize/9272c36e934290336ac494c6f869bd308e0e7a8b/hub/2021/01/07/c9a254a8-ed6e-4f57-aa69-030130ca9b51/carcovers-com-platinum-shield-weatherproof-car-cover.jpg?auto=webp&fit=crop&height=528&width=940)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  console.log("isDisplayed : ", isDisplayed);
  return (
    <div className="section-column">
      {isDisplayed && (
        <Modal make={car.make} model={car.model} year={car.year} />
      )}
      <MainNav />
      <CarInformation styles={styles} make={car.make} mileage={car.mileage} model={car.model} year={car.year} tier={car.tier} price={car.price} />
      <CarPurchaseOptions />
    </div>
  );
}

export default CarDetailed;
