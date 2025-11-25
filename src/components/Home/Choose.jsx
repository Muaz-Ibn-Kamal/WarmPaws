import React from "react";
import { FaHeart, FaUserMd, FaPaw, FaClock } from "react-icons/fa";

const Choose = () => {
  const features = [
    {
      icon: <FaHeart className="text-4xl text-primary" />,
      title: "Passionate Care",
      description:
        "Our team treats every pet with love and dedication they deserve",
    },
    {
      icon: <FaUserMd className="text-4xl text-primary" />,
      title: "Expert Team",
      description: "Experienced veterinarians and pet care professionals",
    },
    {
      icon: <FaPaw className="text-4xl text-primary" />,
      title: "Complete Pet Care",
      description:
        "From adoption to healthcare, we provide comprehensive services",
    },
    {
      icon: <FaClock className="text-4xl text-primary" />,
      title: "24/7 Support",
      description: "Emergency services and support whenever you need us",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
