import { ProfileIDParams } from "@/types/globalTypes";
import { Database } from "@/types/supabaseTypes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";
import { supabase } from "@/lib/supabase";

// const supabase = createClientComponentClient<Database>();

export async function generateStaticParams() {
  const { data, error } = await supabase.from("profiles").select("profile_id");
  if (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
  const paths = data.map((profile) => ({
    params: { profile_id: profile.profile_id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function generateStaticProps(params: ProfileIDParams) {
  const { profile_id } = params;

  const { data, error } = supabase
    .from("profiles")
    .select("*")
    .eq("profile_id", profile_id)
    .single();

  if (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile: data,
    },
  };
}

const page = ({ profile }: any) => {
  return <div>{profile.name}</div>;
};

export default page;
