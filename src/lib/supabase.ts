import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { CookieOptions } from "@supabase/ssr";
import { Database } from "@/types/supabaseTypes";
// import { NextApiRequest } from "next";


const supabaseUrl = "https://pjarxvvodmtpnggmyfaa.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYXJ4dnZvZG10cG5nZ215ZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjYwOTgsImV4cCI6MjAxNDg0MjA5OH0.tfWNAE73wOMu19nPjfxYcxAYItlRXY-ssgyd9HBzAq8"

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// export const initSupabase =async()=>{
let supabase : ReturnType<typeof createServerClient>

if(typeof window === "undefined"){
  // Running on the server
  // const cookieStore = cookies();
     supabase = createClient(
      supabaseUrl!,
      supabaseAnonKey!,
      // {
      //   cookies: {
      //     get(name: string) {
      //       return cookieStore.get(name)?.value
      //     },
      //   },
      // }
      )  
  } else {
    // Running on the client, cookies are available
    const cookieStore = cookies()

     supabase = createServerClient(
      supabaseUrl!,
      supabaseAnonKey!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
  }
  export {supabase}

// }
