"use client";

import { useState, useEffect } from "react";
import { useLang } from "./LangProvider";

const LEVELS = [
  { name: "Newcomer", nameKo: "뉴비", min: 0, icon: "🌱" },
  { name: "Supporter", nameKo: "서포터", min: 100, icon: "⭐" },
  { name: "Superfan", nameKo: "슈퍼팬", min: 500, icon: "💎" },
  { name: "Patron", nameKo: "패트론", min: 1500, icon: "👑" },
  { name: "Legend", nameKo: "레전드", min: 5000, icon: "🔥" },
];

export function getLevel(points: number) {
  let current = LEVELS[0];
  let next = LEVELS[1];
  for (let i = 0; i < LEVELS.length; i++) {
    if (points >= LEVELS[i].min) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  return { current, next };
}

export default function FanLevel({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const [points, setPoints] = useState(0);
  const isKo = lang === "ko";

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const streak = JSON.parse(localStorage.getItem("vinus-streak") || "{}");
      setPoints(streak.totalPoints || 0);
    } catch {
      setPoints(0);
    }
  }, []);

  const { current, next } = getLevel(points);
  const progress = next
    ? ((points - current.min) / (next.min - current.min)) * 100
    : 100;

  if (compact) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontSize: "14px" }}>{current.icon}</span>
        <span style={{ fontSize: "12px", color: "var(--text-dim)" }}>
          {isKo ? current.nameKo : current.name}
        </span>
      </div>
    );
  }

  return (
    <div style={{
      padding: "24px",
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "32px" }}>{current.icon}</span>
          <div>
            <p style={{ fontSize: "16px", color: "var(--text-primary)", fontFamily: "Georgia, serif" }}>
              {isKo ? current.nameKo : current.name}
            </p>
            <p style={{ fontSize: "12px", color: "var(--accent)" }}>{points} VP</p>
          </div>
        </div>
        {next && (
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px" }}>
              {isKo ? "다음 레벨" : "NEXT"}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
              {next.icon} {isKo ? next.nameKo : next.name}
            </p>
          </div>
        )}
      </div>
      {next && (
        <>
          <div style={{ height: "8px", backgroundColor: "var(--bg-deep)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "var(--accent)",
              transition: "width 0.5s",
            }}></div>
          </div>
          <p style={{ fontSize: "11px", color: "var(--text-faint)", marginTop: "8px", textAlign: "right" }}>
            {next.min - points} VP {isKo ? "남음" : "to go"}
          </p>
        </>
      )}
    </div>
  );
}
