"use client";

import { useLang } from "../components/LangProvider";
import { href, imgSrc } from "../lib/basePath";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { creators } from "../lib/data";

export default function LeaderboardPage() {
  const { lang } = useLang();
  const isKo = lang === "ko";

  // Rank creators by subscribers
  const ranked = [...creators].sort((a, b) => b.subscribers - a.subscribers);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px" }}>
          {isKo ? "실시간 랭킹" : "LIVE RANKINGS"}
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "normal", marginBottom: "12px" }}>
          {isKo ? "톱 크리에이터" : "Top Creators"}
        </h1>
        <p style={{ color: "var(--text-dim)", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22C55E", display: "inline-block", animation: "pulse 2s infinite" }}></span>
          {isKo ? "매시간 업데이트" : "Updated hourly"}
        </p>
      </section>

      {/* Podium - Top 3 */}
      <section style={{ padding: "20px 24px 40px", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "12px", marginBottom: "48px" }}>
          {[ranked[1], ranked[0], ranked[2]].map((c, idx) => {
            const actualRank = idx === 1 ? 0 : idx === 0 ? 1 : 2;
            const heights = ["140px", "180px", "120px"];
            return (
              <a key={c.id} href={href(`/creator/${c.id}`)} style={{
                flex: 1, maxWidth: "200px", textDecoration: "none", textAlign: "center",
              }}>
                <div style={{ position: "relative", marginBottom: "12px" }}>
                  <div style={{
                    width: idx === 1 ? "80px" : "64px",
                    height: idx === 1 ? "80px" : "64px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto",
                    border: `2px solid ${idx === 1 ? "var(--accent)" : "var(--border)"}`,
                  }}>
                    <img src={imgSrc(c.avatar)} alt={c.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <span style={{ position: "absolute", top: "-8px", right: "50%", transform: "translateX(50%)", fontSize: "24px" }}>
                    {medals[actualRank]}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "2px", fontFamily: "Georgia, serif" }}>{c.name}</p>
                <p style={{ fontSize: "16px", color: "var(--accent)", fontWeight: "bold" }}>{c.subscribers.toLocaleString()}</p>
                <p style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px" }}>{isKo ? "구독자" : "SUBS"}</p>
                <div style={{
                  height: heights[idx],
                  backgroundColor: idx === 1 ? "var(--accent)" : "var(--bg-card)",
                  border: "1px solid var(--border)",
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  paddingTop: "12px",
                  fontFamily: "Georgia, serif",
                  fontSize: "28px",
                  color: idx === 1 ? "var(--accent-fg)" : "var(--text-dim)",
                }}>
                  {actualRank + 1}
                </div>
              </a>
            );
          })}
        </div>

        {/* Rest of rankings */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {ranked.slice(3).map((c, i) => (
            <a key={c.id} href={href(`/creator/${c.id}`)} style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "16px 20px", backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)", textDecoration: "none",
              transition: "all 0.2s",
            }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "var(--text-dim)", width: "32px" }}>
                {i + 4}
              </span>
              <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <img src={imgSrc(c.avatar)} alt={c.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "15px", color: "var(--text-primary)" }}>{c.name}</p>
                <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px" }}>{c.category.toUpperCase()}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "15px", color: "var(--accent)", fontWeight: "bold" }}>{c.subscribers.toLocaleString()}</p>
                <p style={{ fontSize: "10px", color: "var(--text-faint)" }}>{isKo ? "구독자" : "subscribers"}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
