import "./FilterModal.css";
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";

function FilterModal() {
  return (
    <div className='modal_container'>
        <div className="filter_modal">
             <div className="filter_container">
                <h3 className="filter_option_title">PRICE RANGE</h3>
                <AiFillCaretDown />
                <div className="filter_description_container">
                    <input type="range" min="0" max="100" />
                    <input type="range" min="0" max="100" />
                </div>
            </div>   
             <div className="filter_container">
                <h3 className="filter_option_title">MILES RANGE</h3>
                <AiFillCaretDown />
                <div className="filter_description_container">
                    <input type="range" min="0" max="100" />
                    <input type="range" min="0" max="100" />
                </div>
            </div>
            <div className="filter_container">
                <h3 className="filter_option_title">YEAR</h3>
                <AiFillCaretDown />
                <div className="filter_description_container">
                    <input type="range" min="0" max="100" />
                    <input type="range" min="0" max="100" />
                </div>
            </div>
            <div className="filter_container">
                <h3 className="filter_option_title">BODY TYPE</h3>
                <AiFillCaretDown />
                <div className="filter_description_container">
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/suv.png?width=80" alt="SUV" />
                        <h3>SUV</h3>
                    </div>
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/sedan.png?width=80" alt="SUV" />
                        <h3>Sedan</h3>
                    </div>
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/hatchback.png?width=80" alt="SUV" />
                        <h3>Hatchback</h3>
                    </div>
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/truck.png?width=80" alt="SUV" />
                        <h3>Truck</h3>
                    </div>
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/coupe.png?width=80" alt="SUV" />
                        <h3>Coupe</h3>
                    </div>
                    <div className="body_type_container">
                        <img src="https://assets.fastly.carvana.io/search-assets/body-styles/convertible.png?width=80" alt="SUV" />
                        <h3>Convertable</h3>
                    </div>
                    
                </div>
            </div>
               
             <button className="button_type">APPLY FILTER</button>   
        </div>
        </div>
  )
}

export default FilterModal