import { useState } from "react";
import appointmentBannerImg from "../../assets/images/appointmentBanner.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      className="bg-center bg-cover"
      style={{ backgroundImage: `url("${appointmentBannerImg}")` }}
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-16 container mx-auto px-5">
        <div>
          <p>You picked {format(date, `PP`)}.</p>
        </div>

        {/* Date piker calander start*/}
        <div className="flex justify-center bg-white items-center w-full shadow-lg">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
        {/* Date piker calander end*/}
      </div>
    </div>
  );
};

export default AppointmentBanner;
