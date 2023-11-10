"use client"

import React from "react";
import { HelpSupportComp, CompanyFooter , JobsFooter, UsefulLinksFooter} from ".";

const Footer = () => {
  return (
    <div className="bg-[#202225] text-white  max-w-full ">
      <div className=" mx-auto py-3 px-5  flex-col  items-center">
        <div className=" w-full space-y-4 flex flex-col md:mx-12 md:w-3/4 md:flex-row md:jsutify-center my-9" >
        <JobsFooter/>
        <HelpSupportComp/>
        <CompanyFooter/>
        <UsefulLinksFooter/>
        </div>
        <div className=" px-2 py-3 text-center">
          Copyright &copy; {new Date().getFullYear()}
          {" Mwangi Joseph"}
        </div>
      </div>
    </div>
  );
};

export default Footer;
