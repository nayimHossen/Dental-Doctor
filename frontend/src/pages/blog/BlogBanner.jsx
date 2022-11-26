import React from "react";

const BlogBanner = () => {
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
              Dental Advice & Oral Health Blog
            </h1>

            <div className="md:w-96 mx-auto">
              <p className="mb-5 text-white italic font-samibold">
                Dental implants are a great way to replace your missing teeth
                and avoid periodontal disease
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
