import React from "react";

const AboutBanner = () => {
  return (
    <section>
      <div
        className="hero h-80 sm:h-96 bg-scroll"
        style={{
          backgroundImage: `url("https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_about.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              We Are World-Leading
            </h1>
            <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-[#316ebf] w-fit mx-auto p-3">
              Dentish
            </h2>
            <div className="md:w-96 mx-auto">
              <p className="mb-5 text-white italic font-samibold">
                Specializing in the diagnosis, treatment and monitoring of heart
                disorders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
