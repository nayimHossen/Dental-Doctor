import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { description, title, img } = blog;

  return (
    <div className="shadow-lg">
      <figure className="pb-4">
        <img className="ease-in duration-300" src={img} alt="Shoes" />
      </figure>
      <div className="p-5">
        <h2 className="text-3xl text-accent font-bold py-4 hover:text-primary">
          <Link to="#">{title}</Link>
        </h2>
        <p className="text-[17px] text-[#333] pb-4 ">{description}</p>
        <div className="card-actions justify-start">
          <button className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
