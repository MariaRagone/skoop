import React, { useState } from "react";
import "./SearchBar.css";
import SortingOption from "./SortingOption";
function SearchBar({ searchBusinesses }) {
  return (
    <div className="search-bar">
      <div>
        <SortingOption />
      </div>
      <form className="SearchForm">
        <br></br>
        <br></br>
        <input type="text" placeholder="Search businesses..." />
        <input type="text" placeholder="Where?" />
        <button type="submit" className="button">
          Let's Go
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
