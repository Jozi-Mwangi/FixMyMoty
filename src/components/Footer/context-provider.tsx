"use client"

import { ChildrenProps } from "@/types/globalTypes";
import { createContext, useContext, useState } from "react"

export const FooterContext = createContext({});

export default function propProvider ({children}:ChildrenProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return <FooterContext.Provider value={{isOpen, toggleMenu}} >
        {children}
    </FooterContext.Provider>
}

export function useFooterContext (){
    const context = useContext(FooterContext);
    if(!context){
        throw new Error("Please use the Footer Context!")
    }
    return context;
}