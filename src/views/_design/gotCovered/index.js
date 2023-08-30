import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.scss";
import mobileImg from "../../../assets/_design/homepage/iPhone.png";
import webImg from "../../../assets/_design/homepage/Group 48095523.png";
import customImg from "../../../assets/_design/homepage/Group 48095518 (1).png";
import Slider from "react-slick";

const GotCovered = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10vw",
    slidesToShow: 1.9,
    speed: 500,
    autoplay: true,
  };
  return (
    <div className="got-covered">
      <header className="got-covered-header">
        <h2>
          From fast-paced proof of concepts to large-scale design thinking and
          product design solutions, we've got you covered!{" "}
        </h2>
        <div className="links">
          <Link className="link" to="/about">
            About Us
            <BsArrowRight />
          </Link>
          <Link className="link" to="/our-work">
            Our Projects
            <BsArrowRight />
          </Link>
        </div>
      </header>

      <div className="for-mobil" style={{ width: "100%" }}>
        <Slider {...settings}>
          <div>
            {/* className="img-container" */}
            <img
              style={{ width: "53vw", paddingLeft: "20vw" }}
              src={mobileImg}
              alt=""
            />
            <h6 style={{ width: "100vw", paddingLeft: "28vw" }}>Mobile Apps</h6>
          </div>

          <div>
            <img
              style={{ width: "60vw", paddingLeft: "2vw", paddingTop: "2.9vw" }}
              src={webImg}
              alt=""
            />
            <h6 style={{ width: "100vw", marginLeft: "22vw" }}>Websites</h6>
          </div>
          <div>
            <img
              style={{ width: "66vw", paddingLeft: "14vw", paddingTop: "8vw" }}
              src={customImg}
              alt=""
            />
            <h6 style={{ width: "100vw", marginLeft: "22vw" }}>
              Custom Applications
            </h6>
          </div>
        </Slider>
      </div>
      <div className="body">
        <div className="img-container">
          <img src={mobileImg} alt="" />
          <h4>Mobile Apps</h4>
        </div>
        <div className="img-container">
          <img src={webImg} alt="" />
          <h4>Websites</h4>
        </div>
        <div className="img-container">
          <img src={customImg} alt="" />
          <h4>Custom Applications</h4>
        </div>
      </div>
    </div>
  );
};

export default GotCovered;
