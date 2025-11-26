import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "animate.css";

const MeetOurVets = () => {
  const [vets, setVets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVetsData = async () => {
      try {
        const response = await fetch("/OurVets.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setVets(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVetsData();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <section className="relative py-16 bg-gradient-to-b from-sky-50 via-white to-sky-100 overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
          Meet Our Expert Vets
        </h2>
        <p className="text-gray-600 mb-12 animate__animated animate__fadeInUp animate__delay-1s">
          Our caring team of veterinarians is here to ensure your pets stay
          healthy, warm, and happy all winter long.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          className="max-w-4xl mx-auto"
        >
          {vets.map((vet) => (
            <SwiperSlide
              key={vet.id}
              className="w-72 sm:w-80 md:w-96 animate__animated animate__zoomIn"
            >
              {/* PREMIUM CARD START */}
              <div
                className="
                  relative backdrop-blur-lg bg-white/70 
                  shadow-xl rounded-3xl border border-sky-100/40 
                  hover:shadow-3xl transition-all duration-500 
                  hover:-translate-y-3 hover:bg-white/80
                  overflow-hidden
                "
              >
                {/* Image Section */}
                <div className="relative h-64 flex items-center justify-center bg-gradient-to-b from-sky-50 to-white rounded-t-3xl">
                  
                  {/* Glow behind image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-36 h-36 bg-sky-200/30 blur-3xl rounded-full"></div>
                  </div>

                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="
                      w-48 h-48 object-cover rounded-2xl shadow-lg
                      transition-all duration-500
                      hover:scale-110 hover:shadow-2xl
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 tracking-tight mb-1">
                    {vet.name}
                  </h3>

                  <p className="text-sm font-medium text-sky-600 mb-2">
                    {vet.specialization}
                  </p>

                  <p className="text-sm text-gray-500 mb-4">
                    {vet.experience}
                  </p>

                  <a
                    href={`mailto:${vet.email}`}
                    className="
                      inline-block mt-2 text-sky-700 font-medium 
                      hover:text-sky-900 hover:underline transition-all
                    "
                  >
                    {vet.email}
                  </a>
                </div>
              </div>
              {/* PREMIUM CARD END */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeetOurVets;
