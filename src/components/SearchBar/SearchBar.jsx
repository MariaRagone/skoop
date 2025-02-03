import React, { useState } from "react";
import "./SearchBar.css";

const sortingOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ searchBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Detroit");
  const [sortOption, setSortOption] = useState("best_match");

  const getSortByClass = (sortByOption) => {
    if (sortOption === sortByOption) {
      return "";
      // return styles.active;
    }
    return "";
  };
  const handleSortByChange = (sortByOption) => {
    setSortOption(sortByOption);
    console.log(`the sort option is ${sortOption}`);
  };
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(`the search term is ${searchTerm}`);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(`the location is ${location}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBusinesses(searchTerm, location, sortOption);
  };

  const getSortingOptions = () => {
    return Object.keys(sortingOptions).map((sortByOption) => {
      let sortByOptionValue = sortingOptions[sortByOption];
      return (
        <li
          id={sortByOptionValue}
          name={sortByOptionValue}
          className={getSortByClass(sortByOptionValue)}
          value={sortByOptionValue}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className={"search-bar"}>
      <div>
        {/* <div className={styles.SearchBarSortOptions}> */}
        <ul> {getSortingOptions()}</ul>
      </div>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="Search businesses..."
          onChange={handleSearchTermChange}
        />
        <input
          type="text"
          placeholder="Where?"
          onChange={handleLocationChange}
        />
        <button type="submit" className="button">
          Let's Go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
