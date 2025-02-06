import React, { useState } from "react";
import "./SearchBar.css";
import SortingOption from "./SortingOption";
import OutdoorSeating from "./OutdoorSeating";

function SearchBar({ searchBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("Taco Empire");
  const [location, setLocation] = useState("Detroit");
  const [selectedOption, setSelectedOption] = useState("");
  const [seating, setSeating] = useState("");

  return (
    <div className="search-bar">
      <div>
        <OutdoorSeating />
        <SortingOption
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <form className="SearchForm">
        <br></br>
        <br></br>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          type="text"
          placeholder="Search businesses..."
        />
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          type="text"
          placeholder="Where?"
        />
        <button
          onClick={() => {
            alert(
              `
              Business: ${searchTerm}
              Location: ${location}
              Sorting Option: ${selectedOption}
            `
            );
          }}
          type="submit"
          className="button"
        >
          Let's Go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
