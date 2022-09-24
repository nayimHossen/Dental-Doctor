import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <header>
      {/* Top mini navbar start*/}
      <div className="bg-accent py-3 hidden md:block">
        <div className="flex justify-between container mx-auto px-5">
          <div>
            <ul className="flex gap-3">
              <li className="flex justify-center items-center gap-2">
                <i class="ri-mail-line text-secondary"></i>
                <Link to="mailto:info@example.com" className="text-base-100">
                  info@example.com
                </Link>
              </li>
              <li className="flex justify-center items-center gap-2">
                <i class="ri-phone-line text-secondary"></i>
                <Link to="tel:+917052101786" className="text-base-100">
                  +91-7052-101-786
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-center items-center gap-3">
              <li className="">
                <i className="ri-facebook-circle-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-instagram-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-twitter-line text-xl text-base-100"></i>
              </li>
              <li>
                <i className="ri-youtube-line text-xl text-base-100"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Top mini navbar end*/}

      {/* navbar */}
      <nav className="sm:bg-[#F7FAFD] bg-base-100 shadow-sm">
        <div className="flex justify-between items-center py-5 container mx-auto relative px-5">
          {/* md and lg navigation start*/}
          <div>
            <Link to="/">
              <h2 className="text-4xl font-bold text-accent">Dentelo.</h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-between items-center md:gap-4 lg:gap-16">
              <div>
                <ul className="flex md:gap-3 lg:gap-10">
                  <li className="font-bold">
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/services">Services</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/blog">Blogs</NavLink>
                  </li>
                  <li className="font-bold">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <button className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary px-7">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          {/* md and lg navigation end*/}

          {/* Mobile navigation bar start*/}
          <label className="btn bg-white hover:bg-white px-3 swap swap-rotate border-2 md:hidden">
            <input type="checkbox" onClick={() => setCheckbox(!checkbox)} />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4">
              <ul className="menu bg-base-100 shadow-lg rounded-box w-full p-2">
                <li className="font-bold">
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/blog">Blogs</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <button className="btn text-base-100 bg-gradient-to-r from-secondary to-primary px-7">
                    BOOK APPOINTMENT
                  </button>
                </li>
              </ul>
            </div>
          )}
          {/* Mobile navigation bar end*/}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
