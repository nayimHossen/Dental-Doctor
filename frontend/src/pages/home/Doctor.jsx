import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const { designation, name, img } = doctor;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-2xl hover:text-primary">
          {name}
        </h2>
        <p className="font-bold text-primary py-2">{designation}</p>
        {/* social icon link start */}
        <div>
          <ul className="flex gap-5 justify-center items-center">
            <li>
              <Link to="#">
                <i class="ri-facebook-circle-fill bg-neutral hover:bg-primary hover:text-base-100 text-primary text-2xl rounded-full p-2 cursor-pointer"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="ri-twitter-fill bg-neutral hover:bg-primary hover:text-base-100 text-primary text-2xl rounded-full p-2 cursor-pointer"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i class="ri-instagram-fill bg-neutral hover:bg-primary hover:text-base-100 text-primary text-2xl rounded-full p-2 cursor-pointer"></i>
              </Link>
            </li>
          </ul>
        </div>
        {/* social icon link end */}
      </div>
    </div>
  );
};

export default Doctor;
