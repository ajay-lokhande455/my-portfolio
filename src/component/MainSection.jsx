import React, { useState } from "react";
import vector1 from "../assets/vector1.svg";
import vector2 from "../assets/vector2.svg";
import profilepic from "../assets/profilepic.png";
import { MdArrowOutward } from "react-icons/md";
import bgdesign from "../assets/bgdesign.png";

const MainSection = () => {
  const [selected, setSelected] = useState("portfolio");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-15  mt-[20vh] relative">
      <div className="flex justify-center flex-col items-center gap-20 text-center relative">
        {/* Heading Section */}
        <div
          className={`relative w-2xl transition-all duration-600 ${
            isHovered ? "translate-y-80 opacity-0" : "opacity-100"
          }`}
        >
          <p className="py-2 px-5 inline border rounded-full font-semibold">
            Hello !
          </p>
          <img src={vector1} className="absolute top-[-30px] left-[55%]" />
          <h1 className="text-7xl font-semibold py-2 leading-20">
            I'm <span className="text-orange-400">Ajay</span>, Java FullStack
            Developer
          </h1>
          <img src={vector2} className="absolute bottom-[-40px] left-[-44px]" />
        </div>

 
        <div className="w-[50%] h-70 bg-[#FEB273] rounded-t-full flex justify-center items-center relative">
          <img
            src={profilepic}
            alt="profile pic"
            className="absolute bottom-0 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          <img
            src={bgdesign}
            alt=""
            className={`absolute w-80 bottom-0 transition-all duration-400 ${
              isHovered ? "opacity-100 w-full" : "opacity-0 w-80"
            }`}
          />
          <div className="flex absolute bottom-4 backdrop-blur-lg bg-white/10 shadow-lg text-white py-1 px-1 text-lg border rounded-full z-50">
            <button
              className={`py-2 px-7 flex gap-4 items-center rounded-full transition-all duration-300 ${
                selected === "portfolio" ? "bg-orange-400" : ""
              }`}
              onClick={() => setSelected("portfolio")}
            >
              Portfolio{" "}
              {selected === "portfolio" && <MdArrowOutward size={28} />}
            </button>
            <button
              className={`py-2 px-7 flex gap-4 rounded-full transition-all duration-300 ${
                selected === "contact" ? "bg-orange-400" : ""
              }`}
              onClick={() => setSelected("contact")}
            >
              Contact {selected === "contact" && <MdArrowOutward size={28} />}
            </button>
          </div>
        </div>
      </div>


      <div
        className={`w-80 text-md absolute top-75 text-[#344054] transition-all duration-600 ${
          isHovered ? "translate-y-[-250px] " : "opacity-100"
        }`}
      >
        <p>
          <span className="font-medium text-2xl">"I'm</span> a passionate{" "}
          <span className="font-semibold text-lg">
            Java Full-Stack Developer
          </span>{" "}
          with expertise in building scalable web applications. I love solving
          real-world problems through code."
        </p>
      </div>

      <div
        className={`w-80 text-md absolute right-10 top-75 text-[#344054] transition-all duration-600 ${
          isHovered ? "translate-y-[-250px] " : "opacity-100"
        }`}
      >
        <p className="font-medium text-lg">
          🚀 Experienced in Java, Spring Boot, javascript, and React js.
        </p>
        <p className="mt-2 text-md">
          Passionate about developing scalable applications and learning new
          technologies.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
