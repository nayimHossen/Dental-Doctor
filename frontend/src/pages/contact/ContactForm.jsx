import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <section className="container mx-auto px-5 py-5">
      <div className="flex justify-center mb-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          Get In Tuch
        </h2>
      </div>

      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md py-10 px-5 rounded"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="input text-xs sm:text-sm input-bordered input-md w-[49%] mb-5 mr-[2%]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input text-xs sm:text-sm input-bordered input-md w-[49%] mb-5"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="input text-xs sm:text-sm input-bordered input-md w-full mb-5"
          />
          <textarea
            className="textarea text-xs sm:text-sm  textarea-bordered w-full border-1 h-[100px]"
            placeholder="Please Type Your Massage"
          ></textarea>
          <input
            type="submit"
            value="SEND MESSAGE"
            className="btn bg-accent hover:bg-secondary text-white font-bold w-full max-w-xs mt-2"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
