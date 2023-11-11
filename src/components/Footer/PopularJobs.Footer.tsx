import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useFooterContext } from "./context-provider";
import { FooterContextProps } from "@/types/globalTypes";

const PopularJobsFooterComp = () => {

  const context = useFooterContext() as FooterContextProps ;
  const { isOpen, toggleMenu } = context;

  return (
    <div id="popular-jobs" className="w-full md:mx-4 md:px-3 md:mt-0" onClick={toggleMenu}>
      <button className="text-gray-400 flex items-center gap-3">
        Popular Jobs{" "}
        <span className="md:hidden" >
          <AiOutlineCaretDown size={20} />
        </span>{" "}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col space-y-2 my-2 md:flex`}
      >
        <a href="#">MOT</a>
        <a href="#">Serviving</a>
        <a href="#">Brake Pads</a>
        <a href="#">Batter</a>
        <a href="#">Clutch</a>
        <a href="#">Diagnostic Inspection</a>
        <a href="#">Alternator</a>
        <a href="#">Body Shop</a>
        <a href="#">All Jobs</a>
      </div>
    </div>
  );
};

export default PopularJobsFooterComp;
