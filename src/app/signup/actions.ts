"use server";
import { FormDataProps, ProfileIDParams, SignUpResponse, UserIDParams } from "@/types/globalTypes";
// import { useRouter } from "next/router";
import { supabase } from "@/lib/supabase";

export async function signUpAction(
  formData: FormDataProps
): Promise<SignUpResponse> {
  // const router = useRouter();

  const handleAuthChange = async (event: any, session: any) => {
    // Listen for changes in the authentication state of the user
    if (event === "SIGNED_IN" && session?.user?.email_confirmed_at) {
      // const userID = session.user.id;

      const { data, error } = await supabase.from("profiles").insert({
        updated_at: Date.now(),
        phone_number: formData.phoneNumber,
        gender: formData.selectedGender,
        user_type: formData.userType,
        full_name: formData.userName,
      });

      if (error) {
        console.error(
          "Error adding user data to the database: ",
          error
        );

        return;
      }
      console.log("Profile successfully created. ", data);
      
      // const profileId = data?.user?.id
      // Redirect the user to their profile page
      // router.push(`/driver/${userId}`);
      // return {userID}
    }
  };

  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });
    if (error) {
      console.error("Error signing up the user: ", error.message);
      console.error("Full error object: ", error)
    } else {
      // router.push(`/`);
      // supabase.auth.onAuthStateChange(handleAuthChange)
    }

    return { profileId: data?.user?.id };
  } catch (error) {
    console.error("Error Processing signup form: ", error);
    return { error: new Error("Error Processing signup form") };
  }
}
