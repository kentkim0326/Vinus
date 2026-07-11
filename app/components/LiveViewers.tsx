"use client";

import { useState, useEffect } from "react";
import { useLang } from "./LangProvider";

export default function LiveViewers({ seed = 1 }: { seed?: number }) {
  const { lang } = useLang();
  const [viewers, setViewers] = useState(0);
  const isKo = lang === "ko";

  useEffect(() => {
    // Base count derived from seed for consistency
    const base = 20 + (seed * 37) % 180;
    setViewers(base);

    // Fluctuate every few seconds to feel "live"
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 7) - 3;
        return Math.max(5, prev + delta);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [seed]);

  if (viewers === 0) return null;

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 10px",
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: "4px",
      fontSize: "11px",
      color: "#fff",
    }}>
      <span style={{
        width: "6px", height: "6px", borderRadius: "50%",
        backgroundColor: "#EF4444",
        display: "inline-block",
        animation: "pulse 1.5s infinite",
      }}></span>
      <span style={{ fontWeight: "bold" }}>{viewers}</span>
      <span style={{ opacity: 0.8 }}>{isKo ? "명 시청 중" : "watching"}</span>
    </div>
  );
}
