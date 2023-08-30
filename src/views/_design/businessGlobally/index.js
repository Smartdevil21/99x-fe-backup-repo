import React from "react";
import bangImg from "../../../assets/_design/aboutUs/Bangalore.png";
import poImg from "../../../assets/_design/aboutUs/Powai.png";
import "./style.scss";

const BusinessGlobally = () => {
  return (
    <div className="office-container">
      <h2>We're Open for business globally</h2>
      <div className="office-body">
        <div className="office-img-container">
          <img src={bangImg} />
        </div>
        <div className="office-img-container">
          <img src={poImg} />
        </div>
      </div>
    </div>
  );
};

export default BusinessGlobally;
