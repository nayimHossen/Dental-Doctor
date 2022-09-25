import React from "react";
import { format } from "date-fns";

const Booking = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;

  //Modal form data
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);

    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle text-white bg-gradient-to-r from-accent to-primary absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl text-primary mb-4">{name}</h3>

          {/* Modal from start */}
          <form onSubmit={handleBooking}>
            <div className="form-control mb-2">
              <input
                value={format(date, `PP`)}
                disabled
                className="input input-bordered"
              />
            </div>

            <select name="slot" className="select select-bordered w-full mb-2">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <div className="form-control mb-2">
              <input
                name="name"
                type="text"
                placeholder="Yout Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mb-2">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mb-2">
              <input
                name="phone"
                type="Number"
                placeholder="Phone Number"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Book Now</button>
            </div>
          </form>
          {/* Modal from end */}
        </div>
      </div>
    </div>
  );
};

export default Booking;
