"use server";

import { FormDataProps } from "@/types/globalTypes";
import { createServerSupabaseClient } from "../supabase-server";
import { redirect } from "next/navigation";

export const signUpUser = async (formData: FormDataProps) => {
  const supabase = createServerSupabaseClient();

  // Check if the username first exists
  const { data } = await supabase
    .from("profiles")
    .select()
    .eq("full_name", formData.userName.trim());

  if (data && data?.length > 0) {
    console.log(data);
    return console.error("Username already exists")
  }

  const REDIRECT_URL = process.env.NEXT_PUBLIC_EMAIL_REDIRECT_URL;

  const { error } = await supabase.auth.signUp({
    email: formData.email.trim(),
    password: formData.password,
    options: {
      // emailRedirectTo: `${location.origin}/auth/callback`,
      emailRedirectTo: `${REDIRECT_URL}/auth/callback `,
      data: {
        phone_number: formData.phoneNumber,
        gender: formData.selectedGender,
        user_type: formData.userType,
        full_name: formData.userName,
        updated_at: Date.now(),
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user?.id);

  return {
    data,
    error: error?.message,
  };
  // const profileId = user?.id;
  // redirect(`/driver/${profileId}`);
};
