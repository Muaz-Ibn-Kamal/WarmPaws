import { useRouteLoaderData } from "react-router-dom";
import HeroCard from "./HeroCard";

function HeroSlider() {
  const allData = useRouteLoaderData("root") || [];
  
  const heroData = allData;

  return (
    <div className="w-full">
      <HeroCard herodatas={heroData} />
    </div>
  );
}

export default HeroSlider;
