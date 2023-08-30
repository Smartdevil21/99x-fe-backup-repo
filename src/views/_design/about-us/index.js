import React from "react";
import "./style.scss";
import TrustedBy1000Customers from "../../../components/_sections/TrustedBy1000Customers";
import BeautifulRelationship from "../../../components/_sections/BeautifulRelationship";
import dpImage from "../../../assets/_design/aboutUs/Help companies D their P.svg";
import bangImg from "../../../assets/_design/aboutUs/Bangalore.png";
import poImg from "../../../assets/_design/aboutUs/Powai.png";
import BusinessProfile from "../servicesPage/businessProfile";
import TrustedClients from "../process/trustedClients";
import BusinessGlobally from "../businessGlobally";
import ServicesC2A from "../servicesPage/servicesC2A";
import shutterStock from "../../../assets/_design/aboutUs/shutterstock_1038948835.png";
import groupImage from "../../../assets/_design/aboutUs/Group 48095515.png";
import AnushaProfile from "../../../assets/_design/aboutUs/Anusha.png";
import KarthikProfile from "../../../assets/_design/aboutUs/Karthik.png";
import SantoshProfile from "../../../assets/_design/aboutUs/Santosh.png";
import Typed from "react-typed";

export default function AboutUsPage(props) {
  return (
    <section className="about-us-page">
      <div className="container header-container">
        <div className="hero">
          <div className="row">
            <div className="col-sm-12 col-md-6 left">
              <h1 className="about-Heading">
                Help companies{" "}
                <span className="about-typed">
                  <Typed strings={["Design"]} typeSpeed={100} loop />
                </span>
                their
                <br />
                {""}
                <span className="typed">
                  <Typed strings={["Products"]} typeSpeed={80} loop />
                </span>
              </h1>
              {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/Rectangle_221_g7RcrZqcH.png" /> */}

              {/* <img src={dpImage} alt="" /> */}
            </div>
            <div className="col-sm-12 col-md-6  right">
              <h4>
                99x is an award winning digital product design studio that
                specialises in User Experience design ( UX) & User experience
                design (UI).
              </h4>
              <p>
                Our mission is to add value across product, Design, & operate
                with a serve-first mindset. With our product intellect combined
                with creative capabilities we have built over the years with
                spectacular talent, We are the right partners to an
                organizations hypergrowth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-img">
        {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/shutterstock_1038948835_6bR0yXQS0.png" /> */}
        <img src={shutterStock} alt="" />
        <div className="heading-container">
          <h2>We're people's people!</h2>
        </div>
      </div>
      <BusinessProfile hideHead={true} />
      <div className="phill container">
        <h2>Our people make it all possible</h2>
        <p className="sub-title">
          We have brought together a world -class team of Product Designers &
          Visionaries.
        </p>

        <div className="x-grid">
          <div className="item-1">
            <div className="text">
              <h3>Anusha Chiyadu | Co-Founder</h3>
              <p>
                IIT Alumnus <br /> Global Business Management, NYU Ex-Investment
                banker - Nomura
              </p>
            </div>
          </div>
          <div className="item-2">
            {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-daria-shevtsova-3626622_1_6adeAPSI29.png" /> */}
            <img src={AnushaProfile} alt="anusha-profile" />
          </div>
          <div className="item-3">
            {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-karolina-grabowska-4040600_1_YWi3OHoZ7h.png" /> */}

            <img
              src={KarthikProfile}
              alt="karthik-profile"
              // style={{ maxWidth: 400 }}
            />
          </div>
          <div className="item-4 text">
            <div className="text">
              <h3>Karthik K Raman | Co-Founder</h3>
              <p>
                IIT Madras Alumnus, Computer Sciences Boston University -
                Product Mangement <br /> Ex-Director, Whitehat Jr <br /> Managed
                60mn+ Budgets, Marketing Advisory Board for 10+ Startups
              </p>
            </div>
          </div>
          <div className="item-5">
            <div className="text">
              <h3>Santosh Kalaimani | Senior Product Design Lead</h3>
              <p>
                Lead 100+ Product Design Projects Ex-Creative Director & Founder
                of a creative studio - Pixelsof Perspective. <br /> Techie /
                Multi- Disciplinary Artist. <br /> Expertise in Product
                Strategy, Content Production, FIlms & Storytelling.
              </p>
            </div>
          </div>
          <div className="item-6">
            {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-daria-shevtsova-3626622_1_6adeAPSI29.png" /> */}
            <img src={SantoshProfile} alt="santosh-profile" />
          </div>
        </div>

        {/* for mobile */}

        <div className="about-for-mobile">
          <div className="item-container">
            <div className="item-container-image">
              {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-daria-shevtsova-3626622_1_6adeAPSI29.png" /> */}
              <img src={AnushaProfile} alt="anusha-profile" />
            </div>
            <div className="item-container-text">
              <h3>Anusha Chiyadu | Co-Founder</h3>
              <p>
                IIT Alumnus <br /> Global Business Management, NYU Ex-Investment
                banker - Nomura
              </p>
            </div>
          </div>

          <div className="item-container">
            <div className="item-container-image">
              {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-karolina-grabowska-4040600_1_YWi3OHoZ7h.png" /> */}
              <img src={KarthikProfile} alt="karthik-profile" />
            </div>
            <div className="item-container-text ">
              <h3>Karthik K Raman | Co-Founder</h3>
              <p>
                IIT Madras Alumnus, Computer Sciences Boston University -
                Product Mangement <br /> Ex-Director, Whitehat Jr <br /> Managed
                60mn+ Budgets, Marketing Advisory Board for 10+ Startups
              </p>
            </div>
          </div>
          <div className="item-container">
            <div className="item-container-image">
              {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/pexels-daria-shevtsova-3626622_1_6adeAPSI29.png" /> */}
              <img src={SantoshProfile} alt="santosh-profile" />
            </div>
            <div className="item-container-text">
              <h3>Santosh Kalaimani | Senior Product Design Lead</h3>
              <p>
                Lead 100+ Product Design Projects Ex-Creative Director & Founder
                of a creative studio - Pixelsof Perspective. <br /> Techie /
                Multi- Disciplinary Artist. <br /> Expertise in Product
                Strategy, Content Production, Films & Storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="open-to-all">
        <img src={groupImage} alt="" />
        {/* <img src="https://ik.imagekit.io/99x/startup/pages/how-it-works/shutterstock_1477576958_7_gvtY0a9DyI.png" /> */}
      </div>

      {/* <div className="office container">
        <h2>We're Open for business globally</h2>
        <div className="row">
          <div className="col col-6">
            <img src={bangImg} />
          </div>
          <div className="col col-6">
            <img src={poImg} />
          </div>
        </div>
      </div> */}
      <BusinessGlobally />
      {/* <div className="customer-meteric container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 left">
            <h3>40,000+</h3>
            <p>Paid customer accounts</p>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 right"
            style={{ background: "var(--color-primary)" }}
          >
            <h3>70,000+</h3>
            <p>Creators globally</p>
          </div>
        </div>
      </div> */}
      {/* <div
        className="global-customer container"
        style={{ margin: "50px auto" }}
      >
        <img src="https://ik.imagekit.io/99x/startup/pages/creators_and_brands/b_globe_6vgff26Hu.png" />
      </div> */}
      {/* <div className="container pv-30">
        <TrustedBy1000Customers />
      </div> */}

      {/* <BeautifulRelationship color="var(--color-secondary)" /> */}

      <TrustedClients text="Have a Custom requirement or a Complex Project? Leverage our expertise of working with 100+ organizations across  Industries & Geographies. " />
      <ServicesC2A bg="#391763" bgBtn="#6931C4" />
    </section>
  );
}
