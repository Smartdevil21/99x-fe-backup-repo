/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.scss";
import { Link, NavLink } from "react-router-dom";

import SiteService from "../../service/site.service";
import SEO_Footer from "../../data/sites/seo/footer-menu";
import Social_Footer from "../../data/sites/social/footer-menu";
import Design_Footer from "../../data/sites/design/footer-menu";

import ENV from "../../env.config";

import logoWhite from "../../assets/_design/logo-white.png";
import { Parallax } from "react-scroll-parallax";

class FooterLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.SEO.CODE) {
      return (
        <footer>
          <div className="container pv-30">
            <div className="footer-container">
              <div className="site-info">
                <img
                  src={SiteService.getActiveSiteSettings().LOGO_URL_WHITE}
                  className="img-fluid mb-15"
                  style={{ width: "147px" }}
                  alt=""
                />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    maxWidth: "240px",
                  }}
                >
                  99xSEO™ is a platform designed for business and Agile
                  Enterprises to build & grow their business with quality search
                  marketing services & structured services.
                </p>
                <div>
                  <a href="mailto:business@99x.network">business@99x.network</a>
                </div>
                {/* <div className="social-media">
                                    <img src="https://ik.imagekit.io/99x/startup/linkedin_white_CVtihrtra.png" />
                                    <img src="https://ik.imagekit.io/99x/startup/twitter_white_V96bgvSysV.png" style={{marginLeft:"15px"}}/>
                                </div> */}
              </div>
              <div className="site-menu">
                {SEO_Footer.map((mr, i) => (
                  <div className="menu-section">
                    <h2>{mr.title}</h2>
                    <ul>
                      {mr.links.map((m, i) => (
                        <li key={i}>
                          {m.link && <NavLink to={m.link}>{m.title}</NavLink>}
                          {m.href && (
                            <a href={m.link} target="_blank">
                              {m.title}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-copyright">
              ©2020 99xapps, All rights reserved.
            </div>
          </div>
        </footer>
      );
    }

    if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.SOCIAL.CODE) {
      return (
        <footer>
          <div className="container pv-30">
            <div className="footer-container">
              <div className="site-info">
                <img
                  src={SiteService.getActiveSiteSettings().LOGO_URL_WHITE}
                  className="img-fluid mb-15"
                  style={{ width: "147px" }}
                  alt="img"
                />

                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    maxWidth: "240px",
                  }}
                >
                  99xSocial™ is an Integrated Social Media Management &
                  Marketing Platform for Digital Brands and Businesses.
                </p>
              </div>
              <div className="site-menu">
                {Social_Footer.map((mr, i) => (
                  <div className="menu-section">
                    <h2>{mr.title}</h2>
                    <ul>
                      {mr.links.map((m, i) => (
                        <li key={i}>
                          {m.link && <NavLink to={m.link}>{m.title}</NavLink>}
                          {m.href && (
                            <a href={m.link} target="_blank">
                              {m.title}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-copyright">
              ©2020 99xapps, All rights reserved.
            </div>
          </div>
        </footer>
      );
    }

    if (ENV.CURRENT_SITE == ENV.NETWORK_SITES.DESIGN.CODE) {
      return (
        <Parallax speed={0}>
          <footer>
            <div className="footer-container">
              <div className="flex-wrapper">
                <div className="site-info">
                  <img src={logoWhite} className="" alt="" />
                  <p>A Premier Product Design Studio.</p>
                  <a
                    className="email"
                    href="mailto:business@99x.network"
                    target="_blank"
                  >
                    business@99x.network
                  </a>
                </div>
                <div className="site-menu-mobile">
                  <p>Services</p>
                  <p>Process</p>
                  <p>Our Work</p>
                  <p>Contact</p>
                  <p>About</p>
                  <p>Terms of Service</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="site-social">
                  <div className="site-social-follow">
                    <div>
                      <small>Follow us @</small>
                    </div>
                    <div>
                      {Design_Footer.social.map((item, idx) => (
                        <span key={idx}>
                          <a href={item.link} target="_blank">
                            {item.icon}
                            {!item.icon && (
                              <svg
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_1_9556)">
                                  <path
                                    d="M3.09521 -0.0507812C1.99021 -0.0507812 1.09521 0.884901 1.09521 2.04013V20.8583C1.09521 22.0135 1.99021 22.9492 3.09521 22.9492H21.0952C22.2002 22.9492 23.0952 22.0135 23.0952 20.8583V2.04013C23.0952 0.884901 22.2002 -0.0507812 21.0952 -0.0507812H3.09521ZM14.5952 7.2674H17.1519C17.4279 7.2674 17.6519 7.50158 17.6519 7.79013C17.6519 8.07867 17.4279 8.31285 17.1519 8.31285H14.5952C14.3192 8.31285 14.0952 8.07867 14.0952 7.79013C14.0952 7.50158 14.3192 7.2674 14.5952 7.2674ZM6.01514 7.66966H8.80029C10.4443 7.66966 11.4253 8.51049 11.4253 9.87899C11.4253 10.8178 10.7611 11.637 9.89209 11.7718V11.8821C11.0141 11.9678 11.8296 12.8518 11.8296 13.9934C11.8306 15.5459 10.7089 16.5295 8.8999 16.5295H6.01514C5.50714 16.5295 5.09521 16.0988 5.09521 15.5677V8.63139C5.09521 8.1003 5.50714 7.66966 6.01514 7.66966ZM6.86865 9.08674V11.341H8.20068C9.15868 11.342 9.68115 10.9299 9.68115 10.218C9.68115 9.51227 9.19512 9.08674 8.34912 9.08674H6.86865ZM16.0581 9.60946C17.9671 9.60946 19.0933 10.8812 19.0933 13.0297V13.5748H14.6499V13.6667C14.6729 14.6735 15.2374 15.3002 16.1304 15.3002C16.8054 15.3002 17.2687 15.0494 17.4507 14.6019H19.0425C18.7845 15.8795 17.6675 16.6765 16.0815 16.6765C14.1085 16.6765 12.9468 15.3742 12.9468 13.1767C12.9468 10.9729 14.1321 9.60946 16.0581 9.60946ZM16.0659 10.9796C15.2729 10.9796 14.7138 11.5552 14.6558 12.4334H17.4155C17.3795 11.5375 16.8639 10.9796 16.0659 10.9796ZM6.86865 12.5947V15.1124H8.44873C9.47073 15.1124 10.0229 14.6622 10.0229 13.8342C10.0229 13.0229 9.45271 12.5947 8.40771 12.5947H6.86865Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_1_9556">
                                    <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0.0952148)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </a>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div className="site-menu">
                {/* <div className="left-company">
                  <span className="desktop-only">Company</span>
                </div> */}
                <div className="right-links">
                  {Design_Footer.links.map((item, idx) => (
                    <span key={idx}>
                      <Link
                        className={item.bigText && "big-text"}
                        title={item.link.title}
                        to={item.link.href}
                        target="_blank"
                      >
                        {item.title}
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              ©2021 99x All rights reserved.
            </div>
          </footer>
        </Parallax>
      );
    }

    let footerMenu = {
      Subscription: [
        {
          title: "SEO",
          link: "/c/seo",
        },
        {
          title: "Social Media",
          link: "/c/social-media",
        },
        {
          title: "Digital Marketing",
          link: "/c/digital-marketing",
        },
        {
          title: "Graphic Design",
          link: "/c/graphic-design",
        },
        {
          title: "UI/UX Design",
          link: "/c/ui-ux",
        },
        {
          title: "Video Editing",
          link: "/c/video",
        },
        {
          title: "Web Development",
          link: "/c/web-dev",
        },
        {
          title: "App Development",
          link: "/c/mobile-app-dev",
        },
        {
          title: "App Search Optimization",
          link: "/c/aso",
        },
        {
          title: "All-in-one Copywriting",
          link: "/c/content-all",
        },
        {
          title: "Articles & Blogs",
          link: "/c/article-and-blogs",
        },
        {
          title: "CXO Marketing",
          link: "/c/cxo-marketing",
        },
      ],
      OnDemand: [
        {
          title: "Pitch Decks",
          link: "/on-demand/pitch-deck",
        },
        {
          title: "Logo Design",
          link: "/on-demand/logo-design",
        },
        {
          title: "Stationery Kits",
          link: "/on-demand/stationary",
        },
        {
          title: "Promo Videos",
          link: "/on-demand/videos",
        },
        // {
        //     title:'Brand Style Guide',
        //     link:''
        // },
      ],
      AllAccessPack: [
        {
          title: "Digital All Access",
          link: "/all-access/digital",
        },
        {
          title: "Design All Access",
          link: "/all-access/design",
        },
        {
          title: "Video All Access",
          link: "/all-access/studio",
        },
        {
          title: "Tech All Access",
          link: "/all-access/tech",
        },
      ],
      Product: [
        {
          title: "How it works?",
          link: "/how-it-works",
        },
        {
          title: "Schedule Consult",
          link: "/contact",
        },
        {
          title: "Feature Work",
          link: "",
        },
      ],
      Company: [
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Creators",
          link: "/creators",
        },
        {
          title: "Business",
          link: "/brands",
        },
        {
          title: "Enterprises",
          link: "/enterprise-plan",
        },
        {
          title: "Terms of Service",
          link: "/p/terms",
        },
        {
          title: "Privacy Policy",
          link: "/p/privacy-policy",
        },
        // {
        //     title:'Refund Policy',
        //     link:''
        // },
      ],
      Support: [
        {
          title: "Support",
          href: "https://99x.freshdesk.com",
        },
      ],
    };

    return (
      <footer>
        <div className="container pv-30">
          <div className="footer-container">
            <div className="site-info">
              <img
                src="https://ik.imagekit.io/99x/startup/99xStartup_white_uUGDgdALbr.png"
                className="img-fluid mb-15"
                style={{ width: "147px" }}
              />
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  maxWidth: "240px",
                }}
              >
                99x Startup is a platform designed for Startups and Agile
                Enterprises alike to build & grow their business with quality
                work & structured services.
              </p>
              <p>
                <a className="email" href="mailto:business@99x.network">
                  business@99x.network
                </a>
              </p>

              {/* <div className="social-media">
                                <img src="https://ik.imagekit.io/99x/startup/linkedin_white_CVtihrtra.png" />
                                <img src="https://ik.imagekit.io/99x/startup/twitter_white_V96bgvSysV.png" style={{marginLeft:"15px"}}/>
                            </div> */}
            </div>
            <div className="site-menu">
              <div className="menu-section">
                <h2>Subscription</h2>
                <ul>
                  {footerMenu.Subscription.map((m, i) => (
                    <li key={i}>
                      <NavLink to={m.link}>{m.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="menu-section">
                <h2>On-Demand</h2>
                <ul>
                  {footerMenu.OnDemand.map((m, i) => (
                    <li key={i}>
                      <NavLink to={m.link}>{m.title}</NavLink>
                    </li>
                  ))}
                </ul>

                <br />

                <h2>All Access Passes</h2>
                <ul>
                  {footerMenu.AllAccessPack.map((m, i) => (
                    <li key={i}>
                      <NavLink to={m.link}>{m.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="menu-section">
                <h2>Product</h2>
                <ul>
                  {footerMenu.Product.map((m, i) => (
                    <li key={i}>
                      <NavLink to={m.link}>{m.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="menu-section">
                <h2>Company</h2>
                <ul>
                  {footerMenu.Company.map((m, i) => (
                    <li key={i}>
                      <NavLink to={m.link}>{m.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="menu-section">
                <h2>Support</h2>
                <ul>
                  {footerMenu.Support.map((m, i) => (
                    <li key={i}>
                      <a href={m.href} target="_blank">
                        {m.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            ©2020 99xapps, All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterLayout;
