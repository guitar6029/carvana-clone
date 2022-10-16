import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Car } from "../../../Car";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  AiFillCaretDown,
  AiFillCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { Owner } from "../../../Owner";
import {
  closeModal,
  filterReviewByUserInput,
  clearReviewUserInput,
  displayFlagReviewModal,
  hideFlagReviewModal,
  flagThisReviewComment,
  getCommentID,
} from "../../../features/reviewSlice";
import "./ReviewModal.css";
import { BsFlag } from "react-icons/bs";

interface props {
  car: Car;
}

function ReviewsModal({ car }: props) {
  const {
    reviews,
    isOpened,
    inputValue,
    clickedOnFlagReview,
    flaggedThisReview,
    commentID,
  } = useSelector((store: any) => store.reviews);
  const dispatch = useDispatch();

  const modalRef = useRef<any>(null);

  //detects if clicked outside the review box to close the modal


  useEffect(() => {

  }, [reviews])


  useEffect(() => {
    function handleClickedOutside(event: Event) {
      //if click is outside the review modal container and the flag review modal is not opened
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !clickedOnFlagReview
      ) {
        dispatch(closeModal(isOpened));
        dispatch(clearReviewUserInput());
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, [modalRef, dispatch, isOpened, clickedOnFlagReview]);

  //detects if clicked esc key , closes the modal
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const val = e.code;
      if (val === "Escape") {
        dispatch(closeModal(isOpened));
        dispatch(hideFlagReviewModal());
        dispatch(clearReviewUserInput());
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterReviewByUserInput(value));
  };

  const handleFlagReview = (e: number) => {
    const val = e;
    dispatch(getCommentID(val))
    dispatch(displayFlagReviewModal());
    
  };

  const handleOnCloseIconModal = () => {
    dispatch(closeModal(isOpened));
    dispatch(hideFlagReviewModal());
    dispatch(clearReviewUserInput());
  }

  return (
    <>
      {clickedOnFlagReview && (
        <div className="flag_review_modal">
          <h3>Are you sure you want to flag this review as inappropriate?</h3>
          <div className="flag_review_buttons">
            <button
              className="button_type"
              onClick={() => dispatch(flagThisReviewComment())}
            >
              CONTINUE
            </button>
            <button
              className="button_type"
              onClick={() => dispatch(hideFlagReviewModal())}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
      <div className="modal_container">
        <div ref={modalRef} className="review_modal">
          <div className="review_main_title_container">
            <AiFillCloseCircle
              className="close"
              onClick={handleOnCloseIconModal}
            />
            <h3 className="review_main_title">
              Owner Reviews ({reviews.length})
            </h3>
          </div>
          <div className="input_container">
            <BiSearchAlt2 id="search_icon" />
            <input
              type="text"
              value={inputValue}
              placeholder="Search Reviews"
              onChange={handleUserInput}
            />
            <AiOutlineClose
              className={
                inputValue <= 0 ? "hidden" : "clear_review_modal_input"
              }
              onClick={() => dispatch(clearReviewUserInput())}
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
            {reviews.map((review: Owner) => (
              <div key={review.id} className="review_card_container">
                <div className="review_top_section">
                  <div>
                    <span className="review_name">
                      {review.name} from 
                      <span className="review_location">{review.location}</span>
                    </span>
                  </div>

                  {/* shows unflagged reviews  */}

                  <div className="flag_review">
                      <BsFlag
                        className="review_flag transition_effect"
                        onClick={() => handleFlagReview(review.id)}
                      />
                      <h5>Flag Review</h5>
                    </div>

                  {/* { (flaggedThisReview) ? (
                    <div className="flag_review">
                      <h5>Flagged Comment</h5>
                    </div>
                  ) : (
                    <div className="flag_review">
                      <BsFlag
                        className="review_flag transition_effect"
                        onClick={() => handleFlagReview(review.id)}
                      />
                      <h5>Flag Review</h5>
                    </div>
                  )} */}
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
    </>
  );
}

export default ReviewsModal;
