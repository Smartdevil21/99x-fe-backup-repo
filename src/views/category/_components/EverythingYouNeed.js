import React from "react";
import './style.scss'
export default function CategoryEverythingYouNeed({
	banner,
	subtitle,
	f1,
	f2,
	image,
	title,
	titlePrimary,
	site,
	label,
}) {
	return (
		<>
			<section className="everything-you-need mv-30">
				<div className="mycontainer">
					<div className="row">
						{site === "design" && (
							<div className="col-12 text-center">
								<h2 className="heading2 py-3vw">
									{title ? (
										<>
											{title + " "}
											<span style={{ textDecoration: "underline" }}>{titlePrimary}</span>
										</>
									) : (
										<span>Everything you need!</span>
									)}
								</h2>
							</div>
						)}
						<div className="col-12 col-sm-12 col-md-6 left ">
							{site !== "design" && <h2>Everything you need!</h2>}
							<p className="label">
								{label ??
									`
								The customer journey differs for everybody. No matter your business need, our
								subscriptions, and people are flexible and experienced to pave the path that's best
								for your business.`}
							</p>
							<h4 className="subtitle">{subtitle}</h4>
							<div className="row  icon-row m-0">
								<img src={image} className="pb-5vw" />
								{/* {image.map((pic, i) => (
									<div className="services-image-div">
										<img src={pic.img} className="pb-2vw pl-2vw services-image " />
									</div>
									
								))} */}
								{/* {f1.map((f,i)=>(
                                    <div className="col">
                                        <div className="w3card">
                                            <img src={f.icon}/>
                                            <p className="img-alt">
                                                {f.text}
                                            </p>
                                        </div>
                                    </div>
                                ))} */}
							</div>

							<div className="row f-row">
								{f2.map((f, i) => (
									<div className="col-6 col-sm-6 col-md-6 p-one">
										<h4 className="heading5">{f.title}</h4>
										<p className="p2 m-0">{f.subtitle}</p>
									</div>
								))}
							</div>
						</div>
						<div className="col-12 col-sm-12 col-md-6 d-flex align-items-center ">
							<img src={banner} className="banner-image w-100" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
