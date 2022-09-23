import React from "react";
import bannerImage from "../../assets/images/hero-banner.png";
import bannerBg from "../../assets/images/hero-bg.png";

const Banner = () => {
  return (
    <section
      aria-label="hero"
      className="py-10"
      style={{
        background: `url(${bannerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 justify-center items-center gap-2 container mx-auto">
        {/* Banner info data start */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-2 md:mb-3 lg:mb-5">
              Welcome To Dentelo
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-accent mb-3 md:mb-5 lg:mb-10">
              We Are Best Dental Service
            </h1>
            <p className="text-xl text-neutral mb-3 md:mb-5 lg:mb-10">
              Donec vitae libero non enim placerat eleifend aliquam erat
              volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl
              tristique, commodo gravida lectus non.
            </p>

            <form action="" className="bg-base-100 shadow-lg p-4 rounded-lg">
              <input
                type="email"
                name="email_address"
                aria-label="email"
                placeholder="Your Email Address..."
                required
                class="input input-bordered input-lg w-full outline-none bg-[#f0f0f0]"
              />

              <button
                type="submit"
                className="text-base-100 bg-gradient-to-r from-secondary to-primary p-5 rounded-md w-full mt-1"
              >
                GET CALL BACK
              </button>
            </form>
          </div>
        </div>
        {/* Banner info data end */}

        {/* Banner image start*/}
        <figure className="flex justify-end items-center">
          <img
            src={bannerImage}
            width="587"
            height="839"
            alt="hero banner"
            class="shrink-0"
          />
        </figure>
        {/* Banner image end*/}
      </div>
    </section>
  );
};

export default Banner;
