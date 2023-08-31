import React from "react";
import { BsArrowDown } from "react-icons/bs";
import "./style.scss";

import projects from "./projects";
import { useState } from "react";
import ReactPlayer from "react-player";
import LazyLoadedPlayer from "utils/LazyLoadVideo";
// import LazyLoadVideoPlayer from "utils/LazyLoadVideo";

export default function OurWork(props) {
  const sections = [
    "Website",
    "Web App",
    "Mobile App",
    "Branding",
    "Packaging",
  ];
  const [activeSection, setActiveSection] = useState("All");
  const filteredProjects =
    activeSection === "All"
      ? projects
      : projects.filter((project) => project.category === activeSection);
  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };

  return (
    <div className="our-work-container">
      <div className="our-work-header">
        <div
          className="heading"
          style={
            props.label && {
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

      {/* ----Category Selection Menu---- */}
      <div className="category_selection_menu">
        {sections.map((section, index) => {
          return (
            <span
              key={`${section} ${index}`}
              className={
                activeSection === sections[index] ? "active_category" : ""
              }
              onClick={() => {
                handleSectionChange(section);
              }}
            >
              {section}
            </span>
          );
        })}
      </div>

      <div className="all-works">
        {/* ------------ video project ---------------- */}
        {filteredProjects.map((project, index) => (
          <div className="work" key={index + project.industry}>
            <a href={project.pdf} target={"_blank"} rel="noreferrer">
              {/* <Parallax speed={10} style={{ aspectRatio: "2.4/1" }}> */}
              {/* <ReactPlayer
                width={"100%"}
                height="auto"
                url={project.video}
                muted
                playing
                loop
                className="react-player"
                style={{ aspectRatio: "2.4/1" }}
              /> */}
              {/* </Parallax> */}
              {/* <LazyLoadVideoPlayer src={project.video} /> */}
              <LazyLoadedPlayer url={project.video} />
            </a>

            <a href={project.pdf} target={"_blank"} rel="noreferrer">
              <div className="work-bottom">
                <div className={"first_half"}>
                  <h3 className="title">{project.client}</h3>
                  <p>View Case Study</p>
                </div>

                <div className="categories">
                  <h6 className="category">{project.industry}</h6>
                  <div className="list">
                    {project.tags.map((tag) => (
                      <>
                        <p>{tag}</p>
                        <p className="dot" />
                      </>
                    ))}
                  </div>
                </div>
                <p className="description">{project.description}</p>

                {/* <div className="left">
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
                  <h2>{portfolio[1].title} </h2>
                  <p>{portfolio[1].text}</p>
                </div> */}
              </div>
            </a>
          </div>
        ))}

        {/* ------------ video project  ends  ---------------- */}
      </div>
      <div className="all-works-for-mobile">
        {filteredProjects.map((item, index) => (
          <div className="work" key={index + item.industry}>
            <a
              href={item.pdf}
              className={"media_container"}
              target={"_blank"}
              rel="noreferrer"
            >
              {/* {!item.video ? (
                <img src={item.img} alt="" />
              ) : (
                  <LazyLoadedPlayer src={item.video} />
              )}  */}
              <LazyLoadedPlayer src={item.video} />
            </a>
            <div className="work-bottom">
              <div className="right">
                <h2>{item.client}</h2>
                <div className="left">
                  <h3 className="category">{item.category}</h3>
                  <div className="list">
                    {item.tags.map((tag) => (
                      <>
                        <p>{tag}</p>
                        <p className="dot" />
                      </>
                    ))}
                  </div>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
