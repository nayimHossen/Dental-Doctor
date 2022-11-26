import React from "react";

const AboutSection = () => {
  const categorys = [
    {
      _id: 1,
      text: "Vesion",
      title:
        "Partnerships with education, government, and other community organizations will care multiply the resources for effectiveness of our work or everyday care or life-changing.",
      icon: <i class="ri-global-line"></i>,
    },
    {
      _id: 2,
      text: "Value",
      title:
        "Provide patient-centered healthcare with excellence in quality, service, and access a believe  broad range of human needs is the best way to improve a person’s health.",
      icon: <i class="ri-heart-2-line"></i>,
    },
    {
      _id: 3,
      text: "Providers",
      title:
        "A community in which all people achieve their full potential for health and well-being across the lifespan use a team approach to providing health care, and involve the patient.",
      icon: <i class="ri-user-settings-fill"></i>,
    },
    {
      _id: 4,
      text: "Technology",
      title:
        "We care for the whole person, complexity of each person’s life, and believe that addressing a broad range of human needs is the best way to improve a excellence in quality.",
      icon: <i class="ri-window-line"></i>,
    },
  ];

  return (
    <section aria-label="aboutSection" className="py-16">
      <div className="grid lg:grid-cols-2 justify-center items-center px-5 gap-2 container mx-auto">
        {/* About section image start*/}
        <figure className="flex justify-start items-center sm:mb-5">
          <img
            src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/08/hero_image_02.jpg"
            alt="hero banner"
            className="w-full lg:w-[85%]"
          />
        </figure>
        {/* About section image end*/}

        {/* About section info data start */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl font-bold uppercase text-primary mb-1 md:mb-2">
              We care for the whole person
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-2 md:mb-4 lg:mb-6">
              Preventing heart disease is possible, by recognizing your symptoms
              and risk factors early.
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {categorys.map((category) => (
                <div key={category._id}>
                  <div className="p-5 py-10 shadow-lg">
                    <p className="text-5xl mb-2 text-primary">
                      {category.icon}
                    </p>
                    <p className="font-bold">{category.text}</p>
                    <p className="text-accent text-xs">{category.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* About section info data end */}
      </div>
    </section>
  );
};

export default AboutSection;
