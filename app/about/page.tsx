"use client";

import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";
import Navbar from "../components/Navbar";
import { useState } from "react";

const SECTIONS = lang === "ko" ? ["소개", "이용 방법", "이용약관", "자주 묻는 질문"] : ["About", "How It Works", "Terms", "Q&A"] as const;

export default function AboutPage() {
  const { lang } = useLang();
  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        padding: "80px 48px 64px",
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>{lang === "ko" ? "VINUS 소개" : "ABOUT VINUS"}</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: "normal", lineHeight: 1.1, marginBottom: "24px" }}>
            The world's first<br />
            <span style={{ color: "var(--accent)" }}>AI-powered Web3</span><br />
            creator platform.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.9, maxWidth: "600px" }}>
            Vinus connects creators and fans across every language and border — anonymously, transparently, and powered by AI.
          </p>
        </div>
      </section>

      {/* Section nav */}
      <div style={{
        position: "sticky",
        top: "64px",
        backgroundColor: "var(--nav-bg)",
        borderBottom: "1px solid var(--border)",
        zIndex: 50,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", gap: "0" }}>
          {lang === "ko" ? ["소개", "이용 방법", "이용약관", "자주 묻는 질문"] : ["About", "How It Works", "Terms", "Q&A"].map((s) => (
            <a key={s} href={`#${s.toLowerCase().replace(/\s+/g, "-")}`} style={{
              padding: "16px 24px",
              color: "var(--text-dim)",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1.5px",
              borderBottom: "2px solid transparent",
              transition: "all 0.2s",
            }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-primary)";
                (e.target as HTMLElement).style.borderBottomColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-dim)";
                (e.target as HTMLElement).style.borderBottomColor = "transparent";
              }}
            >
              {s.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>ABOUT</p>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "24px" }}>
            What is Vinus?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.9, marginBottom: "24px" }}>
            Vinus is a decentralized creator subscription platform built on Base Network. Creators publish content — images, video, audio, text — and fans subscribe or purchase directly using USDC, USDT, or ETH. No banks. No chargebacks. No borders.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.9, marginBottom: "40px" }}>
            What makes Vinus different is the AI layer. Every post is automatically translated into 20 languages. Every comment and DM is translated in real time. A Korean creator can have a live conversation with a Japanese fan — neither speaks the other's language. The AI handles it all.
          </p>

          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "normal", marginBottom: "20px", color: "var(--text-primary)" }}>
            Our core principles
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Anonymity", desc: "Your wallet address is your identity. No name, no email, no ID required — ever. Creators and fans interact anonymously by default." },
              { title: "Transparency", desc: "Every payment, every commission, every referral payout is recorded on-chain. Anyone can verify. No hidden fees. No manipulation." },
              { title: "AI-first globalization", desc: "Language is no longer a barrier. AI translates posts, comments, DMs, and even dubs video in real time — so any creator can reach any fan, anywhere." },
              { title: "Creator-first economics", desc: "Creators keep 80% of all revenue. Payments are instant, direct to wallet, via smart contract. Vinus takes 20% — and even that is shared with referrers." },
            ].map((p) => (
              <div key={p.title} style={{
                padding: "24px",
                backgroundColor: "var(--bg-card)",
                borderLeft: "2px solid var(--accent)",
              }}>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "500" }}>{p.title}</p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how-it-works" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>HOW IT WORKS</p>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "40px" }}>
            For creators
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "56px" }}>
            {[
              { n: "1", t: "Connect MetaMask", d: "No sign-up. Your wallet is your account. Connect once and you're in." },
              { n: "2", t: "Create your profile", d: "Set a display name, category, and bio. Link your social accounts. Upload a profile photo. Your wallet address stays private." },
              { n: "3", t: "Set subscription tiers", d: "Create up to 3 tiers with different prices and perks. Or skip tiers and sell content individually. You set the price in USD — fans pay in USDC, USDT, or ETH on Base Network." },
              { n: "4", t: "Post content", d: "Upload images, videos, audio, or write text posts. Mark each post as Free, Subscribers Only, or Paid (one-time purchase). AI instantly translates to 20 languages." },
              { n: "5", t: "Earn", d: "80% of every payment goes directly to your wallet via smart contract — instantly. No withdrawal delays. No minimum balance." },
              { n: "6", t: "Grow with referrals", d: "Share your referral link. When someone you referred earns revenue, you automatically earn 5% of their income. Forever. On-chain." },
            ].map((s) => (
              <div key={s.n} style={{
                display: "flex",
                gap: "20px",
                padding: "24px",
                backgroundColor: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
              }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "32px" }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "6px", fontWeight: "500" }}>{s.t}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "40px" }}>
            For fans
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "56px" }}>
            {[
              { n: "1", t: "Connect MetaMask", d: "No account needed. Connect your wallet and start browsing creators." },
              { n: "2", t: "Browse in your language", d: "All content is available in your language. The AI handles translation automatically." },
              { n: "3", t: "Subscribe or buy", d: "Subscribe to a creator's tier for monthly access, or buy individual posts with a one-time payment. Pay with USDC, USDT, or ETH." },
              { n: "4", t: "Engage", d: "Comment and DM in your language. The creator sees it in theirs. Reply in theirs — you see it in yours. Real-time, seamless." },
            ].map((s) => (
              <div key={s.n} style={{
                display: "flex",
                gap: "20px",
                padding: "24px",
                backgroundColor: "var(--bg-card)",
                borderBottom: "1px solid var(--border)",
              }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "32px" }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "6px", fontWeight: "500" }}>{s.t}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "24px" }}>
            The AI Manager
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
            The AI Manager is Vinus's core intelligence layer. It runs automatically in the background for every creator.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              "Translates posts to 20 languages on upload",
              "Translates comments and DMs in real time",
              "Responds to fan messages 24/7 in your tone",
              "Analyzes which content performs best",
              "Recommends optimal posting times by region",
              "Dubs video content in multiple languages (coming soon)",
            ].map((f) => (
              <div key={f} style={{
                display: "flex",
                gap: "10px",
                padding: "16px",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                alignItems: "flex-start",
              }}>
                <span style={{ color: "var(--accent)", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── TERMS ── */}
        <section id="terms" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>TERMS</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "8px" }}>Terms of Service</h2>
          <p style={{ color: "var(--text-ghost)", fontSize: "12px", marginBottom: "40px" }}>Last updated: July 2026</p>

          {[
            {
              title: "1. Eligibility",
              body: "You must be 18 years of age or older to use Vinus. By connecting your wallet and entering the platform, you confirm that you meet this requirement. Vinus does not collect or verify personal identity information.",
            },
            {
              title: "2. Wallet & Identity",
              body: "Your MetaMask wallet address serves as your sole identity on Vinus. You are responsible for the security of your wallet and private keys. Vinus has no ability to recover lost wallets or reverse transactions.",
            },
            {
              title: "3. Payments & Revenue",
              body: "All payments are processed on Base Network using USDC, USDT, or ETH. Smart contracts distribute revenue automatically: 80% to the creator, up to 10% to referrers, and 10% to Vinus. All transactions are irreversible. Vinus does not hold user funds.",
            },
            {
              title: "4. Referral Program",
              body: "The 3-level referral system is governed by smart contract. Vinus takes a 20% platform fee. 10% of that fee is distributed to referrers: Level 1 receives 1% of the total transaction, Level 2 receives 0.6%, Level 3 receives 0.4%. The creator always receives 80% of the total transaction. Referral relationships are recorded on-chain at the time of creator registration and cannot be changed afterward.",
            },
            {
              title: "5. Content Policy",
              body: "Creators are solely responsible for the content they publish. Prohibited content includes: material involving minors, non-consensual content, content that violates applicable law. Vinus reserves the right to remove content and suspend accounts that violate these terms.",
            },
            {
              title: "6. AI Translation",
              body: "AI-generated translations are provided for convenience. Vinus does not guarantee the accuracy of translated content. Creators and fans should be aware that AI translation may contain errors, particularly for nuanced or idiomatic language.",
            },
            {
              title: "7. Anonymity & Privacy",
              body: "Vinus does not collect personally identifiable information. Wallet addresses are pseudonymous — public on-chain but not linked to real identities by Vinus. Users are responsible for their own privacy practices.",
            },
            {
              title: "8. Disclaimer",
              body: "Vinus is provided 'as is' without warranty. Cryptocurrency values are volatile. Vinus is not responsible for losses due to market fluctuations, smart contract bugs, or network failures. Use at your own risk.",
            },
          ].map((item) => (
            <div key={item.title} style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "500" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.9 }}>{item.body}</p>
            </div>
          ))}
        </section>

        {/* ── Q&A ── */}
        <section id="q&a" style={{ padding: "72px 0" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>Q&A</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "48px" }}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { q: "What blockchain does Vinus use?", a: "Base Network — Coinbase's Ethereum L2. It's fast, cheap, and secure. Gas fees are typically under $0.01 per transaction." },
              { q: "What cryptocurrencies are accepted?", a: "USDC (USD Coin), USDT (Tether), and ETH on Base Network. Stablecoins like USDC and USDT are recommended for creators who want predictable income without price volatility." },
              { q: "How many languages does Vinus support?", a: "20 languages for the platform UI: English, Korean, Japanese, Chinese (Simplified & Traditional), Spanish, French, German, Portuguese, Italian, Russian, Arabic, Thai, Vietnamese, Indonesian, Hindi, Turkish, Dutch, Polish, Swedish, and Ukrainian. AI translation for content supports 50+ languages via Claude API." },
              { q: "Is Vinus available worldwide?", a: "Yes. Vinus is fully decentralized and accessible from any country with internet access. No regional restrictions. No local banking required." },
              { q: "Can I remain completely anonymous?", a: "Yes. You only need a MetaMask wallet. No email, no phone number, no government ID. Your on-chain wallet address is the only identifier — and it's pseudonymous." },
              { q: "How does the referral system work technically?", a: "Vinus charges a 20% platform fee. 10% of that fee is allocated to referrers via smart contract — equaling 2% of every total transaction distributed across 3 levels. Level 1 (you) receives 1% of the total transaction. Level 2 receives 0.6%. Level 3 receives 0.4%. The creator always keeps 80%. Everything is automatic, on-chain, and permanent." },
              { q: "What is the AI Manager?", a: "The AI Manager is an AI layer built into every creator account. It automatically translates all content, handles fan comments and DMs in real time across languages, responds to fans when you're offline, and provides analytics on your content performance. It runs in the background — you don't need to configure anything." },
              { q: "When will AI dubbing be available?", a: "AI voice dubbing (uploading a video in Korean and having it dubbed in English, Japanese, etc.) is on our roadmap for Phase 4. Current focus is on text translation, comment translation, and DM translation — which deliver the most value at the lowest cost." },
              { q: "How do I withdraw my earnings?", a: "There's nothing to withdraw. Earnings go directly to your MetaMask wallet via smart contract the moment a fan pays. No balance to manage. No withdrawal request. No delay." },
              { q: "What is Vinus's fee?", a: "20% of each transaction. This covers platform maintenance, AI translation costs, and smart contract operations. 10% of that 20% fee (= 2% of total transaction) is distributed to referrers automatically via smart contract when active, leaving Vinus an effective 18%. Creator always keeps 80%." },
            ].map((faq, i) => (
              <div key={i} style={{
                borderBottom: "1px solid var(--border)",
                padding: "24px 0",
              }}>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "500" }}>
                  {faq.q}
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

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
          <a href="/become-a-creator" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>BECOME A CREATOR</a>
          <a href="/explore" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>EXPLORE</a>
        </div>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}
