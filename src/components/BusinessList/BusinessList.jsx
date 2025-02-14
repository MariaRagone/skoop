import React from "react";
import Business from "../BusinessCard/BusinessCard";
import "./BusinessList.css";

function BusinessList({ listings }) {
  return (
    <div className="business-list">
      {listings.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
    </div>
  );
}
export default BusinessList;
