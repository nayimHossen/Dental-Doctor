import React from "react";
import aboutBanner from "./../../assets/images/about-banner.png";

const AboutSection = () => {
  return (
    <section aria-label="aboutSection" className="py-16">
      <div className="grid lg:grid-cols-2 justify-center items-center px-5 gap-2 container mx-auto">
        {/* About section image start*/}
        <figure className="flex justify-start items-center sm:mb-5">
          <img src={aboutBanner} alt="hero banner" class="w-full lg:w-[85%]" />
        </figure>
        {/* About section image end*/}

        {/* About section info data start */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-2 md:mb-3 lg:mb-5">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-3 md:mb-5 lg:mb-10">
              We Care For Your Dental Health
            </h1>
            <p className="text-base text-neutral mb-5">
              Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio.
              Nullam quis volutpat est, sed dapibus sapien. Cras condimentum eu
              velit id tempor. Curabitur purus sapien, cursus sed nisl
              tristique, commodo vehicula arcu.
            </p>

            <p className="text-base text-neutral mb-5">
              Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex
              mattis, ultricies posuere sapien. Morbi a dignissim enim. Fusce
              elementum, augue in elementum porta, sapien nunc volutpat ex, a
              accumsan nunc lectus eu lectus.
            </p>

            <button className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary">
              read more
            </button>
          </div>
        </div>
        {/* About section info data end */}
      </div>
    </section>
  );
};

export default AboutSection;
