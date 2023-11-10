import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

const HelpSupportComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="help & support" className="w-full md:mx-4 md:px-3" onClick={toggleMenu}>
      <button className="text-gray-400 flex items-center gap-3">
        Help & Support{" "}
        <span className="md:hidden" >
          <AiOutlineCaretDown size={20} />
        </span>{" "}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col space-y-2 my-2 md:flex`}
      >
        <a href="#">How it Works</a>
        <a href="#">Support Center</a>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default HelpSupportComponent;
