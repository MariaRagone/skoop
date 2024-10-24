import React, { useState } from "react";

const ratings = ["Best Match", "Higest Rated", "Most Reviewed"];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Detroit");
  const [sorting, setSorting] = useState([]);

  return (
    <>
      <div className="search-bar">
        <form className="SearchForm">
          {ratings.map((rating) => (
            <button
              className="button-rating"
              value={rating}
              // onClick={toggleRating}
              key={rating}
            >
              {rating}
            </button>
          ))}
          <br></br>
          <br></br>
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchTerm}
            // onChange={(e) => onSearchChange(e.target.value)}
          />

          <input type="text" placeholder="Where?" value={location} onChange />
          <button className="button">Let's Go</button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
