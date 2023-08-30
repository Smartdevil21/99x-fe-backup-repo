import React from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import "./style.scss";
import ReactPlayer from "react-player";
import Ripples from "react-ripples";

const headerBtnLinks = [
  {
    text: "Custom Application",
    link: "/",
  },
  {
    text: "Mobile Application",
    link: "/",
  },
  {
    text: "Webapps & Websites",
    link: "/",
  },
];

const ServicesHeader = () => {
  return (
    <div className="services-header">
      <h1 className="heading">
        Design{" "}
        <span>
          {" "}
          brilliant <br /> experiences
        </span>{" "}
        for your users
      </h1>
      <p>
        A Premier Product Design Studio, with specialization and expertise in{" "}
      </p>
      <div className="header-buttons">
        {/* {headerBtnLinks.map((item, idx) => (
          <Link to={item.link} className="custom-button">
            <BsPlus size={"2vw"} /> {item.text}
          </Link>
        ))} */}
        <Ripples color="#fff" during={1200}>
          <Link exact={true} to={"/"} className="custom-button color3">
            <i class="fa fa-plus" aria-hidden="true"></i> Custom Application
          </Link>
        </Ripples>

        <Ripples color="#fff" during={1200}>
          <Link exact={true} to={"/"} className="custom-button color4">
            <i class="fa fa-plus" aria-hidden="true"></i> Mobile Application
          </Link>
        </Ripples>

        <Ripples color="#fff" during={1200}>
          <Link exact={true} to={"/"} className="custom-button color1">
            <i class="fa fa-plus" aria-hidden="true"></i> Webapps & Websites
          </Link>
        </Ripples>
      </div>

      <div className="video-showcase">
        <div className="video-container">
          {/* <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ktbdzp9fwTE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <ReactPlayer
            width={"100%"}
            height="auto"
            url="https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4"
            muted
            playing
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
