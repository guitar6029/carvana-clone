import React from 'react'


interface props {
    title : string;
    selectName : string;
    defaultSelectOptionValue : string;
    selectCarOptionTitle : string;
    defaultOptionValue : string;
    carArray : string[];
    handleSelectChange : (val: string, val2: string) => void;
}


function FilterItemSelect({title, selectName, defaultSelectOptionValue, selectCarOptionTitle, defaultOptionValue ,carArray, handleSelectChange} : props ) {

    const handleChangeHelper = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        handleSelectChange(title, value);
    }

  return (
    <div className="filter_option_container">
          <div className="filter_option_title">
            <h3>{title}</h3>
          </div>
          <div className="filter_select_container">
            <select name={selectName} onChange={handleChangeHelper} defaultValue={defaultSelectOptionValue}>
              <option value={defaultOptionValue}>{selectCarOptionTitle}</option>
              <option value="all">All Types</option>
              {carArray.map((car: string) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </select>
          </div>
        </div>
  )
}

export default FilterItemSelect