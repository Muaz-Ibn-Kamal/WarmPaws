import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "animate.css";
import { FaDog, FaSnowflake, FaTshirt, FaHeart } from "react-icons/fa";

const About = () => {
  const slides = [
    {
      id: 1,
      icon: <FaDog className="text-5xl text-sky-600 mb-3" />,
      title: "Local Winter Services",
      desc: "Find trusted grooming, boarding, and check-up centers near you.",
      bg: "bg-gradient-to-br from-sky-100 to-white",
    },
    {
      id: 2,
      icon: <FaTshirt className="text-5xl text-sky-600 mb-3" />,
      title: "Cozy Winter Outfits",
      desc: "Explore warm jackets, sweaters, and boots for your pet’s comfort.",
      bg: "bg-gradient-to-br from-sky-50 to-sky-100",
    },
    {
      id: 3,
      icon: <FaHeart className="text-5xl text-sky-600 mb-3" />,
      title: "Health & Wellness Tips",
      desc: "Expert advice to maintain your pet’s health and happiness in winter.",
      bg: "bg-gradient-to-br from-white to-sky-50",
    },
    {
      id: 4,
      icon: <FaSnowflake className="text-5xl text-sky-600 mb-3" />,
      title: "Seasonal Safety",
      desc: "Weather alerts and tips to keep your furry friends safe from the cold.",
      bg: "bg-gradient-to-br from-sky-50 to-white",
    },
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-sky-50 via-white to-sky-100 overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-sky-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-sky-300/40 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInDown">
          A Cozy Winter Companion for Your Pets
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
          Welcome to our <strong>Winter Pet Care Platform</strong> — designed to
          help pet owners keep their furry friends warm, safe, and healthy all
          winter long. Discover local care services, cozy clothing, expert
          grooming, and health tips — all in one friendly interface.
        </p>

        <div className="mt-12 animate__animated animate__fadeInUp animate__delay-2s">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="max-w-3xl mx-auto"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className={`p-10 rounded-3xl shadow-lg border border-sky-100 ${slide.bg} animate__animated animate__fadeIn`}
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    {slide.icon}
                    <h3 className="text-2xl font-semibold text-gray-800 mt-3 mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base max-w-md">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About;
