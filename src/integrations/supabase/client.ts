
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jvlrxgqadejdqgbgvlnz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bHJ4Z3FhZGVqZHFnYmd2bG56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MzU4MjUsImV4cCI6MjA1NjQxMTgyNX0.HCYT3NVNrEchO_cxykKuT0FsMOh1273uO1Igb-pENVg";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
