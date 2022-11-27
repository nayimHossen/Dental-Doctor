import React, { useState } from "react";
import Category from "../about/Category";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="">
      <AppointmentBanner date={date} setDate={setDate} />
      <Category />
      <AvailableAppointment date={date} setDate={setDate} />
    </div>
  );
};

export default Appointment;
