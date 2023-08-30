import React from "react";
import { BsArrowRight } from "react-icons/bs";
// import PSProject from "./psProject";
import "./style.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { Link } from "react-router-dom";

import HuppoImg from "../../../../assets/_design/homepage/Huupe.png";
import WGTImg from "../../../../assets/_design/homepage/WGT.png";
import StartupImg from "../../../../assets/_design/homepage/99xstartup.png";
import PeperstreetImg from "../../../../assets/_design/homepage/Peperstreet.png";
import MoneyfactoryImg from "../../../../assets/_design/homepage/Moneyfactory.png";
import Ripples from "react-ripples";
const ProjectShowcase = () => {
  return (
    <div className="project-showcase">
      <div className="ps-1">
        <h2>
          Get inspired by some of our <span>UI/UX</span> works
        </h2>
        <p>
          Whether you are building a new digital product or improving an
          existing one, we build and design to make a measurable impact.
        </p>
      </div>
      <div className="ps-2">
        <a
          href="https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image">
                <ParallaxBanner
                  layers={[
                    {
                      image:
                        // "https://uiux.99xstartup.com/assest/huupe-img.webp",
                        PeperstreetImg,
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner"
                />
              </div>
            </div>
            <div className="ps-text">
              <h3>Peperstreet</h3>
              <div className="d-flex">
                <button className="custom-btn">Branding</button>
                <button className="custom-btn"> Mobile App UI/UX</button>
              </div>
              <p>
                Video Dating App, is a new dating app that helps people avoid
                boring monotous swipes with Video First Profiles.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="ps-3">
        <a
          href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf"
          target={"_blank"}
          rel="noreferrer"
        >
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image">
                <ParallaxBanner
                  layers={[
                    {
                      image: MoneyfactoryImg,
                      //   "https://uiux.99xstartup.com/assest/kickpick.webp",

                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner"
                />
              </div>
            </div>
            <div className="ps-text">
              <h3>Moneyfactory</h3>
              <div className="d-flex">
                <button className="custom-btn">Branding</button>
                <button className="custom-btn">
                  Custom Application Design
                </button>
              </div>
              <p>
                Fintech Application Design that uses the power of AI to provide
                intelligent investment solutions to the users.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="ps-4">
        <a
          href="https://uiux.99xstartup.com/assest/Huppe.pdf"
          target={"_blank"}
        >
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image">
                <ParallaxBanner
                  layers={[
                    {
                      image: HuppoImg,
                      //   "https://uiux.99xstartup.com/assest/fuse-img.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner"
                />
              </div>
            </div>
            <div className="ps-text">
              <h3>Huupe</h3>
              <div className="d-flex">
                <button className="custom-btn">
                  Website Design and Development
                </button>
              </div>
              <p>
                Huupe - The world's first smart basketball hoop. Website is
                designed with a more focus on brand, targetted towards Gen Z
                with an objective to have a smooth user experience in getting
                their hands on the smartest hoop.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="ps-5">
        <a href="https://uiux.99xstartup.com/assest/WGT.pdf" target={"_blank"}>
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image">
                <ParallaxBanner
                  layers={[
                    {
                      image: WGTImg,
                      //   "https://uiux.99xstartup.com/assest/onecare.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner"
                />
              </div>
            </div>
            <div className="ps-text">
              <h3>We've got issues</h3>
              <div className="d-flex">
                <button className="custom-btn">Branding</button>
                <button className="custom-btn">Website Design</button>
              </div>
              <p>
                Collaborated with WGT to enlighten poeple about issues that
                matter with stunning Branding, Design & Intuitive UX.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="ps-6">
        <a
          href="https://uiux.99xstartup.com/assest/99xStartup.pdf"
          target={"_blank"}
        >
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image">
                <ParallaxBanner
                  layers={[
                    {
                      image: StartupImg,
                      //    "https://uiux.99xstartup.com/assest/otomain.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner"
                />
              </div>
            </div>
            <div className="ps-text">
              <h3>99xstartup</h3>
              <div className="d-flex">
                <button className="custom-btn">Custom Application</button>
              </div>
              <p>
                End to end Creator marketplace design that includes dashboards
                for orders, project management, payment gateway, admin & vendor
                dashboards, Customer login, interfaces & more.
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* <ParallaxBanner
        layers={[
          {
            children: <div className="ps-7">
              <h2>There's more for your eyes. Check out all our works</h2>
              <button className="btn">
                Our Projects <BsArrowRight />
              </button>
            </div>,
            speed: 10,
            // scale: [ .8],
            opacity: [0.9, 1],
          },
        ]}
      /> */}

      <div className="ps-7">
        <h2>There's more for your eyes. Check out all our works</h2>
        <Link to="/our-work">
          <Ripples color="#f1f1f1" during={1200}>
            <button className="btn">
              Our Projects <BsArrowRight />
            </button>
          </Ripples>
        </Link>
      </div>
    </div>
  );
};

export default ProjectShowcase;
