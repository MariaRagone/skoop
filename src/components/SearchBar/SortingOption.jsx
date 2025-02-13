import React from "react";
import "./SortingOption.css";

export const sortingOptions = [
  { name: "Best Match", param: "best_match" },
  { name: "Highest Rated", param: "rating" },
  { name: "Most Reviewed", param: "review_count" },
];

const SortingOption = ({ selectedOption, setSelectedOption }) => {
  return (
    <ul className="sorting-options">
      {sortingOptions.map((option) => {
        const activeClassName =
          selectedOption.name === option.name ? "sorting-options-active" : "";
        return (
          <li
            className={`sorting-options-item ${activeClassName}`}
            key={option.name}
            onClick={() => {
              setSelectedOption(option);
            }}
          >
            {option.name}
          </li>
        );
      })}
    </ul>
  );
};
export default SortingOption;
