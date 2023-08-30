/* eslint-disable array-callback-return */
import W3SelectCurrency from "components/w3select-currency/W3Select-Currency";
import React, { useState } from "react";
import ENV from "../../env.config";
import { NavLink } from "react-router-dom";
import MediaList from "./components/media-list";
import SiteService from "../../service/site.service";
import { IoLogoWhatsapp } from "react-icons/io";
import Modal from "views/_design/ourWork/Modal/Modal";
import Logo from "../../assets/_design/logo-studio.png";
import Ripples from "react-ripples";
import "./style.scss";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const UserIcon = () => {
  if (ENV.CURRENT_SITE == 3)
    return "https://ik.imagekit.io/99x/design/_new/Profile_qErN30dSw9z.svg";
  if (ENV.CURRENT_SITE == 5)
    return "https://ik.imagekit.io/99x/social/Frame_961_BaXakTEzS.svg";
  if (ENV.CURRENT_SITE == 6)
    return "https://ik.imagekit.io/99x/social/Frame_961_1__lPxwoYGuo3.svg";
  return "https://ik.imagekit.io/99x/startup/icons/menu/Profile_S0_y_cQgn.png";
};

const ProfileMenu = (props) => {
  const w3_auth =
    localStorage.getItem("w3_auth") || localStorage.getItem("token");
  const loggedIn = w3_auth ? true : false;

  let user_mode = 1;
  if (
    localStorage.getItem("user_type") &&
    localStorage.getItem("user_type") == "2"
  )
    user_mode = 2;

  return (
    <li class="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <img src={UserIcon()} />
      </a>
      <ul className="dropdown-menu profile_submenu">
        {loggedIn ? (
          <>
            <li className="profile_submenu-item">
              <a
                href={`${ENV.PORTAL_URL}/?token=${w3_auth}&user_mode=${user_mode}`}
                target="_blank"
              >
                Profile
              </a>
            </li>
            <li className="profile_submenu-item">
              <a
                href={`${ENV.PORTAL_URL}/?token=${w3_auth}&user_mode=${user_mode}`}
                target="_blank"
              >
                Dashboard
              </a>
            </li>
          </>
        ) : (
          <>
            <li className="profile_submenu-item account-section">
              <NavLink to="/ab/account-security/login" className="join-now">
                Join Now
              </NavLink>
            </li>
            <li className="profile_submenu-item account-section">
              <NavLink to="/ab/account-security/login" className="login">
                Login
              </NavLink>
              <hr />
            </li>
          </>
        )}

        {props.links.map((link, i) => (
          <li className={`profile_submenu-item ${i == 0 ? "mt-20" : ""}`}>
            <NavLink to={link.link}>{link.text}</NavLink>
          </li>
        ))}

        <hr />
        <li className="profile_submenu-item">
          <NavLink to="/ab/account-security/login">Support</NavLink>
        </li>
        {loggedIn ? (
          <li className="profile_submenu-item">
            <NavLink
              to="/"
              onClick={() => {
                localStorage.clear();
                window.top.location.reload();
              }}
            >
              Logout
            </NavLink>
          </li>
        ) : null}
      </ul>
    </li>
  );
};

