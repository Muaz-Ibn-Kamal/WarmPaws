import React from "react";
import { Link } from "react-router";

const PetCard = ({ data }) => {
  return (
    <Link to={`/services/${data.serviceId}`}>
      <div
        className="
        w-[350px] h-[500px] 
        bg-white rounded-2xl shadow-md 
        hover:shadow-xl hover:-translate-y-1 
        transition-all duration-300 
        overflow-hidden border border-gray-200 
        flex flex-col
      "
      >
        {/* Image (Fixed Ratio) */}
        <div className="w-full aspect-[4/3] overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            src={data.image}
            alt={data.serviceName}
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="text-lg font-semibold text-gray-800 h-[48px] overflow-hidden">
            {data.serviceName}
          </h2>

          {/* Rating + Price */}
          <div className="flex justify-between items-center text-sm my-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              ⭐ {data.rating}
            </span>
            <span className="text-green-600 font-semibold text-lg">
              ৳ {data.price}
            </span>
          </div>

          {/* Description (Fixed Height) */}
          <p className="text-gray-600 text-sm line-clamp-3 h-[60px]">
            {data.description}
          </p>

          {/* Button Always Bottom */}
          <div className="mt-auto pt-3">
            <button className="btn btn-primary btn-sm w-full rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
