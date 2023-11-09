"use client"

import React, { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai';

const PopularJobsFooterComp = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <div id='popular jobs' className="w-full" onClick={toggleMenu}>
        <button className="text-gray-400 flex items-center gap-3" >Popular Jobs <span><AiOutlineCaretDown size={20} /></span> </button>
        <div className={`${isOpen?"block" : "hidden"} flex flex-col space-y-2 my-2`} >
            <a href='#' >MOT</a>
            <a href='#' >Serviving</a>
            <a href='#' >Brake Pads</a>
            <a href='#' >Batter</a>
            <a href='#' >Clutch</a>
            <a href='#' >Diagnostic Inspection</a>
            <a href='#' >Alternator</a>
            <a href='#' >Body Shop</a>
            <a href='#' >All Jobs</a>
        </div>
    </div>
  )
}

export default PopularJobsFooterComp