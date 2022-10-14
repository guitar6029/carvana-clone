import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Car } from "../../Car";
import { Owner } from "../../Owner";
import OwnerReview from "./OwnerReview";
import './OwnerReviews.css';
interface props {
  car: Car;
}

function OwnerReviews({ car }: props) {
  

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

  return (
    <div className="section-column centered">
      <h3 className="details_title main_text_color" id="owner_details">
        <GoPrimitiveDot />
        OWNER REVIEWS
      </h3>
      <h4 className="owner_review_car_title">
        {car.year} {car.make} {car.model}
      </h4>
      <div className="reviews">
           {owners.map((owner: Owner) => ( 
                <OwnerReview owner={owner} />
           ))}
      </div>

    </div>
  );
}

export default OwnerReviews;
