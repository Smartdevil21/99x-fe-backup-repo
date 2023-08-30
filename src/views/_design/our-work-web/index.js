import React from "react";
import { BsArrowDown } from "react-icons/bs";

import "./style.scss";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Ripples from "react-ripples";
import ReactPlayer from "react-player";
import portfolioImg16 from "../../../assets/_design/ourWork/Webp/chipsoft-cover.jpg";
import portfolioImg2 from "../../../assets/_design/ourWork/Webp/Moneyfactory.png";
import portfolioImg5 from "../../../assets/_design/ourWork/Webp/99xStartup.png";

export default function OurWork(props) {
  const portfolio = [
    {
      category: "Webapp",
      title: "Chipsoft",
      text: "We partnered with Chipsoft to create an internal platform for businesses and enterprises to connect and bring people together to manage resources, skill development, virtual events and much more.",
      img: portfolioImg16,
      pdf: "https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf",
      btn: ["SAAS", "B2B"],
    },
    {
      category: "E-commerce",
      title: "Earthly Tales",
      text: "Reimagining the complete experience for India's favourite organic produce - with an holistic user experience lasting a lifetime and strategic branding.",
      video: "https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4",
      pdf: "https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4",
      btn: ["Web Design", "Branding", "UX"],
    },
    {
      category: "Webapp",
      title: "Moneyfactory",
      text: "We worked with Moneyfactory to design and let people invest intelligently powered by AI, for good and long-term wealth building.",
      img: portfolioImg2,
      pdf: "https://uiux.99xstartup.com/assest/Moneyfactory.pdf",
      btn: ["Fintech", "AI"],
    },

    {
      category: "Webapp",
      title: "99xStartup",
      text: "End-to-end marketplace for creators and businesses to engage, collaborate, and build meaningful solutions.",
      img: portfolioImg5,
      pdf: "https://uiux.99xstartup.com/assest/99xStartup.pdf",
      btn: ["B2B"],
    },
  ];
  return (
    <div className="our-work-container">
      <div className="our-work-header">
        <div
          className="heading"
          style={
            props.label && {
              marginTop: "18vw",
              color: "black",
              textDecoration: "none",
              border: "none",
              fontWeight: 700,
            }
          }
        >
          {!props.label ? "All Projects" : "Select Works"}{" "}
          {!props.label && <BsArrowDown />}
        </div>
      </div>

      <div className="all-works">
        <div className="work">
          <a
            href="https://99xassets.s3.ap-south-1.amazonaws.com/Chipsoft+Case+Study.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <ParallaxBanner
              layers={[
                {
                  image:
                    "https://99xassets.s3.ap-south-1.amazonaws.com/hero_1.png",
                  speed: -32,
                  expanded: false,
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://99xassets.s3.ap-south-1.amazonaws.com/Chipsoft+Case+Study.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[0].category}</h3>
                <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">SAAS</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">B2B</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[0].title}</h2>
                <p>{portfolio[0].text}</p>
              </div>
            </div>
          </a>
        </div>
        {/* <div className="work">
          <a
            href="https://99xassets.s3.ap-south-1.amazonaws.com/Chipsoft+Case+Study.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
           
          </a>
        </div> */}
        <div className="work">
          <a
            href={"https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4"}
            target={"_blank"}
          >
            {/* <ParallaxBanner
              layers={[
                {
                  image: portfolioImg14,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            /> */}
            <Parallax speed={10} style={{ aspectRatio: "2.4/1" }}>
              <ReactPlayer
                width={"100%"}
                height="auto"
                url={"https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4"}
                muted
                playing
                loop
                className="react-player"
                style={{ aspectRatio: "2.4/1" }}
              />
            </Parallax>
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[1].category}</h3>
                <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Web Design</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Branding</button>
                  </Ripples>
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">UX</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[1].title}</h2>
                <p>{portfolio[1].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <ParallaxBanner
              layers={[
                {
                  image:
                    "https://99xassets.s3.ap-south-1.amazonaws.com/hero_2.png",
                  speed: -32,
                  expanded: false,
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>
          <a
            href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[2].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Fintech</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button
                      className="custom-button"
                      style={{
                        borderRadius: "100%",
                        padding: "0.4vw 0.8vw",
                      }}
                    >
                      AI
                    </button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[2].title}</h2>
                <p> {portfolio[2].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/99xStartup.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <ParallaxBanner
              layers={[
                {
                  image:
                    "https://99xassets.s3.ap-south-1.amazonaws.com/hero_3.png",
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/99xStartup.pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[2].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">B2B</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[2].title}</h2>
                <p>{portfolio[2].text}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="all-works-for-mobile">
        {portfolio.map((item) => (
          <div className="work">
            <a href={item.pdf} target={"_blank"}>
              {!item.video ? (
                <img src={item.img} alt="" />
              ) : (
                <ReactPlayer
                  width={"100%"}
                  height="auto"
                  url={item.video}
                  muted
                  playing
                  loop
                  className="react-player"
                />
              )}
            </a>
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{item.category}</h3>
                <div>
                  {item.btn.map((btns, index) => (
                    <Ripples color="#fff" during={1200}>
                      <button className="custom-button" key={index}>
                        {btns}
                      </button>
                    </Ripples>
                  ))}
                </div>
              </div>
              <div className="right">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
