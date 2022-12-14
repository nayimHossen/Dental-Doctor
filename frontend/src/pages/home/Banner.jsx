import React from "react";
import bannerImage from "../../assets/images/hero-banner.png";
import bannerBg from "../../assets/images/hero-bg.png";

const Banner = () => {
  return (
    <section
      aria-label="hero"
      className="pb-16 bt-10"
      style={{
        background: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 justify-center items-center gap-2 container mx-auto px-5">
        {/* Banner info data start */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-2 md:mb-3 lg:mb-4 pt-2">
              Welcome To Dentelo
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-accent mb-3 md:mb-5 lg:mb-8">
              We Are Best Dental Service
            </h1>
            <p className="text-xl text-neutral mb-3 md:mb-5 lg:mb-10">
              Donec vitae libero non enim placerat eleifend aliquam erat
              volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
              tristique, commodo gravida lectus non.
            </p>

            <form
              action=""
              className="bg-base-100 shadow-lg p-4 rounded-lg flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                name="email_address"
                aria-label="email"
                placeholder="Your Email Address..."
                required
                className="input input-bordered input-lg w-full sm:w-[70%] outline-none bg-[#f0f0f0]"
              />

              <input
                type="submit"
                value="GET INFO"
                className="btn text-base-100 py-6 uppercase font-bold bg-gradient-to-r from-accent to-primary w-full sm:w-[30%] h-full rounded-md"
              />
            </form>
          </div>
        </div>
        {/* Banner info data end */}

        {/* Banner image start*/}
        <figure className="flex justify-end items-center">
          <img src={bannerImage} alt="hero banner" className="shrink-0" />
        </figure>
        {/* Banner image end*/}
      </div>
    </section>
  );
};

export default Banner;
