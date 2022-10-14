import { useParams } from "react-router-dom";
import { Car } from "../../Car";
import { useSelector } from "react-redux";
import MainNav from "../MainNav/MainNav";
import Modal from "../Modal/Modal";
import {GoPrimitiveDot} from 'react-icons/go';
import CarInformation from "./CarInformation/CarInformation";
import CarPurchaseOptions from "./CarPurchaseOptions/CarPurchaseOptions";
import CarFeatures from "./CarFeatures/CarFeatures";
import PurchaseOptionCard from "./CarPurchaseOptions/PurchaseOptionCard/PurchaseOptionCard";
import CardTitle from "./CarPurchaseOptions/PurchaseOptionCard/Card/CardTitle";
import Button from "../Button/Button";
import "./CarDetailed.css";
import OwnerReviews from "../OwnerReviews/OwnerReviews";

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
      `url('${car.detailedImage}')`,
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
      <div className="detailed_nav_options">
      <div className="page__details">
        <a href="#vehicle_details">Vehicle Details</a>
        <a href="#price_details">Price Details</a>
        <a href="#owner_details">Owner Reviews</a>
        <a href="#inspection_details">Inspection</a>
      </div>
      </div>
      <CarPurchaseOptions />
      <h3 className="details_title main_text_color" id="vehicle_details"><GoPrimitiveDot /> VEHICLE DETAILS</h3>

      <CarFeatures carDetails={car.highlights} title="HIGHLIGHTS" />
      <CarFeatures carDetails={car.basicInformation} title="BASIC INFORMATION" />
      <CarFeatures carDetails={car.features}  title="FEATURES"/>

      <div className="background_1">
      <h3 className="details_title alt_text_color" id="price_details"><GoPrimitiveDot />PRICE DETAILS</h3>
      <PurchaseOptionCard title="PAY ONCE" price={car.price} currency="$" addList={true} />
      
      <div className='section-column centered'>
      <CardTitle title="PAY MONTHLY" />

      <div className="pay_monthly_card">
           <div>
            <h3>${ (car.price / 69).toFixed() } - ${ (car.price / 59).toFixed()}</h3>
           </div>
           <span>This is an estimate</span>
           <div className="pay_month_card_text">
            <p>Get personalized down/monthly payments within 2 minutes, and no impact to your credit score.</p>
           </div>
      </div>
           <Button title="GET YOUR OWN TERMS" />
      </div>
      </div>
      <OwnerReviews car={car} />
      
    </div>
  );
}

export default CarDetailed;
