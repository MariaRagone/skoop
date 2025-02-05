import React from "react";
const sortingOptions = ["Best Match", "Highest Rated", "Most Reviewed"];

const SortingOption = () => {
  return (
    <ul>
      {sortingOptions.map((value) => (
        <li key={value} onClick={() => {}}>
          {value}
        </li>
      ))}
    </ul>
  );
  // return <ul> {sortingOptions.map(mapper)}</ul>;
};
export default SortingOption;
