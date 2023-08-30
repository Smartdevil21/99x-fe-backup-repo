import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import Typed from "react-typed";
import Ripples from "react-ripples";

const Packaging = () => {
  return (
    <>
    <div className="for-desktop">
					<Parallax speed={-20}>
						<div className="fluid pink-bg p-5">
							<section className="hero-content">
								<div className="">
									<h1 className="heading">
										Build{" "}
										<span className="typed">
											<Typed
												strings={["Products", "Websites", "Mobile Apps"]}
												typeSpeed={80}
												loop
											/>
										</span>
										that <br />
										users fall in love with
									</h1>
								</div>
								<Ripples color="#fff" during={1200}>
									<div className="bottom desktop-only">
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
				<div className="for-mobile fluid pink-bg p-5">
					<section className="hero-content">
						<div className="">
							<h1 className="heading">
								Build{" "}
								<span className="typed">
									<Typed strings={["Products", "Websites", "Mobile Apps"]} typeSpeed={80} loop />
								</span>
								that <br />
								users fall in love with
							</h1>
						</div>
						<div className="bottom desktop-only">
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
    </>
  )
}

export default Packaging