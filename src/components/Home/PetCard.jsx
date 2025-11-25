import React from "react";
import { Link } from "react-router";

const PetCard = ({ data }) => {
  return (
    <Link to={`/services/${data.serviceId}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure className="overflow-hidden">
          <img
            className="w-[400px] h-[300px] object-cover "
            src={data.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.serviceName}</h2>
          <div className="flex justify-center items-center">
            <p>Rating : {data.rating}</p>
            <p>Price: {data.price}</p>
          </div>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
