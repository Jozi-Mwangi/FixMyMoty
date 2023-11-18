"use server"
import { FormDataProps } from "@/types/globalTypes";
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase";

export async function signUpAction(formData:FormDataProps) {

    const router = useRouter();

    
    await supabase.auth.signUp({
    email: formData.email,
      password: formData.password,
      options: {
        data: {
          updated_at: Date.now(),
          phone_number: formData.phoneNumber,
          gender: formData.selectedGender,
          user_type: formData.userType,
          full_name: formData.userName,
        },
      },
    });
    router.push("/driver");
}