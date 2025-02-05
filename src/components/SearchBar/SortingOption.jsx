import React from "react";
const sortingOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

const SortingOption = ({ setSelectedOption }) => {
  return (
    <ul>
      {sortingOptions.map((option) => (
        <li
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
