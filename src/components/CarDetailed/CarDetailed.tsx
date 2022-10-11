import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "../../Car";
import MainNav from "../MainNav/MainNav";

import "./CarDetailed.css";

function CarDetailed() {
  const { id } = useParams();
  const { cars } = useSelector((store: any) => store.cars);
  const navigate = useNavigate();
  const car = cars.find((car: Car) => {
    return car.id === Number(id);
  });

  const handleRedirect = () => {
    navigate(-1);
  };

  const handleModal = () => {
    
  }

  const styles = {
    background: `url('https://vexstockimages.fastly.carvana.io/stockimages/2018_FORD_F150%20SUPER%20CAB_XLT%20PICKUP%204D%206%201/2%20FT_WHITE_stock_desktop_1920x1080.png?v=1645550492.220')`,
    backgroundPosition: "center",
  };

  return (
    <div className="section-column">
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
          <button className="test_drive" onClick={handleModal}>Test Drive</button>
        </div>
      </div>
    </div>
  );
}

export default CarDetailed;
