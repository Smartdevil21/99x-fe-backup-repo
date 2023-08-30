import React from "react";

const FlexibleWaysCard = ({ img, title, children }) => {
  return (
    <div className="fw-card">
      <div className="fw-card-header">
        <img src={img} alt="" />
      </div>
      <div className="fw-card-body">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default FlexibleWaysCard;
