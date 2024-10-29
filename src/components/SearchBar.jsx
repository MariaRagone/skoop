import React, { useState } from "react";

// const ratings = ["Best Match", "Higest Rated", "Most Reviewed"];

function SearchBar({ searchBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Detroit");
  const [sortBy, setSortBy] = useState("best-match");

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchBusinesses(searchTerm, location, sortBy); //add the sorting option, search term, and location to the object
    console.log("you submitted");
  };

  // const handleSearchTextChange = ({ target }) => {
  //   const { value } = target;
  //   setSearchText(value);
  // };

  return (
    <>
      <div className="search-bar">
        <form
          className="SearchForm"
          onSubmit={handleSubmit}
          onClick={handleSorting}
        >
          <input type="radio" name="best-match" value="Best-Match" /> Best Match
          <input type="radio" name="highest-rated" value="Highest-Rated" />
          Higest Rated
          <input type="radio" name="most-reviewed" value="Most-Reviewed" /> Most
          Reviewed
          {/* {sortingOptions.map((options) => (
            <>
              <input
                style={options}
                type="radio"
                id={options}
                name={options}
                className="button-rating"
                value={options}
                onClick={handleSorting}
                key={options}
              />
              <label for={options}>{options}</label>
            </>
          ))} */}
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Search businesses..."
            // value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
          />
          <input
            type="text"
            placeholder="Where?"
            // value={location}
            // onChange
          />
          <button className="button">Let's Go</button>
        </form>
      </div>
    </>
  );
}
export default SearchBar;
