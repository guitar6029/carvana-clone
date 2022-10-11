import React from "react";

interface props {
  filterTitle: string;
  rangeValue: string;
  minRangeVal: string;
  maxRangeVal: string;
  handleChange: (val: string, val2: string) => void;
}

function FilterItemRange({
  filterTitle,
  rangeValue,
  minRangeVal,
  maxRangeVal,
  handleChange,
}: props) {
  const handleChangeHelper = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    handleChange(filterTitle, value);
  };

  return (
    <div>
      <div className="filter_option_container">
        <div className="filter_option_title">
          <h3>{filterTitle}</h3>
        </div>
        {filterTitle === "Price" ? `$ ${rangeValue}` : rangeValue}
        <input
          type="range"
          min={minRangeVal}
          max={maxRangeVal}
          value={rangeValue}
          onChange={handleChangeHelper}
        />
        <div className="price_range_nums">
          <span>${minRangeVal}</span>
          <span>${maxRangeVal}</span>
        </div>
      </div>
    </div>
  );
}

export default FilterItemRange;
