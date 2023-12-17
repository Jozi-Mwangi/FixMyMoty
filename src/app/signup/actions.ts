"use server";

import { FormDataProps } from "@/types/globalTypes";
import { createServerSupabaseClient } from "../supabase-server";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const signUpUser = async (formData: FormDataProps) => {
  const supabase = createServerSupabaseClient();

  // Check if the username first exists
  const {data, error} = await supabase
    .from("profiles")
    .select()
    .eq("full_name", formData.userName.trim())
  
  if (data && data?.length>0){
    console.log(data);
    return toast.error("Username already exists")
  }

  const REDIRECT_URL = process.env.NEXT_PUBLIC_EMAIL_REDIRECT_URL;
  
  await supabase.auth.signInWithOtp({
    email: formData.email.trim(),
    options: {
      emailRedirectTo: `${REDIRECT_URL}/auth/callback`,
      data: {
        password: formData.password,
        phone_number: formData.phoneNumber,
        gender: formData.selectedGender,
        user_type: formData.userType,
        full_name: formData.userName,
        updated_at: Date.now(),
      },
    },
  });

  console.log("User created successfully");
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profileId = user?.id;
  redirect(`/driver/${profileId}`);
};
