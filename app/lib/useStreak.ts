"use client";

import { useState, useEffect } from "react";

interface StreakData {
  count: number;
  lastVisit: string;
  claimedToday: boolean;
  totalPoints: number;
}

const STORAGE_KEY = "vinus-streak";

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function useStreak() {
  const [streak, setStreak] = useState<StreakData>({
    count: 0,
    lastVisit: "",
    claimedToday: false,
    totalPoints: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let data: StreakData;
    try {
      data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "");
    } catch {
      data = { count: 0, lastVisit: "", claimedToday: false, totalPoints: 0 };
    }

    const today = todayStr();
    if (data.lastVisit === today) {
      // Already visited today
    } else if (data.lastVisit === yesterdayStr()) {
      // Continue streak
      data.count += 1;
      data.lastVisit = today;
      data.claimedToday = false;
    } else {
      // Streak broken or first visit
      data.count = 1;
      data.lastVisit = today;
      data.claimedToday = false;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setStreak(data);
    setLoaded(true);
    if (!data.claimedToday) setShowReward(true);
  }, []);

  const claimReward = () => {
    const reward = 10 + streak.count * 5; // More points for longer streaks
    const updated = {
      ...streak,
      claimedToday: true,
      totalPoints: streak.totalPoints + reward,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setStreak(updated);
    setShowReward(false);
    return reward;
  };

  return { streak, loaded, showReward, setShowReward, claimReward };
}