export default function DesktopMenu(props) {
  let [activeMegaMenu, setActiveMegaMenu] = useState(null);
  let [activeMegaMenuIndex, setActiveMegaMenuIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState("");
  console.log(props.theme);
  const location = useLocation();
  const { pathname } = location;
  const blackHeader = pathname === "/web-application-design";

  const dropdown = [
    { title: "Web application", link: "/web-application-design" },
    { title: "Mobile application", link: "/mobile-application-design" },
    { title: "Packaging Design", link: "/packaging-design-services" },
    { title: "Logo Design", link: "/logo-design-services" },
  ];

  if (ENV.CURRENT_SITE == 3) {
    return (
      <div class="navbar-inner">
        <ul class="nav nav-mega align-items-center ">
          <li className="flex-grow-1">
            <NavLink exact to="/">
              <img
                className="w-8vw"
                // src={SiteService.getActiveSiteSettings().LOGO_URL}
                // className="img-fluid"
                src={
                  props.theme === "black"
                    ? "https://99xassets.s3.ap-south-1.amazonaws.com/studio_logo.png"
                    : Logo
                }
                alt="logo"
              />
            </NavLink>
          </li>

          {props.menu.map((mi, i) => {
            if (mi.megamenu) {
              let activeSubmenu = activeMegaMenu || mi.megamenu[0].submenu;

              return (
                <>
                  <li className="dropdown design-menu ">
                    <a className="dropdown-toggle f-1vw" data-toggle="dropdown">
                      {mi.title}
                    </a>
                    <ul className="dropdown-menu mega-menu navlinks">
                      <li style={{ display: "flex" }}>
                        <ul
                          className="megamenu-labels"
                          style={{ width: "250px" }}
                        >
                          {mi.megamenu.map((m1, i) => (
                            <li
                              onClick={() => {
                                setActiveMegaMenu(m1.submenu);
                                setActiveMegaMenuIndex(i);
                              }}
                              className={`${
                                activeMegaMenuIndex == i ? "active" : null
                              }`}
                              data-menu={`mm-${i}`}
                            >
                              <img src={m1.icon} />
                              <span>{m1.title}</span>
                            </li>
                          ))}
                        </ul>
                        <ul
                          className="megamenu-active-menu"
                          style={{ width: "100%" }}
                        >
                          <div className="row-fluid">
                            <ul>
                              <li className="mega-menu-grid">
                                {activeSubmenu.map((smi, i) => {
                                  if (smi.href) {
                                    return (
                                      <img
                                        src={smi.icon}
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      />
                                    );
                                  }
                                  return (
                                    <MediaList
                                      icon={smi.icon}
                                      // icon_selected={smi.icon_hover}
                                      title={smi.title}
                                      subtitle={smi.subtitle}
                                      link={smi.link}
                                    />
                                  );
                                })}
                              </li>
                            </ul>
                          </div>
                        </ul>
                      </li>
                    </ul>
                    {/*                                         
                                        <ul className="dropdown-menu mega-menu">
                                            <li>
                                               
                                            </li>
                                        </ul> */}
                  </li>
                </>
              );
            }
            if (mi.link !== "/services") {
              return (
                <li className="normal-link  px-half">
                  <NavLink to={mi.link}> {mi.title}</NavLink>
                </li>
              );
            }
            if (mi.link === "/services") {
              return (
                <>
                  <div
                    className={`services normal-link ${
                      blackHeader && "black_header"
                    } `}
                  >
                    {mi.title}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 6 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.95454 3.28811L0.678804 1.01238C0.489814 0.823387 0.623664 0.500244 0.890936 0.500244H5.44241C5.70968 0.500244 5.84353 0.823387 5.65454 1.01238L3.3788 3.28811C3.26165 3.40527 3.0717 3.40527 2.95454 3.28811Z"
                        fill="#7E7E7E"
                      />
                    </svg>
                    <div class="dropdown-content">
                      {dropdown.map((item) => {
                        return (
                          <NavLink to={item.link}>
                            {item.title}
                            <svg
                              width="4"
                              height="7"
                              viewBox="0 0 4 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.28807 3.71213L1.01233 5.98787C0.823341 6.17686 0.500198 6.04301 0.500198 5.77574L0.500198 1.22426C0.500198 0.956992 0.823341 0.823143 1.01233 1.01213L3.28807 3.28787C3.40522 3.40503 3.40522 3.59497 3.28807 3.71213Z"
                                fill="#7E7E7E"
                              />
                            </svg>{" "}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </>
                // <li className="normal-link  px-half">
                //   <NavLink to={mi.link}> {mi.title}</NavLink>
                // </li>
              );
            }
          })}

          <li
            style={{ marginLeft: "2vw", marginRight: "1vw" }}
            className="flex-grow-1 text-right"
          >
            {props.theme !== "black" && (
              <Ripples during={1200}>
                <button
                  className={`btn-bordered weight-700 getademo demo-${ENV.CURRENT_SITE}`}
                  style={{ background: "white !important" }}
                  onClick={() => {
                    setTimeout(() => {
                      setModalOpen(true);
                    }, 300);
                  }}
                >
                  Get in Touch
                </button>
              </Ripples>
            )}
            {props.theme === "black" && (
              <Ripples color={"#0000004a"} during={1200}>
                <button
                  className={`btn-bordered weight-700 getademo f-1vw}`}
                  style={{ color: "black" }}
                  onClick={() => {
                    setTimeout(() => {
                      setModalOpen(true);
                    }, 300);
                  }}
                >
                  Get in Touch
                </button>
              </Ripples>
            )}

            <div>
              {modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}
            </div>
            {/* <a
							className={`btn-bordered weight-700 getademo f-1vw demo-${ENV.CURRENT_SITE}`}
							href="https://calendly.com/99x/introduction"
							target={"_blank"}>
							Get in Touch
						</a> */}
          </li>
          {/* <li className="flex-grow-1 ">
					<a 
						href="https://api.whatsapp.com/send?phone=919867390809&text=Hi%2099x" target={"_blank"}>
						<IoLogoWhatsapp style={{fontSize: "3.2vw", color:"#25D366"}}/>
						</a>
						
					</li> */}
          {/* <ProfileMenu links={props.profile_links} /> */}
        </ul>
      </div>
    );
  }
  return (
    <div class="navbar-inner">
      <ul class="nav nav-mega">
        {props.menu.map((mi, i) => {
          if (mi.submenu) {
            return (
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown">
                  {mi.title}
                </a>

                <ul className="dropdown-menu mega-menu">
                  <li>
                    <div className="row-fluid">
                      {mi.submenu.map((smi, i) => {
                        return (
                          <MediaList
                            icon={smi.icon}
                            // icon_selected={smi.icon_hover || smi.icon}
                            title={smi.title}
                            subtitle={smi.subtitle}
                            link={smi.link}
                          />
                        );
                      })}
                    </div>
                  </li>
                </ul>
              </li>
            );
          }

          if (mi.link) {
            return (
              <li className="normal-link px-half">
                <NavLink to={mi.link}>{mi.title}</NavLink>
              </li>
            );
          }
        })}

        <li>
          <W3SelectCurrency fx={props.fx} />
        </li>

        <li className="flex-grow-1">
          <NavLink
            exact
            to="/get-a-demo"
            className={`btn-bordered weight-700 getademo demo-${ENV.CURRENT_SITE}`}
          >
            Get in Touch
          </NavLink>
        </li>

        <ProfileMenu links={props.profile_links} />
      </ul>
    </div>
  );
}
