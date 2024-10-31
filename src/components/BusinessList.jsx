import React from "react";
import Business from "./Business";

function BusinessList(props) {
  return (
    <div className="business-list">
      {/* {props.businesses.map((business, index) => (
        <Business
          key={index}
          src={business.src}
          name={business.name}
          address={business.address}
          city={business.city}
          state={business.state}
          zipcode={business.zipcode}
          category={business.category}
          rating={business.rating}
          reviewCount={business.reviewCount}
        />
      ))} */}
      {props.businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
}
export default BusinessList;
