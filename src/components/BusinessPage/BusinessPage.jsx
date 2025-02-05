import React from "react";
import "./BusinessPage.css";

const BusinessPage = ({ business }) => {
  return (
    <div className="business-page">
      <h2>{business.name}</h2>
    </div>
  );
};

export default BusinessPage;
