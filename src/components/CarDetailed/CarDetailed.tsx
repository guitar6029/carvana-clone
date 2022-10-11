import React from 'react'
import { BsDot } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import './CarDetailed.css';
import { Car } from '../../Car';
import MainNav from '../MainNav/MainNav';

function CarDetailed() {

    const {id} = useParams();
    const { cars } = useSelector((store : any) => store.cars);
    const navigate = useNavigate();
    const car = cars.find( (car : Car) => {return car.id === Number(id)} )


   const handleRedirect = () => {
       navigate(-1);
   }


  return (
    <div className='section-column centered'>
        <MainNav />
        <button onClick={handleRedirect}>Go back</button>
    <div className="car_display_item large">
      
      <div className="img_container">
        <img src={car.image} alt="" />
      </div>
      
      <div className="car_info">
        <div className="car_top_row">
          <h3 className="car_year">{car.year}</h3>
          <h3 className="car_make">{car.make}</h3>
          <h3 className="car_model">{car.model}</h3>
        </div>
        <div className="car_middle_row">
          <h5 className="car_tier">{car.tier}</h5>
          <BsDot/>
          <h5 className="car_miles"> {car.mileage.toLocaleString()} miles</h5>
        </div>

        <div>
          <h3 className="car_price">${car.price.toLocaleString()}</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CarDetailed