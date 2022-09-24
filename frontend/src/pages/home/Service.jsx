const Service = ({ service }) => {
  const { designation, title, img } = service;
  return (
    <div>
      <div className="flex bg-base-100 shadow-xl gap-3 px-5 py-8 justify-start items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="">
          <h2 className="card-title">{title}</h2>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
