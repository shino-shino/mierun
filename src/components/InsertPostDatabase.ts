import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const supabase = createServerComponentClient({ cookies });

export function insertPostToDatabase(title: string, content: string) {
  supabase.from("post").insert({ title, content })
}
