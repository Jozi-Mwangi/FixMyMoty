"use client";

import React, {useState, useEffect} from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image";
import CarLogo from "../../../public/CarLogo.svg";

const NAVIGATION_ITEMS = [
  { title: "Find Garage", route: "/garages" },
  { title: "How it Works", route: "/howitworks" },
  { title: "Sign up", route: "/signup" },
  { title: "Login", route: "/login" },
];

const Navbar = () => {

  const [openNav, setOpenNav] = useState(true);
    const handleNav = ()=> {
      setOpenNav(!openNav);
      if(!openNav){
        document.body.style.overflow = "hidden";
      }else {
        document.body.style.overflow = "";
      }
    }

  return (
    <>
      <div className="w-full fixed h-[56px] z-10 border-b-gray-500 border-2 backdrop-blur-md top-0 left-0  ">
        <div className="flex px-4 justify-between items-center my-2">
          {/* <Image src="/CarLogo.png" width={100} height={20} alt='Logo' style={{width:100, height:20}}/> */}
          <div className="font-mono text-lg">FixMyMoty</div>
          
          <div className="md:hidden" onClick={handleNav} >
            {openNav?<GiHamburgerMenu size={30} />: <AiOutlineClose size={30} /> }
          </div>

          <div className="hidden md:flex mx-8" >
            {NAVIGATION_ITEMS.map((item)=>(
              <div key={item.title} className="mx-3" >
                <a href={item.route} className="hover:text-blue-500" >{item.title.toUpperCase()}</a>
              </div>
            ))}  
          </div>

        </div>
        <div className={!openNav?"md:hidden flex flex-col items-center justify-center backdrop-blur-md":"hidden"} >
          {
            NAVIGATION_ITEMS.map((item)=>(
              <div key={item.title} className="my-3" >
                <a href={item.route} >
                  {item.title.toUpperCase()}
                </a>
              </div>
            ))
          }
        </div>

      </div>
    </>
  );
};

export default Navbar;
