"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";

const creators = [
  { id: 1, name: "Aria Nova", category: "Art & Illustration", subscribers: 2840, preview: "✦", tier: "from $5/mo" },
  { id: 2, name: "Echo Veil", category: "Music & Audio", subscribers: 1520, preview: "♪", tier: "from $3/mo" },
  { id: 3, name: "Luna Craft", category: "Photography", subscribers: 4210, preview: "◈", tier: "from $8/mo" },
  { id: 4, name: "Nyx Studio", category: "Digital Art", subscribers: 3100, preview: "⬡", tier: "from $5/mo" },
  { id: 5, name: "Vex Origins", category: "Writing", subscribers: 980, preview: "✒", tier: "from $2/mo" },
  { id: 6, name: "Sol Cipher", category: "Video & Film", subscribers: 2250, preview: "▶", tier: "from $10/mo" },
];

type Creator = typeof creators[0];

function CreatorCard({ creator }: { creator: Creator }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#110008" : "#0D0005",
        padding: "36px 28px",
        cursor: "pointer",
        borderTop: `2px solid ${hovered ? "#C0001A" : "#1A0008"}`,
        transition: "all 0.25s ease",
      }}
    >
      <div style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        backgroundColor: "#1A0008",
        border: `1px solid ${hovered ? "#C0001A" : "#2A0010"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        marginBottom: "20px",
        transition: "all 0.25s",
        boxShadow: hovered ? "0 0 12px rgba(192,0,26,0.3)" : "none",
      }}>
        {creator.preview}
      </div>
      <h3 style={{
        fontFamily: "Georgia, serif",
        fontSize: "19px",
        fontWeight: "normal",
        color: "#F5F0F0",
        marginBottom: "6px",
      }}>
        {creator.name}
      </h3>
      <p style={{
        color: "#555",
        fontSize: "12px",
        letterSpacing: "1.5px",
        marginBottom: "24px",
        textTransform: "uppercase",
      }}>
        {creator.category}
      </p>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "20px",
        borderTop: "1px solid #1A0008",
      }}>
        <div>
          <span style={{ color: "#F5F0F0", fontSize: "13px" }}>
            {creator.subscribers.toLocaleString()}
          </span>
          <span style={{ color: "#444", fontSize: "12px", marginLeft: "4px" }}>
            subscribers
          </span>
        </div>
        <span style={{
          color: hovered ? "#F5F0F0" : "#C0001A",
          fontSize: "11px",
          letterSpacing: "2px",
          backgroundColor: hovered ? "#C0001A" : "transparent",
          padding: "5px 12px",
          border: "1px solid #C0001A",
          transition: "all 0.25s",
        }}>
          {creator.tier}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />
      <section style={{ padding: "120px 48px 100px", maxWidth: "760px" }}>
        <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "28px" }}>
          CREATOR PLATFORM
        </p>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(48px, 7vw, 88px)",
          lineHeight: 1.05,
          marginBottom: "32px",
          fontWeight: "normal",
        }}>
          Support the<br />
          <span style={{ color: "#C0001A" }}>creators</span><br />
          you love.
        </h1>
        <p style={{
          color: "#666",
          fontSize: "17px",
          lineHeight: 1.8,
          marginBottom: "48px",
          maxWidth: "440px",
        }}>
          Subscribe to independent creators. Get exclusive content. Pay with crypto.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#explore" style={{
            backgroundColor: "#C0001A",
            color: "#F5F0F0",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>EXPLORE CREATORS</a>
          <a href="#" style={{
            border: "1px solid #2A2A2A",
            color: "#666",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>BECOME A CREATOR</a>
        </div>
      </section>
      <section id="explore" style={{ padding: "80px 48px", borderTop: "1px solid #150005" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "48px",
        }}>
          <div>
            <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
              DISCOVER
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal" }}>
              Featured Creators
            </h2>
          </div>
          <a href="#" style={{ color: "#555", fontSize: "12px", textDecoration: "none", letterSpacing: "2px" }}>
            VIEW ALL →
          </a>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}>
          {creators.map((creator) => (
            <a
              key={creator.id}
              href={`/creator/${creator.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CreatorCard creator={creator} />
            </a>
          ))}
        </div>
      </section>
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
        <span style={{ color: "#2A2A2A", fontSize: "12px" }}>
          © 2026 Vinus. All rights reserved.
        </span>
      </footer>
    </main>
  );
}