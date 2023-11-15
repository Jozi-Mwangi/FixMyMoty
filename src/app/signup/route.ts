import { FormDataProps } from "@/types/globalTypes";
import { Database } from "@/types/supabaseTypes";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// let formData:FormDataProps = 

export async function handler(req:NextApiRequest, res:NextApiResponse) {
    const router = useRouter()
    const supabase = createMiddlewareClient<Database>({req, res});

    if(req.method == "POST"){
        try {
            const {email, password, phoneNumber, userName, userType, selectedGender } = req.body
            const {data: userData, error} = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${location.origin}/auth/callback`,
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