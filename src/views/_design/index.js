import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import Typed from "react-typed";
import ReactPlayer from "react-player";
import clientsImg from "../../assets/_design/homepage/clients.png";
import video from "../../assets/_design/homepage/uiux.mp4";
import { ParallaxBanner } from "react-scroll-parallax";

import "./style.scss";

import BoostYourStartup from "../../components/_sections/BoostYourStartup";

import SignupBox from "../../components/SignupBox";

import CustomerTestinomial from "../../components/_sections/CustomerTestinomial";

import FlexibleWays from "./servicesPage/flexibleWays";
import ProjectShowcase from "./servicesPage/projectShowcase";
import GotCovered from "./gotCovered";
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

  render() {
    if (this.state.toLogin) {
      return (
        <Redirect to={`/ab/account-security/login?email=${this.state.email}`} />
      );
    }

    return (
      <>
        <div className="fluid pale-cream-bg px-3">
          <section className="">
            <div className="row">
              <div className="col-12 col-md-6 hero-content pb-3vw">
                <h1 className="heading">
                  Build{" "}
                  <span className="typed">
                    <Typed
                      strings={["Products", "Websites", "Mobile Apps"]}
                      typeSpeed={80}
                      loop
                    />
                  </span>
                  <br /> that users fall in <br />
                  love with
                </h1>
                <div className="mobile-only">
                  <img
                    className="w-100"
                    src="https://ik.imagekit.io/heliverse/99xstudio-hero-image_Sfd10X1Ey.png"
                    alt="hero"
                  />
                </div>

                <div>
                  <SignupBox />
                </div>
                <div
                  className="fluid d-flex flex-row flex-wrap"
                  style={{ marginTop: "2vw" }}
                >
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="custom-button color1"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i> UX Research
                  </NavLink>
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="custom-button color2"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i> UX Design
                  </NavLink>
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="custom-button color3"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i> UI Design
                  </NavLink>
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="custom-button color4"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i> Interaction
                    Design
                  </NavLink>
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="custom-button color5"
                  >
                    <i class="fa fa-plus" aria-hidden="true"></i> Branding
                  </NavLink>
                  {/* <NavLink exact={true} to={'/'} className="custom-button color6">
                                <i class="fa fa-plus" aria-hidden="true"></i> Articles & Blogs
                            </NavLink> */}
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-6 desktop-only pt-5">
                <img
                  src="https://ik.imagekit.io/heliverse/99xstudio-hero-image_Sfd10X1Ey.png"
                  className="home-banner-img w-100"
                  alt="hero"
                />
              </div>
            </div>
          </section>
        </div>

        <section
          className="bg-white "
          // style={{
          //   marginBottom: "-6px",
          // }}
        >
          {" "}
          <ParallaxBanner
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
          />
          {/* <ReactPlayer
            width={"100%"}
            height="auto"
            url="https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4"
            muted
            playing
            loop
          /> */}
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

        <CustomerTestinomial themeColor="#fff" theme="dark" site="design" />
      </>
    );
  }
}

export default MainLayout;
