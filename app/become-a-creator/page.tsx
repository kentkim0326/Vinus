"use client";

import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";

import Navbar from "../components/Navbar";
import WalletButton from "../components/WalletButton";
import VinusLogo from "../components/VinusLogo";
import { useAccount } from "wagmi";
import { useState } from "react";

const TIERS = [
  {
    icon: "✦",
    title: "Any Creator",
    desc: "Anyone with a MetaMask wallet can become a creator. No application. No approval. Instant.",
  },
  {
    icon: "🌐",
    title: "Any Language",
    desc: "Post in your native language. AI translates everything to 20 languages automatically.",
  },
  {
    icon: "💎",
    title: "Keep 80%",
    desc: "Creators keep 80% of all subscription and content revenue. Paid instantly in USDC or ETH.",
  },
  {
    icon: "🔗",
    title: "Earn from Referrals",
    desc: "Refer other creators. Vinus shares 10% of its 20% platform fee with referrers — automatically, on-chain. Level 1: 1% · Level 2: 0.6% · Level 3: 0.4% of total transaction. Creator always keeps 80%.",
  },
];

const STEPS = [
  { num: "01", title: "Connect MetaMask", desc: "Your wallet is your identity. No email. No password. No KYC." },
  { num: "02", title: "Set up your profile", desc: "Choose a display name, category, and bio. Your wallet address stays private." },
  { num: "03", title: "Set your prices", desc: "Create subscription tiers or sell individual content. You set the price in USD — fans pay in crypto." },
  { num: "04", title: "Post content", desc: "Upload images, videos, audio, or text. AI translates to 20 languages instantly." },
  { num: "05", title: "Get paid", desc: "Earnings flow directly to your wallet via smart contract. No middleman. No delays." },
];

const FAQS = [
  {
    q: "Do I need to verify my identity?",
    a: "No. Vinus is fully anonymous. Your wallet address is your identity. We never ask for your name, email, or ID.",
  },
  {
    q: "What currencies can fans pay with?",
    a: "USDC, USDT (Tether), and ETH — all on Base Network. Low gas fees, fast transactions.",
  },
  {
    q: "How does the 80/20 split work?",
    a: "80% goes directly to your wallet via smart contract the moment a fan subscribes or purchases. 20% goes to Vinus. Referral commissions (up to 10%) are deducted from the Vinus share — not yours.",
  },
  {
    q: "What is the referral system?",
    a: "Vinus charges a 20% platform fee. 10% of that fee is shared with referrers via smart contract — so 2% of every total transaction goes to the referral chain. Level 1 (you): 1% of total · Level 2: 0.6% · Level 3: 0.4%. Creator always keeps 80%. All automatic, on-chain, forever.",
  },
  {
    q: "Can I post in any language?",
    a: "Yes. Post in Korean, Japanese, Arabic, or any language. The AI Manager automatically translates your posts, comments, and DMs into 20 languages so fans worldwide can understand you.",
  },
  {
    q: "What content can I post?",
    a: "Images, videos, audio, and text. You control who can see what — free, subscribers only, or pay-per-view.",
  },
];

