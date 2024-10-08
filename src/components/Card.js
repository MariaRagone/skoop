import React from "react";


function Card({
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
    <div className="business">
      <h2>{name}</h2>
      <img src={src} alt={name} />
      <p>{address}</p>
      <p>
        {city}, {state} {zipcode}
      </p>
      <span>{category}</span>
      <span>Rating:{rating}</span>

      <p>Number of Reviews:{reviewCount}</p>
    </div>
  );
}

export default Card;
