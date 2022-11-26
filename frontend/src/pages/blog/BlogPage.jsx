import React from "react";
import BlogBanner from "./BlogBanner";
import Blogs from "./Blogs";
import Categorys from "./Categorys";
import LatestPosts from "./LatestPosts";
import Search from "./Search";
import Tags from "./Tags";

const BlogPage = () => {
  return (
    <section>
      <BlogBanner />
      <div className="container mx-auto px-5 pt-16 pb-8">
        <div className="md:flex gap-5">
          <div className="w-full md:w-[70%]">
            <Blogs />
            <div className="flex justify-center items-center mt-10">
              <div className="btn-group gap-x-2">
                <button className="btn btn-md btn-secondary">«</button>
                <button className="btn btn-md btn-accent">2</button>
                <button className="btn btn-md btn-secondary">3</button>
                <button className="btn btn-md btn-secondary">»</button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%]">
            <Search />
            <LatestPosts />
            <Categorys />
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
