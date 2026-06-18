"use client";

import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useParams } from "next/navigation";
import { creators } from "../../lib/data";

export default function CreatorPage() {
  const params = useParams();
  const id = Number(params.id);
  const creator = creators.find((c) => c.id === id) || creators[0];
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>

      {/* 네비게이션 */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        borderBottom: "1px solid #150005",
        position: "sticky",
        top: 0,
        backgroundColor: "#0A0A0A",
        zIndex: 100,
      }}>
        <a href="/" style={{
          fontSize: "22px",
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          color: "#C0001A",
          letterSpacing: "5px",
          textDecoration: "none",
        }}>
          VINUS
        </a>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <a href="/" style={{ color: "#666", textDecoration: "none", fontSize: "13px", letterSpacing: "1px" }}>← Back</a>
          <a href="#" style={{
            backgroundColor: "#C0001A",
            color: "#F5F0F0",
            padding: "8px 22px",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>
            JOIN
          </a>
        </div>
      </nav>

      {/* 크리에이터 헤더 */}
      <section style={{
        padding: "80px 48px 60px",
        borderBottom: "1px solid #150005",
        display: "flex",
        gap: "48px",
        alignItems: "flex-start",
      }}>
        {/* 아바타 */}
        <div style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          backgroundColor: "#1A0008",
          border: "2px solid #C0001A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          flexShrink: 0,
          boxShadow: "0 0 24px rgba(192,0,26,0.2)",
        }}>
          {creator.preview}
        </div>

        {/* 정보 */}
        <div style={{ flex: 1 }}>
          <p style={{
            color: "#C0001A",
            fontSize: "11px",
            letterSpacing: "5px",
            marginBottom: "12px",
          }}>
            {creator.category.toUpperCase()}
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            fontWeight: "normal",
            marginBottom: "16px",
          }}>
            {creator.name}
          </h1>
          <p style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: 1.8,
            maxWidth: "560px",
            marginBottom: "28px",
          }}>
            {creator.bio}
          </p>
          <div style={{ display: "flex", gap: "32px" }}>
            <div>
              <span style={{ color: "#F5F0F0", fontSize: "24px", fontFamily: "Georgia, serif" }}>
                {creator.subscribers.toLocaleString()}
              </span>
              <span style={{ color: "#444", fontSize: "13px", marginLeft: "8px" }}>subscribers</span>
            </div>
            <div>
              <span style={{ color: "#F5F0F0", fontSize: "24px", fontFamily: "Georgia, serif" }}>
                {creator.tiers.length}
              </span>
              <span style={{ color: "#444", fontSize: "13px", marginLeft: "8px" }}>tiers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 구독 티어 */}
      <section style={{ padding: "80px 48px" }}>
        <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
          MEMBERSHIP
        </p>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "32px",
          fontWeight: "normal",
          marginBottom: "48px",
        }}>
          Choose your tier
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}>
          {creator.tiers.map((tier, index) => (
            <div
              key={index}
              onClick={() => setSelectedTier(index)}
              style={{
                backgroundColor: selectedTier === index ? "#140008" : "#0D0005",
                border: `1px solid ${selectedTier === index ? "#C0001A" : "#1A0008"}`,
                padding: "36px 28px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <p style={{
                color: "#C0001A",
                fontSize: "11px",
                letterSpacing: "3px",
                marginBottom: "12px",
              }}>
                {tier.name.toUpperCase()}
              </p>
              <div style={{ marginBottom: "28px" }}>
                <span style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "40px",
                  color: "#F5F0F0",
                }}>
                  ${tier.price}
                </span>
                <span style={{ color: "#444", fontSize: "14px", marginLeft: "4px" }}>/mo</span>
              </div>

              <div style={{ marginBottom: "32px" }}>
                {tier.perks.map((perk, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "10px",
                  }}>
                    <span style={{ color: "#C0001A", fontSize: "10px", marginTop: "4px" }}>✦</span>
                    <span style={{ color: "#888", fontSize: "14px", lineHeight: 1.5 }}>{perk}</span>
                  </div>
                ))}
              </div>

              <button style={{
                width: "100%",
                padding: "12px",
                backgroundColor: selectedTier === index ? "#C0001A" : "transparent",
                border: "1px solid #C0001A",
                color: "#F5F0F0",
                fontSize: "12px",
                letterSpacing: "2px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}>
                {selectedTier === index ? "SELECTED" : "SELECT TIER"}
              </button>
            </div>
          ))}
        </div>

        {/* 구독 버튼 */}
        {selectedTier !== null && (
          <div style={{
            marginTop: "48px",
            padding: "32px",
            backgroundColor: "#0D0005",
            border: "1px solid #C0001A",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <div>
              <p style={{ color: "#666", fontSize: "13px", marginBottom: "4px" }}>Selected</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "20px" }}>
                {creator.tiers[selectedTier].name} — ${creator.tiers[selectedTier].price}/mo
              </p>
            </div>
            <a href="/subscribe/success" style={{
  backgroundColor: "#C0001A",
  color: "#F5F0F0",
  padding: "14px 40px",
  border: "none",
  fontSize: "13px",
  letterSpacing: "2px",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-block",
}}>
  SUBSCRIBE WITH CRYPTO →
</a>
          </div>
        )}
      </section>

      {/* 푸터 */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid #150005",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontFamily: "Georgia, serif",
          color: "#C0001A",
          letterSpacing: "5px",
          fontSize: "16px",
        }}>
          VINUS
        </span>
        <span style={{ color: "#2A2A2A", fontSize: "12px" }}>
          © 2026 Vinus. All rights reserved.
        </span>
      </footer>

    </main>
  );
}