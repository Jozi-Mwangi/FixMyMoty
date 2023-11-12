import { LandingPage } from "../components"
import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { Database } from "@/types/supabaseTypes"

export default async function Home() {
  return (
    <LandingPage/>
  )
}
