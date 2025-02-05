import React from "react";
import "./BusinessCard.css";

//bring in business array from app.js
const Business = ({ business }) => {
  return (
    <div className="business-card">
      <h2>{business.name}</h2>
      <img src={business.src} alt={business.name} />
      <p>{business.address}</p>
      <p>
        {business.city}, {business.state} {business.zipcode}
      </p>
      <span>{business.category}</span>
      <span>Rating: {business.rating}</span>

      <p># Reviews: {business.reviewCount}</p>
    </div>
  );
};

export default Business;
