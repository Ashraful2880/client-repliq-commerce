import React from "react";
import Testimonial from "../Home/Testimonial/Testimonial";
import PromoOffer from "../Home/PromoOffer/PromoOffer";
import PromoLast from "../Home/PromoLast/PromoLast";
import Team from "../Team/Team";
import Application from "../Home/Application/Application";

const About = () => {
  return (
    <div className="min-h-screen">
      <Testimonial />
      <PromoOffer />
      <PromoLast />
      <Team />
      <Application />
    </div>
  );
};

export default About;
