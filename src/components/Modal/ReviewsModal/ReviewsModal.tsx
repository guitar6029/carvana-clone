import { useSelector, useDispatch } from "react-redux";
import { Car } from "../../../Car";
import { BiSearchAlt2 } from "react-icons/bi";
import "./ReviewModal.css";
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai";
import { Owner } from "../../../Owner";
import { closeModal } from "../../../features/reviewSlice";

interface props {
  car: Car;
}

function ReviewsModal({ car }: props) {
  const { reviews, isOpened } = useSelector((store: any) => store.reviews);
  const dispatch = useDispatch();

  return (
    <div className="modal_container">
      <div className="review_modal">
        <div className="review_main_title_container">
          <AiFillCloseCircle className="close" onClick={() => dispatch(closeModal(isOpened))} />
          <h3 className="review_main_title">
            Owner Reviews ({reviews.length})
          </h3>
        </div>
        <div className="input_container">
          <BiSearchAlt2 id="search_icon" />
          <input type="text" placeholder="Search Reviews" />
        </div>
        <div className="review_car_name padding_left">
          <h3>
            {car.year} {car.make} {car.model}
          </h3>
        </div>
        <div className="review_total padding_left">
          <h4>{reviews.length} REVIEWS</h4>
          <h3 className="sort_by">
            SORT BY <AiFillCaretDown className="sort_by_icon" />
          </h3>
        </div>
        <div className="reviews padding_left">
          {reviews.map((review: Owner, index: number) => (
            <div key={index} className="review_card_container">
              <div>
                <span className="review_name">
                  {review.name} from{" "}
                  <span className="review_location">{review.location}</span>
                </span>
              </div>
              <div className="review_verified_date">
                <span>{review.verifiedDate}</span>
              </div>
              <div className="review_comment">
                <span>{review.comment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsModal;
