import React from "react";
import { BsArrowDown } from "react-icons/bs";
// import { MdOutlineFilterAlt } from "react-icons/md";
// import portfolioImg1 from "../../../assets/_design/ourWork/Webp/Peperstreet.png";
// import portfolioImg2 from "../../../assets/_design/ourWork/Webp/Moneyfactory.png";
// import portfolioImg3 from "../../../assets/_design/ourWork/Webp/Huupe.png";
// import portfolioImg4 from "../../../assets/_design/ourWork/Webp/WGT.png";
// import portfolioImg5 from "../../../assets/_design/ourWork/Webp/99xStartup.png";
// import portfolioImg6 from "../../../assets/_design/ourWork/Webp/Practo.png";
// import portfolioImg7 from "../../../assets/_design/ourWork/Webp/OTO.png";
// import portfolioImg8 from "../../../assets/_design/ourWork/Webp/Tekorero.png";
// import portfolioImg9 from "../../../assets/_design/ourWork/Webp/Kickpick.png";
// import portfolioImg10 from "../../../assets/_design/ourWork/Webp/Fuse.png";
// import portfolioImg11 from "../../../assets/_design/ourWork/Webp/Alivio.png";
// import portfolioImg12 from "../../../assets/_design/ourWork/Webp/Furniko.png";
// import portfolioImg13 from "../../../assets/_design/ourWork/Webp/Concelium.png";
// import portfolioImg14 from "../../../assets/_design/ourWork/Webp/Gausmann.png";
// import portfolioImg16 from "../../../assets/_design/ourWork/Webp/chipsoft-cover.jpg";
// import earthyVideo from "../../../assets/_design/ourWork/Comp5.mp4";
import "./style.scss";

import projects from "./projects";
import Modal from "./Modal/Modal";
import { useState } from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Ripples from "react-ripples";
import ReactPlayer from "react-player";

