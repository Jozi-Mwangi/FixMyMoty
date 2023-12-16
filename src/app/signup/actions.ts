"use server";

import { FormDataProps } from "@/types/globalTypes";
import { createServerSupabaseClient } from "../supabase-server";
import { redirect } from "next/navigation";

export const signUpUser = async (formData: FormDataProps) => {
    const supabase = createServerSupabaseClient();
  const REDIRECT_URL = process.env.NEXT_PUBLIC_EMAIL_REDIRECT_URL;
  const {data, error} = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: `${REDIRECT_URL}/auth/callback`,
      data: {
        phone_number: formData.phoneNumber,
        gender: formData.selectedGender,
        user_type: formData.userType,
        full_name: formData.userName,
        updated_at: Date.now(),
      },
    },
  });

  console.log("User created successfully");
  const {data: {user}} = await supabase.auth.getUser();

  const profileId = user?.id;
  redirect(`/driver/${profileId}`)
};
