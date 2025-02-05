import React, { useState } from "react";
import "./SearchBar.css";
import SortingOption from "./SortingOption";
function SearchBar({ searchBusinesses }) {
  const [searchBusiness, setSearchBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="search-bar">
      <div>
        <SortingOption setSelectedOption={setSelectedOption} />
      </div>
      <form className="SearchForm">
        <br></br>
        <br></br>
        <input
          onChange={(e) => {
            setSearchBusiness(e.target.value);
          }}
          value={searchBusiness}
          type="text"
          placeholder="Search businesses..."
        />
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          type="text"
          placeholder="Where?"
        />
        <button
          type="submit"
          className="button"
          onClick={() => {
            alert(`
              Sorting Option: ${selectedOption}
              Business: ${searchBusiness}
              Location: ${location}`);
          }}
        >
          Let's Go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
