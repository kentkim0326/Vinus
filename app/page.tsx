"use client";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { creators } from "./lib/data";

type Creator = typeof creators[0];

function CreatorCard({ creator }: { creator: Creator }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        padding: "36px 28px",
        cursor: "pointer",
        borderTop: `2px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        transition: "all 0.25s ease",
      }}
    >
      <div style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        backgroundColor: "var(--border)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border-hover)"}`,
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
        color: "var(--text-primary)",
        marginBottom: "6px",
      }}>
        {creator.name}
      </h3>
      <p style={{
        color: "var(--text-dim)",
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
          <span style={{ color: "var(--text-primary)", fontSize: "13px" }}>
            {creator.subscribers.toLocaleString()}
          </span>
          <span style={{ color: "var(--text-faint)", fontSize: "12px", marginLeft: "4px" }}>
            subscribers
          </span>
        </div>
        <span style={{
          color: hovered ? "var(--text-primary)" : "var(--accent)",
          fontSize: "11px",
          letterSpacing: "2px",
          backgroundColor: hovered ? "var(--accent)" : "transparent",
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
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />
    <section style={{ 
  padding: "80px 24px 80px",
  display: "flex",
  gap: "48px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  boxSizing: "border-box",
  width: "100%",
}}>
 <div style={{ 
  flex: "1 1 auto", 
  maxWidth: "520px",
  minWidth: 0,
  width: "100%",
}}>
    <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "28px" }}>
      CREATOR PLATFORM
    </p>
    <h1 style={{
      fontFamily: "Georgia, serif",
      fontSize: "clamp(48px, 6vw, 80px)",
      lineHeight: 1.05,
      marginBottom: "32px",
      fontWeight: "normal",
    }}>
      Support the<br />
      <span style={{ color: "var(--accent)" }}>creators</span><br />
      you love.
    </h1>
    <p style={{
      color: "#666",
      fontSize: "17px",
      lineHeight: 1.8,
      marginBottom: "48px",
      maxWidth: "400px",
    }}>
      Subscribe to independent creators. Get exclusive content. Pay with crypto.
    </p>
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <a href="#explore" style={{
        backgroundColor: "var(--accent)",
        color: "var(--text-primary)",
        padding: "14px 32px",
        textDecoration: "none",
        fontSize: "13px",
        letterSpacing: "2px",
      }}>EXPLORE CREATORS</a>
      <a href="/signup" style={{
        border: "1px solid #2A2A2A",
        color: "#666",
        padding: "14px 32px",
        textDecoration: "none",
        fontSize: "13px",
        letterSpacing: "2px",
      }}>BECOME A CREATOR</a>
    </div>
    <div style={{
      display: "flex",
      gap: "40px",
      marginTop: "64px",
      paddingTop: "40px",
      borderTop: "1px solid #1A0008",
    }}>
      {[
        { value: "9+", label: "Creators" },
        { value: "18K+", label: "Subscribers" },
        { value: "100%", label: "Crypto Payments" },
      ].map((stat) => (
        <div key={stat.label}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--text-primary)", marginBottom: "4px" }}>
            {stat.value}
          </p>
          <p style={{ color: "var(--text-faint)", fontSize: "12px", letterSpacing: "1px" }}>{stat.label}</p>
        </div>
      ))}
    </div>
  </div>

  <div style={{
    flex: "0 0 auto",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  }}
    className="hero-cards"
  >
    {[
      { name: "Aria Nova", category: "Art & Illustration", preview: "✦", subscribers: 2840, tier: "$5/mo" },
      { name: "Luna Craft", category: "Photography", preview: "◈", subscribers: 4210, tier: "$8/mo" },
      { name: "Echo Veil", category: "Music & Audio", preview: "♪", subscribers: 1520, tier: "$3/mo" },
    ].map((creator, i) => (
      <div
        key={creator.name}
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid #1A0008",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginRight: "0",
          transform: `translateX(${i * 16}px)`,
          opacity: 1 - i * 0.15,
        }}
      >
        <div style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: "var(--border)",
          border: "1px solid #C0001A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          flexShrink: 0,
        }}>
          {creator.preview}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "2px" }}>{creator.name}</p>
          <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px" }}>{creator.category.toUpperCase()}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ color: "var(--accent)", fontSize: "12px" }}>{creator.tier}</p>
          <p style={{ color: "var(--text-faint)", fontSize: "11px" }}>{creator.subscribers.toLocaleString()}</p>
        </div>
      </div>
    ))}
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
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
              DISCOVER
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal" }}>
              Featured Creators
            </h2>
          </div>
          <a href="#" style={{ color: "var(--text-dim)", fontSize: "12px", textDecoration: "none", letterSpacing: "2px" }}>
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
        <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>
          © 2026 Vinus. All rights reserved.
        </span>
      </footer>
    </main>
  );
}