import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ParallaxBanner } from 'react-scroll-parallax'
import Ripples from "react-ripples";
import PeperstreetImg from "../../../../assets/_design/homepage/Peperstreet.png";
import { BsArrowRight } from 'react-icons/bs';
// import img1 from '../../../../assets/_design/logoDesign/Component-57.png'
// import img1_mobile from '../../../../assets/_design/logoDesign/small/Property-1=Component-51.png'

// import img2 from '../../../../assets/_design/logoDesign/Component-49.png'
// import img2_mobile from '../../../../assets/_design/logoDesign/small/Property-1=Component-35.png'
// import img3 from '../../../../assets/_design/logoDesign/Component-27.png'
// import img4 from '../../../../assets/_design/logoDesign/Rectangle-638.png'
// import img5 from '../../../../assets/_design/logoDesign/Component55.png' 
// import img5_mobile from '../../../../assets/_design/logoDesign/small/Property-1=Component-31.png' 
// import img6 from '../../../../assets/_design/logoDesign/Component-38.png'
import "./style.scss"
const Showcase = () => {
  const [change, setChange] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setChange(!change)
    }, 3000)
    
    return () => {
      clearInterval(interval)
    };
  }, [change]);

  return (
    <div>
        <div className="logo-showcase">
      <div className="ps-1">
        <h2>
        Bringing your brand to life with  <span>custom logo designs</span>
        </h2>
        <p>
        Unveil your product with confidence, or breathe new life into your established brand with our innovative designs that drive results. Our design solutions are tailored to connect with your customers, elevating your product to new heights and delivering a measurable impact.
        </p>
      </div>
      <div className="ps-2">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-1">
                <ParallaxBanner
                  layers={[
                    {
                      image:
                        // "https://uiux.99xstartup.com/assest/huupe-img.webp",
                        'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-57.webp',
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner "
                  style={change ? {opacity: "0"} : {opacty: "1"}}
                />
                <div className="for-mobile  banner1">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/mobile/Property-1%3DComponent-51.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="subheading">Logo / Stationery Design</h4>
                <button className="custom-btn"> Fin-tech</button>
              </div>
              <h3>Moneyfactory</h3>
              <p>
              Ai driven investment platform, the logo was built around making intelligent investing automated, engaging and seamless in a way unlike nobody else.
              </p>
            </div>
          </div>
      </div>
      <div className="ps-3">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-2">
                <ParallaxBanner
                  layers={[
                    {
                      image: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-49.webp',
                      //   "https://uiux.99xstartup.com/assest/kickpick.webp",

                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner banner2"
                  style={change ? {opacity: "0"} : {opacty: "1"}}

                />
                <div className="for-mobile  banner2">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-49.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="subheading">Logo Design</h4>
                <button className="custom-btn">Sports</button>
              </div>
              <h3>Huupe</h3>
              <p>
              The logo Symbolises the basketball court & sport in the most simplistic & minimal way.
              </p>
            </div>
          </div>
      </div>
      <div className="ps-4">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-3">
                <ParallaxBanner
                  layers={[
                    {
                      image: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-27.webp',
                      //   "https://uiux.99xstartup.com/assest/fuse-img.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner banner3"
                  style={change ? {opacity: "0"} : {opacty: "1"}}

                />
                 <div className="for-mobile  banner3">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-27.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="subheading">Logo / Retail Design</h4>
                <button className="custom-btn">
                Lifestyle
                </button>
              </div>
              <h3>Peperstreet</h3>
              <p>
              A Universal Signature thats designed to unite people in a fun, engaging & memorable way.
              </p>
            </div>
          </div>
      </div>
      <div className="ps-5">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-4">
                <ParallaxBanner
                  layers={[
                    {
                      image: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Rectangle-638.webp',
                      //   "https://uiux.99xstartup.com/assest/onecare.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner banner4"
                  style={change ? {opacity: "0"} : {opacty: "1"}}

                />
                 <div className="for-mobile  banner4">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Rectangle-638.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="subheading">Logo / Stationery Design</h4>
                <button className="custom-btn">Community Platform for entreprenuers</button>
              </div>
              <h3>Humble</h3>
              <p>
              Logo was built around the concept of humility & ambition with a quirky twist that resonates with entrepreneurs of today. 
              </p>
            </div>
          </div>
      </div>
      <div className="ps-6">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-5">
                <ParallaxBanner
                  layers={[
                    {
                      image: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component55.webp',
                      //    "https://uiux.99xstartup.com/assest/otomain.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner banner5"
                  style={change ? {opacity: "0"} : {opacty: "1"}}

                />
                 <div className="for-mobile  banner5">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/mobile/Property-1%3DComponent-31.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="subheading">Logo Design</h4>
                <button className="custom-btn">Enterprise SaaS</button>
              </div>
              <h3>Inconn</h3>
              <p>
              Enterprise asset management platform, logo is built around the notion of intelligently connected for infinite growth possibilities.
              </p>
            </div>
          </div>
      </div>
      <div className="ps-7">
          <div className="ps-project">
            <div className="img-container">
              <div className="ps-image parallax-6">
                <ParallaxBanner
                  layers={[
                    {
                      image: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-38.webp',
                      //    "https://uiux.99xstartup.com/assest/otomain.webp",
                      speed: -25,
                      expanded: false,
                      // scale: [1, .8],
                      // easing: [0.2, -0.6, 1, -0.6],
                    },
                  ]}
                  className="parallaxBanner banner6"
                  style={change ? {opacity: "0"} : {opacty: "1"}}

                />
                 <div className="for-mobile  banner6">
                  <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Component-38.webp'} alt="" width={"100%"} height="100%" style={change ? {opacity: "0"} : {opacty: "1"}} />
                </div>
              </div>
            </div>
            <div className="ps-text">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="subheading">Logo Design</h4>
                <button className="custom-btn">Ed-tech</button>
              </div>
              <h3>W academy</h3>
              <p>
              An Ed-tech initiative with a mission to upskill & empower women to be the leaders of future. W in the logo stands for academy for women.
              </p>
            </div>
          </div>
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

      {/* <div className="ps-7">
        <h2>There's more for your eyes. Check out all our works</h2>
        <Link to="/our-work">
          <Ripples color="#f1f1f1" during={1200}>
            <button className="btn">
              Our Projects <BsArrowRight />
            </button>
          </Ripples>
        </Link>
      </div> */}
    </div>
    </div>
  )
}

export default Showcase