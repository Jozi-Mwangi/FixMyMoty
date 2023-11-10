"use client";

import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const UsefulLinksComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="compant footer" className="w-full md:mx-4 md:px-3" onClick={toggleMenu}>
      <button className="text-gray-400 flex items-center gap-3">
        Useful Links{" "}
        <span className="md:hidden" >
          <AiOutlineCaretDown size={20} />
        </span>{" "}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col space-y-2 my-2  md:flex`}
      >
        <a href="#">DIY Servicing</a>
        <a href="#">MOT Checker</a>
        <a href="#">Car Model maintenance guides</a>
        <a href="#">Warranties</a>
      </div>
    </div>
  );
};

export default UsefulLinksComp;
