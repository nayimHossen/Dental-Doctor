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
      _id: 2,
      title: "Dras accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog2,
    },
    {
      _id: 3,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog3,
    },
    {
      _id: 4,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog3,
    },
    {
      _id: 5,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog3,
    },
    {
      _id: 6,
      title: "Seas accumsan nulla nec lacus ultricies placerat.",
      description:
        "Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.",
      img: blog3,
    },
  ];
  return (
    <section>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
