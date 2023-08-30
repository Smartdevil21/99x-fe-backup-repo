import React from "react";
import ProcessHero from "./hero";
import HowWeDesign from "./howWeDesign";
import TrustedClients from "./trustedClients";
import SeeYourSelf from "./seeYourSelf";
import "./style.scss";

const Process = () => {
  return (
    <div>
      <ProcessHero />
      <HowWeDesign />
      <TrustedClients text="Leverage our expertise of working with 100+ organizations across Industries & Geographies. " />
      <SeeYourSelf />
    </div>
  );
};

export default Process;
