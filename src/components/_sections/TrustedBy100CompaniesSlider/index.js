import W3Carousel from "components/W3Carousel";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import ENV from "../../../env.config";
import "./style.scss";

export default function TrustedBy100Companies(props) {
  let [activeCat, setActiveCat] = useState(0);

  let client_list =
    "https://ik.imagekit.io/99x/startup/pages/all-access/Group_1252_AYt1QUY5H.png";

  if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.DESIGN.CODE)
    client_list =
      "https://ik.imagekit.io/99x/design/Group_2001_KrUgV5Mpe6_.png";
  var settings = {
    slidesToShow: 7.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mycontainer" style={{ textAlign: "center" }}>
      {props.title ?? (
        <h3 className="heading2 py-3vw">
          Trusted by <span>100+</span> companies
        </h3>
      )}
      {props.rows.map((items, i) => (
        <Slider {...settings} key={i} rtl={i % 2}>
          {items.map((item, i) => (
            <div className="item" key={i}>
              <img
                style={{ maxWidth: "100%", margin: "auto" }}
                src={item}
              ></img>
            </div>
          ))}
        </Slider>
      ))}
    </div>
  );
}
