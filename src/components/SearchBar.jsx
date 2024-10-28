import React, { useState } from "react";

// const ratings = ["Best Match", "Higest Rated", "Most Reviewed"];

function SearchBar({ onSelectSortingOption }) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [location, setLocation] = useState("Detroit");
  // const [sorting, setSorting] = useState({ appearance: "none" }, []);

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

  return (
    <>
      <div className="search-bar" onClick={handleSorting}>
        <form className="SearchForm">
          <input type="radio" name="best-match" value="Best-Match" /> Best Match
          <input type="radio" name="highest-rated" value="Highest-Rated" />{" "}
          Higest Rated
          <input type="radio" name="most-reviewed" value="Most-Reviewed" /> Most
          Reviewed
          {/* {ratings.map((rating) => (
            <>
              <input
                style={sorting}
                type="radio"
                id={rating}
                name={rating}
                className="button-rating"
                value={rating}
                onClick={handleSorting}
                // onClick={handleSorting}
                key={rating}
              />
              <label for={rating}>{rating}</label>
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
