import React, { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";
import Service from "./Service";
import Booking from "./Booking";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/services`)
      .then((res) => res.json())
      .then((data) => setServices(data.services));
  }, []);

  return (
    <div>
      <div className="text-center py-16">
        <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
          Appointment
        </p>
        <h1 className="text-accent text-2xl md:text-3xl lg:text-4xl font-bold">
          Available Appointment On:{" "}
          <span className="text-warning">
            {format(date || new Date(), `PP`)}
          </span>
        </h1>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <Booking
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
