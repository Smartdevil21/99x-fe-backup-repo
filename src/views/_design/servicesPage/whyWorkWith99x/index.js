import React from "react";
import whyImage from "../../../../assets/_design/servicePage/why-clients.png";
import whyTick from "../../../../assets/_design/servicePage/service-tick.png";
import "./style.scss";

const whyServicesData = [
  "End-to-End Product Design from concept to launch",
  "Specialists with Sector Expertise ",
  "Leverage World -Class Talent",
  "Assured Quality work",
  "Unlimited Requests & Revisions",
];

const WhyWorkWith99x = () => {
  return (
    <div className="why-work-with-99x">
      <div className="left">
        <h2>Why work with 99x?</h2>

        <div className="why-services-container">
          {whyServicesData.map((item, idx) => (
            <div key={idx} className="why-service">
              <img src={whyTick} alt="" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <img src={whyImage} alt="" />
      </div>
    </div>
  );
};

export default WhyWorkWith99x;
