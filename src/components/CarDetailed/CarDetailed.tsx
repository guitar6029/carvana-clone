
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "../../Car";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modalSlice";
import MainNav from "../MainNav/MainNav";
import Modal from "../Modal/Modal";

import "./CarDetailed.css";

function CarDetailed() {
  const { id } = useParams();
  
  
  const { cars } = useSelector((store: any) => store.cars);
  
  const {isDisplayed}  = useSelector((store: any) => store.modal);
  
  const dispatch = useDispatch();

  //const navigate = useNavigate();

  const car = cars.find((car: Car) => {
    return car.id === Number(id);
  });

  // const handleRedirect = () => {
  //   navigate(-1);
  // };


  const styles = {
    backgroundImage:
      "url(https://www.cnet.com/a/img/resize/9272c36e934290336ac494c6f869bd308e0e7a8b/hub/2021/01/07/c9a254a8-ed6e-4f57-aa69-030130ca9b51/carcovers-com-platinum-shield-weatherproof-car-cover.jpg?auto=webp&fit=crop&height=528&width=940)",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  console.log("isDisplayed : " ,isDisplayed);
  return (
    <div className="section-column">
      { (isDisplayed) && <Modal make={car.make} model={car.model} year={car.year} />}
      <MainNav />
      <div className="car_information" style={styles}>
        <div className="info">
          <h3 className="car_details-top">
            {car.year} {car.make} {car.model}
          </h3>
          <h3 className="car_details-bottom">
            {car.tier} {Number(car.mileage).toLocaleString()} miles
          </h3>
        </div>

        <div className="get_started">
          <h3>${car.price.toLocaleString()}</h3>
          <button
            className="test_drive"
            onClick={() => dispatch(openModal(isDisplayed))}
          >
            Test Drive
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default CarDetailed;
