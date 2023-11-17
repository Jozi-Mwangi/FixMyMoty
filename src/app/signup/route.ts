import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextApiRequest, NextApiResponse } from "next";
import {
  createRouteHandlerClient,
  createServerActionClient,
} from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabaseTypes";

import { NextResponse } from "next/server";

// export const createSupabase = (req:Request) => {
// const cookieStore = cookies()

const supabaseURL =
  "https://supabase.com/dashboard/project/pjarxvvodmtpnggmyfaa";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYXJ4dnZvZG10cG5nZ215ZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjYwOTgsImV4cCI6MjAxNDg0MjA5OH0.tfWNAE73wOMu19nPjfxYcxAYItlRXY-ssgyd9HBzAq8";
// export const supabase = createServerActionClient<Database>({cookies}, {supabaseKey:supabaseKey, supabaseUrl: supabaseURL});

// const supabase = createServerClient(
//   supabaseURL!,
//   supabaseKey!,
//   {
//     cookies: {
//       get(name: string) {
//         return cookieStore.get(name)?.value
//       },
//       set(name: string, value: string, options: CookieOptions) {
//         cookieStore.set({ name, value, ...options })
//       },
//       remove(name: string, options: CookieOptions) {
//         cookieStore.set({ name, value: '', ...options })
//       },
//     },
//   }
// )
// }

export async function POST(request: Request) {
  const cookieStore = cookies();
  const supabase = createServerActionClient<Database>({
    cookies: () => cookieStore,
  });

  const requestURL = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const phoneNumber = formData.get("phoneNumber");
  const userName = String(formData.get("userName"));
  const userType = String(formData.get("userType"));
  const selectedGender = String(formData.get("selectedGender"));

  await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        updated_at: Date.now(),
        phone_number: phoneNumber,
        gender: selectedGender,
        user_type: userType,
        full_name: userName,
      },
    },
  });
  return NextResponse.redirect(requestURL.origin, {
    status: 301,
  });
}

// export async function POT(
//   req: NextApiRequest,
//   res: NextApiResponse
//   // request: Request
// ) {
//   // const {supabase} = createSupabase()
//   const cookieStore = cookies();
//   const supabase = createServerActionClient<Database>({
//     cookies: () => cookieStore,
//   });

//   if (req.method == "POST") {
//     try {
//       const {
//         email,
//         password,
//         phoneNumber,
//         userName,
//         userType,
//         selectedGender,
//       } = req.body;
//       const { data: userData, error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           emailRedirectTo: `${req.headers.origin}/auth/callback`,
//         },
//       });
//       // await supabase.from("profiles").insert({
//       //     updated_at: Date.now(),
//       //     phone_number: phoneNumber,
//       //     gender: selectedGender,
//       //     user_type: userType,
//       //     full_name: userName,
//       //   },)
//       if (error) {
//         console.error("Error signing up:", error.message);
//         return res.status(500).json({ error: "Error signing up" });
//       }
//       return res.status(200).json({ message: "Signed up Successfully" });
//     } catch (error) {
//       console.error("Error processing the request: ", error);
//       return res.status(500).json({ error: "Error processing the request" });
//     }
//   }
//   return NextResponse.redirect(req.headers.origin, {
//     status: 301,
//   });
// }
