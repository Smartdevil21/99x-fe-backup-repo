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
              <svg
                width="205"
                height="75"
                viewBox="0 0 205 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="205" height="75" fill="white" />
                <rect
                  width="164"
                  height="35.7436"
                  transform="translate(17 20.1665)"
                  fill="white"
                />
                <path
                  d="M103.139 36.838V33.1095H106.789V27.2955H110.988V33.1095H115.016V36.838H110.988V45.1546C110.988 46.1059 111.154 46.8582 111.486 47.4115C111.818 47.9663 112.705 48.2436 113.688 48.2436C114.121 48.2393 114.554 48.1926 114.979 48.1039C115.376 48.0416 115.755 47.8858 116.084 47.6487V51.6503C115.542 51.9087 114.963 52.0753 114.369 52.1436C113.777 52.2305 113.181 52.2771 112.583 52.2834C111.602 52.3112 110.624 52.168 109.691 51.8599C108.994 51.6203 108.379 51.1791 107.921 50.5896C107.466 49.9658 107.162 49.2401 107.034 48.4723C106.865 47.5055 106.784 46.5243 106.795 45.542V36.838H103.139Z"
                  fill="#F52F57"
                />
                <path
                  d="M98.6933 38.2967C98.3054 37.6963 97.7753 37.2066 97.1525 36.8734C96.5297 36.5401 95.8346 36.3742 95.1323 36.3912C94.5103 36.3949 93.8988 36.5556 93.3518 36.8591C93.0769 36.996 92.8477 37.2132 92.6929 37.4833C92.5382 37.7534 92.4649 38.0644 92.4822 38.3772C92.4691 38.6344 92.5304 38.8899 92.6582 39.1117C92.7861 39.3335 92.9748 39.5118 93.201 39.6242C93.7782 39.9204 94.3887 40.1429 95.0187 40.2869C95.7513 40.469 96.541 40.6575 97.3879 40.8522C98.2129 41.0395 99.0092 41.3408 99.755 41.7478C100.481 42.1436 101.104 42.7112 101.573 43.4035C102.052 44.1093 102.292 45.0705 102.294 46.2872C102.326 47.2777 102.083 48.2573 101.593 49.1117C101.137 49.8666 100.514 50.5006 99.7736 50.9622C98.9961 51.4433 98.1448 51.7862 97.2557 51.9763C96.3342 52.1823 95.3938 52.2867 94.4506 52.2876C93.1254 52.302 91.807 52.0916 90.5488 51.6651C89.3111 51.2148 88.213 50.4342 87.3678 49.4039L90.398 46.482C90.9411 47.1247 91.573 47.6825 92.2735 48.1377C93.0126 48.5832 93.8602 48.8035 94.7171 48.7729C95.061 48.7715 95.4038 48.7325 95.7396 48.6565C96.0861 48.5811 96.4187 48.4496 96.7248 48.2669C97.0154 48.0963 97.2668 47.8638 97.4623 47.5851C97.7079 47.2062 97.8 46.744 97.7191 46.2967C97.6381 45.8493 97.3904 45.4518 97.0285 45.1884C96.4635 44.8409 95.8497 44.5846 95.2087 44.4283C94.4747 44.2335 93.6857 44.0514 92.8416 43.882C92.0195 43.723 91.2228 43.448 90.4744 43.0648C89.7515 42.6979 89.1268 42.1557 88.6546 41.4853C88.1754 40.812 87.9358 39.8769 87.9358 38.6799C87.9128 37.7378 88.1262 36.8054 88.5555 35.972C88.96 35.2225 89.5249 34.5768 90.208 34.0834C90.9192 33.5759 91.7152 33.2063 92.5565 32.993C94.634 32.4397 96.826 32.5416 98.8462 33.2852C100.006 33.6935 101.012 34.4625 101.726 35.485L98.6933 38.2967Z"
                  fill="#F52F57"
                />
                <path
                  d="M134.06 51.8309H129.741V48.816H129.664C129.213 49.7816 128.538 50.6191 127.698 51.255C126.816 51.9439 125.618 52.2897 124.102 52.2925C123.038 52.3274 121.981 52.1229 121.003 51.6933C120.198 51.3254 119.49 50.7658 118.938 50.0609C118.405 49.3642 118.019 48.5618 117.804 47.7044C117.571 46.8013 117.455 45.871 117.459 44.9371L117.44 33.1313H121.984L122.001 42.5976C122.001 43.1184 122.027 43.6964 122.079 44.3316C122.125 44.9458 122.26 45.5495 122.48 46.1228C122.685 46.6697 123.026 47.1526 123.467 47.5244C123.909 47.9013 124.533 48.0876 125.343 48.0876C126.001 48.1069 126.656 47.9723 127.256 47.6938C127.757 47.4456 128.196 47.0836 128.54 46.6352C128.885 46.1854 129.136 45.668 129.278 45.115C129.43 44.5301 129.506 43.927 129.503 43.3217L129.486 33.1144H134.031L134.06 51.8309Z"
                  fill="#F52F57"
                />
                <path
                  d="M150.025 49.0951H149.953C149.384 50.1715 148.499 51.0368 147.423 51.5681C146.349 52.0854 145.176 52.3488 143.99 52.3387C142.751 52.3628 141.522 52.1062 140.392 51.5871C139.366 51.098 138.451 50.3941 137.706 49.5207C136.944 48.6172 136.366 47.5661 136.006 46.4295C135.614 45.1952 135.418 43.9039 135.428 42.6057C135.419 41.3041 135.629 40.0106 136.048 38.7819C136.427 37.6514 137.009 36.6037 137.764 35.6929C138.49 34.8202 139.389 34.1152 140.4 33.6243C141.463 33.1151 142.624 32.8575 143.798 32.8706C144.529 32.8595 145.259 32.9507 145.967 33.1416C146.543 33.3025 147.098 33.5357 147.619 33.836C148.065 34.0893 148.48 34.3941 148.858 34.7443C149.163 35.0316 149.44 35.3486 149.685 35.6907H149.792V22.9999H154.13V51.8327H150.025V49.0951ZM139.76 42.6057C139.758 43.3157 139.874 44.0208 140.102 44.6912C140.322 45.3464 140.667 45.9502 141.117 46.4676C141.565 46.9866 142.112 47.4072 142.724 47.7041C143.395 48.0098 144.122 48.1678 144.856 48.1678C145.591 48.1678 146.318 48.0098 146.989 47.7041C147.601 47.4067 148.148 46.9862 148.598 46.4676C149.046 45.9496 149.39 45.3459 149.61 44.6912C150.068 43.3404 150.068 41.871 149.61 40.5202C149.39 39.8657 149.046 39.2621 148.598 38.7438C148.148 38.2258 147.601 37.8054 146.989 37.5074C146.318 37.2016 145.591 37.0436 144.856 37.0436C144.122 37.0436 143.395 37.2016 142.724 37.5074C142.113 37.8049 141.566 38.2254 141.117 38.7438C140.667 39.2615 140.323 39.8653 140.102 40.5202C139.871 41.19 139.752 41.8951 139.749 42.6057H139.76Z"
                  fill="#F52F57"
                />
                <path
                  d="M162.175 42.4494C162.156 41.0589 162.408 39.6784 162.915 38.3885C163.375 37.2229 164.056 36.1622 164.918 35.2677C165.772 34.3964 166.793 33.7153 167.915 33.2668C170.284 32.3239 172.912 32.3239 175.281 33.2668C176.404 33.7147 177.425 34.396 178.278 35.2677C179.141 36.1622 179.822 37.2229 180.282 38.3885C181.271 41.0016 181.271 43.8992 180.282 46.5124C179.821 47.6773 179.14 48.7372 178.278 49.6311C177.424 50.5028 176.404 51.1846 175.281 51.6341C172.912 52.5741 170.285 52.5741 167.915 51.6341C166.793 51.1841 165.773 50.5023 164.918 49.6311C164.056 48.7372 163.375 47.6773 162.915 46.5124C162.408 45.2217 162.156 43.8406 162.175 42.4494ZM166.42 42.6209C166.418 43.3543 166.536 44.0829 166.769 44.7762C166.993 45.452 167.344 46.0763 167.802 46.614C168.259 47.1454 168.815 47.5774 169.438 47.8844C170.119 48.2003 170.859 48.3637 171.607 48.3637C172.354 48.3637 173.094 48.2003 173.775 47.8844C174.398 47.5769 174.954 47.1449 175.411 46.614C175.868 46.0757 176.219 45.4515 176.444 44.7762C176.909 43.3789 176.909 41.8628 176.444 40.4655C176.219 39.7902 175.868 39.1661 175.411 38.6277C174.954 38.0968 174.398 37.6649 173.775 37.3574C173.094 37.0414 172.354 36.878 171.607 36.878C170.859 36.878 170.119 37.0414 169.438 37.3574C168.815 37.6644 168.259 38.0964 167.802 38.6277C167.344 39.1655 166.993 39.7898 166.769 40.4655C166.536 41.1589 166.418 41.8875 166.42 42.6209Z"
                  fill="#F52F57"
                />
                <path
                  d="M155.49 26.2359C155.483 25.5206 155.75 24.8309 156.234 24.3155C156.473 24.0482 156.764 23.8367 157.09 23.6953C157.415 23.5539 157.767 23.486 158.12 23.4962C158.475 23.4873 158.827 23.5519 159.157 23.6862C159.487 23.8204 159.787 24.0215 160.039 24.2774C160.538 24.8014 160.817 25.5047 160.817 26.2369C160.817 26.9692 160.538 27.6724 160.039 28.1965C159.787 28.4521 159.487 28.6529 159.157 28.7868C158.827 28.9206 158.474 28.9849 158.12 28.9756C157.767 28.9861 157.415 28.9185 157.09 28.7775C156.765 28.6364 156.473 28.4253 156.234 28.1584C155.75 27.6423 155.483 26.9519 155.49 26.2359ZM155.947 33.0746H160.417V51.8314H155.947V33.0746Z"
                  fill="#F52F57"
                />
                <path
                  d="M29.7348 39.7913C28.6446 40.284 27.4618 40.5241 26.2708 40.4942C25.1637 40.4892 24.065 40.296 23.0196 39.9226C21.9142 39.5423 20.8954 38.9366 20.0245 38.142C19.0983 37.2813 18.3575 36.2321 17.8494 35.0614C17.2585 33.6753 16.9695 32.1739 17.0025 30.6617C16.9755 29.1164 17.2567 27.5818 17.8288 26.1519C18.333 24.911 19.0884 23.7938 20.0451 22.8744C20.9853 21.9873 22.0924 21.3064 23.2984 20.8736C24.5786 20.403 25.9291 20.1651 27.2891 20.1707C28.6416 20.1604 29.9849 20.3992 31.255 20.8757C32.4579 21.3238 33.5622 22.0118 34.5042 22.8998C35.486 23.8275 36.2648 24.958 36.7892 26.2167C37.3137 27.4754 37.5719 28.8338 37.5468 30.2022C37.5545 31.0861 37.4853 31.969 37.3402 32.8403C37.2064 33.6207 37.0031 34.3868 36.7329 35.1291C36.4584 35.8584 36.1418 36.5704 35.7848 37.2612C35.4158 37.9669 35.0027 38.6854 34.5455 39.4165L26.9834 51.8448H22.2119L29.7348 39.7913ZM33.4941 30.3335C33.5098 29.4486 33.3649 28.5683 33.0665 27.7378C32.7837 26.9713 32.3467 26.2744 31.7838 25.6925C31.2229 25.121 30.5546 24.6723 29.8195 24.3734C28.1885 23.7276 26.3814 23.7276 24.7505 24.3734C24.016 24.6723 23.3484 25.1211 22.7882 25.6925C22.2258 26.2748 21.7888 26.9716 21.5055 27.7378C20.9128 29.4149 20.9128 31.2521 21.5055 32.9293C21.7888 33.6955 22.2258 34.3922 22.7882 34.9745C23.3484 35.5459 24.016 35.9947 24.7505 36.2936C26.3814 36.9394 28.1885 36.9394 29.8195 36.2936C30.5546 35.9947 31.2229 35.546 31.7838 34.9745C32.3462 34.3922 32.7832 33.6955 33.0665 32.9293C33.3649 32.0987 33.5098 31.2185 33.4941 30.3335Z"
                  fill="black"
                />
                <path
                  d="M51.6458 39.7875C50.5589 40.2789 49.3798 40.5189 48.1922 40.4904C47.0851 40.4842 45.9867 40.291 44.9409 39.9187C43.8364 39.5379 42.8184 38.9323 41.9479 38.1381C41.0218 37.277 40.2804 36.2279 39.7708 35.0575C39.1709 33.6743 38.8727 32.1735 38.8971 30.66C38.87 29.1147 39.1512 27.5801 39.7233 26.1502C40.2267 24.9094 40.9815 23.7922 41.9376 22.8727C42.8785 21.9855 43.9862 21.3047 45.1929 20.8719C46.4732 20.4014 47.8236 20.1629 49.1836 20.1668C50.5381 20.1564 51.8835 20.3952 53.1557 20.8719C54.3594 21.3196 55.4644 22.0076 56.4069 22.896C57.3884 23.8239 58.1668 24.9544 58.6909 26.2131C59.215 27.4718 59.4728 28.8301 59.4475 30.1984C59.4561 31.0824 59.387 31.9653 59.2409 32.8365C59.1071 33.6168 58.9038 34.383 58.6336 35.1253C58.3584 35.8546 58.0411 36.5666 57.6835 37.2573C57.3158 37.9631 56.9068 38.6816 56.4565 39.4127L48.9006 51.8325H44.1271L51.6458 39.7875ZM55.4051 30.3297C55.4219 29.4447 55.2769 28.5642 54.9776 27.7339C54.6955 26.9671 54.2584 26.27 53.6948 25.6886C53.1347 25.1173 52.4671 24.6685 51.7326 24.3696C50.1016 23.7238 48.2945 23.7238 46.6636 24.3696C45.9288 24.668 45.2611 25.1168 44.7013 25.6886C44.1372 26.27 43.6994 26.967 43.4165 27.7339C42.8239 29.4111 42.8239 31.2482 43.4165 32.9254C43.6999 33.6921 44.1376 34.389 44.7013 34.9707C45.2611 35.5426 45.9288 35.9914 46.6636 36.2898C48.2945 36.9356 50.1016 36.9356 51.7326 36.2898C52.4671 35.9909 53.1347 35.5421 53.6948 34.9707C54.2579 34.389 54.695 33.692 54.9776 32.9254C55.2769 32.0951 55.4219 31.2147 55.4051 30.3297Z"
                  fill="black"
                />
                <path
                  d="M65.837 35.5636L61.838 29.4045H65.9444L67.6816 32.8175L69.8194 29.4045H73.9382L69.6996 35.5636L74.498 42.6014H70.435L67.8695 38.2949L64.8744 42.6014H60.8114L65.837 35.5636Z"
                  fill="black"
                />
                <g clip-path="url(#clip0_254_17)">
                  <path
                    d="M75.4512 25.4235C75.4511 23.6761 76.8695 22.2695 78.6054 22.2691C80.3308 22.2686 81.7594 23.6648 81.7589 25.4239C81.7584 27.1826 80.3287 28.5798 78.6003 28.5768C76.862 28.5737 75.4517 27.1635 75.4512 25.4235ZM78.6074 22.9091C77.2203 22.9074 76.0925 24.0312 76.0915 25.4206C76.0904 26.8113 77.2126 27.9312 78.5934 27.9362C79.9881 27.9412 81.1168 26.818 81.1185 25.4283C81.1203 24.0374 79.9975 22.9109 78.6074 22.9091Z"
                    fill="#1C1C1C"
                  />
                  <path
                    d="M78.073 25.756V26.9953C78.0489 27.0021 77.2644 27.004 77.2237 26.9976V23.7024C77.2341 23.7017 77.2432 23.7005 77.2523 23.7005C77.6983 23.7008 78.1445 23.7006 78.5906 23.7018C78.7629 23.7023 78.9338 23.7188 79.1018 23.7592C79.221 23.7879 79.3347 23.8297 79.4389 23.8957C79.5889 23.9906 79.6899 24.1229 79.7378 24.2936C79.7956 24.4998 79.7977 24.7076 79.74 24.9139C79.6817 25.1224 79.5475 25.2709 79.3586 25.3709C79.3018 25.4009 79.2404 25.4222 79.181 25.4473C79.1735 25.4505 79.1654 25.4526 79.1538 25.4565C79.1619 25.4604 79.1665 25.4637 79.1716 25.4651C79.2967 25.5006 79.3984 25.5725 79.4852 25.6672C79.5518 25.7399 79.6078 25.8204 79.654 25.9069C79.7172 26.0254 79.7773 26.1456 79.8373 26.2658C79.9533 26.4978 80.0683 26.7302 80.1836 26.9625C80.189 26.9734 80.1941 26.9845 80.2011 26.9992C80.1869 27 80.1769 27.0009 80.167 27.0009C79.8866 27.001 79.6063 27.0008 79.3259 27.0014C79.3042 27.0015 79.293 26.995 79.2832 26.975C79.1552 26.7131 79.0262 26.4516 78.8974 26.1899C78.861 26.116 78.8215 26.0439 78.7732 25.9769C78.7195 25.9021 78.6555 25.8393 78.57 25.8013C78.5073 25.7734 78.4414 25.7575 78.3734 25.7553C78.2787 25.7523 78.1838 25.7538 78.0889 25.7534C78.0849 25.7534 78.0809 25.7547 78.073 25.756H78.073ZM78.0743 25.1642C78.0805 25.1654 78.0835 25.1664 78.0865 25.1664C78.2219 25.1662 78.3574 25.1677 78.4928 25.165C78.5678 25.1635 78.6418 25.1508 78.7126 25.1234C78.8125 25.0846 78.8797 25.015 78.9086 24.9118C78.9401 24.7992 78.9412 24.6853 78.91 24.5724C78.8795 24.4618 78.809 24.3881 78.6987 24.3534C78.6438 24.3361 78.5877 24.3237 78.5304 24.3225C78.3846 24.3196 78.2388 24.3191 78.093 24.3179C78.0871 24.3178 78.0812 24.32 78.0743 24.3213V25.1642V25.1642Z"
                    fill="#1C1C1C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_254_17">
                    <rect
                      width="6.30769"
                      height="6.30769"
                      fill="white"
                      transform="translate(75.4512 22.2691)"
                    />
                  </clipPath>
                </defs>
              </svg>
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
