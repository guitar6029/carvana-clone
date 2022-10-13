import {RiBuilding2Fill} from 'react-icons/ri';
import {TbTruckDelivery} from 'react-icons/tb';

function CarPurchaseOptions() {
  return (
    <div className='purchase_options'>
        <div className="option_container">
            <div><RiBuilding2Fill/></div>
            <div><h3 className='option_title'>Pickup Wednesday</h3></div>
        </div>
        <div className="option_container">
            <div><TbTruckDelivery/></div>
            <div><h3 className='option_title'>Delivery Wednesday</h3></div>
        </div>
        </div>
  )
}

export default CarPurchaseOptions