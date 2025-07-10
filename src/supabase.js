import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hvnjwqletokbtqinutwe.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2bmp3cWxldG9rYnRxaW51dHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNTE4ODAsImV4cCI6MjA2NzYyNzg4MH0.5cdlwQi6X_BgdaTBLcY1KZnBxhOpph6FI7rw2VZ8150";

export const supabase = createClient(supabaseUrl, supabaseKey);
