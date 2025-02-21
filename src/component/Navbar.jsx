import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "AJAY", path: "/ajay" },
    { name: "Resume", path: "assets/AJAY.LOKHANDE (8).pdf" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black mx-auto rounded-full fixed top-4 left-0 right-0 max-w-[90%] shadow-lg z-999">
      <ul className="flex justify-between py-3 px-4 text-white text-lg">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedItem(item.name)}
            className={`transition-colors py-2 px-7 rounded-full cursor-pointer ${
              selectedItem === item.name ? "bg-orange-400 text-black" : "hover:bg-gray-800"
            }`}
          >
            <Link to={item.path} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
