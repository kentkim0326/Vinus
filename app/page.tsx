"use client";

import Navbar from "./components/Navbar";
import { useState } from "react";
import { creators } from "./lib/data";
import { useLang } from "./components/LangProvider";
import { t } from "./lib/i18n";

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
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        overflow: "hidden",
        border: `2px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        marginBottom: "20px",
        transition: "all 0.25s",
        boxShadow: hovered ? "0 0 12px var(--shadow-accent)" : "none",
        flexShrink: 0,
      }}>
        <img
          src={creator.avatar}
          alt={creator.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
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
        borderTop: "1px solid var(--border)",
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
          color: hovered ? "var(--accent-fg)" : "var(--accent)",
          fontSize: "11px",
          letterSpacing: "2px",
          backgroundColor: hovered ? "var(--accent)" : "transparent",
          padding: "5px 12px",
          border: "1px solid var(--accent)",
          transition: "all 0.25s",
        }}>
          {creator.tier}
        </span>
      </div>
    </div>
  );
}

const AI_FEATURES = [
  { icon: "🌐", label: "AI Translation", desc: "Auto-translated to 8 languages" },
  { icon: "🎙", label: "AI Dubbing",     desc: "Voice cloned in every language" },
  { icon: "🤖", label: "AI Manager",     desc: "Replies to fans while you sleep" },
  { icon: "📊", label: "AI Analytics",   desc: "Growth insights & best upload times" },
  { icon: "💎", label: "Web3 Payments",  desc: "Crypto subscriptions on Base" },
  { icon: "🔗", label: "3-Level Referral", desc: "5% / 3% / 2% on-chain commission" },
];

export default function Home() {
  const { lang } = useLang();

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{
        padding: "80px 48px",
        display: "flex",
        gap: "48px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ flex: "1 1 auto", maxWidth: "560px", minWidth: 0 }}>

          {/* World-first badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid var(--accent)",
            padding: "6px 14px",
            marginBottom: "28px",
          }}>
            <span style={{ color: "var(--accent)", fontSize: "10px" }}>✦</span>
            <span style={{
              color: "var(--accent)",
              fontSize: "10px",
              letterSpacing: "2px",
              fontWeight: "600",
            }}>
              THE WORLD'S FIRST AI-POWERED WEB3 CREATOR PLATFORM
            </span>
          </div>

          <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "20px" }}>
            {t(lang, "home.label")}
          </p>

          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(44px, 6vw, 76px)",
            lineHeight: 1.05,
            marginBottom: "28px",
            fontWeight: "normal",
          }}>
            {t(lang, "home.title1")}<br />
            <span style={{ color: "var(--accent)" }}>{t(lang, "home.title2")}</span><br />
            {t(lang, "home.title3")}
          </h1>

          <p style={{
            color: "var(--text-muted)",
            fontSize: "17px",
            lineHeight: 1.8,
            marginBottom: "16px",
            maxWidth: "420px",
          }}>
            {t(lang, "home.sub")}
          </p>

          {/* AI sub-tagline */}
          <p style={{
            color: "var(--text-dim)",
            fontSize: "13px",
            lineHeight: 1.7,
            marginBottom: "40px",
            maxWidth: "420px",
          }}>
            AI translates your content to 8 languages. AI dubs your videos. AI manages your fans — 24/7.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#explore" style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-fg)",
              padding: "14px 32px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
            }}>
              {t(lang, "home.cta1")}
            </a>
            <a href="/become-a-creator" style={{
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              padding: "14px 32px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
            }}>
              {t(lang, "home.cta2")}
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "40px",
            marginTop: "56px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}>
            {[
              { value: "9+",   label: t(lang, "home.stat.creators") },
              { value: "18K+", label: t(lang, "home.stat.subscribers") },
              { value: "100%", label: t(lang, "home.stat.crypto") },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--text-primary)", marginBottom: "4px" }}>
                  {stat.value}
                </p>
                <p style={{ color: "var(--text-faint)", fontSize: "12px", letterSpacing: "1px" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero cards */}
        <div
          className="hero-cards"
          style={{ flex: "0 0 auto", width: "300px", display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {[
            { name: "Aria Nova",   category: "Art & Illustration", preview: "✦", subscribers: 2840, tier: "$5/mo" },
            { name: "Luna Craft",  category: "Photography",        preview: "◈", subscribers: 4210, tier: "$8/mo" },
            { name: "Echo Veil",   category: "Music & Audio",      preview: "♪", subscribers: 1520, tier: "$3/mo" },
          ].map((c, i) => (
            <div key={c.name} style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              padding: "18px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              transform: `translateX(${i * 14}px)`,
              opacity: 1 - i * 0.15,
            }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "50%",
                backgroundColor: "var(--bg-deep)",
                border: "1px solid var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", flexShrink: 0,
              }}>
                {c.preview}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "13px", color: "var(--text-primary)", marginBottom: "2px" }}>{c.name}</p>
                <p style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "1px" }}>{c.category.toUpperCase()}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "var(--accent)", fontSize: "12px" }}>{c.tier}</p>
                <p style={{ color: "var(--text-faint)", fontSize: "10px" }}>{c.subscribers.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AI Manager Feature Strip ── */}
      <section style={{
        padding: "64px 48px",
        borderBottom: "1px solid var(--border)",
        backgroundColor: "var(--bg-card)",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px" }}>
              AI MANAGER
            </p>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "normal",
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}>
              Your AI works while you create.
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "15px", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8 }}>
              Upload once. Reach the world. Your AI Manager handles translation, dubbing, fan chat, and analytics — automatically.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "2px",
          }}>
            {AI_FEATURES.map((f) => (
              <div key={f.label} style={{
                backgroundColor: "var(--bg-base)",
                padding: "28px 24px",
                borderTop: "2px solid var(--border)",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.borderTopColor = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderTopColor = "var(--border)")}
              >
                <span style={{ fontSize: "28px", display: "block", marginBottom: "14px" }}>{f.icon}</span>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  {f.label}
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: "64px 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>
            HOW IT WORKS
          </p>
          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: "48px",
          }}>
            Creator → AI → Global Fans
          </h2>

          <div style={{ display: "flex", gap: "0", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { step: "01", title: "Connect MetaMask",  desc: "No email. No password. Your wallet is your identity." },
              { step: "02", title: "Upload Content",    desc: "Post videos, images, audio, or text in your language." },
              { step: "03", title: "AI Goes to Work",   desc: "Translates, dubs, and publishes to 8 languages instantly." },
              { step: "04", title: "Fans Pay in Crypto",desc: "Subscribe or buy content. USDC, ETH on Base Network." },
              { step: "05", title: "Referral Earnings", desc: "3-level on-chain referral: 5% / 3% / 2% auto-distributed." },
            ].map((s, i) => (
              <div key={s.step} style={{
                flex: "1 1 180px",
                padding: "28px 20px",
                borderLeft: i === 0 ? "none" : "1px solid var(--border)",
                minWidth: "160px",
              }}>
                <p style={{ color: "var(--accent)", fontFamily: "Georgia, serif", fontSize: "32px", marginBottom: "12px", opacity: 0.4 }}>
                  {s.step}
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "500" }}>
                  {s.title}
                </p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Creators ── */}
      <section id="explore" style={{ padding: "64px 48px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div>
              <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
                {t(lang, "home.section.label")}
              </p>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal" }}>
                {t(lang, "home.section.title")}
              </h2>
            </div>
            <a href="/explore" style={{ color: "var(--text-dim)", fontSize: "12px", textDecoration: "none", letterSpacing: "2px" }}>
              {t(lang, "home.section.all")}
            </a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
          }}>
            {creators.map((creator) => (
              <a key={creator.id} href={`/creator/${creator.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <CreatorCard creator={creator} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>
            VINUS
          </span>
          <span style={{ color: "var(--text-ghost)", fontSize: "11px", marginLeft: "16px", letterSpacing: "1px" }}>
            AI-POWERED · WEB3 · GLOBAL
          </span>
        </div>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>
          © 2026 {t(lang, "footer.copy")}
        </span>
      </footer>
    </main>
  );
}
