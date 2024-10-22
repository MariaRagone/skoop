import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("Burger");
  const [location, setLocation] = useState("Detroit");
  const [sortingOption, setSortingOption] = useState("Best Match");

  return (
    <>
      <div className="search-bar">
        <form className="SearchForm">
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
          />

          <input type="text" placeholder="Where?" value={location} onChange />
          <input type="radio" id="best-match" name="best-match" />
          <label for="best-match">Best Match</label>
          <input type="radio" id="highest-rated" name="highest-rated" />
          <label for="highest-rated">Highest Rated</label>
          <input type="radio" id="most-reviewed" name="most-reviewed" />
          <label for="most-reviewed">Most Reviewed</label>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
