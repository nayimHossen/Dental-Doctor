// import Swiper core and required modules
import { Autoplay, A11y } from "swiper";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review = () => {
  const reviews = [
    {
      _id: 1,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Shakib Al",
      location: "Dhaka",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 2,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Nayim Hossen",
      location: "Mymensingh",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Moman Mia",
      location: "Borishal",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Salma Akther",
      location: "Mymensingh",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Janifer",
      location: "Mirpur-2",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
    {
      _id: 6,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi.",
      name: "Shoriful Islam",
      location: "Shambhuganj",
      img: "http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage4/user3.png",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review._id}>
          <div className="flex justify-center items-center flex-col bg-white shadow-xl">
            <div className="pt-4">
              <img src={review.img} alt="Shoes" className="rounded-xl h-20" />
            </div>
            <div className="text-center pb-7 pt-3">
              <div>
                <p className="text-lg font-bold mb-0">{review.name}</p>
                <p className="text-xs pb-2">{review.location}</p>
              </div>
              <i class="ri-chat-quote-line text-3xl text-[orange]"></i>
              <p className="">"{review.comment}"</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Review;
