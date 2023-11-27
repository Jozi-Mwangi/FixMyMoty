import { LandingPage } from "../components"
import { cookies, headers } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/types/supabaseTypes"

export default async function Home() {

  const supabase = createServerComponentClient<Database>({
    // headers,
    cookies
  })

  const {data, error} = await supabase.auth.getUser()
  console.log({data, error})
  
  return (
    <LandingPage/>
  )
}
