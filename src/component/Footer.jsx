import { title } from "framer-motion/client";
import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdArrowOutward, MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#272727] rounded-t-4xl p-15">
      <div className="flex justify-between text-white py-5">
        <h1 className="text-6xl font-semibold">Lets Connect there</h1>
        <a href="mailto:ajay.lokhande@gmail.com">
          <b className="flex px-4 justify-center items-center rounded-full mx-2 my-2 bg-orange-400">
            Contact Me <MdArrowOutward size={"28px"} />
          </b>
        </a>
      </div>
      <div className="h-[50vh] border-t-2 border-b-2 border-[#475467] mt-5">
        <div>
          <h2 className="text-4xl font-semibold py-6 text-white">Say Hello</h2>
          <p className="text-lg text-white py-7">
            Feel free to reach out with any inquiries or just say hello!
            <br />
            I'm always open to discussing new projects, opportunities, or just a
            chat.
            <div className="py-2">
              <ul className="flex gap-2">
                <li>
                  <a href=""><FaInstagram size={"28px"} /></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ajay-lokhande-902424194/">
                    <FaLinkedin size={"28px"}/>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ajaylokhande">
                    <FaGithub size={"28px"}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ajay.lokhande/">
                    <FaTwitter size={"28px"}/>
                  </a>
                </li>
                <li>
                  <a href="mailto:ajay.lokhande@gmail.com">
                    <MdMailOutline size={"28px"} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaWhatsapp size={"28px"} />
                  </a>
                </li>
              </ul>
            </div>
          </p>
        </div>
        <div>
          <div>{[{title : "Navigation", link : 'Home '}, { }]
            }</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
          <p className="text-lg opacity-20 text-white py-7">
            &copy; 2023 Ajay Lokhande. All rights reserved.
          </p>
        </div>
    </div>
  );
};

export default Footer;
