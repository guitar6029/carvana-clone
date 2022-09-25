import {useState} from 'react';
import MainNav from '../MainNav/MainNav';

import SearchBar from '../SearchBar/SearchBar';
import CarDisplay from './CarDisplay/CarDisplay';
import './Cars.css'; 

function Cars() {

  type Car =  {
    id: number,
    make: string;
    model: string;
    tier: string;
    year: string;
    type: string;
    price: string;
    mileage: string;
    image: string;
  };


  const cars : Car[] = [
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      tier : "Sport",
      year: "2022",
      type: "Sedan",
      price: "20000",
      mileage: "5200",
      image: "https://cdnblob.fastly.carvana.io/2002012462/post-large/normalized/zoomcrop/2002012462-edc-02.jpg?v=2022.9.25_2.2.44&width=449"
    },
    {
      id: 2,
      make: "BMW",
      model: "X5",
      tier: "xDrive35i Premium",
      year: "2013",
      type: "SUV",
      price: "24900",
      mileage: "56200",
      image: "https://cdnblob.fastly.carvana.io/2001595787/post-large/normalized/zoomcrop/2001595787-edc-02.jpg?v=2022.9.25_2.3.15&width=449"
    },
    {
      id: 3,
      make: "Ford",
      model: "F150 Super Cab",
      tier: "XL 6 1/2 ft",
      year: "2018",
      type: "Truck",
      price: "30590",
      mileage: "47338",
      image: "https://cdnblob.fastly.carvana.io/2001959160/post-large/normalized/zoomcrop/2001959160-edc-02.jpg?v=2022.9.25_2.3.39&width=449"
    },
    {
      id: 4,
      make: "Mini",
      model: "Cooper",
      tier: "S All4",
      year: "2013",
      type: "Hunchback",
      price: "18890",
      mileage: "63000",
      image: "https://cdnblob.fastly.carvana.io/2002037737/post-large/normalized/zoomcrop/2002037737-edc-02.jpg?v=2022.9.25_2.3.55&width=449"
    },
    {
      id: 5,
      make: "Chevrolet",
      model: "Camaro",
      tier: "LT",
      year: "2016",
      type: "Coupe",
      price: "23990",
      mileage: "72000",
      image: "https://cdnblob.fastly.carvana.io/2001929632/post-large/normalized/zoomcrop/2001929632-edc-02.jpg?v=2022.9.25_2.4.21&width=449"
    },
    {
      id: 6,
      make: "Chevrolet",
      model: "Corvette",
      tier: "Stringray",
      year: "2021",
      type: "Convertable",
      price: "104990",
      mileage: "3930",
      image: "https://cdnblob.fastly.carvana.io/2001854311/post-large/normalized/zoomcrop/2001854311-edc-02.jpg?v=2022.9.25_2.4.42&width=449"
    }
  ]

  const DEFAULT_CAR_PRICE_RANGE = "35000";

  const [priceRangeValue, setPriceRangeValue] = useState<string>(DEFAULT_CAR_PRICE_RANGE);


  const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const priceVal = e.target.value;
    setPriceRangeValue(priceVal);
  }

  return (
    <div className='section_column'>
        <MainNav/>
        <SearchBar />
        <div className='filter_option_container'>
        <div className='filter_option_title'>
          <h3>Price</h3>
          </div>
          ${priceRangeValue}
        <input type="range" min="0" max="139000" value={priceRangeValue}  onChange={handlePriceRange}/>
        <div className='price_range_nums'><span>$0</span><span>$139000</span></div>
        </div>
        <div className='filter_option_container'>
          <div className='filter_option_title'><h3>Car Type</h3></div>
          <div className='filter_checkbox_container'>
            <div>
            <input type="checkbox" name="SUV" id="" />
            <label htmlFor="SUV" >SUV</label>
            </div>
            <div>
            <input type="checkbox" name="Coupes" id="" />
            <label htmlFor="Coupes" >Coupes</label>
            </div>
            <div>
            <input type="checkbox" name="Hatchbacks" id="" />
            <label htmlFor="Hatchbacks" >Hatchbacks</label>
            </div>
            <div>
            <input type="checkbox" name="Convertables" id="" />
            <label htmlFor="Convertables" >Convertables</label>
            </div>
            <div>
            <input type="checkbox" name="Sedans" id="" />
            <label htmlFor="Sedans" >Sedans</label>
            </div>
            <div>
            <input type="checkbox" name="Trucks" id="" />
            <label htmlFor="Trucks" >Trucks</label>
            </div>
          </div>
        </div>
        <CarDisplay cars={cars}/>
    </div>
  )
}

export default Cars