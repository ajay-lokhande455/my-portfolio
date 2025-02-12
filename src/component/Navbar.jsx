import React, { useState } from "react";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Skills",
    "AJAY",
    "Resume",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="bg-black mx-auto  rounded-full fixed top-4 left-0 right-0 max-w-[90%] shadow-lg z-999">
      <ul className="flex justify-between py-3 px-4 text-white text-lg">
        {navItems.map((name, index) => (
          <li
            key={index}
            onClick={() => setSelectedItem(name)}
            className={`transition-colors py-2 px-7 rounded-full cursor-pointer ${
              selectedItem === name ? "bg-orange-400 text-black" : "hover:bg-gray-800"
            }`}
          >
            {name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