export default function BecomeCreatorPage() {
  const { lang } = useLang();
  const { isConnected } = useAccount();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: "100px 48px 80px",
        textAlign: "center",
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)",
      }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid var(--accent)",
            padding: "6px 16px",
            marginBottom: "32px",
          }}>
            <span style={{ color: "var(--accent)", fontSize: "10px" }}>✦</span>
            <span style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "2px" }}>
              THE WORLD'S FIRST AI-POWERED WEB3 CREATOR PLATFORM
            </span>
          </div>

          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: "normal",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Your content.<br />
            <span style={{ color: "var(--accent)" }}>Your language.</span><br />
            The whole world.
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "18px", lineHeight: 1.8, marginBottom: "16px", maxWidth: "560px", margin: "0 auto 16px" }}>
            Post once in your language. AI translates to 20 languages instantly. Earn in crypto. Stay anonymous.
          </p>

          <p style={{ color: "var(--text-dim)", fontSize: "14px", marginBottom: "48px" }}>
            No email. No KYC. Just your wallet.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {isConnected ? (
              <a href="/dashboard" style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-fg)",
                padding: "16px 40px",
                textDecoration: "none",
                fontSize: "13px",
                letterSpacing: "2px",
              }}>
                GO TO DASHBOARD →
              </a>
            ) : (
              <WalletButton />
            )}
            <a href="/about" style={{
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              padding: "16px 32px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
            }}>
              LEARN MORE
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            gap: "48px",
            justifyContent: "center",
            marginTop: "64px",
            paddingTop: "48px",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}>
            {[
              { value: "80%", label: "Creator revenue share" },
              { value: "20", label: "Languages supported" },
              { value: "0%", label: "Withdrawal fees" },
              { value: "3-level", label: "Referral commissions" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "var(--accent)", marginBottom: "6px" }}>{s.value}</p>
                <p style={{ color: "var(--text-dim)", fontSize: "12px", letterSpacing: "1px" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vinus */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{lang === "ko" ? "왜 VINUS인가" : "WHY VINUS"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "56px" }}>
            Built different.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2px" }}>
            {TIERS.map((t) => (
              <div key={t.title} style={{
                backgroundColor: "var(--bg-card)",
                padding: "36px 28px",
                borderTop: "2px solid var(--border)",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderTopColor = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.borderTopColor = "var(--border)"}
              >
                <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>{t.icon}</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "10px", fontFamily: "Georgia, serif" }}>{t.title}</p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{lang === "ko" ? "이용 방법" : "HOW IT WORKS"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "56px" }}>
            Start in 5 minutes.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                padding: "28px 24px",
                backgroundColor: "var(--bg-base)",
                borderLeft: "2px solid var(--border)",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = "var(--accent)"}
                onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = "var(--border)"}
              >
                <span style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "48px" }}>
                  {s.num}
                </span>
                <div>
                  <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "500" }}>{s.title}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue split */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px" }}>{lang === "ko" ? "수익 모델" : "REVENUE MODEL"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", marginBottom: "48px" }}>
            You keep most of it.
          </h2>

          {/* Visual split */}
          <div style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", height: "64px", overflow: "hidden", marginBottom: "16px" }}>
              <div style={{ flex: 80, backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "var(--accent-fg)", fontSize: "20px", fontFamily: "Georgia, serif", fontWeight: "bold" }}>80%</span>
              </div>
              <div style={{ flex: 2, backgroundColor: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "10px" }}>2%</span>
              </div>
              <div style={{ flex: 18, backgroundColor: "var(--bg-deep)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--border)" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "11px" }}>18%</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0", textAlign: "left" }}>
              <div style={{ flex: 80, paddingRight: "16px" }}>
                <p style={{ color: "var(--text-primary)", fontSize: "14px", marginBottom: "4px" }}>Creator</p>
                <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>Paid instantly to your wallet</p>
              </div>
              <div style={{ flex: 2, paddingRight: "8px" }}>
                <p style={{ color: "var(--text-secondary)", fontSize: "12px", marginBottom: "4px" }}>Referrals</p>
                <p style={{ color: "var(--text-muted)", fontSize: "10px" }}>2% of total</p>
              </div>
              <div style={{ flex: 18 }}>
                <p style={{ color: "var(--text-secondary)", fontSize: "13px", marginBottom: "4px" }}>Vinus</p>
                <p style={{ color: "var(--text-muted)", fontSize: "11px" }}>Net platform fee</p>
              </div>
            </div>
          </div>

          {/* Referral chain */}
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", padding: "36px" }}>
            <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "3px", marginBottom: "24px" }}>3-LEVEL REFERRAL — ON-CHAIN, AUTOMATIC</p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "You refer", pct: "1%", color: "var(--accent)" },
                { label: "→", pct: "", color: "var(--text-ghost)" },
                { label: "They refer", pct: "0.6%", color: "var(--text-secondary)" },
                { label: "→", pct: "", color: "var(--text-ghost)" },
                { label: "Their referral", pct: "0.4%", color: "var(--text-muted)" },
              ].map((item, i) => (
                item.pct ? (
                  <div key={i} style={{ textAlign: "center", padding: "0 12px" }}>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: item.color, marginBottom: "4px" }}>{item.pct}</p>
                    <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "1px" }}>{item.label}</p>
                  </div>
                ) : (
                  <span key={i} style={{ color: item.color, fontSize: "20px" }}>{item.label}</span>
                )
              ))}
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: "13px", marginTop: "20px", lineHeight: 1.7 }}>
              Vinus takes 20% platform fee. 10% of that (= 2% of total transaction) is shared with referrers via smart contract. Creator always receives 80%. No manual payouts. No trust required.
            </p>
          </div>
        </div>
      </section>

      {/* AI Manager */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{lang === "ko" ? "AI 매니저" : "AI MANAGER"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "16px" }}>
            Your AI works while you sleep.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", textAlign: "center", marginBottom: "48px", lineHeight: 1.8 }}>
            A Japanese fan comments in Japanese. You see it in Korean. You reply in Korean. They see it in Japanese. No translator needed. Ever.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {[
              { icon: "🌐", title: "Post Translation", desc: "Upload once. Published in 20 languages instantly." },
              { icon: "💬", title: "Comment Translation", desc: "Fans comment in any language. You read in yours." },
              { icon: "📩", title: "DM Translation", desc: "Reply in your language. Fan receives in theirs." },
              { icon: "🤖", title: "AI Chat Assistant", desc: "AI responds to fans 24/7 in your tone and style." },
              { icon: "📊", title: "Growth Analytics", desc: "AI tells you when and what to post for maximum reach." },
              { icon: "🎙", title: "AI Voice Dubbing", desc: "Video in Korean? AI dubs it in English, Japanese, more." },
            ].map((f) => (
              <div key={f.title} style={{
                backgroundColor: "var(--bg-base)",
                padding: "24px 20px",
                border: "1px solid var(--border)",
              }}>
                <span style={{ fontSize: "24px", display: "block", marginBottom: "12px" }}>{f.icon}</span>
                <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "8px" }}>{f.title}</p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{lang === "ko" ? "자주 묻는 질문" : "FAQ"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "normal", textAlign: "center", marginBottom: "48px" }}>
            Common questions.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "var(--text-primary)",
                    fontSize: "15px",
                    textAlign: "left",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "18px", flexShrink: 0 }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8, paddingTop: "16px" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}><VinusLogo size={80} /></div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "normal", marginBottom: "20px" }}>
            Ready to go global?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px" }}>
            Connect your wallet. Set your price. Post your first content. The AI handles the rest.
          </p>
          <WalletButton />
        </div>
      </section>

      <footer style={{
        padding: "32px 48px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>VINUS</span>
          <span style={{ color: "var(--text-ghost)", fontSize: "11px", marginLeft: "16px", letterSpacing: "1px" }}>AI-POWERED · WEB3 · GLOBAL</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/about" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>ABOUT</a>
          <a href="/explore" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>EXPLORE</a>
        </div>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}
