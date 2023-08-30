import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import Typed from "react-typed";
import Ripples from "react-ripples";
import "./style.scss";
import ReactPlayer from "react-player";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import show1 from '../../../assets/_design/packaging/packaging-design-page/CHOCOLATECOFFEEBODYWASH_1-1.webp'
// import show1Small from '../../../assets/_design/packaging/small/CHOCOLATECOFFEEBODYWASH_1-1.png'
// import show1_second from '../../../assets/_design/packaging/Property-1=Frame-4113.png'

// import show2 from '../../../assets/_design/packaging/Rectangle-625.png'
// import show2Small from '../../../assets/_design/packaging/small/Rectangle-62.png'
// import show2_second from '../../../assets/_design/packaging/Property-1=Component-5.png'

// import show3 from '../../../assets/_design/packaging/Property-1=Frame-4111.png'
// import show3Small from '../../../assets/_design/packaging/small/Property-1=Frame-411.png'
// import show3_second from '../../../assets/_design/packaging/Property-1=Frame-4110.png'

// import show4 from '../../../assets/_design/packaging/Rectangle55.png'
// import show4Small from '../../../assets/_design/packaging/small/Rectangle-599.png'
// import show4_second from '../../../assets/_design/packaging/Property-1=Frame-412.png'

// import show5 from '../../../assets/_design/packaging/Rectangle-630.png'
// import show5Small from '../../../assets/_design/packaging/small/Property-1=Frame-4119.png'
// import show5_second from '../../../assets/_design/packaging/Property-1=Frame-4120.png'

// import show6 from '../../../assets/_design/packaging/Coin-Envelope-Identity-Stationery-Free-Mockup-1.png'
// import show6Small from '../../../assets/_design/packaging/small/Property-1=Component-14.png'
// import show6_second from '../../../assets/_design/packaging/Property-1=Component-15.png'

// import show7 from '../../../assets/_design/packaging/Rectangle-12.png'
// import show7Small from '../../../assets/_design/packaging/small/Property-1=Component-last.png'
// import show7_second from '../../../assets/_design/packaging/Notebook-2.png'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import img1 from '../../../assets/_design/packaging/Frame 4001.png'
// import img2 from '../../../assets/_design/packaging/Frame 4003.png'
// import img3 from '../../../assets/_design/packaging/Screenshot_2023-02-02_at_1.43 1.png'
// import img4 from '../../../assets/_design/packaging/Frame 4146.png'
// import img5 from '../../../assets/_design/packaging/Group-48095539.png'
// import img6 from '../../../assets/_design/packaging/Group 48095538.png'
import checkImg from '../../../assets/_design/packaging/Vector.svg'
import ServicesC2A from "../servicesPage/servicesC2A";
import { Redirect } from "react-router-dom";
import W3Modal from "../../../components/w3modal/W3Modal";
import Modal from "views/_design/ourWork/Modal/Modal";
const LazyImage = React.lazy(()=> import("../LazyImage"));
const TrustedClients = React.lazy(()=> import("../process/trustedClients"));

