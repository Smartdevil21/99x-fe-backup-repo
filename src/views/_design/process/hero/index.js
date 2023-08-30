import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import heroImage from "../../../../assets/_design/TEAM.png";

const heroServicesFeature = [
  {
    question: "User-Centered",
    answer:
      "Everything we do comes from understanding of users's requirements, objectives & feedback.",
  },
  {
    question: "Building Empathy",
    answer:
      "Building empathy towards product users and the business through qualitative and quantitative user research.",
  },
  {
    question: "Data Driven",
    answer:
      "We validate the design with feedback from users, not only clients, early & often.",
  },
  {
    question: "Collaborative",
    answer:
      "We work in an agile mindet, alongside project managers, developers to esure our designs meet business goals & work with existing systems.",
  },
];

const openAccord = (_event) => {
  if (_event) {
    let _body = _event.currentTarget.nextElementSibling;
    if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
      _body.style.maxHeight = "0px";
      _event.currentTarget.parentNode.parentNode.classList.remove("active");
    } else {
      let acc = document.getElementsByClassName("custom-accord-2-body");
      for (let i = 0; i < acc.length; i++) {
        acc[i].style.maxHeight = "0px";
        if (acc[i].parentNode.parentNode.classList.contains("active")) {
          acc[i].parentNode.parentNode.classList.toggle("active");
        }
      }
      _event.currentTarget.parentNode.parentNode.classList.add("active");
      _body.style.maxHeight = _body.scrollHeight + "px";
    }
  }
};

const ProcessHero = () => {
  const heroRight = useRef(null);

  useEffect(() => {
    const el = heroRight.current.querySelector(".process-accord-2-1");
    el.click();
  }, []);

  return (
    <div className="services-hero">
      <div className="hero-header">
        <div className="top">
          <h2>Our Process</h2>
        </div>

        <div className="bottom">
          <div className="left">
            <h1>A holistic, yet simple approach for Design</h1>
          </div>
          <div className="right">
            <p>
              Quality Design could feel expensive and time-consuming. But, It
              doesn't have to be. Our tried and tested process, ensures you get
              what you want, how you want - leaving you with comments like -
              ‘better than what we expected'
            </p>
          </div>
        </div>
      </div>
      <div className="hero-body">
        <div className="services-hero-img-container">
          <img src={heroImage} alt="services" />
        </div>
        <div ref={heroRight} className="services-hero-right">
          {heroServicesFeature.map((f, i) => {
            return (
              <div key={i} className="custom-accord-2 lora">
                <div className="custom-accord-2-left-bar"></div>
                <div className="custom-accord-2-wrapper">
                  <div
                    className={`custom-accord-2-head process-accord-2-${i + 1}`}
                    onClick={(e) => openAccord(e)}
                  >
                    <span className="cursor-pointer">{f.question}</span>
                    {/* <i
              className="fa fa-chevron-down font-20"
              aria-hidden="true"
            ></i> */}
                  </div>
                  <div className="custom-accord-2-body">
                    <p className="">{f.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessHero;
