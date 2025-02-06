import React from "react";
import "./SortingOption.css";

const sortingOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

const SortingOption = ({ setSelectedOption }) => {
  return (
    <ul className="sorting-options">
      {sortingOptions.map((option) => (
        <li
          className="sorting-options-item"
          key={option}
          onClick={() => {
            setSelectedOption(option);
          }}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};
export default SortingOption;
