import React from "react";
import "./Seating.css";

const seatingType = ["Outdoor", "Indoor"];
const Seating = ({ seating, setSeating }) => {
  return (
    <ul className="seating">
      {seatingType.map((option) => {
        const activeClassName = seating === option ? "seating-active" : "";
        return (
          <li
            className={`seating ${activeClassName}`}
            key={option}
            onClick={() => {
              setSeating(option);
            }}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default Seating;
