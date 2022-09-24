import doctor1 from "../../assets/images/doctor-3.png";
import doctor2 from "../../assets/images/doctor-1.png";
import doctor3 from "../../assets/images/doctor-2.png";
import doctor4 from "../../assets/images/doctor-4.png";
import Doctor from "./Doctor";

function Doctors() {
  const doctors = [
    {
      _id: 1,
      name: "Dr. AR Rahaman",
      designation: "Dentist",
      img: doctor1,
    },
    {
      _id: 2,
      name: "Dr. Ibrahim Halder",
      designation: "Dentist",
      img: doctor2,
    },
    {
      _id: 3,
      name: "Dr. Aklima Shikder",
      designation: "Dentist",
      img: doctor3,
    },
    {
      _id: 3,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: doctor4,
    },
  ];
  return (
    <section className="container mx-auto px-5 pt-16 pb-32">
      <div className="text-center mb-3 md:mb-8 lg:mb-16">
        <p className="text-base md:text-xl lg:text-2xl font-bold uppercase text-primary mb-1 md:mb-3 lg:mb-4">
          OUR DOCTORS
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Best Expert Dentist
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}

export default Doctors;
