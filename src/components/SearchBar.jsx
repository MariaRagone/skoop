import React, { useState } from "react";

const sortingOptions = ["Best Match", "Higest Rated", "Most Reviewed"];

function SearchBar({ searchBusinesses }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Detroit");
  const [sortOption, setSortOption] = useState("best-match");

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
    searchBusinesses(searchTerm, location, sortOption); //add the sorting option, search term, and location to the object
    console.log("you submitted");
  };

  // const handleSearchTextChange = ({ target }) => {
  //   const { value } = target;
  //   setSearchText(value);
  // };

  const getSortingOptions = () => {
    return;
  };
  return (
    <>
      <div className="search-bar">
        <ul onClick={handleSortByChange}>
          <li name="best-match" value="Best-Match" onChange={sortOption} /> Best
          Match
          <li
            name="highest-rated"
            value="Highest-Rated"
            onChange={sortOption}
          />
          Higest Rated
          <li
            name="most-reviewed"
            value="Most-Reviewed"
            onChange={sortOption}
          />{" "}
          Most Reviewed
        </ul>
        <form
          className="SearchForm"
          onSubmit={handleSubmit}
          // onClick={handleSorting}
        >
          {sortingOptions.map((options) => (
            <>
              <input
                style={options}
                type="radio"
                id={options}
                name={options}
                className="button-rating"
                value={options}
                onClick={handleSortByChange}
                key={options}
              />
              <label for={options}>{options}</label>
            </>
          ))}
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
    </>
  );
}
export default SearchBar;
