import React from "react";
import "./style.scss";
import ENV from "../../../env.config";

export default function FeaturedOnDemandServices(props) {
    console.log({props});
	let services = props.services;
	let originalServiceArray = Object.keys(services).map((e) => services[e]);

	let serviceArray = [originalServiceArray[0], originalServiceArray[1], originalServiceArray[2]];
	if (ENV.CURRENT_SITE == 3)
		serviceArray = [originalServiceArray[0], originalServiceArray[1], originalServiceArray[2]];
	if (ENV.CURRENT_SITE == 6)
		serviceArray = [originalServiceArray[0], originalServiceArray[1], originalServiceArray[3]];

	// 99x Design
	if (ENV.CURRENT_SITE == 3) {
		return (
			<>
				<div className="featured-on-demand-services">
					<h2>
						{props.title || (
							<>
								Featured <span>On-Demand</span> Services
							</>
						)}
					</h2>
					{ <p className="text-center  heading4 pt-1vw">{props.para}</p>}
					<div className="row">
						{serviceArray &&
							serviceArray.map((service, i) => {
								let thumbnailImage = service?.images.our_work[0];

								if (props.site && props.site == "design") {
									thumbnailImage = service.icons["d350x230"];
								}

								return (
									<>
										<div className="col-12 col-md-4 py-2vw my-3vw">
											<img src={thumbnailImage} style={{width:"100%"}} />
											<div className="f-card" style={{ paddingTop: "10px" }}>
												<div className="tags" style={{ marginBottom: "10px" }}>
													{i == 0 ? (
														<img
															src="https://ik.imagekit.io/99x/design/_new/Popular_7QBX8aZK4Fai.png"
															style={{ marginRight: "10px" }}
														/>
													) : null}
													<img src="https://ik.imagekit.io/99x/design/_new/Subscription_Label_41aLr_dNT73Q.png" />
												</div>
												<div className="title-and-stars">
													<a href={`/on-demand/${Object.keys(services)[i]}`}>
														<h3>{service.label}</h3>
													</a>
													<span>{service.service_rating}</span>
												</div>

												<div className="price-and-offer">
													<span className="price">
														starting from just ${service.plans[0].price.amount}
													</span>
													<span className="offer"></span>
												</div>

												<p className="desc">{service.title}</p>
											</div>
										</div>
									</>
								);
							})}
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="featured-on-demand-services">
				<h2>
					{props.title || (
						<>
							Featured <span>On-Demand</span> Services
						</>
					)}
				</h2>
				<div className="row">
					{serviceArray &&
						serviceArray.map((service, i) => {
							let thumbnailImage = service?.images.our_work[0];

							if (props.site && props.site == "design") {
								thumbnailImage = service.icons["d350x230"];
							}

							return (
								<>
									<div className="col-12 col-md-4">
										<img src={thumbnailImage} />

										<div className="f-card">
											<div className="title-and-stars">
												<h3>{service.label}</h3>
												<span>{service.service_rating}</span>
											</div>

											<div className="price-and-offer">
												<span className="price">
													starting from just ${service.plans[0].price.amount}
												</span>
												<span className="offer"></span>
											</div>

											<p className="desc">{service.title}</p>
										</div>
									</div>
								</>
							);
						})}
				</div>
			</div>
		</>
	);
}
