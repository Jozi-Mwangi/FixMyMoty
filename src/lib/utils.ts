import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Database } from "@/types/supabaseTypes"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getURL() {
  let url = 
  process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
  process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
  'http://localhost:3000/';

  url.includes("http")? url : `https//${url}`;
  // Including the trailing /
  url.charAt(url.length -1) === "/" ? url : `${url}/`;
  return url;
}