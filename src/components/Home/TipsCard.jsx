import React from "react";

const TipsCard = ({ tCard }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Tips</span>

          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{tCard.title}</h2>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {tCard.tips.map((tip, index) => (
              <li key={index}>
                {" "}
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
