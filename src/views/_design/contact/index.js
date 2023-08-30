import React from "react";
import BusinessGlobally from "../businessGlobally";
import TrustedClients from "../process/trustedClients";
import BusinessProfile from "../servicesPage/businessProfile";
import ContactHeader from "./contactHeader";
import "./style.scss";
export default function ContactPage(props) {
  return (
    <section className="contact-page">
      <ContactHeader />
      <BusinessGlobally />
      <BusinessProfile />
      <div style={{ marginTop: "4.2328vw" }}>
        <TrustedClients
          variant="red"
          text="Have a Custom requirement or a Complex Project? Leverage our expertise of working with 100+ organizations across  Industries & Geographies. "
        />
      </div>
    </section>
  );
}
