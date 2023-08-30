import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel2";
import "./style.scss";
export default function W3Carousel(props) {
	const options = {
		items: props.items ?? 2,
		nav: props.nav ?? true,
		navText: [
			"",
			`<div><img src=${
				props.arrowRight ?? "https://ik.imagekit.io/heliverse/right-arrow_l3c5llUqwe.png"
			} /> </div>`,
		],
		rewind: true,
		autoplay: false,
		dots: props.dots ?? false,
		dotData: props.dotData ?? false,
        slideBy: 2 ,
        responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 2,
			},
            1500: {
				items: 2,
			},

		},
	};

	const options2 = {
		items: props.items ?? 4,
		nav: props.nav ?? true,
		navText: ["", "next"],
		rewind: props.rewind ?? true,
		autoplay: props.autoplay ?? false,
		dots: props.dots ?? true,
		dotData: props.dotData ?? false,
	};

	const options3 = {
		items: 8,
		loop: true,
		margin: 20,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 3000,
		autoplayHoverPause: false,
	
	};

	const events = {
		onDragged: function (event) {},
		onChanged: function (event) {
			//console.log("Slide Changed", event.item)
			if (props.onChanged) props.onChanged(event);
		},
	};

	// const carousel = useRef()

	// setTimeout(()=>{
	//     if(carousel.current){
	//         carousel.current.goTo(3)
	//     }
	// },3000)
	if (props.name == "marquee") {
		return (
			<>
				<div className={`w3-carousel ${props.className || ""}`}>
					<OwlCarousel ref={props.cRef || null} options={options3} events={events}>
						{props.children}
					</OwlCarousel>
				</div>
			</>
		);
	}

	if (props.name == "eyntg") {
		return (
			<>
				<div className={`w3-carousel ${props.className || ""}`}>
					<OwlCarousel ref={props.cRef || null} options={options2} events={events}>
						{props.children}
					</OwlCarousel>
				</div>
			</>
		);
	}

	return (
		<>
			<div className={`w3-carousel ${props.className || ""}`}>
				<OwlCarousel ref={props.cRef || null} options={options} events={events}>
					{props.children}
				</OwlCarousel>
			</div>
		</>
	);
}