class MainLayout extends React.Component {
	constructor() {
		super();

		this.state = {
			toLogin: false,
			email: "",
			thankYou: false,
			modalOpen: false,
			change: false
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

	componentDidMount(){
		this.interval = setInterval(() => {
			this.setState((prevState) => ({
			  change: !prevState.change,
			}));
		  }, 3000);
		
	}
	componentWillUnmount(){
		clearInterval(this.interval);
	  }


render(){
	if (this.state.toLogin) {
		return <Redirect to={`/ab/account-security/login?email=${this.state.email}`} />;
	}
	const packaging_show = [
		{
			category: "Lifestyle",
			title: "The beauty co.",
			text: "We collaborated with the beautyco. to help them realise their brand into their new lines of skincare products that’s ergonomically easy to use, gorgeous and elegant to look at with a hint of modernity and full of natural goodness",
			design: "Packaging Label Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Cosmeceuticals",
			title: "Majestic Pure",
			text: "We were tasked to help Majestic Pure, reimagine their packaging for the online stores of the world that’s minimal, premium and functionally gorgeous with an objective to stand out and bring calmness everyday!",
			design: "Packaging Label Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Organic foods",
			title: "Earthy tales",
			text: "We collaborated Earthy tales for their Organic product Range - with an objective to stand out from the rest, build packaging sustainable packaging solutions that features the product the way it’s supposed to - the organic way for customers",
			design: "Packaging Label Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Health care",
			title: "Practo",
			text: "We helped Practo build their new series of  onboarding kits and posters for their doctor’s that seamlessly ties the brand into functional, visually stunning and communicates care for all.",
			design: "Stationery Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Ed-tech",
			title: "Athena",
			text: "The objective was to help Athena - an edtech brand build and realise a premium student kit for better learning outcomes and a seamless learning journey",
			design: "Stationery Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Lifestyle",
			title: "Humble",
			text: "We collaborated with humble - a community of entrepreneurs of today with the wisdom for tomorrow with a branding that’s humble yet ambitious and minimally powerful.",
			design: "Stationery Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
		{
			category: "Sports & Gaming",
			title: "Huupe",
			text: "Huupe - A product and platform for the basketball fanatics, reached out to us to help us put together a brands, merch & collaterals that’s unique, elegant and actively seeks out the best in you.",
			design: "Merchandise Design, Stationery Design",
			url: "../../../assets/_design/ourWork/Webp/Peperstreet.png"
		},
	]


	const process_slides = [
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Frame+4001.webp',
			title: "Product Discovery",
			description: "We develop a profound understanding of the product positioning, competition, users & business objectives to best align ourselves to your user expectations and make sound decisions - that impact the business for good.",
			features: ["Product packaging", "Label Design", "Retail packaging", "Stationery Design"]
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Frame+4003.webp',
			title: "Moodboards ",
			description: "With our sophisticated approach to clearly understanding what you mean by good design, we assess does it best fit your brand, company, and vision and then define guidelines on colors typography, components etc, to help eliminate technical gaps so that the design and dev team can produce faster, efficiently and consistently.",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Screenshot_2023-02-02_at_1.43+1.webp',
			title: "Research + Concept Finalization",
			description: "With our sophisticated approach to clearly understanding what you mean by good design, we assess does it best fit your brand, company, and vision and then define guidelines on colors typography, components etc, to help eliminate technical gaps so that the design and dev team can produce faster, efficiently, and consistently. ",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Frame+4146.webp',
			title: "Sketching + Technical Designs",
			description: "Sketching and technical design are important stages in the packaging design process. Sketching is the preliminary stage where we create rough drawings of the packaging design ideas. These sketches help to visualize the concept and refine the design before moving to the technical design stage.",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Group-48095539.webp',
			title: "Visual Design",
			description: "Visual design involves creating the final visual appearance of the packaging, including the graphics, typography, and color scheme. The goal of visual design is to make the packaging eye-catching and appealing to the target audience.",
		},
		{
			img: 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Group+48095538.webp',
			title: "Mockups",
			description: "Mockups are three-dimensional models or simulations of the packaging design. They help to visualize how the packaging will look and function in the real world. Mockups help to bring the design concept to life and ensure that the final product meets the design specifications",
		},
	]
	
  return (
    <div className="packaging">
		<section className="fluid blue-bg">
      <div className="for-desktop">
        <Parallax speed={-20}>
          <div className="fluid p-5">
            <section className="hero-content">
              <div className="">
                <h1 className="heading pt-5">
                  Packaging design that <br />
                  <span className="typed">
                    <Typed
                      strings={[
                        "Sells for itself",
                        "Stands out",
                        "People love",
                      ]}
                      typeSpeed={80}
                      loop
                    />
                  </span>
                </h1>
              </div>
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

            </section>
          </div>
        </Parallax>
      </div>
      <div className="for-mobile fluid py-5">
        <section className="hero-content">
          <div className="">
            <h1 className="heading">
              Packaging design that <br />
              <span className="typed">
                <Typed
                  strings={["Sells for itself", "Stands out", "People love"]}
                  typeSpeed={80}
                  loop
                />
              </span>
            </h1>
          </div>
          <div className="bottom">
            <button
              className="submit"
              onClick={() => {
                this.setModalOpen(true);
              }}
            >
              Let's Talk
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
		  
        </section>
      </div>

	  {/* <div className="for-desktop"> */}
	  <Parallax speed={10} className="for-desktop">
		<div className="fluid px-5 pb-4">
                  <section
                    className="hero-content "
                  >
                    <ReactPlayer
                      width={"79vw"}
                      height="auto"
                      url={"https://99xassets.s3.ap-south-1.amazonaws.com/Landing-page.mp4"}
                      muted
                      playing
                      loop
                      className="react-player"
                    />

                    {/* </Parallax> */}
                  </section>
				  </div>
                </Parallax>
	  {/* </div> */}
	  <section
					className="for-mobile "
					// style={{
					//   marginBottom: "-6px",
					// }}
				>
					{/* <ParallaxBanner
            layers={[
              {
                video: 'https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4',
                speed: -25,
                expanded: false,
                // scale: [1, .8],
                // easing: [0.2, -0.6, 1, -0.6],
              },
            ]}
            className="parallaxBanner"
          /> */}
					{/* <Parallax
            speed={30}
            layers={[
              {
                video: 'https://99xassets.s3.ap-south-1.amazonaws.com/99xstudiouiux.mp4',
                speed: 10,
                expanded: false,

                scale: [1, 0.8],
                easing: [0.2, -0.6, 1, -0.6],
              },

            ]}
            className="parallaxBannervideo"
            className="aspect-[2/1]"
          > */}
		  <div className="hero-content pb-5">
					<ReactPlayer
						width={"100%"}
						height="auto"
						url={"https://99xassets.s3.ap-south-1.amazonaws.com/Landing-page.mp4"}
						muted
						playing
						loop
						className="react-player"
					/>
					</div>
					{/* </Parallax> */}
				</section>
	  </section>

	  {/* 2nd component */}
	  <section className="packaging-show">
		<div>
			<div className="heading">
				<h2>Elevate your products with <span> eye-candy labels & functional</span> Packaging</h2>
				<p className="for-desktop">Whether you are releasing a new product or already have an established product that needs an upgrade to connect with your customers, we’ve got you covered with designs that make a measurable impact.</p>
				<p className="for-mobile">Whether you are building a new digital product or improving an existing one, we design to make a measurable impact.</p>
			</div>
			<div>
				<div className="work-container">
					<div className="work">
					<div className="image-1 ">
					<ParallaxBanner
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DFrame-4113.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/CHOCOLATECOFFEEBODYWASH_1-1.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -25,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{aspectRatio: "2.4/1"}}
					// style={this.state.change ? {opacity: "1", aspectRatio: "2.4/1"} : {opacity: "0", aspectRatio: "2.4/1"}}
					
					className="for-desktop "
					/>
					</div>
					<div className="work-image img1 for-mobile" >
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
					 	<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/CHOCOLATECOFFEEBODYWASH_1-1.webp'} alt=""  />
						 </div>
					</div>
					<div className="work-bottom bg-aqua-blue">
					<div className="left">
						<h3>{packaging_show[0].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[0].category}</button>
							</Ripples>

						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[0].category}</button>
							</Ripples>
						</div>
						<h2>{packaging_show[0].title}</h2>
						<p>{packaging_show[0].text}</p>
					</div>
					</div>
				</div>
					<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Rectangle-625.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DComponent-5.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "2.4/1" }}
					// style={this.state.change ? {opacity: "1", aspectRatio: "2.4/1"} : {opacity: "0", aspectRatio: "2.4/1"}}

