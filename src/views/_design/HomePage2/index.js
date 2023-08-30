import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Typed from "react-typed";
import ReactPlayer from "react-player";
import clientsImg from "../../../assets/_design/homepage/clients.png";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import video from "../../../assets/_design/homepage/uiux.mp4";

import Logo from "../../../assets/_design/logo-studio1.png";

import "./style.scss";

import BoostYourStartup from "../../../components/_sections/BoostYourStartup";

import SignupBox from "../../../components/SignupBox";

import CustomerTestinomial from "../../../components/_sections/CustomerTestinomial";

import FlexibleWays from "../servicesPage/flexibleWays";
import ProjectShowcase from "../servicesPage/projectShowcase";
import GotCovered from "../gotCovered";
import W3Modal from "../../../components/w3modal/W3Modal";
import Modal from "views/_design/ourWork/Modal/Modal";

import Ripples from "react-ripples";

// import { Parallax } from 'react-scroll-parallax';

// const AlternateImageHighlight = (props) => {
//   return (
//     <>
//       {props.items.map((item, index) => (
//         <div className="row alternate-image-highlight">
//           {index % 2 == 0 && (
//             <>
//               <div className={`col-12 col-sm-12 col-md-6 pv-30 content`}>
//                 {item.content}
//               </div>
//               <div className={`col-12 col-sm-12 col-md-6 pv-15`}>
//                 <img src={item.banner} className="fluid" />
//               </div>
//             </>
//           )}
//           {index % 2 != 0 && (
//             <>
//               <div className={`col-12 col-sm-12 col-md-6 pv-15`}>
//                 <img src={item.banner} className="fluid" />
//               </div>
//               <div className={`col-12 col-sm-12 col-md-6 pv-30 content`}>
//                 {item.content}
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

class MainLayout extends React.Component {
  constructor() {
    super();

    this.state = {
      toLogin: false,
      email: "",
      thankYou: false,
      modalOpen: false,
    };
  }

  openAccord = (_event) => {
    if (_event) {
      let _body = _event.currentTarget.nextElementSibling;
      if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
        _body.style.maxHeight = "0px";
        _event.currentTarget.parentNode.classList.remove("active");
      } else {
        let acc = document.getElementsByClassName("custom-accord-body");
        for (let i = 0; i < acc.length; i++) {
          acc[i].style.maxHeight = "0px";
          if (acc[i].parentNode.classList.contains("active")) {
            acc[i].parentNode.classList.toggle("active");
          }
        }
        _event.currentTarget.parentNode.classList.add("active");
        _body.style.maxHeight = _body.scrollHeight + "px";
      }
    }
  };

  claimFreeTrial = () => {
    const Email = this.state.email;
    this.setState({ toLogin: true });
  };
  setUserEmail = (email) => {
    this.setState({ email: email });
  };
  setThankYou = (data) => {
    this.setState({ thankYou: data });
  };
  setModalOpen = (data) => {
    this.setState({ modalOpen: data });
  };

  render() {
    if (this.state.toLogin) {
      return (
        <Redirect to={`/ab/account-security/login?email=${this.state.email}`} />
      );
    }

    return (
      <>
        <div className="for-desktop">
          <Parallax speed={-20}>
            <div className="fluid pink-bg p-5">
              <section className="hero-content">
                <div className="">
                  <h1 className="heading">
                    Build{" "}
                    <span className="typed">
                      <Typed
                        strings={["Products", "Websites", "Mobile Apps"]}
                        typeSpeed={80}
                        loop
                      />
                    </span>
                    that <br />
                    users fall in love with
                  </h1>
                </div>
                <Ripples color="#fff" during={1200}>
                  <div className="bottom desktop-only">
                    <button
                      className="submit"
                      onClick={() => {
                        setTimeout(() => {
                          this.setModalOpen(true);
                        }, 300);
                        // this.setModalOpen(true);
                      }}
                    >
                      Let's Talk
                      <i className="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </Ripples>
              </section>
            </div>
          </Parallax>
        </div>
        <div className="for-mobile fluid pink-bg p-5">
          <section className="hero-content">
            <div className="">
              <h1 className="heading">
                Build{" "}
                <span className="typed">
                  <Typed
                    strings={["Products", "Websites", "Mobile Apps"]}
                    typeSpeed={80}
                    loop
                  />
                </span>
                that <br />
                users fall in love with
              </h1>
            </div>
            <div className="bottom desktop-only">
              <button
                className="submit"
                onClick={() => {
                  this.setModalOpen(true);
                }}
              >
                Let's Talk
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </section>
        </div>
        <Parallax speed={10} className="for-desktop">
          <section
            className="bg-white "
            // style={{
            //   marginBottom: "-6px",
            // }}
          >
            {/* <ParallaxBanner
            layers={[
              {
                video: "https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4",
                speed: -25,
                expanded: false,
                // scale: [1, .8],
                // easing: [0.2, -0.6, 1, -0.6],
              },
            ]}
            className="parallaxBanner"
          /> */}
            {/* <Parallax
            speed={30}
            layers={[
              {
                video: "https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4",
                speed: 10,
                expanded: false,

                scale: [1, 0.8],
                easing: [0.2, -0.6, 1, -0.6],
              },

            ]}
            className="parallaxBannervideo"
            className="aspect-[2/1]"
          > */}
            <ReactPlayer
              width={"100%"}
              height="auto"
              url="https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4"
              muted
              playing
              loop
              className="react-player"
            />

            {/* </Parallax> */}
          </section>
        </Parallax>

        <section
          className="bg-white for-mobile"
          // style={{
          //   marginBottom: "-6px",
          // }}
        >
          {/* <ParallaxBanner
            layers={[
              {
                video: 'https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4',
                speed: -25,
                expanded: false,
                // scale: [1, .8],
                // easing: [0.2, -0.6, 1, -0.6],
              },
            ]}
            className="parallaxBanner"
          /> */}
          {/* <Parallax
            speed={30}
            layers={[
              {
                video: 'https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4',
                speed: 10,
                expanded: false,

                scale: [1, 0.8],
                easing: [0.2, -0.6, 1, -0.6],
              },

            ]}
            className="parallaxBannervideo"
            className="aspect-[2/1]"
          > */}
          <ReactPlayer
            width={"100%"}
            height="auto"
            url="https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4"
            muted
            playing
            loop
            className="react-player"
          />

          {/* </Parallax> */}
        </section>

        <>
          <GotCovered />
        </>
        <>
          <FlexibleWays />
        </>
        <>
          <ProjectShowcase />
        </>

        <>
          <section className="bg-white pv-none">
            <BoostYourStartup
              site="design"
              title={
                <h2 className="heading2">
                  Why work with
                  <br />
                  99x <span>Studio</span>?
                </h2>
              }
              subtitle={
                <>
                  Spend more time growing your business. We'll help you express
                  your ideas to your audience with stunning designs. Faster,
                  better, your way.
                </>
              }
            />
          </section>
        </>

        <div className="homepage-clients">
          <img src={clientsImg} alt="" />
        </div>

        {/* <CustomerTestinomial themeColor="#fff" theme="dark" site="design" /> */}
        <div>
          {this.state.modalOpen && (
            <Modal setOpenModal={this.setModalOpen}></Modal>
          )}
        </div>

        <W3Modal
          className="featured-work-modal"
          show={this.state.thankYou}
          onClick={() => {}}
          onModalChange={() => {
            this.setThankYou(false);
          }}
          showFooter="false"
          backdrop="static"
        >
          <h1>Thank You</h1>
        </W3Modal>
      </>
    );
  }
}

export default MainLayout;
