import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";
import { Link } from "react-router-dom";

const HeroCard = ({ herodatas = [] }) => {
  if (!Array.isArray(herodatas) || herodatas.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No services available at the moment</p>
      </div>
    );
  }

  return (
    <div className="hero-container">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="heroSwiper"
      >
        {herodatas.map((data) => (
          <SwiperSlide key={data.serviceId}>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-3">
                    {data.name}
                  </h2>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500/80 px-3 py-1 rounded-full text-sm">
                      {data.category}
                    </span>
                    <span className="bg-green-500/80 px-3 py-1 rounded-full text-sm">
                      ${data.price}
                    </span>
                  </div>
                  <Link
                    to={`/services/${data.serviceId}`}
                    className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCard;
