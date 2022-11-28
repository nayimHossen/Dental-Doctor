import React from "react";

const ContactInfo = () => {
  const categorys = [
    {
      _id: 1,
      title: "Phone",
      info: "(+88) 0125412124754",
      icon: <i class="ri-user-2-line"></i>,
    },
    {
      _id: 2,
      title: "Email",
      info: "dentelo.help@gmail.com",
      icon: <i class="ri-notification-badge-line"></i>,
    },
    {
      _id: 3,
      title: "Address",
      info: "C/54 Northwest Freeway, Suite 558, Houston, USA 485",
      icon: <i class="ri-home-wifi-fill"></i>,
    },
  ];

  return (
    <section className="container mx-auto px-5 py-10 bg-[#f7fafd] ">
      <div className="flex justify-center items-center mb-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primary">
            Contact Us
          </h2>
          <div className="md:w-[700px] mx-auto">
            <p className="mb-5 italic font-samibold">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categorys.map((category) => (
          <div key={category._id}>
            <div className="p-5 my-8 bg-white shadow-lg text-sm rounded-lg h-56">
              <div className="flex justify-center items-center">
                <div className="text-center bg-secondary p-3 rounded-full shadow-lg w-20 h-20">
                  <p className="text-3xl text-white">{category.icon}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl py-3">{category.title}</p>
                <p className="text-primary text-sm font-bold">
                  {category.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
