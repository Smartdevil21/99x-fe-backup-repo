import React, { useState } from "react";
import "./sticky.scss";
import Modal from "views/_design/ourWork/Modal/Modal";
import "./style.scss";
import Ripples from "react-ripples";

const StickyFooter = () => {
	const [modalOpen, setModalOpen] = useState("");
	return (
		<div id="sticky">
			<Ripples color={"#ffffff"} during={1200} className="ripple">
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
	);
};

export default StickyFooter;
