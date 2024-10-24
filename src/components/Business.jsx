import React from "react";

function Business({
  src,
  name,
  address,
  city,
  state,
  zipcode,
  category,
  rating,
  reviewCount,
}) {
  return (
    <div className="business-card">
      <h2>{name}</h2>
      <img src={src} alt={name} />
      <p>{address}</p>
      <p>
        {city}, {state} {zipcode}
      </p>
      <span>{category}</span>
      <span>Rating: {rating}</span>

      <p># Reviews: {reviewCount}</p>
    </div>
  );
}

export default Business;
