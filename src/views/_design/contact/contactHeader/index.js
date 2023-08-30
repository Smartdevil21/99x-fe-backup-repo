// import { apiRequest } from "../../../../api/index";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import cellImg from "../../../../assets/_design/contact/cell.png";
import mvCall from "../../../../assets/_design/contact/missed_video_call.png";
import "./style.scss";
import { ErrorMessage } from "@hookform/error-message";
import { apiRequest } from "../../../../api";
import Modal from "views/_design/ourWork/Modal/Modal";
import W3Modal from "../../../../components/w3modal/W3Modal";
import Ripples from "react-ripples";
import { leadConversionEvent } from "utils/googleConversions";
import queryString from "query-string";

import { useLocation } from "react-router-dom";

const ContactHeader = ({ email, setOpenModal }) => {
  const { search } = useLocation();
  const values = queryString.parse(search);
  console.log({ values });
  const [modal, openModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm();
  useEffect(() => {
    // log
    if (email) setValue("email", email);
  });

  const selectedReason = watch("reason");

  const getBudget = () => {
    if (
      selectedReason === "Mobile Application Design" ||
      selectedReason === "Web Application Design" ||
      selectedReason === "Website Design"
    ) {
      return ["More than INR 2,00,000", "Less than INR 2,00,000"];
    } else if (
      selectedReason === "Packaging Design" ||
      selectedReason === "Logo Design"
    ) {
      return ["More than INR 20,000", "Less than INR 20,000"];
    } else if (selectedReason === "other") {
      return ["Not Applicable"];
    }
    return [];
  };

  const [thankYou, setThankYou] = useState({ success: false, message: "" });
  console.log({ thankYou });

  const handleContact = (data) => {
    // console.log('you are a beast');
    const Contact = {
      reason: data.reason,
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      cf_budget: data.budget,
      origin: "99x Studio Website",
      ...values,
    };
    console.log(Contact);
    apiRequest({
      method: "post",
      url: "/crm/new-lead",
      data: Contact,
    })
      .then((res) => {
        console.log({ res });
        if (res.success) {
          leadConversionEvent();
        }
        setThankYou(res);
      })
      .catch((e) => {
        console.log({ e });
      });
    // else alert("Please enter the valid data.");
    reset();
    // setOpenModal(false);
  };

  return (
    <div className="contact-header">
      <div className="left">
        <div className="contact-form">
          <div className="form-header">
            <h1 className="form-heading">
              <span>Howdy?</span> Good to see you,
            </h1>
            <p>Drop your details, We'll get back to you soon.</p>
          </div>

          <form className="form-body" onSubmit={handleSubmit(handleContact)}>
            <div className="input-group">
              <select className="first-input" {...register("reason")}>
                <option value="" disabled selected>
                  What are you looking for?
                </option>
                <option value="Mobile Application Design">
                  Mobile Application Design
                </option>
                <option value="Web Application Design">
                  Web Application Design
                </option>
                <option value="Website Design">Website Design</option>
                <option value="Packaging Design">Packaging Design</option>
                <option value="Logo Design">Logo Design</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group twin">
              <div className="input-error-holder">
                <input
                  className="input-padding"
                  type="text"
                  placeholder="Name*"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                <span style={{ color: "#ff0000" }}>
                  <ErrorMessage errors={errors} name="name" />
                </span>
              </div>

              <div className="input-error-holder">
                <input
                  className="twin-2nd input-padding"
                  type="text"
                  placeholder="Mobile Number*"
                  {...register("phone", {
                    required: "Mobile Number is required",
                  })}
                />
                <span style={{ color: "#ff0000" }}>
                  <ErrorMessage errors={errors} name="phone" />
                </span>
              </div>
            </div>
            {/* <div className="input-group">
              <input
                className="input-padding"
                type="email"
                placeholder="Official Email Address*"
                {...register("email", {
                  required: "Official Email Address is required",
                })}
              />
              <span style={{ color: "#ff0000" }}>
                <ErrorMessage errors={errors} name="email" />
              </span>
            </div> */}

            {/*  -------------------------------------- */}

            <div className="input-group twin">
              <div className="input-error-holder">
                <input
                  className="input-padding"
                  type="email"
                  placeholder="Official Email Address*"
                  {...register("email", {
                    required: "Official Email Address is required",
                  })}
                />
                <span style={{ color: "#ff0000" }}>
                  <ErrorMessage errors={errors} name="email" />
                </span>
              </div>

              <div className="input-error-holder">
                <select
                  className="first-input"
                  {...register("budget", { required: "Budget is required" })}
                >
                  <option value="" disabled selected>
                    Budget*
                  </option>
                  {getBudget().map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {/*  -------------------------------------- */}

            <div className="input-group">
              <textarea
                // {...register("message", { maxLength: 200 })}
                {...register("message")}
                placeholder="Give us a short brief on your requirement"
              />
            </div>

            <Ripples color="#fff" during={1200}>
              <input
                className="button"
                type="submit"
                style={{ width: "100%" }}
              />
            </Ripples>
          </form>
          {/* </div> */}

          <div className="form-footer">
            <div className="footer-left">
              <div className="flex-wrapper">
                <div className="img-container">
                  <img src={mvCall} alt="" />
                </div>
                <p>
                  Can't Wait? We can't either. You can schedule a quick video
                  call or simply drop us an email{" at business@99x.network "}
                </p>
              </div>
            </div>
            <div className="footer-right">
              <div className="flex-wrapper">
                {/* <a className="footer-btn" href="https://calendly.com/99x/introduction?month=2022-08" target={"_blank"}>
                  Schedule a Call
                </a> */}
                <Ripples color="#fff" during={1200}>
                  <button className="footer-btn">
                    <a
                      href="https://calendly.com/99x/introduction?month=2022-08"
                      target={"_blank"}
                    >
                      Schedule a Call
                    </a>
                  </button>
                </Ripples>

                <div>{modal && <Modal setOpenModal={openModal}></Modal>}</div>
                {/* <button className="footer-btn">
									<a href="mailto:business@99x.network" target={"__blank"}>
										Email us
									</a>
								</button> */}
                {/* <button className="footer-btn">Email us</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={cellImg} alt="" />
      </div>
      <W3Modal
        show={!!thankYou.message}
        onClick={() => {}}
        onModalChange={() => {
          setThankYou({ success: false, message: "" });
          thankYou.success && setOpenModal(false);
        }}
        showHeader={false}
        showFooter={false}
        backdrop="static"
        title={thankYou.success ? "Success!" : "Error!"}
        success={thankYou.success}
      >
        <h3
          className="text-center"
          style={{ color: thankYou.success ? "green" : "red" }}
        >
          {thankYou.message || "Try Again!"}
        </h3>
      </W3Modal>
    </div>
  );
};

export default ContactHeader;
