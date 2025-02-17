import React, { useState, useEffect } from "react";
import projectbg from "../assets/projectbg.webp";
import stone1 from "../assets/stone1.png";
import stone2 from "../assets/stone2.png";
import stone3 from "../assets/stone3.png";
import "../style/animations.css";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setIsHovered(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      className="relative overflow-hidden"
    >
      {/* Text Section - Placed Above */}
      <div className="relative flex  justify-between px-20 gap-60 top-20 left-1/2 transform -translate-x-1/2 z-50 text-white  w-full">
        <h2 className="text-5xl font-semibold">
          My <span className="text-orange-400">Projects</span>
        </h2>
        <p className="w-[50%] mx-auto text-md text-center">
          Here are some of the projects I've worked on, showcasing my skills in
          web development and backend technologies:
        </p>
      </div>

      {/* Background Image */}
      <div
        className="bg-cover bg-center rounded-4xl relative h-[100vh] overflow-hidden"
        style={{ backgroundImage: `url(${projectbg})` }}
      >
        {/* Animated Stones */}
        <img
          src={stone1}
          className={`absolute right-[-250px] transition-all duration-500 ${
            isHovered ? "bounce-animation1" : ""
          }`}
          style={{ width: "50%", height: "auto" }}
          alt="Stone"
        />
        <img
          src={stone2}
          className={`absolute left-[-150px] top-30 transition-all ${
            isHovered ? "bounce-animation2" : ""
          }`}
          style={{ width: "30%", height: "auto" }}
          alt="Stone"
        />
        <img
          src={stone3}
          className={`absolute left-80 top-10 transition-all duration-500 ${
            isHovered ? "bounce-animation3" : ""
          }`}
          style={{ width: "15%", height: "auto" }}
          alt="Stone"
        />

        <div className="grid absolute grid-cols-3 z-50 gap-10 w-full px-15 bottom-9 ">
          <div className="relative rounded-4xl border border-white hover:bg-orange-400 shadow-md backdrop-blur-sm bg-white/6  h-90 overflow-hidden "></div>
          <div className="relative rounded-4xl border border-white hover:bg-orange-400 shadow-md backdrop-blur-sm bg-white/6  h-90 overflow-hidden"></div>
          <div className="relative rounded-4xl border border-white  hover:bg-orange-400 shadow-md backdrop-blur-sm bg-white/6   h-90 overflow-hidden"></div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
