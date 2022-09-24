import doctor from "../../assets/images/cta-banner.png";

const BookAppiontment = () => {
  return (
    <section className="bg-accent mb-5 pt-5" aria-label="cta">
      <div className="grid md:grid-cols-2 justify-center items-center px-5 gap-5 container mx-auto">
        <div>
          <img src={doctor} className="mt-[-110px] w-100" alt="cta banner" />
        </div>

        <div>
          <p className="text-base md:text-xl lg:text-1xl font-bold uppercase text-secondary mb-1 md:mb-2 lg:mb-4">
            Book Dentail Appointment
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-100 mb-2 md:mb-4 lg:mb-6">
            We Are open And Welcoming Patients
          </h1>
          <p className="text-white mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            earum ab cupiditate autem accusantium expedita sequi, temporibus,
            aut illo doloribus quaerat explicabo, assumenda consectetur est vel
            ad sed maiores doloremque consequatur.
          </p>
          <button className="btn text-base-100 uppercase font-bold bg-gradient-to-r from-accent to-primary mb-5">
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookAppiontment;
