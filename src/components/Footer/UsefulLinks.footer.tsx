import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useFooterContext } from "./context-provider";
import { FooterContextProps } from "@/types/globalTypes";

const UsefulLinksComp = () => {
  const context = useFooterContext() as FooterContextProps ;
  const { isOpen, toggleMenu } = context;

  return (
    <div id="compant-footer" className="w-full md:mx-4 md:px-3 md:mt-0" onClick={toggleMenu}>
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
