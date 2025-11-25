import React from "react";
import { useRouteLoaderData } from "react-router";
import PetCard from "./PetCard";
import MeetTipes from "./MeetTipes";
import MeetOurVets from "./MeetOurVets";
import Choose from "./Choose";
import HeroSlider from "./HeroSlider";

const Home = () => {
  const data = useRouteLoaderData("root");
  const pets = data.slice(0, 6);

  return (
    <div>
      <section className="w-11/12 mx-auto pt-5 ">
        <HeroSlider></HeroSlider>
      </section>
      <section className="pt-20">
        <h1 className="text-4xl font-bold text-center">Our Pet</h1>
        <div className="grid md:grid-cols-3 pt-5 grid-cols-1 gap-3 w-11/12 mx-auto">
          {pets.map((data) => (
            <PetCard key={data.serviceId} data={data} />
          ))}
        </div>
      </section>

      {/* Section 1 */}
      <section className="w-11/12 mx-auto pt-20">
        <MeetTipes />
      </section>

      {/* Section 2 */}
      <section className="w-11/12 mx-auto pt-20">
        <MeetOurVets />
      </section>
      {/* Section  */}
      <section className="w-11/12 mx-auto pt-20">
        <Choose></Choose>
      </section>
    </div>
  );
};

export default Home;
