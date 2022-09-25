import { Car } from '../../../CarType'

type Props = {
    car : Car;
}

function CarDisplayItem({car} : Props) {
  return (
    <div className='car_display_item'>
        <div className='img_container'>
            <img src={car.image} alt="" />
        </div>
        <h3>{car.year} {car.make}</h3>
        <h5>{car.model} {car.mileage} miles</h5>
        
        <span>${car.price}</span>
        </div>
  )
}

export default CarDisplayItem