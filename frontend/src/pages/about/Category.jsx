import React from "react";

const Category = () => {
  const categorys = [
    {
      _id: 1,
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
      icon: <i class="ri-user-2-line"></i>,
    },
    {
      _id: 2,
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      icon: <i class="ri-notification-badge-line"></i>,
    },
    {
      _id: 3,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      icon: <i class="ri-home-wifi-fill"></i>,
    },
    {
      _id: 4,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      icon: <i class="ri-nurse-line"></i>,
    },
  ];

  return (
    <section className="container mx-auto px-5 py-10 bg-[#f7fafd] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categorys.map((category) => (
          <div key={category._id}>
            <div className="p-5 py-10 bg-white shadow-lg">
              <p className="text-6xl mb-2 text-primary">{category.icon}</p>
              <p className="text-accent text-sm font-bold">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
