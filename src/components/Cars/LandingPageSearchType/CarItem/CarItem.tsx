import './CarItem.css';
import { Link} from 'react-router-dom';

type Props = {
    type: string;
    img: string;
    linkTo: string;
}

function CarItem({type, img, linkTo}: Props) {


  return (
    <Link className='car_item_link' to={`/cars/${linkTo}`}><div className='car_item'>
    <img src={img} alt="car" />
    <h4>{type}</h4>    
</div></Link>
  )
}

export default CarItem