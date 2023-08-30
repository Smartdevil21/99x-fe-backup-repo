import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "views/_design/ourWork/Modal/Modal";
// import clients from "../../../../assets/_design/trusted-clients.png";
import "./style.scss";
import Ripples from "react-ripples";

const TrustedClients = ({ variant, text = "", reversecol=false }) => {
  const [modalOpen, setModalOpen] = useState("");
  return (
    <div className={`trusted-clients-container ${variant} ${reversecol ? "reverse-col": ""}`}>
      <div className="trusted-clients-left">
        <h2>
          Trusted by <span> 100+ Clients</span> Globally.
        </h2>
        <p>{text}</p>

        {/* <NavLink
          // exact
          to="/get-a-demo"
          style={{ color: "white" }}
        >
          <button>
            Schedule a call
          </button>

        </NavLink> */}
        {/* <a className="btn" href="https://calendly.com/99x/introduction?month=2022-08" target={"_blank"}>
          Schedule a Call
        </a> */}
        <Ripples color={variant} during={1200}>
          <button
            className="btn"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Schedule a Call
          </button>
        </Ripples>

        <div>{modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}</div>
      </div>
      <div className="trusted-clients-right">
        <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/trusted-clients.webp'} alt="" />
      </div>
    </div>
  );
};

export default TrustedClients;
