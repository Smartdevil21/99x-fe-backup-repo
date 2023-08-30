import React from "react";
import "./styles.scss";
import Ripples from "react-ripples";
// import humble from '../../../assets/_design/logoDesign/Frame 21376.png'
// import pepperstreet from '../../../assets/_design/logoDesign/Frame 21382.png'
// import huupe from '../../../assets/_design/logoDesign/Frame 21377.png'
// import money from '../../../assets/_design/logoDesign/Frame 21379.png'
import checkImg from '../../../assets/_design/packaging/Vector.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import img1 from '../../../assets/_design/packaging/Frame 4001.png'
// import img2 from '../../../assets/_design/packaging/Frame 4003.png'
// import img3 from '../../../assets/_design/logoDesign/Group 48095548.png'
// import img4 from '../../../assets/_design/packaging/Frame 4146.png'
// import img6 from '../../../assets/_design/packaging/Group 48095538.png'
import W3Modal from "components/w3modal/W3Modal";
import Modal from "../ourWork/Modal/Modal";
import { Redirect } from "react-router-dom";
import ellipse from '../../../assets/_design/logoDesign/Ellipse 146.png'
// import portfolio from '../../../assets/_design/logoDesign/logo-design-portfolio.pdf'
const ServicesC2A = React.lazy(()=> import("../servicesPage/servicesC2A"));
const TrustedClients = React.lazy(()=> import("../process/trustedClients"));
const Showcase = React.lazy(()=> import("./logo-showcase"));
class MainLayout extends React.Component {
	constructor() {
		super();
		
		this.state = {
			toLogin: false,
			email: "",
			thankYou: false,
			modalOpen: false,
		};
	}
	openAccord = (_event) => {
		if (_event) {
			let _body = _event.currentTarget.nextElementSibling;
			if (_body.style.maxHeight && parseFloat(_body.style.maxHeight) > 0) {
				_body.style.maxHeight = "0px";
				_event.currentTarget.parentNode.classList.remove("active");
			} else {
				let acc = document.getElementsByClassName("custom-accord-body");
				for (let i = 0; i < acc.length; i++) {
					acc[i].style.maxHeight = "0px";
					if (acc[i].parentNode.classList.contains("active")) {
						acc[i].parentNode.classList.toggle("active");
					}
				}
				_event.currentTarget.parentNode.classList.add("active");
				_body.style.maxHeight = _body.scrollHeight + "px";
			}
		}
	};

	claimFreeTrial = () => {
		const Email = this.state.email;
		this.setState({ toLogin: true });
	};
	setUserEmail = (email) => {
		this.setState({ email: email });
	};
	setThankYou = (data) => {
		this.setState({ thankYou: data });
	};
	setModalOpen = (data) => {
		this.setState({ modalOpen: data });
	};

render(){
    if (this.state.toLogin) {
		return <Redirect to={`/ab/account-security/login?email=${this.state.email}`} />;
	}
    const process_slides = [
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+4001.webp',
			title: "Discovery Session",
			description: "We develop a profound understanding identifying and researching potential products or services to develop or offer to a target market.",
			features: ["Logo Design", "Brand identity Kit"]
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+4003.webp',
			title: "Moodboards ",
			description: "With our sophisticated approach to clearly understanding what you mean by good design, we assess does it best fit your brand, company, and vision and then define guidelines on colors typography, components etc, to help eliminate technical gaps so that the design and dev team can produce faster, efficiently and consistently.",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Group+48095548.webp',
			title: "Research + Concept Finalization",
			description: "With our sophisticated approach to clearly understanding what you mean by good design, we assess does it best fit your brand, company, and vision and then define guidelines on colors typography, components etc, to help eliminate technical gaps so that the design and dev team can produce faster, efficiently, and consistently. ",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Group+48095538.webp',
			title: "Final Design & Mockups",
			description: "Visual design involves creating the final visual appearance of the logos, including the favicons, icons, responsive logo. The goal of visual design is to make the logo eye-catching and appealing to the target audience.",
		},
	]
  return (
    <div className="logo-design">
      <div className="hero">
        <div className="heading">
          <h1>
            Communicate your brand story with powerful <span>Logo Designs</span>
            .
          </h1>
          <Ripples color="#fff" during={1200}>
            <div className="bottom">
              <button
                className="submit"
                onClick={() => {
                  setTimeout(() => {
                    this.setModalOpen(true);
                  }, 300);
                  // this.setModalOpen(true);
                }}
              >
                Let's Talk
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </Ripples>
        </div>
        <div className="content">
            <div className="div1">
                <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+21376.webp'} alt="" />
            </div>
            <div className="div2">
            <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+21382.webp'} alt="" />

            </div>
            <div className="div3">
            <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+21377.webp'} alt="" />

            </div>
            <div className="div4">
            <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Frame+21379.webp'} alt="" />

            </div>
        </div>
      </div>

      <Showcase />

      <div className="our-process">
		<div className="header-container">
			<div className="header">
				<p className="subheading">Our process</p>
				<h3>How we get to <span>“better than expected”</span></h3>
				<p className="description">Whether you are building a new digital product or improving an existing one, we build and design to make a measurable impact.</p>

			</div>
		</div>
		<div className="slider">
			<Slider
			dots={true}
			arrows={false}
			slidesToShow={1}
			slidesToScroll={1}
			infinite={true}
			autoplay={true}
			>
				{
					process_slides.map((item, key)=>{
						return(
							<div className="item" key={key}>
								<div className="left">
									<div className="heading">
										<h3>{item.title}</h3>
										<p>{item.description}</p>
									</div>
										<ul>
											{
											item.features && item.features.map((f, key) =>{
												return(
													<li key={key}> <img src={checkImg} alt="check-tick" /> {f}</li>
												)
											})
											}
										</ul>
								</div>
								<div className="right">
									<img src={item.img} alt="slider-item" />
								</div>
							</div>
						)
					})
				}
			</Slider>
		</div>
	  </div>

      <div className="banner">
        <img src={'https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-page/Ellipse+146.webp'} alt="" />

		<div className="content">
			<h3>Bring your vision to reality with Custom Logo Design </h3>
			<p>Our team of experts understands the significance of a brilliant logo for your brand. With years of experience and a keen eye for detail, we bring your vision to life by creating a logo that accurately represents your brand and sets you apart from your competition. From concept to completion, we work closely with you to ensure that the final design exceeds your expectations and effectively communicates your unique brand message. </p>
			
				<Ripples color="#fff" duration={1200}>
					<a href={"https://99xassets.s3.ap-south-1.amazonaws.com/logo-design-portfolio.pdf"} target="_blank" rel="noopener noreferrer">
						<button>Download our portfolio</button> 
					</a>
				</Ripples>

		</div>
	  </div>

	  <TrustedClients text="Have a Custom requirement or a Complex Project? Leverage our expertise of working with 100+ organizations across  Industries & Geographies. " reversecol />
      <ServicesC2A bg="#E4D9FF" bgBtn="#463FB0" shortwidth titleColor="#000000" />
	  {/* <CustomerTestinomial themeColor="#fff" theme="dark" site="design" /> */}
	  <div>{this.state.modalOpen && <Modal setOpenModal={this.setModalOpen}></Modal>}</div>

		<W3Modal
			className="featured-work-modal"
			show={this.state.thankYou}
			onClick={() => {}}
			onModalChange={() => {
				this.setThankYou(false);
			}}
			showFooter="false"
			backdrop="static"
		>
			<h1>Thank You</h1>
		</W3Modal>
    </div>
  );
}
};

export default MainLayout;
