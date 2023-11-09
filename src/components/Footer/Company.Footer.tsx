"use client"

import React, {useState} from 'react'
import { AiOutlineCaretDown } from "react-icons/ai"

const CompanyFooterComp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div id='compant footer' className="w-full" onClick={toggleMenu}>
    <button className="text-gray-400 flex items-center gap-3" >Company <span><AiOutlineCaretDown size={20} /></span> </button>
    <div className={`${isOpen?"block" : "hidden"} flex flex-col space-y-2 my-2`} >
        <a href='#' >About Us</a>
        <a href='#' >Reviews</a>
        <a href='#' >News & Blogs</a>
        <a href='#' >Terms & Privacy</a>
    </div>
</div>

  )
}

export default CompanyFooterComp