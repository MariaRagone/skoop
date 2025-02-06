import React from "react";
import "./SortingOption.css";

const sortingOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

const SortingOption = ({ selectedOption, setSelectedOption }) => {
  return (
    <ul className="sorting-options">
      {sortingOptions.map((option) => {
        const activeClassName =
          selectedOption === option ? "sorting-options-active" : "";
        return (
          <li
            className={`sorting-options-item ${activeClassName}`}
            key={option}
            onClick={() => {
              setSelectedOption(option);
            }}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};
export default SortingOption;
