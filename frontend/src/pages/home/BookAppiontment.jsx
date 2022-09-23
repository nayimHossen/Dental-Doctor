import doctor from "../../assets/images/cta-banner.png";

function BookAppiontment() {
  return (
    <section className="bg-accent mb-5" aria-label="cta">
      <div className="grid md:grid-cols-2 justify-center items-center px-5 gap-5 container mx-auto">
        <div>
          <img
            src={doctor}
            className="mt-[-120px]"
            alt="cta banner"
            class="w-100"
          />
        </div>

        <div>
          <p className="text-base md:text-xl lg:text-1xl font-bold uppercase text-secondary mb-2 md:mb-3 lg:mb-5">
            Book Dentail Appointment
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-base-100 mb-3 md:mb-5 lg:mb-7">
            We Are open And Welcoming Patients
          </h1>
          <p className="text-white pb-5">
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
}

export default BookAppiontment;
