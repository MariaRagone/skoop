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

function Business() {
  return (
    <>
      <img
        src="https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
        alt="The Big Cheese"
      />
      <h1>The Big Cheese</h1>
      <p>Cheesy</p>
      <p>12345 Cheese Way Cheesy, WI 48512 </p>
      <p>Restaurant</p>
      <p>Rating: 3</p>
      <p>Number of Reviews: 30</p>
    </>
  );
}

export default Business;
