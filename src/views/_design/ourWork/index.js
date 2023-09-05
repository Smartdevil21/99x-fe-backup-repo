import React, { useMemo } from "react";
import { BsArrowDown } from "react-icons/bs";
import "./style.scss";

import projects from "./projects";
import { useState } from "react";
import ReactPlayer from "react-player";
import LazyLoadedPlayer from "utils/LazyLoadVideoPlayer";
// import LazyLoadVideoPlayer from "utils/LazyLoadVideo";

export default function OurWork(props) {
  const sections = [
    "Website",
    "Web App",
    "Mobile App",
    "Branding",
    "Packaging",
    "Others",
  ];
  const [activeSection, setActiveSection] = useState("All");

  const filteredProjects = useMemo(() => {
    switch (activeSection) {
      case "All":
        return projects;
      case "Website":
        return projects.filter((project) => project.category === "Website");
      case "Web App":
        return projects.filter((project) => project.category === "Web App");
      case "Mobile App":
        return projects.filter((project) => project.category === "Mobile App");
      case "Branding":
        return projects.filter((project) => project.category === "Branding");
      case "Packaging":
        return projects.filter((project) => project.category === "Packaging");
      case "Others":
        return projects.filter(
          (project) =>
            project.category !== "Website" &&
            project.category !== "Web App" &&
            project.category !== "Mobile App"
        );
      default:
        return projects;
    }
  }, [activeSection]);

  // const handleOthersFilter = () => {};

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
          onClick={() => {
            if (!props.label) {
              handleSectionChange("All");
            }
          }}
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
              className={`${
                activeSection === sections[index] ? "active_category" : ""
              } category_opt_${section}`}
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
            <a
              // href={`http://docs.google.com/gview?url=${project.pdf}&embedded=true`}
              href={`/case-study/${project.pdf}`}
              className={"media_container"}
              target={"_blank"}
              rel="noreferrer"
            >
              <LazyLoadedPlayer url={project.video} />
            </a>

            <a
              href={`/case-study/${project.pdf}`}
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="work-bottom">
                <div className={"first_half"}>
                  <h3 className="title">{project.client}</h3>
                  <p className="case_study_desktop">View Case Study</p>
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
                <p className="case_study_mobile">View Case Study</p>
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
      {/* <div className="all-works-for-mobile">
        {filteredProjects.map((item, index) => (
          <div className="work" key={index + item.industry}>
            <a
              href={item.pdf}
              className={"media_container"}
              target={"_blank"}
              rel="noreferrer"
            >
              <LazyLoadedPlayer url={item.video} />
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
      </div> */}
    </div>
  );
}
