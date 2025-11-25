import React from "react";
import { useRouteLoaderData } from "react-router";
import ServiceCard from "./ServiceCard"; 

const Services = () => {
  const data = useRouteLoaderData("root");


  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-11/12 mx-auto py-8">
      {data.map((el , index) => (
        <ServiceCard key={index} data={el} />
      ))}
    </div>
  );
};

export default Services;
