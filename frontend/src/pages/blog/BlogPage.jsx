import React from "react";
import BlogBanner from "./BlogBanner";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <section>
      <BlogBanner />
      <div className="container mx-auto px-5 pt-16 pb-16">
        <div className="md:flex">
          <div className="w-full md:w-[70%]">
            <Blogs />
          </div>
          <div className="w-full md:w-[30%]">
            <h2>Hello</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
