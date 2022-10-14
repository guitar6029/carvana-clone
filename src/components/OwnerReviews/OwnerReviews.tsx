import { GoPrimitiveDot } from "react-icons/go";
import { Car } from "../../Car";
import { Owner } from "../../Owner";
import OwnerReview from "./OwnerReview";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../features/reviewSlice";
import ReviewsModal from "../Modal/ReviewsModal/ReviewsModal";
import './OwnerReviews.css';

interface props {
  car: Car;
}

function OwnerReviews({ car }: props) {
  
    
    const {isOpened} = useSelector((store : any) => store.reviews);
    //const  = useSelector((store : any) => store.reviews);
    const dispatch = useDispatch();


    console.log(isOpened);


  const owners: Owner[] = [
    {
      name: "Robert M.",
      location: "PA",
      verifiedDate: "01/2018",
      comment: "A great car for the price",
    },
    {
      name: "Alexa B.",
      location: "FL",
      verifiedDate: "05/2022",
      comment: "I enjoy the features of the car",
    },
    {
        name: "Bobby S.",
      location: "MA",
      verifiedDate: "04/2019",
      comment: "The interior design is awsome",
    }
  ];

  //console.log(car);

  return (
    <div className="section-column centered">
        { !isOpened && <ReviewsModal car={car}/>}
      <h3 className="details_title main_text_color" id="owner_details">
        <GoPrimitiveDot />
        OWNER REVIEWS
      </h3>
      <h4 className="owner_review_car_title">
        {car.year} {car.make} {car.model}
      </h4>
      <div className="reviews">
           {owners.map((owner: Owner, index) => ( 
                <OwnerReview key={index} owner={owner} />
           ))}
      </div>
      <button className="button_type" onClick={() => dispatch(openModal(isOpened))}>VIEW ALL REVIEWS</button>

    </div>
  );
}

export default OwnerReviews;
