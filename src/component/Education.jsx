import React from "react";
import horizantalline from "../assets/horizantalline.svg";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Sant Gadge Baba Amravati University",
      year: "2021-2024",
    },
    {
      degree: "HSC",
      institution: "State Board of Maharashtra",
      year: "2020-2021",
    },
    {
      degree: "SSC",
      institution: "State Board of Maharashtra",
      year: "2019-2020",
    },
  ];

  return (
    <div className="text-[#344054] p-15">
      <div className="text-5xl font-semibold text-center">
        <h1>
          My <span className="text-orange-400">Education</span>
        </h1>
      </div>
      <div className="flex pt-10 gap-5 justify-between">
        <div>
          {education.map((edu, index) => (
            <div key={index} className="flex flex-row justify-between py-5">
              <div>
                <h2 className="text-3xl font-semibold text-orange-400 py-2">
                  {edu.degree}
                </h2>
                <p className="font-semibold text-lg">{edu.institution}</p>
                <p>{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <img src={horizantalline} alt="" />
        </div>
        <div className="pt-9 w-[40%]">
          <h2 className="text-3xl font-semibold text-orange-400 pb-3">
            My Educational Journey
          </h2>
          <p className="text-lg">
            My educational journey has been a transformative experience, shaping
            my knowledge and skills in the field of computer applications. I
            completed my Bachelor's in Computer Application from Sant Gadge
            Baba Amravati University, where I gained hands-on experience in
            programming, database management, and software development. Prior
            to that, I completed my HSC and SSC from the State Board of
            Maharashtra, building a strong foundation in core subjects. My
            academic path has fueled my passion for technology and problem-
            solving, setting the stage for my journey as a full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
