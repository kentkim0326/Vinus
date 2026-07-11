"use client";

import { useState } from "react";
import { useStreak } from "../lib/useStreak";
import { useLang } from "./LangProvider";

export default function DailyReward() {
  const { streak, loaded, showReward, setShowReward, claimReward } = useStreak();
  const { lang } = useLang();
  const [claimed, setClaimed] = useState<number | null>(null);
  const isKo = lang === "ko";

  if (!loaded || !showReward) return null;

  const handleClaim = () => {
    const reward = claimReward();
    setClaimed(reward);
    setTimeout(() => setShowReward(false), 2000);
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      padding: "20px",
      backdropFilter: "blur(4px)",
    }}>
      <div style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--accent)",
        borderRadius: "8px",
        padding: "40px 32px",
        maxWidth: "360px",
        width: "100%",
        textAlign: "center",
        position: "relative",
      }}>
        <button
          onClick={() => setShowReward(false)}
          aria-label={isKo ? "닫기" : "Close"}
          style={{
            position: "absolute", top: "12px", right: "16px",
            background: "none", border: "none", color: "var(--text-dim)",
            fontSize: "20px", cursor: "pointer",
          }}
        >×</button>

        {claimed === null ? (
          <>
            <div style={{ fontSize: "56px", marginBottom: "8px" }}>🔥</div>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "48px",
              color: "var(--accent)",
              lineHeight: 1,
              marginBottom: "4px",
            }}>{streak.count}</p>
            <p style={{ color: "var(--text-primary)", fontSize: "16px", marginBottom: "8px" }}>
              {isKo ? `${streak.count}일 연속 방문!` : `${streak.count} Day Streak!`}
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "13px", marginBottom: "28px", lineHeight: 1.6 }}>
              {isKo
                ? `오늘의 보상: ${10 + streak.count * 5} VP를 받으세요`
                : `Claim today's reward: ${10 + streak.count * 5} VP`}
            </p>
            <button
              onClick={handleClaim}
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-fg)",
                border: "none",
                padding: "14px 40px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold",
              }}
            >
              {isKo ? "보상 받기" : "CLAIM REWARD"}
            </button>
            {/* Streak calendar dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "24px" }}>
              {Array.from({ length: 7 }, (_, i) => (
                <div key={i} style={{
                  width: "24px", height: "24px", borderRadius: "50%",
                  backgroundColor: i < (streak.count % 7 || 7) ? "var(--accent)" : "var(--bg-deep)",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", color: i < (streak.count % 7 || 7) ? "var(--accent-fg)" : "var(--text-ghost)",
                }}>
                  {i < (streak.count % 7 || 7) ? "✓" : i + 1}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>✨</div>
            <p style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              color: "var(--accent)",
              marginBottom: "8px",
            }}>+{claimed} VP</p>
            <p style={{ color: "var(--text-primary)", fontSize: "15px" }}>
              {isKo ? "보상을 받았습니다!" : "Reward claimed!"}
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "13px", marginTop: "8px" }}>
              {isKo ? `총 ${streak.totalPoints} VP 보유` : `Total: ${streak.totalPoints} VP`}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
