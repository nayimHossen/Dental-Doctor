import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-accent py-16">
        <div className="grid px-5 sm:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto text-base-100">
          <div>
            <div>
              <div>
                <Link to="#">
                  <h2 className="text-4xl font-bold text-base-100 mb-5">
                    Dentelo.
                  </h2>
                </Link>
                <p className="mb-5 text-neutral">
                  Mauris non nisi semper, lacinia neque in, dapibus leo.
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.Quisque vitae metus.
                </p>
              </div>
              <div className="flex justify-start items-center gap-3">
                <i className="ri-time-line text-3xl bg-primary p-2 rounded"></i>
                <div className="text-neutral">
                  <h2>Monday-Saturday:</h2>
                  <h2>9:00am-10:00pm</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Others Links</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="/home">Home</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="/services">Services</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="/blog">Blogs</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Services</h2>
            <ul className="mt-5">
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Root Canal</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Alignment Teeth</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Cosmetic Teeth</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Oral Hygiene</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Cavity Inspection</Link>
              </li>
              <li className="flex justify-start text-neutral gap-1 mb-3 hover:text-base-100">
                <i className="ri-add-line text-primary"></i>
                <Link to="#">Live Advisory</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-5">Contact Us</h2>

            <div className="flex justify-start items-center gap-3 mb-3">
              <i className="ri-map-pin-line text-3xl bg-primary p-2 rounded"></i>
              <div className="text-neutral">
                <h4>1247/Plot No. 39, 15th Phase</h4>
                <h2>LHB Colony, Kanpur</h2>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <i className="ri-phone-fill text-3xl bg-primary p-2 rounded"></i>
              <div className="text-neutral">
                <h4>+91-7052-101-786</h4>
              </div>
            </div>

            <div className="flex justify-start items-center gap-3 mb-3">
              <i className="ri-mail-line text-3xl bg-primary p-2 rounded"></i>
              <div className="text-neutral">
                <h4>help@example.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-[#222] text-base-100">
        <div className="flex justify-center items-center">
          <p>
            <small>
              Copyright © 2022 - All right reserved: mail.nayimhossen@gmail.com
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
