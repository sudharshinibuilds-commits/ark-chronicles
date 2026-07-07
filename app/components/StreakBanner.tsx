"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { updateStreak } from "../lib/streak";

export default function StreakBanner() {
  const [streak, setStreak] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (data.user) {
        const realStreak = await updateStreak(data.user.id);
        setStreak(realStreak);
        const { data: profile } = await supabase
          .from("profiles")
          .select("name")
          .eq("id", data.user.id)
          .single();
        setUserName(profile?.name || "");
      }
    });
  }, []);

  if (streak === 0) return null;

  return (
    <div style={{
      background: "linear-gradient(90deg, #1B2A6B, #0A0A0A)",
      color: "#fff",
      padding: "10px 20px",
      textAlign: "center",
      fontSize: "14px",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    }}>
      🔥 {userName ? `${userName}, you're` : "You're"} on a{" "}
      <strong style={{ color: "#D4A017" }}>{streak}-day reading streak!</strong>
      {" "}Keep building, founder!
    </div>
  );
}