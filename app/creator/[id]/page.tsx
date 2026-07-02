"use client";

import { use, useState } from "react";
import Navbar from "../../components/Navbar";
import { creators } from "../../lib/data";

export default function CreatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const creator = creators.find((c) => c.id === Number(id));

  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  if (!creator) {
    return (
      <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#F5F0F0", fontFamily: "system-ui, sans-serif" }}>
        <Navbar />
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <p style={{ fontSize: "48px", marginBottom: "24px" }}>✦</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "12px" }}>
            Creator not found
          </h1>
          <a href="/explore" style={{ color: "#C0001A", fontSize: "13px", letterSpacing: "2px", textDecoration: "none" }}>
            ← BACK TO EXPLORE
          </a>
        </div>
      </main>
    );
  }

  const handleSubscribe = () => {
    if (selectedTier === null) return;
    setSubscribed(true);
  };

  const selectedTierData = selectedTier !== null ? creator.tiers[selectedTier] : null;

  return (
    <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#F5F0F0", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      <div style={{
        borderBottom: "1px solid #150005",
        background: "linear-gradient(180deg, #0D0005 0%, #0A0A0A 100%)",
        padding: "64px 48px 56px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <a href="/explore" style={{
            color: "#555",
            fontSize: "12px",
            letterSpacing: "2px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}>
            ← EXPLORE
          </a>

          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              backgroundColor: "#1A0008",
              border: "2px solid #C0001A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              flexShrink: 0,
              boxShadow: "0 0 32px rgba(192,0,26,0.2)",
            }}>
              {creator.preview}
            </div>

            <div style={{ flex: 1, minWidth: "240px" }}>
              <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
                {creator.category.toUpperCase()}
              </p>
              <h1 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: "normal",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}>
                {creator.name}
              </h1>
              <p style={{ color: "#777", fontSize: "15px", lineHeight: 1.8, maxWidth: "520px", marginBottom: "28px" }}>
                {creator.bio}
              </p>

              <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#F5F0F0" }}>
                    {creator.subscribers.toLocaleString()}
                  </span>
                  <span style={{ color: "#444", fontSize: "12px", letterSpacing: "1px" }}>subscribers</span>
                </div>
                <div style={{ width: "1px", height: "20px", backgroundColor: "#1A0008" }} />
                <span style={{ color: "#444", fontSize: "13px" }}>{creator.twitter}</span>
                <span style={{ color: "#444", fontSize: "13px" }}>{creator.instagram}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 48px", display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "flex-start" }}>

        <div style={{ flex: "1 1 340px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "24px" }}>
            SUBSCRIPTION TIERS
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {creator.tiers.map((tier, i) => (
              <div
                key={tier.name}
                onClick={() => setSelectedTier(i)}
                style={{
                  backgroundColor: selectedTier === i ? "#110008" : "#0D0005",
                  border: `1px solid ${selectedTier === i ? "#C0001A" : "#1A0008"}`,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                {i === 1 && (
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "#C0001A",
                    color: "#F5F0F0",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    padding: "3px 8px",
                  }}>
                    POPULAR
                  </span>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "18px",
                    color: selectedTier === i ? "#F5F0F0" : "#DDD",
                  }}>
                    {tier.name}
                  </p>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "24px",
                      color: selectedTier === i ? "#C0001A" : "#F5F0F0",
                    }}>
                      ${tier.price}
                    </span>
                    <span style={{ color: "#444", fontSize: "12px" }}>/mo</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {tier.perks.map((perk, pi) => (
                    <div key={pi} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ color: "#C0001A", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                      <span style={{ color: "#777", fontSize: "13px", lineHeight: 1.5 }}>{perk}</span>
                    </div>
                  ))}
                </div>

                {selectedTier === i && (
                  <div style={{
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px solid #1A0008",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    <span style={{ color: "#C0001A", fontSize: "10px" }}>✦</span>
                    <span style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "1px" }}>SELECTED</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {!subscribed ? (
            <button
              onClick={handleSubscribe}
              disabled={selectedTier === null}
              style={{
                width: "100%",
                backgroundColor: selectedTier !== null ? "#C0001A" : "#0D0005",
                color: selectedTier !== null ? "#F5F0F0" : "#333",
                border: `1px solid ${selectedTier !== null ? "transparent" : "#1A0008"}`,
                padding: "18px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: selectedTier !== null ? "pointer" : "not-allowed",
                transition: "all 0.2s",
              }}
            >
              {selectedTier === null
                ? "SELECT A TIER"
                : `SUBSCRIBE · $${creator.tiers[selectedTier].price}/MO`}
            </button>
          ) : (
            <div style={{
              width: "100%",
              backgroundColor: "#1A0008",
              border: "1px solid #C0001A",
              padding: "18px",
              textAlign: "center",
            }}>
              <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "3px", marginBottom: "4px" }}>✦ SUBSCRIBED</p>
              <p style={{ color: "#777", fontSize: "12px" }}>
                {selectedTierData?.name} · ${selectedTierData?.price}/mo
              </p>
            </div>
          )}

          <p style={{ color: "#333", fontSize: "12px", textAlign: "center", marginTop: "16px", lineHeight: 1.6 }}>
            Cancel anytime · Crypto payments accepted
          </p>
        </div>

        <div style={{ flex: "1 1 300px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "24px" }}>
            RECENT POSTS
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {[
              { title: "Latest exclusive drop", date: "Jun 15, 2026", type: "PAID" },
              { title: "Behind the scenes", date: "Jun 10, 2026", type: "FREE" },
              { title: "Monthly content pack", date: "Jun 1, 2026", type: "PAID" },
            ].map((post, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#0D0005",
                  border: "1px solid #1A0008",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "14px", marginBottom: "4px", color: "#DDD" }}>{post.title}</p>
                  <p style={{ color: "#444", fontSize: "12px" }}>{post.date}</p>
                </div>
                {post.type === "PAID" ? (
                  <span style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    padding: "3px 8px",
                    border: "1px solid #C0001A",
                    color: "#C0001A",
                    flexShrink: 0,
                  }}>
                    PAID
                  </span>
                ) : (
                  <span style={{
                    fontSize: "10px",
                    letterSpacing: "1px",
                    padding: "3px 8px",
                    border: "1px solid #333",
                    color: "#555",
                    flexShrink: 0,
                  }}>
                    FREE
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "40px",
            backgroundColor: "#0D0005",
            border: "1px solid #1A0008",
            padding: "28px",
          }}>
            <p style={{ color: "#555", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px" }}>
              ABOUT
            </p>
            <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.8 }}>
              {creator.bio}
            </p>
            <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #1A0008", display: "flex", gap: "16px" }}>
              <a href={`https://twitter.com/${creator.twitter.replace("@", "")}`} style={{ color: "#444", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>
                X / TWITTER
              </a>
              <a href={`https://instagram.com/${creator.instagram.replace("@", "")}`} style={{ color: "#444", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid #150005",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontFamily: "Georgia, serif", color: "#C0001A", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "#2A2A2A", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}
