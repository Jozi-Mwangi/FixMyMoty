"use client"

import React from "react";
import { HelpSupportComp, CompanyFooter , JobsFooter} from ".";

const Footer = () => {
  return (
    <div className="bg-[#202225] text-white w-full">
      <div className="flex flex-col mx-auto py-3 px-5 space-y-4">
        {/* <div>Help & Support</div> */}
        <HelpSupportComp/>
        {/* <div>Company</div> */}
        <CompanyFooter/>
        {/* <div>Popular Jobs</div> */}
        <JobsFooter/>
        <div>Useful Links</div>
      </div>
    </div>
  );
};

export default Footer;
