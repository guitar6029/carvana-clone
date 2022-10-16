import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../features/modalSlice";

interface props {
  styles: {};
  year: string;
  make: string;
  model: string;
  mileage: string;
  tier: string;
  price: number;
}

function CarInformation({
  styles,
  year,
  make,
  model,
  mileage,
  tier,
  price,
}: props) {
  const dispatch = useDispatch();
  const { isDisplayed } = useSelector((store: any) => store.modal);
  return (
    <div className="car_information" style={styles}>
      <div className="info">
        <h3 className="car_details_top hover">
          {year} {make} {model}
        </h3>
        <h3 className="car_details_bottom hover">
          {tier} {Number(mileage).toLocaleString()} miles
        </h3>
      </div>

      <div className="get_started">
        <h3 className="hover">${price.toLocaleString()}</h3>
        <button
          className="button_type"
          onClick={() => dispatch(openModal(isDisplayed))}
        >
          Test Drive
        </button>
      </div>
    </div>
  );
}

export default CarInformation;
