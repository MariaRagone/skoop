import React from "react";

function SearchBar({ searchTerm, location, sorting, onSearchChange }) {
  //set state for
  //searchTerm
  //location
  //sortingOption - best match, highest rated, most reviewed
  return (
    <>
      <div className="search-bar">
        <form className="SearchForm">
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <input type="text" placeholder="City" value={location} onChange />
          <input
            type="radio"
            id="best-match"
            name="best-match"
            value={sorting}
          />
          <label for="best-match">Best Match</label>
          <input
            type="radio"
            id="highest-rated"
            name="highest-rated"
            value={sorting}
          />
          <label for="highest-rated">Highest Rated</label>
          <input
            type="radio"
            id="most-reviewed"
            name="most-reviewed"
            value={sorting}
          />
          <label for="most-reviewed">Most Reviewed</label>
        </form>
      </div>
    </>
  );
}
export default SearchBar;
