import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useFooterContext } from "./context-provider";
import { FooterContextProps } from "@/types/globalTypes";

const CompanyFooterComp = () => {
  const context = useFooterContext() as FooterContextProps;
  const { isOpen, toggleMenu } = context;

  return (
    <div id="company-footer" className="md:mt-0 w-full md:mx-4 md:px-3" onClick={toggleMenu}>
      <button className="text-gray-400 flex items-center gap-3">
        Company{" "}
        <span className="md:hidden" >
          <AiOutlineCaretDown size={20} />
        </span>{" "}
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex flex-col space-y-2 my-2 md:flex`}
      >
        <a href="#">About Us</a>
        <a href="#">Get a quotation</a>
        <a href="#" >Fleet Servicing</a>
        <a href="#">Reviews</a>
        <a href="#">News & Blogs</a>
        <a href="#">Terms & Privacy</a>
      </div>
    </div>
  );
};

export default CompanyFooterComp;
