import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import styled from "styled-components";
import "./style.scss";

const MainSection = styled.section`
  background-color: ${(props) => props.bgColor};
`;

const SectionH2 = styled.h2`
  color: ${(props) =>
    props.theme == "dark" ? "#fff" : "var(--color-secondary)"};
`;

export default function CustomerTestinomial(props) {
  let bgColor = props.theme == "dark" ? "#2f2f2f" : "#ffffff";
  if (props.themeColor) bgColor = props.themeColor;

  return (
    <MainSection className="customer-test" bgColor={bgColor}>
      <div className="left">
        <div className="gradient text-center py-3vw left-degine">
          <h2 className="heading-left" theme={props.light ? "light" : "dark"}>
            Don't just take our word for it, see for yourself what our clients
            think about us.
          </h2>
        </div>
      </div>
      <div className="right">
        <div className="test-block-container py-3vw">
          <div className="iframe-container">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/MCX4YqcW7kU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* <div className="p-one">
            <p className="heading-right px-7vw">
              “With 99x, we get consistent designs on time. Their work is great,
              they have a great team. Absolutely recommend them.
            </p>
            <div className=" cust-image py-3vw text-md-center ">
              <img src="https://ik.imagekit.io/99x/startup/category/Group_1386_ZhFD2dMY2.png" />
            </div>
          </div> */}
        </div>
      </div>
    </MainSection>
  );
}
