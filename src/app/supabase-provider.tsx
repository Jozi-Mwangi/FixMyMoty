"use client"

import { Database } from "@/types/supabaseTypes"
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs"
import { SupabaseClient } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

type SupabaseContext = {
    supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider ({children}:{children:React.ReactNode}){
    const [supabase] = useState(()=>createPagesBrowserClient())
    const router = useRouter()

    useEffect(()=>{
        const {data: {subscription}} = supabase.auth.onAuthStateChange((event)=>{
            if (event === "SIGNED_IN") router.refresh()
        })

        return ()=> {
            subscription.unsubscribe()
        }
    },[router, supabase])

    return (
        <Context.Provider value={{supabase}}>
            <>
                {children}
            </>
        </Context.Provider>
    )
}

export const useSupabase = () => {
    const context = useContext(Context);

    if(context == undefined ){
        throw new Error("Use supabase must be in the SupabaseProvide")
    }
    return context
}