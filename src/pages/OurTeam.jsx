import React from "react";
import "./Team.css";

export default function OurTeam() {
  const cc = [
 
    {
      avatar: "/images/2.jpg",
      name: "Saeei Suryavanshi",
      position: "Founder",
    },
    {
        avatar: "/images/1.jpg",
        name: "Rajat Rathaur",
        position: "Founder",
      },
    {
      avatar: "/images/3.jpg",
      name: "Siddhi Dingorkar",
      position: "Founder",
    },
  ];

  return (
    <div className="core-team">
      <h1 className="display-5" style={{ fontWeight: "bold", fontSize:"45px" }}>
        Core Team
      </h1>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4 ">
        -Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="team-members">
        {cc.map((cc, index) => (
          <div key={index} className="team-member">
            <div className="rounded-image">
              <img src={cc.avatar} alt="" className="rounded-full" />
            </div>
            <p className="font-medium mt-2 text-lg ">{cc.name}</p>
            <p className="text-zinc-500 opacity-75">{cc.position}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
}