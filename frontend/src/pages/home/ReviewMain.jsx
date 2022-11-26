import React from "react";
import Review from "./Review";

const ReviewCart = () => {
  return (
    <section className="">
      <div className="container mx-auto px-5 pt-8 pb-16 mb-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl text-primary font-bold">
            Testimonials
          </h2>
          <p className="text-natural text-lg py-1 italic">
            Patient experience with our services
          </p>
        </div>
        <div>
          <Review />
        </div>
      </div>
    </section>
  );
};

export default ReviewCart;
