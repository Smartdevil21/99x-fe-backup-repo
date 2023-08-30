import React from "react";
import "./style.scss";
import mobileDesignImage from "../../../../assets/_design/servicePage/Mobile Design.png";
import webDesignImage from "../../../../assets/_design/servicePage/Web Design.png";
import customAppImage from "../../../../assets/_design/servicePage/Custom Applications.png";
import serviceImage from "../../../../assets/_design/servicePage/Frame 3934.png";

const WorkShowcase = () => {
  return (
    <div className="work-showcase">
      <h2>
        From fast-paced proof of concepts to large-scale design thinking and
        product design solutions, we've got you covered!
      </h2>
      {/* <div className="showcase-images">
        <img src={mobileDesignImage} alt="" />
        <img src={webDesignImage} alt="" />
        <img src={customAppImage} alt="" />
      </div> */}
      <img src={serviceImage} alt="" />
    </div>
  );
};

export default WorkShowcase;
