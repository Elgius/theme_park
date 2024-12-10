import { createClient } from "@supabase/supabase-js";

export default function supabaseIntializer() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey) {
    return createClient(supabaseUrl, supabaseKey);
  } else {
    console.error(
      "Environment variables are missing or invalid, client initialization failed."
    );
    throw new Error("Supabase client initialization failed.");
  }
}
