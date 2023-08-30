import React, { useEffect, useRef } from "react";
import Accordion from "react-collapsy";
import { NavLink } from "react-router-dom";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        if (
          event.target.classList &&
          event.target.classList.contains("burger-icon")
        )
          return true;
        document
          .querySelector(".site__menu_mobile-outer")
          .classList.add("site__menu_mobile-outer--collapsed");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export default function MobileMenu(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const ProfileMenuLinks = props.profile_menu;
  const toggleMenu = () => {
    let burgerIcon = document.querySelector(".site__menu_mobile-outer");
    return burgerIcon.classList.contains("site__menu_mobile-outer--collapsed")
      ? burgerIcon.classList.remove("site__menu_mobile-outer--collapsed")
      : burgerIcon.classList.add("site__menu_mobile-outer--collapsed");
  };

  return (
    <>
      <div className="site__menu_mobile-container mobile-only">
        <button
          onClick={() => {
            return toggleMenu();
          }}
        >
          {props.theme !== "black" ? (
            <img
              src={
                "https://ik.imagekit.io/99x/startup/icons/menu/Hamburger_Menu_Jbm0uoq4n.svg"
              }
              className="burger-icon"
              alt="img"
            />
          ) : (
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.600006 1.33333C0.600006 0.596954 1.18204 0 1.90001 0H20.1C20.818 0 21.4 0.596954 21.4 1.33333C21.4 2.06971 20.818 2.66667 20.1 2.66667H1.90001C1.18204 2.66667 0.600006 2.06971 0.600006 1.33333ZM0.600006 8C0.600006 7.26362 1.18204 6.66667 1.90001 6.66667H20.1C20.818 6.66667 21.4 7.26362 21.4 8C21.4 8.73638 20.818 9.33333 20.1 9.33333H1.90001C1.18204 9.33333 0.600006 8.73638 0.600006 8ZM0.600006 14.6667C0.600006 13.9303 1.18204 13.3333 1.90001 13.3333H20.1C20.818 13.3333 21.4 13.9303 21.4 14.6667C21.4 15.403 20.818 16 20.1 16H1.90001C1.18204 16 0.600006 15.403 0.600006 14.6667Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className="site__menu_mobile-outer site__menu_mobile-outer--collapsed mobile-only"
        ref={wrapperRef}
      >
        <div className="site__menu_mobile">
          {props.menu.map((m, index) => {
            if (m.submenu)
              return (
                <Accordion title={m.title}>
                  <ul>
                    {m.submenu.map((sm, i) => (
                      <li>
                        {sm.href ? (
                          <a href={`${sm.link || "/"}`}>
                            <img src={sm.icon} alt="img" />
                            <span className="title">{sm.title}</span>
                          </a>
                        ) : (
                          <NavLink
                            to={`${sm.link || "/"}`}
                            onClick={() => {
                              toggleMenu();
                            }}
                          >
                            <img src={sm.icon} alt="img" />
                            <span className="title">{sm.title}</span>
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </Accordion>
              );

            if (m.link)
              return (
                <>
                  <NavLink
                    className="menu-link-direct"
                    to={m.link}
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    {m.title}
                  </NavLink>
                </>
              );
          })}
          {/* <hr /> */}

          {/* <ul className="profile_menu">
            {ProfileMenuLinks.map((link, i) => (
              <li>
                <NavLink to={link.link}>{link.text}</NavLink>
              </li>
            ))}
          </ul> */}

          {/* <hr /> */}
        </div>
      </div>
    </>
  );
}
