import React from "react";
import "./style.scss";
import { RiDeleteBack2Fill } from "react-icons/ri";
import ContactHeader from "views/_design/contact/contactHeader";

const Modal = ({ setOpenModal, email }) => {
	console.log("contact");

	console.log({ email });
	return (
		<>
			<div className="modal-window">
				<div className="modalContainer">
					<div className="titleCloseBtn">
						<button
							onClick={() => {
								console.log("closed");
								setOpenModal(false);
							}}
						>
							<RiDeleteBack2Fill className="icon-close"></RiDeleteBack2Fill>
						</button>
					</div>

					<div>
						<ContactHeader email={email || ""} setOpenModal={setOpenModal}></ContactHeader>
					</div>
				</div>
			</div>
		</>
	);
};
export default Modal;
