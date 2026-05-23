/**
 * Supabase client placeholder — wire up when backend is ready.
 *
 * import { createClient } from '@supabase/supabase-js';
 *
 * const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
 * const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
 *
 * export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 */

export const supabase = null;

export async function fetchPlayer(_id) {
  // return supabase.from('players').select('*').eq('id', id).single();
  return null;
}

export async function fetchFixtures(_teamId) {
  // return supabase.from('fixtures').select('*').eq('team_id', teamId);
  return null;
}
