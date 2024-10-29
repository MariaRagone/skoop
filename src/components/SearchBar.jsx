import React, { useState } from "react";

// const ratings = ["Best Match", "Higest Rated", "Most Reviewed"];

function SearchBar({ onSelectSortingOption, sortingOptions, props }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = ({ target }) => {
    const { value } = target;
    setSearchText(value);
  };
  // const handleSorting = ({ target }) => {
  //   const { value } = target;
  //   setSorting(value);
  // setSorting((prev) => ({
  //   ...prev,
  //   backgroundColor: "red",
  //   color: "black",
  // }));
  // };

  const handleSorting = (event) => {
    const name = event.target.value;
    console.log(`You clicked ${name}`);
    onSelectSortingOption(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = {};
    //add the sorting option, search term, and location to the object
    console.log("you submitted");
  };

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
