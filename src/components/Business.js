import React from "react";

const businessDetails = [
  {
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
    name: "The Big Cheese",
    address: "12345 Cheese Way",
    city: "Cheesy",
    state: "WI",
    zipcode: "48556",
    category: "Restaurant",
    rating: 2,
    reviewCount: 20,
  },
];

function Business ({src, name, address, city, state, zipcode, category, rating, reviewCount}) {
  return (
<div className="business">
      <h2>{name}</h2>
      <img src={src} alt={name} />
      <p>{address}</p>
      <p>{city}, {state} {zipcode}</p>
      <span>{category}</span>
      <span>Rating:{rating}</span>
      
      <p>Number of Reviews:{reviewCount}</p>
    </div>
  );
};

export default Business;
