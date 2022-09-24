import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BookAppiontment from "./BookAppiontment";
import Doctors from "./Doctors";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Doctors />
      <BookAppiontment />
      <Blogs />
    </div>
  );
};

export default Home;
