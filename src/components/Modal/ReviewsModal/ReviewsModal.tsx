import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Car } from "../../../Car";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";
import { Owner } from "../../../Owner";
import {
  closeModal,
  filterReviewByUserInput,
} from "../../../features/reviewSlice";
import "./ReviewModal.css";
import { BsFlag } from "react-icons/bs";

interface props {
  car: Car;
}

function ReviewsModal({ car }: props) {
  const { reviews, isOpened, inputValue } = useSelector(
    (store: any) => store.reviews
  );
  const dispatch = useDispatch();

  const modalRef = useRef<any>(null);

  //detects if clicked outside the review box to close the modal

  useEffect(() => {
    function handleClickedOutside(event: Event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal(isOpened));
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, [modalRef, dispatch, isOpened]);

  console.log(isOpened);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterReviewByUserInput(value));
  };

  return (
    <div className="modal_container">
      <div ref={modalRef} className="review_modal">
        <div className="review_main_title_container">
          <AiFillCloseCircle
            className="close"
            onClick={() => dispatch(closeModal(isOpened))}
          />
          <h3 className="review_main_title">
            Owner Reviews ({reviews.length})
          </h3>
        </div>
        <div className="input_container">
          <BiSearchAlt2 id="search_icon" />
          <input
            type="text"
            placeholder="Search Reviews"
            onChange={handleUserInput}
          />
        </div>
        <div className="review_car_name padding_left">
          <h3>
            {car.year} {car.make} {car.model}
          </h3>
        </div>
        <div className="review_total padding_left">
          {inputValue.length <= 0 ? (
            <h4>{reviews.length} REVIEWS</h4>
          ) : (
            <h4>
              {reviews.length} REVIEWS SHOWING "{inputValue}"
            </h4>
          )}
          {/* <h3 className="sort_by">
            SORT BY <AiFillCaretDown className="sort_by_icon" />
          </h3> */}
        </div>
        <div className="reviews_scroll padding_left">
          {reviews.map((review: Owner, index: number) => (
            <div key={index} className="review_card_container">
              <div className="review_top_section">
                <div>
                  <span className="review_name">
                    {review.name} from{" "}
                    <span className="review_location">{review.location}</span>
                  </span>
                </div>
                <div>
                  <BsFlag className="review_flag transition_effect" />
                </div>
              </div>

              <div className="review_verified_date">
                <span>{review.verifiedDate}</span>
              </div>
              <div className="review_comment">
                <q>{review.comment}</q>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsModal;
