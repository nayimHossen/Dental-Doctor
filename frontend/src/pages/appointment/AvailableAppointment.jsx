import React, { useState } from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import Service from "./Service";
import Booking from "./Booking";
import Loading from "../shared/Loading";
import { toast } from "react-toastify";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, `PP`);

  const {
    data: services,
    isLoading,
    error,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/api/v1/available?date=${formatedDate}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error);
  }

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

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 container mx-auto px-5">
        {services?.services.map((service) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
