import React from "react";
import "./BusinessCard.css";
import { Link } from "react-router-dom";

//bring in business array from app.js
const Business = ({ business }) => {
  return (
    <div
      className="business-card"
      // onClick={() => {
      //     alert(
      //       `
      //     Open ${business.name}!
      //   `
      //     );
      // }}
    >
      <Link to="/BusinessPage/">Go to BusinessPage</Link>;
      <h2>{business.name}</h2>
      <img src={business.image_url} alt={business.name} />
      <p>{business.location.address1}</p>
      <p>
        {business.location.city}, {business.location.state}{" "}
        {business.location.zip_code}
      </p>
      <span>Category: {business.categories[0].title}</span>
      <span>Rating: {business.rating}</span>
      <p># Reviews: {business.review_count}</p>
    </div>
  );
};

export default Business;
