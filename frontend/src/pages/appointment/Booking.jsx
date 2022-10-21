import React from "react";
import { format } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Booking = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const formatedDate = format(date, `PP`);
  const { _id, name, slots } = treatment;

  //Modal form data
  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const phone = event.target.phone.value;

    const booking = {
      treatmentName: name,
      treatmentId: _id,
      appointmentDate: formatedDate,
      timeSlot: slot,
      patientEmail: user?.email,
      patientName: user?.displayName,
      patientPhone: phone,
    };

    fetch(`https://dental-doctor.onrender.com/api/v1/booking/new`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`appointment is set, ${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `Already have anappointment on, ${data.exists?.appointmentDate} at ${data.exists?.timeSlot}`
          );
        }
        refetch();
        setTreatment(null);
      });
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
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <div className="form-control mb-2">
              <input
                name="name"
                value={user?.displayName}
                type="text"
                placeholder="Yout Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mb-2">
              <input
                disable
                value={user?.email}
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
