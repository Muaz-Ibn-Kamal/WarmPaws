import React from "react";
import { FaHeart, FaUserMd, FaPaw, FaClock } from "react-icons/fa";

const Choose = () => {
  const features = [
    {
      icon: <FaHeart className="text-5xl text-gradient mb-3" />,
      title: "Passionate Care",
      description:
        "Our team treats every pet with the love and dedication they deserve.",
    },
    {
      icon: <FaUserMd className="text-5xl text-gradient mb-3" />,
      title: "Expert Team",
      description: "Experienced veterinarians and pet care professionals.",
    },
    {
      icon: <FaPaw className="text-5xl text-gradient mb-3" />,
      title: "Complete Pet Care",
      description:
        "From adoption to healthcare, we provide comprehensive services.",
    },
    {
      icon: <FaClock className="text-5xl text-gradient mb-3" />,
      title: "24/7 Support",
      description: "Emergency services and support whenever you need us.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-4 gap-8 px-4 md:px-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