export default function OurWork(props) {
  const sections = [
    "All",
    "Website",
    "Web App",
    "Mobile App",
    "Branding",
    "Packaging",
  ];
  const [modalOpen, setModalOpen] = useState("");
  const [activeSection, setActiveSection] = useState("All");
  const filteredProjects =
    activeSection === "All"
      ? projects
      : projects.filter((project) => project.category === activeSection);
  const handleSectionChange = (newSection) => {
    setActiveSection(newSection);
  };
  // const portfolio = [
  //   {
  //     category: "SAAS (Collaboration & Management)",
  //     title: "Chipsoft",
  //     text: "We collaborated with Chipsoft in redefining internal and global enterprise teams managing their company resource, Events and learning with a seamless user experience and intuitive interface design that keeps people forward.",
  //     img: portfolioImg16,
  //     pdf: "https://99xassets.s3.ap-south-1.amazonaws.com/Chipsoft+Case+Study.pdf",
  //   },
  //   {
  //     category: "E-commerce",
  //     title: "Earthy Tales",
  //     text: "Reimagining the complete experience for India's favourite organic produce - with an holistic user experience lasting a lifetime and strategic branding.",
  //     img: portfolioImg14,
  //     video: "https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4",
  //     pdf: "https://99xassets.s3.ap-south-1.amazonaws.com/Comp5.mp4",
  //   },

  //   {
  //     category: "Lifestyle",
  //     title: "Peperstreet",
  //     text: "Video Dating App, is a new dating app that helps people avoid boring monotous swipes with Video First Profiles.",

  //     img: portfolioImg1,
  //     pdf: "https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf",
  //   },
  //   {
  //     category: "Fintech",
  //     title: "Moneyfactory",
  //     text: "Fintech Application Design that uses the power of AI to provide intelligent investment solutions to the users.",
  //     img: portfolioImg2,
  //     pdf: "https://uiux.99xstartup.com/assest/Moneyfactory.pdf",
  //   },
  //   {
  //     category: "Mobile App Design",
  //     title: "Huupe",
  //     text: "Huupe - The world's first smart basketball hoop. Website is designed with a more focus on brand, targetted towards Gen Z with an objective to have a smooth user experience in getting their hands on the smartest hoop.",
  //     img: portfolioImg3,
  //     pdf: "https://uiux.99xstartup.com/assest/Huppe.pdf",
  //   },
  //   {
  //     category: "Sports ECommerce",
  //     title: "We've got Issues",
  //     text: "Collaborated with WGT to enlighten poeple about issues that matter with stunning Branding, Design & Intuitive UX.",
  //     img: portfolioImg4,
  //     pdf: "https://uiux.99xstartup.com/assest/WGT.pdf",
  //   },
  //   {
  //     category: "Media & Entertainment",
  //     title: "99xstartup",
  //     text: "End to end Creator marketplace design that includes dashboards for orders, project management, payment gateway, admin & vendor dashboards, Customer  login, interfaces & more. ",
  //     img: portfolioImg5,
  //     pdf: "https://uiux.99xstartup.com/assest/99xStartup.pdf",
  //   },
  //   {
  //     category: " Marketplace (High skilled services)",
  //     title: "Practo",
  //     text: "Practo care surgeries is a leading Healthcare service provider in india. Multiple Landing pages were desgined each ailment/surgery for perfomance marketing campaigns across all categories. ",
  //     img: portfolioImg6,
  //     pdf: "https://uiux.99xstartup.com/assest/Practo.pdf",
  //   },
  //   {
  //     category: "Two wheeler Loans, FinTech",
  //     title: "OTO Capital",
  //     text: "Mobile Application designed to reimagine automobile buying process with the help of seamless instant two wheeler loans. Entire customer journey is made socially engaging  .",
  //     img: portfolioImg7,
  //     pdf: "https://uiux.99xstartup.com/assest/oto.pdf",
  //   },
  //   {
  //     category: "Saas Product, Sales Automation",
  //     title: "Tekorero",
  //     text: "Webste re-design for a Sales atuomation software. Obrjective is to design a Minimal & Clean website demonstrating the product features to the users.",
  //     img: portfolioImg8,
  //     pdf: "https://uiux.99xstartup.com/assest/Tekorero.pdf",
  //   },
  //   {
  //     category: "ECommerce",
  //     title: "Kickpick",
  //     text: "MVP UX & UI design of an Ecommerce App, that allows users to get their hands on freshest & latest fashion with ease.",
  //     img: portfolioImg9,
  //     pdf: "https://uiux.99xstartup.com/assest/Kickpick.pdf",
  //   },
  //   {
  //     category: "Fintech",
  //     title: "Fuse.io",
  //     text: "A Fintech MVP Design of a mobile app that helps that offers investing across asset classes such as Stocks, Mutual Funds, Commodities, Gold & Crypto & keep track of the performances in simplest way possible.",
  //     img: portfolioImg10,
  //     pdf: "https://uiux.99xstartup.com/assest/Fuse.pdf",
  //   },
  //   {
  //     category: "Personal Care & Fitness",
  //     title: "Alivio",
  //     text: "Fitness and personal care app that offers on-demand  content from top-notch fitness instructors,",
  //     img: portfolioImg11,
  //     pdf: "https://uiux.99xstartup.com/assest/Alivio.pdf",
  //   },
  //   {
  //     category: "ECommerce",
  //     title: "Furniko",
  //     text: "",
  //     img: portfolioImg12,
  //     pdf: "https://uiux.99xstartup.com/assest/Furnikp.pdf",
  //   },
  //   {
  //     category: "Corporate ",
  //     title: "Concelium",
  //     text: "Corporate website re-design with more emphasis on the brand, unified style with clean, functional & minimal design.",
  //     img: portfolioImg13,
  //     pdf: "https://uiux.99xstartup.com/assest/Concelium.pdf",
  //   },
  //   {
  //     category: "Home Services",
  //     title: "Gaumann",
  //     text: "From fast-paced proof of concepts to large-scale design thinking and product design solutions, we’ve got you covered! ",
  //     img: portfolioImg14,
  //     pdf: "https://uiux.99xstartup.com/assest/Gausmann.pdf",
  //   },
  //   {
  //     category: "E-commerce",
  //     title: "Earthy Tales",
  //     text: "Reimagining the complete experience for India's favourite organic produce - with an holistic user experience lasting a lifetime and strategic branding.",
  //     img: portfolioImg14,
  //     pdf: "https://uiux.99xstartup.com/assest/Gausmann.pdf",
  //   },
  //   {
  //     category: "SAAS (Collaboration & Management)",
  //     title: "Chipsoft",
  //     text: "We collaborated with Chipsoft in redefining internal and global enterprise teams managing their company resource, Events and learning with a seamless user experience and intuitive interface design that keeps people forward.",
  //     img: portfolioImg16,
  //     pdf: "https://uiux.99xstartup.com/assest/Gausmann.pdf",
  //   },
  // ];
  return (
    <div className="our-work-container">
      <div className="our-work-header">
        {/* <button className="btn-filter" onClick={() => {
          setModalOpen(true);
        }}>
          <MdOutlineFilterAlt /> Filter
        </button>
        <div>
          {modalOpen && <Modal setOpenModal={setModalOpen} ></Modal>}
        </div> */}
        <div
          className="heading"
          style={
            props.label && {
              marginTop: "8vw",
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
        {/* <div className="work">
          <a
            href="https://99xassets.s3.ap-south-1.amazonaws.com/Chipsoft+Case+Study.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg16,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[0].category}</h3>
                <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">UX Design</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">UI Design</button>
                  </Ripples>
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Custom App</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[0].title}</h2>
                <p>{portfolio[0].text}</p>
              </div>
            </div>
          </a>
        </div> */}

        {/* ------------ video project ---------------- */}
        {filteredProjects.map((project, index) => (
          <div className="work" key={index + project.industry}>
            <a href={project.pdf} target={"_blank"} rel="noreferrer">
              {/* <Parallax speed={10} style={{ aspectRatio: "2.4/1" }}> */}
              <ReactPlayer
                width={"100%"}
                height="auto"
                url={project.video}
                muted
                playing
                loop
                className="react-player"
                style={{ aspectRatio: "2.4/1" }}
              />
              {/* </Parallax> */}
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

        {/* My comments start here! */}

        {/* <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg1,
                  // image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>
          <a
            href="https://uiux.99xstartup.com/assest/Peperstreet_compressed.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[2].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Branding</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button"> Mobile App UI/UX</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[2].title}</h2>
                <p> {portfolio[2].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg2,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Moneyfactory.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[3].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Branding</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">
                      Custom Application Design
                    </button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[3].title}</h2>
                <p>{portfolio[3].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Huppe.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg3,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Huppe.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[4].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">
                      {" "}
                      Website Design & Web Development
                    </button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[4].title}</h2>
                <p>{portfolio[4].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/WGT.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg4,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/WGT.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[5].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Branding</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[5].title}</h2>
                <p>{portfolio[5].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/99xStartup.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg5,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/99xStartup.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[6].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">
                      Custom Application
                    </button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[6].title}</h2>
                <p>{portfolio[6].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Practo.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg6,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Practo.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[7].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[7].title}</h2>
                <p>{portfolio[7].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/oto.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg7,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/oto.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[8].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Mobile App Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[8].title}</h2>
                <p>{portfolio[8].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Tekorero.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg8,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Tekorero.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[9].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[9].title}</h2>
                <p>{portfolio[9].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Kickpick.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg9,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>
          <a
            href="https://uiux.99xstartup.com/assest/Kickpick.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[10].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Mobile App UI/UX</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[10].title}</h2>
                <p>{portfolio[10].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/fuse.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg10,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/fuse.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[11].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Mobile App Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[11].title}</h2>
                <p>{portfolio[11].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Alivio.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg11,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Alivio.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[12].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[12].title}</h2>
                <p>{portfolio[12].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Furnikp.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg12,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Furnikp.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[13].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[13].title}</h2>
                <p>{portfolio[13].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Concelium.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg13,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>
          <a
            href="https://uiux.99xstartup.com/assest/Concelium.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[14].category}</h3>
                <div className="d-flex">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website Design</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[14].title}</h2>
                <p>{portfolio[14].text}</p>
              </div>
            </div>
          </a>
        </div>
        <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg14,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[15].category}</h3>
                <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">
                      Custom Application Design
                    </button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Website</button>
                  </Ripples>
                </div>
              </div>
              <div className="right">
                <h2>{portfolio[15].title}</h2>
                <p>{portfolio[15].text}</p>
              </div>
            </div>
          </a>
        </div> */}

        {/* My Comments over here! */}

        {/* <div className="work">
          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <ParallaxBanner
              layers={[
                {
                  image: portfolioImg14,
                  speed: -32,
                  expanded: false,
                  // translateY: [30, -50],
                  // scale: [.6, .8],
                  // opacity: [0.9, 1],
                },
              ]}
              style={{ aspectRatio: "2.4/1" }}
            />
          </a>

          <a
            href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
            target={"_blank"}
          >
            <div className="work-bottom">
              <div className="left">
                <h3 className="category">{portfolio[14].category}</h3>
                <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">
                    Web Design
                    </button>
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
                <h2>{portfolio[14].title}</h2>
                <p>{portfolio[14].text}</p>
              </div>
            </div>
          </a>
        </div> */}
      </div>
      <div className="all-works-for-mobile">
        {filteredProjects.map((item) => (
          <div className="work">
            <a
              href={item.pdf}
              className={"media_container"}
              target={"_blank"}
              rel="noreferrer"
            >
              {!item.video ? (
                <img src={item.img} alt="" />
              ) : (
                <ReactPlayer
                  width={"100%"}
                  height="auto"
                  url={item.video}
                  muted
                  playing
                  loop
                  className="react-player"
                />
              )}
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
        {/* 
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/PxWmxG2/Rectangle-560.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>We've got issues</h2>
              <p>
                We collaborated with WGT to enlighten people about issues that matter
                with intuitive UX, stunning branding, and Web Design.
              </p>
            </div>
          </div>

        </div>
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/6JQ37ZV/Frame-3897.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>Healthcare</h2>
              <p>
                We partnered with a leading Healthcare service provider in india to make
                surgeries easily accessible to anyone and everyone that needs them.
              </p>
            </div>
          </div>

        </div>
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/xDKmd90/Frame-4021.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>Huupe</h2>
              <p>Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?</p>
            </div>
          </div>

        </div>
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/Npn7TRP/Frame-4019.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>Huupe</h2>
              <p>Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?</p>
            </div>
          </div>

        </div>
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/VCvqTdh/Frame-4021-1.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>Huupe</h2>
              <p>Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?Here we test and validate every assumption. Who is the target user? How big is the market? What are building costs? What is the return on investment?</p>
            </div>
          </div>

        </div>
        <div className="work">
          <ParallaxBanner
            layers={[
              {
                image: 'https://i.ibb.co/m5Z5WxR/Frame-4023.png',
                speed: -32,
                expanded: false,
                // translateY: [30, -50],
                // scale: [.6, .8],
                // opacity: [0.9, 1],
              },
            ]}
            style={{ aspectRatio: '2.4/1' }}
          />

          <div className="work-bottom">
            <div className="left">
              <h3 className="category">Mobile App Design</h3>
            </div>
            <div className="right">
              <h2>Insurance</h2>
              <p>
                We collaborated with a leading insurance firm that offers multiple
                insurance products to streamline, Sales, Finance & Product with intuitve
                UX/UI.
              </p>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
}
