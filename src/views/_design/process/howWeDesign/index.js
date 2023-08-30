import React from "react";
import tickImage from "../../../../assets/_design/tick.svg";
import img1 from "../../../../assets/_design/howWeDesign/1.png";
import img2 from "../../../../assets/_design/howWeDesign/2.png";
import img3 from "../../../../assets/_design/howWeDesign/3.png";
import img4 from "../../../../assets/_design/howWeDesign/4.png";
import img5 from "../../../../assets/_design/howWeDesign/5.png";
import img6 from "../../../../assets/_design/howWeDesign/6.png";
import img7 from "../../../../assets/_design/howWeDesign/7.png";
import "./style.scss";

const howWeDesignData = [
  {
    title: "Product Discovery",
    text: "We develop a profound understanding of the product positioning, competition, users & business objectives to best align ourselves to your user expectations and make sound decisions - that impact the business for good.",
    img: img1,
    subList: [
      "UX Audit",
      "User Research",
      "Brand/ Product Analaysis",
      "Competitive & Market Analysis",
    ],
  },
  {
    title: "User Interviews",
    text: "Your business is unique so are your users, wether it's acquisition or engagment or retentions. A data-driven approach gives us an understanding to better bridge the gap - between you and your users. We uncover key pointers, validate problems and much more through a wide array of qualitative and quantitative methods to best align your product with your users.",
    img: img2,
  },
  {
    title: "Moodboards & Design Systems",
    text: "With our sophisticated approach to clearly understanding what you mean by good design, we assess does it best fit your brand, company, and vision and then define guidelines on colors typography, components etc, to help eliminate technical gaps so that the design and dev team can produce faster, efficiently, and consistently.",
    img: img3,
  },
  {
    title: "Information Architecture",
    text: "Good user experiences - gets an outcome for the users with ease. Based on good UX practices, industry expertise, and research, we build optimal roadmaps - Information Architecture and seamless customer journeys to help users, get what they want, when they want it. Usually, at this stage, we visually represent the products' infrastructure, features & hierarchy & navigations.",
    img: img4,
  },
  {
    title: "Wireframes",
    text: "We devise wireframes to bring clarity to you and relevant stakeholders, while also keeping room for early feedback to speed up the design process and move the project efficiently with approval-based  processes.",
    img: img5,
  },
  {
    title: "Visual & UI Design",
    text: "At this stage we bring in most of the visual interactive elements together and present an interactive prototype, so you get to see how the product as a whole looks like  - with all the work that's been done so far - The components, icons, colors and an entire product interface.",
    img: img6,
  },
  {
    title: "Usability Testing",
    text: "We design - for impact, and by putting the work in front of users allows us to Identify, if there are any problems in the designs. We gather feedbacks, uncover more opportunities from tons of users, to best improve - and adapt the designs according to what we started for - Building the best experience. ",
    img: img7,
  },
];

const HowWeDesign = () => {
  return (
    <div className="how-we-design">
      <div className="how-we-design-header">
        <h2 className="how-we-design-heading">
          How we get to <span> “better than expected”</span>
        </h2>
      </div>
      <div className="how-we-design-body">
        {howWeDesignData.map((item, idx) => (
          <div key={idx} className="design">
            <div className="design-left-space"></div>
            <div className="design-content">
              <div className="design-content-desc">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                {item.subList && (
                  <ul className="sub-list">
                    {item.subList.map((subListItem, idx) => (
                      <li key={idx}>
                        <img src={tickImage} alt="" />
                        {subListItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="design-content-img">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeDesign;
