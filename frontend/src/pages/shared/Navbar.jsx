import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="bg-accent py-4">
        <div className="flex justify-between container mx-auto">
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
    </header>
  );
};

export default Navbar;
