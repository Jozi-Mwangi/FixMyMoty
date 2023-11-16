import { FormDataProps } from "@/types/globalTypes";
import { Database } from "@/types/supabaseTypes";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

// const supabaseURL: URL = "https://supabase.com/dashboard/project/pjarxvvodmtpnggmyfaa"
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY



import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

// export async function POST(request: Request) {
//   const cookieStore = cookies()

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return cookieStore.get(name)?.value
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           cookieStore.set({ name, value, ...options })
//         },
//         remove(name: string, options: CookieOptions) {
//           cookieStore.set({ name, value: '', ...options })
//         },
//       },
//     }
//   )
//     return
//  }
// let req : NextRequest 
// const res = NextResponse.next()
// const supabase = createMiddlewareClient<Database>({req, res});


// let formData:FormDataProps = 

export async function handler(req:NextApiRequest, res:NextApiResponse) {
    const router = useRouter()
  
    const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
  
    if(req.method == "POST"){
        try {
            const {email, password, phoneNumber, userName, userType, selectedGender } = req.body
            const {data: userData, error} = await supabase.auth.signUp({
                email,
                password,
                options: {
                    // emailRedirectTo: `${location.origin}/auth/callback`,
                    emailRedirectTo: `${req.headers.origin}/auth/callback`,
                    data: {
                        updated_at: Date.now(),
                        phone_number: phoneNumber,
                        gender: selectedGender,
                        user_type: userType,
                        full_name: userName
                    }
                },
            })
            router.push("/driver/[projectId]");
            if (error) {
                console.error('Error signing up:', error.message);
                return res.status(500).json({ error: 'Error signing up' });
            }

            return res.status(200).json({message: "Signed up Successfully"})
        } catch (error) {
            console.error("Error processing the request: ", error)
            return res.status(500).json({error: "Error processing the request"})
        }
    }
    return res.status(405).json({error: "Method not allowed"})
}

export const GET = async (req: NextRequest, res: NextResponse) => {
    // Your GET request logic here...
  };
  
  export const PUT = async (req: NextRequest, res: NextResponse) => {
    // Your PUT request logic here...
  };