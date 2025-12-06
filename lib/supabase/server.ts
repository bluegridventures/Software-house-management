// server.ts
import { createServerClient } from "@supabase/auth-helpers-nextjs";

/**
 * Creates a Supabase server-side client.
 * Fully compatible with Next.js App Router and Supabase Auth v2.
 */
export function createSupabaseServerClient() {
  return createServerClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    cookieOptions: {
      name: "sb-auth-token",           // default Supabase auth cookie
      lifetime: 60 * 60 * 24 * 7,      // 7 days in seconds
      path: "/",                        // cookie available for the whole site
      sameSite: "lax",                  // recommended default
      secure: process.env.NODE_ENV === "production", // secure in production
    },
  });
}