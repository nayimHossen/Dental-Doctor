import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BookAppiontment from "./BookAppiontment";
import Doctors from "./Doctors";
import Blogs from "./Blogs";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <AboutSection />
      <Doctors />
      <BookAppiontment />
      <Blogs />
    </>
  );
};

export default Home;
