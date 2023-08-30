import React, { useEffect, useRef } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import W3SelectCurrency from "../w3select-currency/W3Select-Currency";
import MobileMenu from "./mobile";
import ENV from "../../env.config";

import MegaMenu_SEO from "./sites/seo";
import MegaMenu_Startup from "./sites/startup";
import MegaMenu_Social from "./sites/social";
import MegaMenu_Design from "./sites/design";

import "./style.scss";
import DesktopMenu from "./desktop";

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
        console.log(ref.current);
        ref.current.style.display = "";
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

const W3SuperMenu = (props) => {
  const [
    wrapperRef1,
    wrapperRef2,
    wrapperRef3,
    wrapperRef4,
    wrapperRef5,
    wrapperRef6,
  ] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  useOutsideAlerter(wrapperRef1);
  useOutsideAlerter(wrapperRef2);
  useOutsideAlerter(wrapperRef3);
  useOutsideAlerter(wrapperRef4);
  useOutsideAlerter(wrapperRef5);
  useOutsideAlerter(wrapperRef6);

  const userMenuRef = useRef(null);
  useOutsideAlerter(userMenuRef);

  const menuItem = useRef();

  const w3_auth =
    localStorage.getItem("w3_auth") || localStorage.getItem("token");
  const loggedIn = w3_auth ? true : false;

  let user_mode = 1;
  if (
    localStorage.getItem("user_type") &&
    localStorage.getItem("user_type") == "2"
  )
    user_mode = 2;

  const ProfileMenuLinks = [
    {
      text: "For Creators",
      link: "/creators",
    },
    {
      text: "For Business",
      link: "/brands",
    },
    {
      text: "For Enterprise",
      link: "/enterprise-plan",
    },
    {
      text: "How it works",
      link: "/how-it-works",
    },
    {
      text: "Featured Works",
      link: "/",
    },
  ];

  let MegaMenuItems = [];

  // console.log(ENV.CURRENT_SITE);

  if (ENV.CURRENT_SITE == 1) MegaMenuItems = MegaMenu_Startup;
  if (ENV.CURRENT_SITE == 3) MegaMenuItems = MegaMenu_Design;
  if (ENV.CURRENT_SITE == 5) MegaMenuItems = MegaMenu_SEO;
  if (ENV.CURRENT_SITE == 6) MegaMenuItems = MegaMenu_Social;

  if (ENV.CURRENT_SITE != 1) {
    ProfileMenuLinks.splice(0, 2);
  }

  useEffect(() => {
    let menuItem = document.querySelectorAll('[data-toggle="dropdown"]');
    menuItem.forEach((mi) => {
      mi.addEventListener("click", function (e) {
        //console.log(e.target)
        if (e.target.nextSibling)
          return (
            1 &&
            (e.target.nextSibling.style.display =
              e.target.nextSibling.style.display === "" ? "block" : "")
          );
        if (e.target.parentElement.nextSibling)
          return (e.target.parentElement.nextSibling.style.display =
            e.target.parentElement.nextSibling.style.display === ""
              ? "block"
              : "");
      });
    });
    // menuItem.current.addEventListener('click', function(e){

    //   //let x = e.querySelector(".dropdown-menu");
    //   console.log(e.target.nextSibling.style.display);
    //   e.target.nextSibling.style.display = (e.target.nextSibling.style.display === "") ? 'block':'';

    // })
  }, []);

  return (
    <>
      <nav className="site__menu desktop-only">
        <div class="navbar p-0">
          <DesktopMenu
            menu={MegaMenuItems}
            fx={props.fx}
            profile_links={ProfileMenuLinks}
            theme={props.theme}
          />
        </div>
      </nav>
      <MobileMenu
        theme={props.theme}
        menu={MegaMenuItems}
        profile_menu={ProfileMenuLinks}
      />
    </>
  );
};

export default W3SuperMenu;
