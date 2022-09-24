const Service = ({ service }) => {
  const { designation, title, img } = service;
  return (
    <div className="flex justify-start items-center border-2 bg-base-100 shadow-xl gap-4 px-5 py-8 ">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="">
        <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
        <p className="font-medium text-natural">{designation}</p>
      </div>
    </div>
  );
};

export default Service;
