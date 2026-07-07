import { supabase } from "./supabase";

export async function updateStreak(userId: string) {
  const today = new Date().toISOString().split("T")[0];
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("streak_count, last_active")
    .eq("id", userId)
    .single();

  if (!profile) return 0;

  const lastActive = profile.last_active;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  let newStreak = profile.streak_count || 0;

  if (lastActive === today) {
    return newStreak;
  } else if (lastActive === yesterdayStr) {
    newStreak = newStreak + 1;
  } else {
    newStreak = 1;
  }

  await supabase
    .from("profiles")
    .update({ streak_count: newStreak, last_active: today })
    .eq("id", userId);

  return newStreak;
}

export async function getStreak(userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("streak_count")
    .eq("id", userId)
    .single();
  return data?.streak_count || 0;
}