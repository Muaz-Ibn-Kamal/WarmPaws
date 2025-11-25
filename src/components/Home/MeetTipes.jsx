import React, { useEffect, useState } from "react";
import TipsCard from "./TipsCard";

const MeetTipes = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./WinterCareTips.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; 
  }

  return (
    <div>
      <div>
        <h1 className="bg-amber-400 font-semibold text-4xl rounded-full mb-7 border border-b-cyan-600 p-6 text-center">
          Winter Care Tips for Pets
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((tCard) => (
          <TipsCard key={tCard.id} tCard={tCard} />
        ))}
      </div>
    </div>
  );
};

export default MeetTipes;
