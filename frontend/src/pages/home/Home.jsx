import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BookAppiontment from "./BookAppiontment";
import Doctors from "./Doctors";
import Blogs from "./Blogs";
import Services from "./Services";
import ReviewCart from "./ReviewMain";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutSection />
      <Doctors />
      <BookAppiontment />
      <Blogs />
      <ReviewCart />
    </>
  );
};

export default Home;
