import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "views/_design/ourWork/Modal/Modal";
import "./style.scss";
import Ripples from "react-ripples";

const ServicesC2A = ({ bg = "#FF6666", bgBtn = "#3D3D3D", shortwidth=false, titleColor="#ffffff" }) => {
  const [modalOpen, setModalOpen] = useState("");
  return (
    <div className="services-c2a" style={{ backgroundColor: bg }}>
      <h2 className={shortwidth ? "short-heading" : ""} style={{color: titleColor}}>See how 99x Studio can fit your needs.</h2>
      {/*       
          <NavLink
						// exact
						to="/get-a-demo"
						style={{color:"white"}}
					>

            <button>Talk to us</button>
					</NavLink> */}
      <Ripples color={bg} during={1200}>
        <button
          className="btn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Talk to us
        </button>
      </Ripples>

      <div>{modalOpen && <Modal setOpenModal={setModalOpen}></Modal>}</div>
    </div>
  );
};

export default ServicesC2A;
