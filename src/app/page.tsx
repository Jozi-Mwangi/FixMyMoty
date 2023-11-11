import { LandingPage } from "../components"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/types/supabaseTypes"

export default function Home() {
  

  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  const cookieStore = cookies()

  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })

  const user = supabase.auth.getUser();
  // console.log(user);
  

  return (
    <LandingPage/>
  )
}
