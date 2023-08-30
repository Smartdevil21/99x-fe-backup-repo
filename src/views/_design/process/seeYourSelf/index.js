import React from "react";
import Moneyfactory from "../../../../assets/_design/ourWork/Webp/Moneyfactory.png";
import Huppe from "../../../../assets/_design/ourWork/Webp/Huupe.png";
import Peperstreet from "../../../../assets/_design/ourWork/Webp/Peperstreet.png";
import WGT from "../../../../assets/_design/ourWork/Webp/WGT.png";
import Fuse from "../../../../assets/_design/ourWork/Webp/Fuse.png";
import topViewTableSquare from "../../../../assets/_design/top-view-of-a-table-with-man-square.jpeg";
import userImage from "../../../../assets/_design/user.png";
import sendGridImage from "../../../../assets/_design/sendgrid.png";

import "./style.scss";

const SeeYourSelf = () => {
  return (
    <div className="see-yourself-container">
      <div className="see-yourself-content-1">
        <h2>Inspired by some of our UI/UX works</h2>
        <p>
          Whether you are building a new digital product or improving an
          existing one, we build and design to make a measurable impact.
        </p>
      </div>
      <div className="see-yourself-content-2">
        <a href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf" target={"_blank"}><img src={Moneyfactory} alt="" /></a>
        {/* <p>
          “With 99x Content, we have seen 30% revenue growth quarter over
          quarter and now we're rolling it out across the entire customer
          lifecycle.”
        </p>

        <div className="user-container">
          <img src={userImage} alt="" />
          <div className="signature">
            <h3 className="name">
              Kevin Pietersen,
              <span className="position"> VP of Marketing</span>
            </h3>
            <div className="organization">
              <img src={sendGridImage} alt="" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="see-yourself-content-3">
       <a href="https://uiux.99xstartup.com/assest/Huppe.pdf" target={"_blank"}> <img src={Huppe} alt="" /></a>
      </div>
      {/* <div className="see-yourself-content-4">
        <p>
          “With 99x Content, we have seen 30% revenue growth quarter over
          quarter and now we're rolling it out across the entire customer
          lifecycle.”
        </p>

        <div className="signature">
          <h3 className="name">
            Kevin Pietersen,
            <span className="position"> VP of Marketing</span>
          </h3>
          <div className="organization">
            <img src={sendGridImage} alt="" />
          </div>
        </div>
      </div> */}
      <div className="see-yourself-content-5">
        <a href="https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf" target={"_blank"}><img src={Peperstreet} alt="" /></a>
        {/* <div className="left">
          <button>Case Study</button>
          <h3>
            Infosys rolls the dice with Social Media, enagagement soars up by
            54%
          </h3>
          <p>
            “With 99x Content, we have seen 30% revenue growth quarter over
            quarter and now we're rolling it out across the entire customer
            lifecycle.”
          </p>
        </div>
        <div className="right">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/MCX4YqcW7kU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
      </div>
      <div className="see-yourself-content-6">
        <a href="https://uiux.99xstartup.com/assest/WGT.pdf" target={"_blank"}><img src={WGT} alt="" /></a>
        {/* <span>4.8/5</span>
        <p>
          That's our average customer rating from 23,416 reviews. Happy creators
          = happy customers.
        </p> */}
      </div>
      <div className="see-yourself-content-7">
        <a href="https://uiux.99xstartup.com/assest/fuse.pdf" target={"_blank"}><img src={Fuse} alt="" /></a>
        {/* <div className="bg-overlay">
          <span>25K+</span>
          <p>Articles published</p>
        </div> */}
      </div>
    </div>
  );
};

export default SeeYourSelf;
