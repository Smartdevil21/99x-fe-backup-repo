import React from "react";
import ServicesHeader from "./ServicesHeader";
import WorkShowcase from "./workShowcase";
import GotCovered from "../gotCovered";
import ProjectShowcase from "./projectShowcase";
import WhyWorkWith99x from "./whyWorkWith99x";
import BusinessProfile from "./businessProfile";
import ServicesC2A from "./servicesC2A";
import FlexibleWays from "./flexibleWays";
import CategoryEverythingYouNeed from "views/category/_components/EverythingYouNeed";
import image1 from "../../../assets/_design/servicePage/Frame 3935.png";
import image2 from "../../../assets/_design/servicePage/Frame 3936.png";
import image3 from "../../../assets/_design/servicePage/Frame 3937.png";

const Services = () => {
  return (
    <div>
      <ServicesHeader />
      <CategoryEverythingYouNeed
        banner="https://99xassets.s3.ap-south-1.amazonaws.com/99xservices.png"
        title="Everything you need to"
        titlePrimary="Design your Product"
        subtitle="Work with your A-team of,"
        label=""
        image="https://ik.imagekit.io/99x/design/Screenshot_2021-07-29_at_12.29.21_PM_OcKf8fz-PmS.png"
        site="design"
        f1={
          [
            // {
            //     icon: '',
            //     text: 'Digital Marketing Manager'
            // }
          ]
        }
        f2={[
          {
            title: "UX Research",
            subtitle:
              "Let us help you gather information from users, market and much more, interpret data & design products for your business.",
          },
          {
            title: "UX Design",
            subtitle:
              "Design high quality products to your consumers with experiences that makes users fall in love at first sight",
          },

          {
            title: "UX Audit",
            subtitle:
              "Take your product performances to new heights with our holisitic assesments in terms of usablity problems in your product.",
          },
          {
            title: "UI Design",
            subtitle:
              "Gorgeous User Interfaces that aligns with your business, brand, product & marketing objectives for impact.",
          },
          {
            title: "Design System",
            subtitle:
              "With a proper design system, your entire product team can produce much more efficiently & provide consistancy",
          },
          {
            title: "Usability Testing",
            subtitle:
              "Remove assumptions & subjectivity out of design, with our advanced user-testing strategies to make informed desicions.",
          },
          {
            title: "Digital Branding",
            subtitle:
              "Need help aligning your brand with you product? or a fresh idenity that resonate with your vision, we got you covered. ",
          },
        ]}
      />
      <GotCovered />
      {/* <WorkShowcase /> */}
      <ProjectShowcase />
      <FlexibleWays />
      <WhyWorkWith99x />
      <BusinessProfile />
      <ServicesC2A />
    </div>
  );
};

export default Services;
