"use server"
import { FormDataProps, SignUpResponse } from "@/types/globalTypes";
// import { useRouter } from "next/"
import { supabase } from "@/lib/supabase";

export async function signUpAction(formData:FormDataProps): Promise<SignUpResponse> {

    // const router = useRouter();

  try {
    const {data, error} = await supabase.auth.signUp({
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
    if(error){
      console.error("Error signing up the user", error.message)  
    }

    return {profileId: data?.user?.id}
  } catch (error) {
    console.error("Error Processing signup form", error)    
    return {error: new Error("Error Processing signup form")}
  }   
}