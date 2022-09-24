import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { description, title, img } = blog;

  return (
    <div className="shadow-lg border-2 rounded relative">
      <figure className="pb-4 relative">
        {/* blog image */}
        <img
          className="ease-in duration-500 hover:scale-95"
          src={img}
          alt="Shoes"
        />

        {/* Date badge */}
        <div className="flex gap-2 badge-primary bottom-8 left-5 text-base-100 p-2 rounded absolute">
          <i class="ri-calendar-todo-fill"></i>
          <p>24th March 2022</p>
        </div>
      </figure>

      {/* blog info */}
      <div className="p-5">
        <h2 className="text-3xl text-accent font-bold py-4 hover:text-primary">
          <Link to="#">{title}</Link>
        </h2>
        <p className="text-[16px] text-natural font-medium pb-4 ">
          {description}
        </p>
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
