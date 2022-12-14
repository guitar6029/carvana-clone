import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
import { filterBySearch } from "../../features/carSlice";
import { IoMdOptions } from "react-icons/io";
function SearchBar() {
  const dispatch = useDispatch();
  const { search } = useSelector((store: any) => store.cars);


  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filterBySearch(value));
  };

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        placeholder="Search makes, models, or keywords"
        onChange={handleInput}
      />
      <IoMdOptions className="filter_options_icon" />
    </div>
  );
}

export default SearchBar;
