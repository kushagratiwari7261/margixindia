import { createClient } from '@supabase/supabase-js';

// The URL is provided, but we still need the Anon Key to connect.
const supabaseUrl = 'https://edkpkswqedxhwwemrtmt.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'REPLACE_WITH_YOUR_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
