import {RiBuilding2Fill} from 'react-icons/ri';
import {TbTruckDelivery} from 'react-icons/tb';
import './CarPurchaseOptions.css';

function CarPurchaseOptions() {
  return (
    <div className='purchase_options'>
        <div className="option_container">
            <div className='icons hover'><RiBuilding2Fill/></div>
            <div><h3 className='option_title hover'>Pickup Wednesday</h3><h5 className='option_info hover'>Pick it up from our Vending Machine</h5></div>
        </div>
        <div className="option_container">
            <div className='icons hover'><TbTruckDelivery/></div>
            <div><h3 className='option_title hover'>Delivery Wednesday</h3>
            <h5 className='option_info'>Free shipping within 6 days</h5></div>
        </div>
        </div>
  )
}

export default CarPurchaseOptions