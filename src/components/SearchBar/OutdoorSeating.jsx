import React from "react";
import "./OutdoorSeating.css";

const seating = ["Outdoor", "Indoor"];
const OutdoorSeating = () => {
  return <ul className="outdoor-seating"> {seating.map((option) => {})}</ul>;
};

export default OutdoorSeating;
