import React, { useState } from "react";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiSpring, SiHibernate, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-500" />, level: 80, description: "Learning advanced Java concepts like multithreading and collections." },
  { name: "Spring", icon: <SiSpring className="text-green-500" />, level: 70, description: "Exploring Spring Boot for secure and scalable web applications." },
  { name: "Hibernate", icon: <SiHibernate className="text-yellow-600" />, level: 65, description: "Learning ORM for efficient database handling in Java." },
  { name: "React.js", icon: <FaReact className="text-blue-400" />, level: 85, description: "Developing React apps with hooks, state management, and APIs." },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 90, description: "Improving JS skills with ES6+ features, DOM manipulation, and event handling." },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" />, level: 85, description: "Using utility-first CSS for responsive UI designs." },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" />, level: 80, description: "Practicing SQL queries, joins, stored procedures, and database optimization." },
];

const Skills = () => {
  const [openSkill, setOpenSkill] = useState(null);

  const toggleSkill = (index) => {
    setOpenSkill(openSkill === index ? null : index);
  };

  return (
    <section className="py-10 text-[#344054]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Skills</h2>
        <p className="text-gray-500 mb-6 text-center">Click on a skill to see details:</p>

        <div className="">
          {skills.map((skill, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between border-b border-gray-200 backdrop-blur-lg bg-white/10 shadow-lg  py-4 px-3 cursor-pointer hover:bg-amber-500 transition"
                onClick={() => toggleSkill(index)}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{skill.icon}</div>
                  <p className="text-lg font-medium">{skill.name}</p>
                </div>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-300 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-400 h-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>

                <span
                  className="text-sm text-gray-600 font-medium cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleSkill(index);
                  }}
                >
                  {openSkill === index ? "▲" : "▼"}
                </span>
              </div>

              {openSkill === index && (
                <p className="text-gray-600 text-sm mt-2 pl-10">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