					/>
					<div className="work-image img2 for-mobile">
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
						<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Rectangle-62.webp'} alt=""  />
						</div>
					</div>
					<div className="work-bottom bg-cream">
					<div className="left">
						<h3>{packaging_show[1].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[1].category}</button>
							</Ripples>
						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[1].category}</button>
							</Ripples>
						</div>
						<h2>{packaging_show[1].title}</h2>
						<p>{packaging_show[1].text}</p>
					</div>
					</div>
				</div>
					<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DFrame-4111.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DFrame-4110.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "2.4/1" }}
					/>
					<div className="work-image img3 for-mobile">
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
							<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Property-1%3DFrame-411.webp'} alt=""  />
						</div>
					</div>
					<div className="work-bottom bg-sky-blue">
					<div className="left">
						<h3>{packaging_show[2].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[2].category}</button>
							</Ripples>
						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
									<button className="custom-button">{packaging_show[2].category}</button>
							</Ripples>

						</div>
						<h2>{packaging_show[2].title}</h2>
						<p>{packaging_show[2].text}</p>
					</div>
					</div>
				</div>

				<div className="columns">
				<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Rectangle55.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DFrame-412.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "0.96" }}
					/>
					<div className="work-image img4 for-mobile">
						<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Rectangle-599.webp'} alt="" style={this.state.change ? {display: 'none'} : {display: 'block'}} />
					</div>
					<div className="work-bottom blue-10">
					<div className="left">
						<h3>{packaging_show[3].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[3].category}</button>
							</Ripples>
						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[3].category}</button>
							</Ripples>
						</div>

						<h2>{packaging_show[3].title}</h2>
						<p>{packaging_show[3].text}</p>
					</div>
					</div>
				</div>
				<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Rectangle-630.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DFrame-4120.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "0.96" }}
					/>
					<div className="work-image img5 for-mobile">
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
						<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Property-1%3DFrame-4119.webp'} alt=""  />
						</div>
					</div>
					<div className="work-bottom blue-20">
					<div className="left">
						<h3>{packaging_show[4].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[4].category}</button>
							</Ripples>
						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[4].category}</button>
							</Ripples>
						</div>
						<h2>{packaging_show[4].title}</h2>
						<p>{packaging_show[4].text}</p>
					</div>
					</div>
				</div>
				<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Coin-Envelope-Identity-Stationery-Free-Mockup-1.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Property-1%3DComponent-15.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "0.96" }}
					/>
					<div className="work-image img6 for-mobile">
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
							<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Property-1%3DComponent-14.webp'} alt=""  />
						</div>
					</div>
					<div className="work-bottom pink-10">
					<div className="left">
						<h3>{packaging_show[5].design}</h3>
						<div className="for-mobile">
						<Ripples color="#fff" during={1200}>
							<button className="custom-button">{packaging_show[5].category}</button>
						</Ripples>
						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
						<Ripples color="#fff" during={1200}>
							<button className="custom-button">{packaging_show[5].category}</button>
						</Ripples>

						</div>
						<h2>{packaging_show[5].title}</h2>
						<p>{packaging_show[5].text}</p>
					</div>
					</div>
				</div>
				<div className="work">
					<ParallaxBanner
					className="for-desktop"
					layers={[
						{
						image: this.state.change ? 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Rectangle-12.webp' : 'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Notebook-2.webp',
						// image: "https://i.ibb.co/0GBW5bS/Frame-4027.png",
						speed: -32,
						expanded: false,
						// translateY: [30, -50],
						// scale: [.6, .8],
						// opacity: [0.9, 1],
						},
					]}
					style={{ aspectRatio: "0.96" }}
					/>
					<div className="work-image img7 for-mobile">
						<div style={this.state.change ? {display: 'none'} : {display: 'block'}}>
						<LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/mobile/Property-1%3DComponent-last.webp'} alt=""  />
						</div>
					</div>
					<div className="work-bottom blue-30">
					<div className="left">
						<h3>{packaging_show[6].design}</h3>
						<div className="for-mobile">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[6].category}</button>
							</Ripples>

						</div>
					</div>
					<div className="right">
						<div className="for-desktop">
							<Ripples color="#fff" during={1200}>
								<button className="custom-button">{packaging_show[6].category}</button>
							</Ripples>

						</div>
						<h2>{packaging_show[6].title}</h2>
						<p>{packaging_show[6].text}</p>
					</div>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>
	  </section>

	  {/* our process */}
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
													<li key={key}> <LazyLoadImage src={'https://99xassets.s3.ap-south-1.amazonaws.com/packaging-design-page/Vector.svg'} alt="check-tick" /> {f}</li>
												)
											})
											}
										</ul>
								</div>
								<div className="right">
									<LazyLoadImage src={item.img} alt="slider-item" />
								</div>
							</div>
						)
					})
				}
			</Slider>
		</div>
	  </div>

	  {/* banner */}
	  <div className="banner">

		<div className="content">
			<h3>From shelves to the carts</h3>
			<p>Enhance your product's appeal that stands out from the rest packaging. At 99x studio, our expert designers will craft a custom design that will make your product stand out on the shelf and attract customers to add it to their carts. Invest in a one-of-a-kind packaging solution today.</p>
			<a href={"https://99xassets.s3.ap-south-1.amazonaws.com/Packaging-design-99x-studio.pdf"} target={"_blank"} >
			<Ripples color="#fff" duration={1200}>
				<button>Download our portfolio</button>
			</Ripples>
			</a>

		</div>
	  </div>

	  <TrustedClients text="Have a Custom requirement or a Complex Project? Leverage our expertise of working with 100+ organizations across  Industries & Geographies. " reversecol  />
      <ServicesC2A bg="#391763" bgBtn="#6931C4" shortwidth />
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
