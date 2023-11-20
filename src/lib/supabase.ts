import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { CookieOptions } from "@supabase/ssr";
import { Database } from "@/types/supabaseTypes";

const supabaseUrl = "https://pjarxvvodmtpnggmyfaa.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqYXJ4dnZvZG10cG5nZ215ZmFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjYwOTgsImV4cCI6MjAxNDg0MjA5OH0.tfWNAE73wOMu19nPjfxYcxAYItlRXY-ssgyd9HBzAq8"

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);
const cookieStore = cookies();
export const supabase = createServerClient<Database>(
  // process.env.NEXT_PUBLIC_SUPABASE_URL!,
  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  supabaseUrl!,
  supabaseAnonKey!,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options });
      },
    },
  }
);
