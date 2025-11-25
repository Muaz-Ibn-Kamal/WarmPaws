import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const { serviceId } = useParams();
  const numberId = parseInt(serviceId);
  const data = useRouteLoaderData("root") || []; 

 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const petDetails = Array.isArray(data)
    ? data.find((pet) => pet.serviceId === numberId)
    : null;

  const handleBook = (e) => {
    e.preventDefault(); 
    if (name && email) {
      toast.success("Book success! 👏");
    
      setName("");
      setEmail("");
    } else {
      toast.error("Please fill in both fields."); 
    }
  };

  if (!petDetails) {
    return <div className="text-center p-8">Pet not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">{petDetails.name}</h2>
      <img
        src={petDetails.image}
        alt={petDetails.name}
        className="w-full rounded-lg mb-4"
      />
      <div className="space-y-4">
        <p className="text-gray-700">{petDetails.description}</p>
        <p className="font-semibold">Price: ${petDetails.price}</p>
        <p>Category: {petDetails.category}</p>
      </div>

      <form className="mt-4" onSubmit={handleBook}>
        <input
          type="text"
          name="name"
          className="input input-bordered"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="email"
          className="input input-bordered"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br />
        <button
          type="submit" 
          className="btn mt-1 btn-success"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default ViewDetails;
