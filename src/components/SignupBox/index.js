import React, { useRef, useState, useEffect } from "react";
import "./style.scss";
import W3Modal from "../w3modal/W3Modal";
import { useForm } from "react-hook-form";
import Modal from "views/_design/ourWork/Modal/Modal";

export default function SignupBox(props) {
	const [thankYou, setThankYou] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [email, setEmail] = useState(null);
	const { register, formState, handleSubmit, reset, getValues } = useForm();
	let { errors } = formState;
	let saveLead = (data) => {
		setModalOpen(true);
		setEmail(data.email);
		// resetField("email")
		reset();
	};
	useEffect(() => {
		console.log("state change", { thankYou, modalOpen, email });
	}, [thankYou, modalOpen, email]);

	console.log("signup");
	console.log({ modalOpen });

	return (
		<>
			<div className="signup-box">
				<form className="signup-form-group" onClick={handleSubmit(saveLead)}>
					<input
						type="email"
						placeholder="Your Email Address"
						{...register("email", {
							required: {
								value: true,
								message: "Email is Required",
							},
							pattern: {
								value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
								message: "Provide a valid Email",
							},
						})}
					/>

					{/* <button
						className="submit"
					>
						Let's Talk
						<i className="fa fa-chevron-right"></i>
					</button> */}
					{/* <input className="submit" type="submit" value="Let's Talk"/> */}

					<button
						className="submit"
						onClick={() => {
							setTimeout(() => {
								setModalOpen(true);
							}, 1000);
						}}
					>
						Let's Talk
						<i className="fa fa-chevron-right"></i>
					</button>
				</form>

				{/* {errors.email?.type === "required" && (
					<span style={{ color: "#ff0000" }}>{errors.email.message}</span>
				)}
				{errors.email?.type === "pattern" && (
					<span style={{ color: "#ff0000" }}>{errors.email.message}</span>
				)} */}

				{props.noOffer ? null : (
					<div className="offer">{/* Sign up today & get credits worth Rs. 2000/-  */}</div>
				)}
				<div>{modalOpen && <Modal setOpenModal={setModalOpen} email={email}></Modal>}</div>

				<W3Modal
					className="featured-work-modal"
					show={thankYou}
					onClick={() => {}}
					onModalChange={() => {
						setThankYou(false);
					}}
					showFooter="false"
					backdrop="static"
				>
					<h1>Thank You</h1>
				</W3Modal>
			</div>
		</>
	);
}
