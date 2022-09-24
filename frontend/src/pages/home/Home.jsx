import React from "react";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BookAppiontment from "./BookAppiontment";
import Doctors from "./Doctors";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutSection />
      <Doctors />
      <BookAppiontment />
    </div>
  );
};

export default Home;
