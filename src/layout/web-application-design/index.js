/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./style.scss";
import Typed from "react-typed";
import Slider from "react-slick";

import { useState } from "react";
import useScreenSize from "use-screen-size";
import OurWork from "views/_design/our-work-web/index";
import Header from "layout/main/header";
import FooterLayout from "layout/main/footer";
import Modal from "views/_design/ourWork/Modal/Modal";
import Ripples from "react-ripples";
import Carousel from "components/Crousel/Crousel";
import Animation from "components/animation/animation";
import portfolioImg14 from "../../assets/_design/ourWork/Webp/Gausmann.png";
import portfolioImg15 from "../../assets/_design/ourWork/Webp/Eden-Cover-Image.png";

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const size = useScreenSize();
  const isMobile = size.width < 420;

  const settingsMobile = {
    infinite: true,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div>
      {/* <Header theme="black" /> */}
      {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}
      <div className="crousel_section">
        <div className="heading_area">
          <div className="heading_div">
            <p className="heading_web">Build web-applications</p>
            <div id="color_red">
              <Typed
                strings={[
                  "that acquire users seamlessly",
                  "that retain users for long-term",
                  "for easier app adoption",
                  "for hyper-growth",
                ]}
                typeSpeed={80}
                loop
              />
            </div>
            {/* <p id="color_red">that acquire users seamlessly</p> */}
          </div>
          <Ripples color="#fff" during={1200}>
            <button
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(true);
                }, 1000);
              }}
            >
              Lets work together
            </button>
          </Ripples>
        </div>
        <Carousel />
      </div>
      <Animation />
      <OurWork label={true} />
      <div className="banner">
        <div>
          From MVPs to complete Product design solutions for outcome, we’ve got
          you covered
        </div>
        <div>
          <Ripples color="#fff" during={1200}>
            <button
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(true);
                }, 1000);
              }}
            >
              Talk to us now!
            </button>
          </Ripples>
        </div>
      </div>
      <div className="display_section">
      <a href="https://99xassets.s3.ap-south-1.amazonaws.com/Eden+Project+.pdf" target="_blank" rel="noopener noreferrer">
        <div className="photos">
          <img
            src={
              isMobile
                ? "https://99xassets.s3.ap-south-1.amazonaws.com/frame-1.png"
                : portfolioImg15
            }
            alt=""
          />
            <div className="description">
          <div className="header">
            <h3>Eden</h3>
              <div className="category-button">
                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">CRM</button>
                  </Ripples>

                  <Ripples color="#fff" during={1200}>
                    <button className="custom-button">Insurance</button>
                  </Ripples>
                </div>
                </div>
            <p>
              We collaborated with an insurance firm that offers multiple insurance
              products to consumers & business across various verticals. We assisted
              them in streamlining their sales process within their CRM and streamline
              the aesthetics with intuitive analytics & collaboration for all their products
              and services.
            </p>
          </div>
        </div>
        </a>
        <a
          href="https://uiux.99xstartup.com/assest/Gausmann.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="photos">
            <img
              src={
                isMobile
                  ? portfolioImg14
                  : "https://99xassets.s3.ap-south-1.amazonaws.com/display_2.png"
              }
              alt=""
            />
            <div className="description">
              <div className="header">
              <h3>Gausmann</h3>
              <div className="category-button">
                    <Ripples color="#fff" during={1200}>
                      <button className="custom-button">Custom Application Design</button>
                    </Ripples>

                    <Ripples color="#fff" during={1200}>
                      <button className="custom-button">Website</button>
                    </Ripples>
                  </div>
                  </div>
              <p>
              Gausmann offers a host of professional services for home, personal care to customers across Germany. We helped them design and build their website and CMS keeping the end user and business goals in mind while keeping the aesthetics clean minimal, relevant, and user friendly
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="download_section">
        <div className="download_wrapper">
          <div className="download_heading">Unlock your product potential</div>
          <div className="download_description">
            Enhance your customer experience, engagement, and retention with
            engaging product experiences. Make informed design decisions, build
            and ship faster with our tried and tested process deeply rooted in
            user-centered and data-driven product design. Let our expert
            designers build you great products today!
          </div>
          <Ripples color="#fff" during={1200}>
            <button
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(true);
                }, 1000);
              }}
            >
              DOWNLOAD OUR PORTFOLIO
            </button>
          </Ripples>
        </div>
      </div>
      <div className="clients_section">
        <div className="global_clients">
          <h3>Trusted by 100+ clients globally</h3>
          <div className="image_wrapper_mobile">
            <img
              src="https://99xassets.s3.ap-south-1.amazonaws.com/icons.png"
              alt="icons"
            />
          </div>
        </div>
        <div className="industries">
          <div className="industries_heading">Our Industries</div>
          {isMobile ? (
            <div className="industries_logo_mobile">
              <Slider {...settingsMobile}>
                <div className="logo_btn">
                  <svg
                    width="36"
                    height="28"
                    viewBox="0 0 36 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7259 4.35714C21.9065 1.96578 19.0419 0.5 15.9839 0.5C11.0291 0.5 6.92587 4.20299 6.38394 8.98571C2.86129 10.49 0.5 13.9616 0.5 17.8571C0.5 23.1801 4.83541 27.5 10.1774 27.5H23.7258C30.1128 27.5 35.3387 22.2927 35.3387 15.9286C35.3387 9.56442 30.1128 4.35714 23.7258 4.35714H23.7259ZM23.7259 23.6429H10.1775C6.96458 23.6429 4.37104 21.0586 4.37104 17.8571C4.37104 15.2344 6.15182 12.92 8.7453 12.2644L10.255 11.8785L10.2164 10.3358V10.1429C10.2164 6.94147 12.8099 4.35718 16.0228 4.35718C18.113 4.35718 20.0485 5.47562 21.0551 7.28854L21.6746 8.36854L22.952 8.25285C23.1839 8.21438 23.4547 8.21438 23.7258 8.21438C27.984 8.21438 31.4678 11.6857 31.4678 15.9287C31.4678 20.1717 27.984 23.6429 23.7258 23.6429L23.7259 23.6429Z"
                      fill="#515151"
                    />
                  </svg>
                  Saas
                </div>
                <div className="logo_btn">
                  <svg
                    width="35"
                    height="30"
                    viewBox="0 0 35 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833313 30V0H17.5V6.66667H34.1666V30H0.833313ZM4.16665 26.6667H7.49998V23.3333H4.16665V26.6667ZM4.16665 20H7.49998V16.6667H4.16665V20ZM4.16665 13.3333H7.49998V10H4.16665V13.3333ZM4.16665 6.66667H7.49998V3.33333H4.16665V6.66667ZM10.8333 26.6667H14.1666V23.3333H10.8333V26.6667ZM10.8333 20H14.1666V16.6667H10.8333V20ZM10.8333 13.3333H14.1666V10H10.8333V13.3333ZM10.8333 6.66667H14.1666V3.33333H10.8333V6.66667ZM17.5 26.6667H30.8333V10H17.5V13.3333H20.8333V16.6667H17.5V20H20.8333V23.3333H17.5V26.6667ZM24.1666 16.6667V13.3333H27.5V16.6667H24.1666ZM24.1666 23.3333V20H27.5V23.3333H24.1666Z"
                      fill="#8D8D8D"
                    />
                  </svg>
                  B2B
                </div>
                <div className="logo_btn">
                  <svg
                    width="31"
                    height="29"
                    viewBox="0 0 31 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.673096 28.3333V6.66667L7.2372 11.6667L15.4423 0L23.6475 6.66667H30.2116V28.3333H0.673096ZM8.87822 23.3333L15.4423 14.1667L26.9295 23.25V10H22.4987L16.0987 4.79167L7.97566 16.375L3.95515 13.3333V19.3333L8.87822 23.3333Z"
                      fill="#8D8D8D"
                    />
                  </svg>
                  Fintech
                </div>
                <div className="logo_btn" style={{ width: "165px !important" }}>
                  <svg
                    width="37"
                    height="32"
                    viewBox="0 0 37 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.95514 32.0002C6.49019 32.0002 6.06626 31.8546 5.68335 31.5635C5.30044 31.2713 5.04061 30.889 4.90386 30.4168L0.308991 13.5835C0.172239 13.1946 0.233504 12.8335 0.492786 12.5002C0.753162 12.1668 1.10215 12.0002 1.53976 12.0002H9.82694L17.0474 1.0835C17.1842 0.861274 17.3757 0.680718 17.6218 0.541829C17.868 0.402941 18.1278 0.333496 18.4013 0.333496C18.6748 0.333496 18.9346 0.402941 19.1808 0.541829C19.4269 0.680718 19.6184 0.861274 19.7551 1.0835L26.9757 12.0002H35.3449C35.7825 12.0002 36.1315 12.1668 36.3919 12.5002C36.6511 12.8335 36.7124 13.1946 36.5757 13.5835L31.9808 30.4168C31.844 30.889 31.5842 31.2713 31.2013 31.5635C30.8184 31.8546 30.3945 32.0002 29.9295 32.0002H6.95514ZM7.77566 28.6668H29.109L32.7192 15.3335H4.1654L7.77566 28.6668ZM18.4423 25.3335C19.3449 25.3335 20.1178 25.0074 20.7611 24.3552C21.4033 23.7018 21.7244 22.9168 21.7244 22.0002C21.7244 21.0835 21.4033 20.2985 20.7611 19.6452C20.1178 18.9929 19.3449 18.6668 18.4423 18.6668C17.5398 18.6668 16.7674 18.9929 16.1252 19.6452C15.4819 20.2985 15.1603 21.0835 15.1603 22.0002C15.1603 22.9168 15.4819 23.7018 16.1252 24.3552C16.7674 25.0074 17.5398 25.3335 18.4423 25.3335ZM13.8064 12.0002H23.0372L18.4013 5.00016L13.8064 12.0002Z"
                      fill="#8D8D8D"
                    />
                  </svg>
                  E-commerce
                </div>
              </Slider>
            </div>
          ) : (
            <div className="industries_logo">
              <div>
                <svg
                  width="36"
                  height="28"
                  viewBox="0 0 36 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7259 4.35714C21.9065 1.96578 19.0419 0.5 15.9839 0.5C11.0291 0.5 6.92587 4.20299 6.38394 8.98571C2.86129 10.49 0.5 13.9616 0.5 17.8571C0.5 23.1801 4.83541 27.5 10.1774 27.5H23.7258C30.1128 27.5 35.3387 22.2927 35.3387 15.9286C35.3387 9.56442 30.1128 4.35714 23.7258 4.35714H23.7259ZM23.7259 23.6429H10.1775C6.96458 23.6429 4.37104 21.0586 4.37104 17.8571C4.37104 15.2344 6.15182 12.92 8.7453 12.2644L10.255 11.8785L10.2164 10.3358V10.1429C10.2164 6.94147 12.8099 4.35718 16.0228 4.35718C18.113 4.35718 20.0485 5.47562 21.0551 7.28854L21.6746 8.36854L22.952 8.25285C23.1839 8.21438 23.4547 8.21438 23.7258 8.21438C27.984 8.21438 31.4678 11.6857 31.4678 15.9287C31.4678 20.1717 27.984 23.6429 23.7258 23.6429L23.7259 23.6429Z"
                    fill="#515151"
                  />
                </svg>
                Saas
              </div>
              <div>
                <svg
                  width="35"
                  height="30"
                  viewBox="0 0 35 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833313 30V0H17.5V6.66667H34.1666V30H0.833313ZM4.16665 26.6667H7.49998V23.3333H4.16665V26.6667ZM4.16665 20H7.49998V16.6667H4.16665V20ZM4.16665 13.3333H7.49998V10H4.16665V13.3333ZM4.16665 6.66667H7.49998V3.33333H4.16665V6.66667ZM10.8333 26.6667H14.1666V23.3333H10.8333V26.6667ZM10.8333 20H14.1666V16.6667H10.8333V20ZM10.8333 13.3333H14.1666V10H10.8333V13.3333ZM10.8333 6.66667H14.1666V3.33333H10.8333V6.66667ZM17.5 26.6667H30.8333V10H17.5V13.3333H20.8333V16.6667H17.5V20H20.8333V23.3333H17.5V26.6667ZM24.1666 16.6667V13.3333H27.5V16.6667H24.1666ZM24.1666 23.3333V20H27.5V23.3333H24.1666Z"
                    fill="#8D8D8D"
                  />
                </svg>
                B2B
              </div>
              <div>
                <svg
                  width="31"
                  height="29"
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.673096 28.3333V6.66667L7.2372 11.6667L15.4423 0L23.6475 6.66667H30.2116V28.3333H0.673096ZM8.87822 23.3333L15.4423 14.1667L26.9295 23.25V10H22.4987L16.0987 4.79167L7.97566 16.375L3.95515 13.3333V19.3333L8.87822 23.3333Z"
                    fill="#8D8D8D"
                  />
                </svg>
                Fintech
              </div>
              <div>
                <svg
                  width="37"
                  height="32"
                  viewBox="0 0 37 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.95514 32.0002C6.49019 32.0002 6.06626 31.8546 5.68335 31.5635C5.30044 31.2713 5.04061 30.889 4.90386 30.4168L0.308991 13.5835C0.172239 13.1946 0.233504 12.8335 0.492786 12.5002C0.753162 12.1668 1.10215 12.0002 1.53976 12.0002H9.82694L17.0474 1.0835C17.1842 0.861274 17.3757 0.680718 17.6218 0.541829C17.868 0.402941 18.1278 0.333496 18.4013 0.333496C18.6748 0.333496 18.9346 0.402941 19.1808 0.541829C19.4269 0.680718 19.6184 0.861274 19.7551 1.0835L26.9757 12.0002H35.3449C35.7825 12.0002 36.1315 12.1668 36.3919 12.5002C36.6511 12.8335 36.7124 13.1946 36.5757 13.5835L31.9808 30.4168C31.844 30.889 31.5842 31.2713 31.2013 31.5635C30.8184 31.8546 30.3945 32.0002 29.9295 32.0002H6.95514ZM7.77566 28.6668H29.109L32.7192 15.3335H4.1654L7.77566 28.6668ZM18.4423 25.3335C19.3449 25.3335 20.1178 25.0074 20.7611 24.3552C21.4033 23.7018 21.7244 22.9168 21.7244 22.0002C21.7244 21.0835 21.4033 20.2985 20.7611 19.6452C20.1178 18.9929 19.3449 18.6668 18.4423 18.6668C17.5398 18.6668 16.7674 18.9929 16.1252 19.6452C15.4819 20.2985 15.1603 21.0835 15.1603 22.0002C15.1603 22.9168 15.4819 23.7018 16.1252 24.3552C16.7674 25.0074 17.5398 25.3335 18.4423 25.3335ZM13.8064 12.0002H23.0372L18.4013 5.00016L13.8064 12.0002Z"
                    fill="#8D8D8D"
                  />
                </svg>
                E-commerce
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="talk_section">
        <div className="detail">
          <div className="title">
            See How 99x Studio Fits with a 30-min Discovery Session
          </div>
          <div className="subtitle">
            <div>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.07499 15.7248L16.225 8.5748L14.65 6.9998L9.07499 12.5998L6.29999 9.7998L4.74999 11.3748L9.07499 15.7248ZM10.5 21.1998C9.08332 21.1998 7.75399 20.9331 6.51199 20.3998C5.27065 19.8665 4.19165 19.1415 3.27499 18.2248C2.35832 17.3081 1.63332 16.2291 1.09999 14.9878C0.566654 13.7458 0.299988 12.4165 0.299988 10.9998C0.299988 9.58314 0.566654 8.2538 1.09999 7.0118C1.63332 5.77047 2.35832 4.69147 3.27499 3.7748C4.19165 2.85814 5.27065 2.13314 6.51199 1.5998C7.75399 1.06647 9.08332 0.799805 10.5 0.799805C11.9167 0.799805 13.246 1.06647 14.488 1.5998C15.7293 2.13314 16.8083 2.85814 17.725 3.7748C18.6417 4.69147 19.3667 5.77047 19.9 7.0118C20.4333 8.2538 20.7 9.58314 20.7 10.9998C20.7 12.4165 20.4333 13.7458 19.9 14.9878C19.3667 16.2291 18.6417 17.3081 17.725 18.2248C16.8083 19.1415 15.7293 19.8665 14.488 20.3998C13.246 20.9331 11.9167 21.1998 10.5 21.1998Z"
                  fill="#15D199"
                />
              </svg>
              Free UX Audit
            </div>
            <div>
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.07499 15.7248L16.225 8.5748L14.65 6.9998L9.07499 12.5998L6.29999 9.7998L4.74999 11.3748L9.07499 15.7248ZM10.5 21.1998C9.08332 21.1998 7.75399 20.9331 6.51199 20.3998C5.27065 19.8665 4.19165 19.1415 3.27499 18.2248C2.35832 17.3081 1.63332 16.2291 1.09999 14.9878C0.566654 13.7458 0.299988 12.4165 0.299988 10.9998C0.299988 9.58314 0.566654 8.2538 1.09999 7.0118C1.63332 5.77047 2.35832 4.69147 3.27499 3.7748C4.19165 2.85814 5.27065 2.13314 6.51199 1.5998C7.75399 1.06647 9.08332 0.799805 10.5 0.799805C11.9167 0.799805 13.246 1.06647 14.488 1.5998C15.7293 2.13314 16.8083 2.85814 17.725 3.7748C18.6417 4.69147 19.3667 5.77047 19.9 7.0118C20.4333 8.2538 20.7 9.58314 20.7 10.9998C20.7 12.4165 20.4333 13.7458 19.9 14.9878C19.3667 16.2291 18.6417 17.3081 17.725 18.2248C16.8083 19.1415 15.7293 19.8665 14.488 20.3998C13.246 20.9331 11.9167 21.1998 10.5 21.1998Z"
                  fill="#15D199"
                />
              </svg>
              Guidance & Product Strategy
            </div>
          </div>
          <Ripples color="#fff" during={1200}>
            <button
              onClick={() => {
                setTimeout(() => {
                  setModalOpen(true);
                }, 1000);
              }}
            >
              Talk to us
            </button>
          </Ripples>
        </div>
      </div>
      {/* <FooterLayout /> */}
    </div>
  );
};

export default HomePage;
