import React from "react";
import Doctors from "../home/Doctors";
import ReviewCart from "../home/ReviewMain";
import AboutBanner from "./AboutBanner";
import Category from "./Category";
import VisonBanner from "./VisonBanner";

const About = () => {
  return (
    <>
      <AboutBanner />
      <Category />
      <VisonBanner />
      <Doctors />
      <ReviewCart />
    </>
  );
};

export default About;
