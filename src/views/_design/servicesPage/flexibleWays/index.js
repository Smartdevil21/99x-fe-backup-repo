import React from "react";
import { Link } from "react-router-dom";
import rocketImg from "../../../../assets/_design/servicePage/rocket.png";
import productDesignImg from "../../../../assets/_design/servicePage/product-design.png";
import remoteDesignImg from "../../../../assets/_design/servicePage/remote-design.png";
import productDesignArrow from "../../../../assets/_design/servicePage/product-design-arrow.png";
import FlexibleWaysCard from "./flexibleWaysCard";
import "./style.scss";

const productDesignList = {
  one: [
    "UX Audit",
    "Competitive and Market Analysis",
    "User Research",
    "UX design ",
  ],
  two: ["Rapid prototyping", "Styleguides and Design System", "UI Design"],
};

const FlexibleWays = () => {
  return (
    <div className="flexible-ways">
      <div className="header">
        <h2>Flexible ways to work with us.</h2>
        <p className="header-p">
          Sometimes this means working with visionary founders to bring their
          idea into a finished digital product and nurture it to life or
          Sometimes it means redesigning an existing app and helping its
          creators make it much better.
        </p>
      </div>
      <div className="body">
        <div className="left">
          <img src={rocketImg} alt="" />
        </div>
        <div className="right">
          <FlexibleWaysCard
            title="Product Design & Strategy"
            img={productDesignImg}
          >
            <div className="card-inner card-1-inner">
              <h3>
                One time Projects - From 2 weeks sprints to an ongoing
                engagement.
              </h3>
              <div className="product-design-list">
                <div className="part-1">
                  {productDesignList.one.map((item, idx) => (
                    <div className="list-item" key={idx}>
                      <img src={productDesignArrow} alt="" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="part-2">
                  {productDesignList.two.map((item, idx) => (
                    <div className="list-item" key={idx}>
                      <img src={productDesignArrow} alt="" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FlexibleWaysCard>
          <FlexibleWaysCard title="Remote Design Team" img={remoteDesignImg}>
            <div className="card-inner card-2-inner">
              <h3>
                Need a dedicated, professional design team to work exclusively
                on your product?
              </h3>
              <p>
                We can put together a flexible and scalable group of
                professionals to work exclusively with you.
              </p>

              <div className="fw-card-footer">
                
                Your extended design team from 2 months to ∞
                
              </div>
            </div>
          </FlexibleWaysCard>
        </div>
      </div>
    </div>
  );
};

export default FlexibleWays;
