import CarItem from '../../Cars/LandingPageSearchType/CarItem/CarItem';
import './LandingPageSearch.css';

const LandingPageSearch = () => {
  return (
    <div className='landing_search'>
       <div className='car_type_container'>
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