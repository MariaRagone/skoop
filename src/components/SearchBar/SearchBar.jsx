import React, { useState } from "react";
import "./SearchBar.css";
import SortingOption, { sortingOptions } from "./SortingOption";
import Seating from "./Seating";
import { getBusinessListings } from "../../Yelp";

function SearchBar({ listing, setListings }) {
  const [searchTerm, setSearchTerm] = useState("Taco Empire");
  const [location, setLocation] = useState("Detroit");
  const [selectedOption, setSelectedOption] = useState(sortingOptions[0]);
  const [seating, setSeating] = useState("");

  return (
    <div className="search-bar">
      <div>
        <Seating seating={seating} setSeating={setSeating} />
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
          onClick={(e) => {
            e.preventDefault();
            console.log(listing);
            getBusinessListings(
              searchTerm,
              location,
              selectedOption.param
            ).then((res) => {
              setListings(res.businesses);
            });
          }}
          className="button"
        >
          Let's Go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
