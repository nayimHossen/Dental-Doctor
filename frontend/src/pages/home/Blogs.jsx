import blog1 from "../../assets/images/blog-3.jpg";
import blog2 from "../../assets/images/blog-1.jpg";
import blog3 from "../../assets/images/blog-2.jpg";
import Blog from "./Blog";

function Blogs() {
  const blogs = [
    {
      _id: 1,
      title: "Cras accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog1,
    },
    {
      _id: 1,
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog2,
    },
    {
      _id: 1,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog3,
    },
  ];
  return (
    <section className="container mx-auto px-5 pt-16 pb-32">
      <div className="text-center mb-3 md:mb-8 lg:mb-16">
        <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
          OUR BLOG
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Latest Blog & News
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
