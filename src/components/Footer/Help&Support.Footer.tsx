import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useFooterContext } from "./context-provider";
import { FooterContextProps } from "@/types/globalTypes";

const HelpSupportComponent = () => {
 
  const context = useFooterContext() as FooterContextProps;
  const { isOpen, toggleMenu } = context;

  return (
    <div id="help & support" className="w-full md:mx-4 md:px-3 md:mt-0" onClick={toggleMenu}>
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
