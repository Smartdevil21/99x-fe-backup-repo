import React from "react";
import "./style.scss";

const businessProfileData = [
  {
    title: "120+",
    text: "Clients",
  },
  {
    title: "170+",
    text: "Projects",
  },
  {
    title: "15+",
    text: "Countries",
  },
];

const BusinessProfile = ({ hideHead }) => {
  return (
    <div className="business-profile">
      {!hideHead && <h2>99xStudio by the Numbers.</h2>}
      <div className="data-container">
        {businessProfileData.map((item, idx) => (
          <div key={idx} className="bp-data">
            <h3>{item.title}</h3>
            <h4>{item.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessProfile;
