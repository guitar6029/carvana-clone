import './LandingPageSearch.css';
import {AiOutlineSearch} from 'react-icons/ai';
import CarItem from '../Cars/LandingPageSearchType/CarItem/CarItem';
function LandingPageSearch() {
  return (
    <div className='landing_search'>
       {/* <h3 className="landing_search_title">WE'LL DRIVE YOU HAPPY</h3> */}
        <div>
        <AiOutlineSearch className='search_icon'/>
       <input type="text" placeholder="Search Make, Model, or Keyword"/>
       <button>GO</button>
        </div>
       <div className='car_search_type_selection'>
            <CarItem type="Trucks" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-truck-06_02_2022.png?width=90" linkTo='trucks' />
            <CarItem type="Hatchbacks" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-hatchback-06_02_2022.png?width=90" linkTo="hatchbacks" />
            <CarItem type="Sedans" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-sedan-06_02_2022.png?width=90" linkTo='sedans' />
            <CarItem type="Coupes" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-coupe-06_02_2022.png?width=90" linkTo="Coupes"/>
            <CarItem type="Convertables" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-convertible-06_02_2022.png?width=90" linkTo="convertables" />
            <CarItem type="SUVs" img="https://assets.fastly.carvana.io/home-assets/pivot-2022/body-style-button-suv-06_02_2022.png?width=90" linkTo='suvs' />
       </div>
        </div>
  )
}

export default LandingPageSearch