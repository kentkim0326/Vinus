"use client";

import { useLang } from "../components/LangProvider";
import { t, LangCode } from "../lib/i18n";
import { href, imgSrc } from "../lib/basePath";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WalletButton from "../components/WalletButton";
import VinusLogo from "../components/VinusLogo";
import { useAccount } from "wagmi";
import { useState } from "react";

export default function BecomeCreatorPage() {
  const { lang } = useLang();
  const L = lang as LangCode;
  const { isConnected } = useAccount();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const TIERS = [
    { icon: "✦", title: t(L, "bac.tier.anyone"), desc: t(L, "bac.tier.anyone.d") },
    { icon: "🌐", title: t(L, "bac.tier.lang"), desc: t(L, "bac.tier.lang.d") },
    { icon: "💎", title: t(L, "bac.tier.keep"), desc: t(L, "bac.tier.keep.d") },
    { icon: "🔗", title: t(L, "bac.tier.refer"), desc: t(L, "bac.tier.refer.d") },
  ];

  const STEPS = [
    { num: "01", title: t(L, "bac.step1"), desc: t(L, "bac.step1.d") },
    { num: "02", title: t(L, "bac.step2"), desc: t(L, "bac.step2.d") },
    { num: "03", title: t(L, "bac.step3"), desc: t(L, "bac.step3.d") },
    { num: "04", title: t(L, "bac.step4"), desc: t(L, "bac.step4.d") },
    { num: "05", title: t(L, "bac.step5"), desc: t(L, "bac.step5.d") },
  ];

  const FEATURES = [
    { icon: "🌐", title: t(L, "bac.feat.post"), desc: t(L, "bac.feat.post.d") },
    { icon: "💬", title: t(L, "bac.feat.comment"), desc: t(L, "bac.feat.comment.d") },
    { icon: "📩", title: t(L, "bac.feat.dm"), desc: t(L, "bac.feat.dm.d") },
    { icon: "🤖", title: t(L, "bac.feat.chat"), desc: t(L, "bac.feat.chat.d") },
    { icon: "📊", title: t(L, "bac.feat.growth"), desc: t(L, "bac.feat.growth.d") },
    { icon: "🎙", title: t(L, "bac.feat.voice"), desc: t(L, "bac.feat.voice.d") },
  ];

  const FAQS = [
    { q: lang === "ko" ? "신원 인증이 필요한가요?" : "Do I need to verify my identity?",
      a: lang === "ko" ? "아닙니다. Vinus는 완전히 익명입니다. 지갑 주소가 곧 신원입니다." : "No. Vinus is fully anonymous. Your wallet address is your identity. We never ask for your name, email, or ID." },
    { q: lang === "ko" ? "어떤 통화로 결제하나요?" : "What currencies can fans pay with?",
      a: lang === "ko" ? "USDC, USDT(테더), ETH — 모두 Base Network. 낮은 가스비, 빠른 트랜잭션." : "USDC, USDT (Tether), and ETH — all on Base Network. Low gas fees, fast transactions." },
    { q: lang === "ko" ? "80/20 수익 분배는 어떻게 되나요?" : "How does the 80/20 split work?",
      a: lang === "ko" ? "80%는 스마트 컨트랙트를 통해 즉시 지갑으로 전송됩니다. 20%가 Vinus 수수료이며 그 중 10%(전체의 2%)가 추천인에게 자동 지급됩니다." : "80% goes directly to your wallet via smart contract. 20% is the Vinus fee, of which 10% (2% of total) is shared with referrers automatically." },
    { q: lang === "ko" ? "추천인 시스템은 어떻게 작동하나요?" : "What is the referral system?",
      a: lang === "ko" ? "Vinus 20% 수수료의 10%가 추천인에게 스마트 컨트랙트로 자동 분배됩니다. Level 1: 전체의 1% · Level 2: 0.6% · Level 3: 0.4%." : "10% of Vinus's 20% fee is shared with referrers via smart contract. Level 1: 1% · Level 2: 0.6% · Level 3: 0.4% of total transaction." },
    { q: lang === "ko" ? "어떤 언어로든 게시할 수 있나요?" : "Can I post in any language?",
      a: lang === "ko" ? "네. AI 매니저가 자동으로 20개 언어로 번역합니다." : "Yes. The AI Manager automatically translates your posts, comments, and DMs into 20 languages." },
    { q: lang === "ko" ? "어떤 콘텐츠를 게시할 수 있나요?" : "What content can I post?",
      a: lang === "ko" ? "이미지, 영상, 오디오, 텍스트. 무료, 구독자 전용, 유료 중 선택 가능합니다." : "Images, videos, audio, and text. You control access — free, subscribers only, or pay-per-view." },
  ];

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "100px 48px 80px", textAlign: "center", borderBottom: "1px solid var(--border)", background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid var(--accent)", padding: "6px 16px", marginBottom: "32px" }}>
            <span style={{ color: "var(--accent)", fontSize: "10px" }}>✦</span>
            <span style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "2px" }}>{t(L, "home.badge")}</span>
          </div>

          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: "normal", lineHeight: 1.1, marginBottom: "24px" }}>
            {t(L, "bac.hero.t1")}<br />
            <span style={{ color: "var(--accent)" }}>{t(L, "bac.hero.t2")}</span><br />
            {t(L, "bac.hero.t3")}
          </h1>

          <p style={{ color: "var(--text-muted)", fontSize: "18px", lineHeight: 1.8, marginBottom: "16px", maxWidth: "560px", margin: "0 auto 16px" }}>{t(L, "bac.hero.sub")}</p>
          <p style={{ color: "var(--text-dim)", fontSize: "14px", marginBottom: "48px" }}>{t(L, "bac.hero.note")}</p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            {isConnected ? (
              <a href={href("/dashboard")} style={{ backgroundColor: "var(--accent)", color: "var(--accent-fg)", padding: "16px 40px", textDecoration: "none", fontSize: "13px", letterSpacing: "2px" }}>
                {t(L, "dash.label")} →
              </a>
            ) : (<WalletButton />)}
            <a href={href("/about")} style={{ border: "1px solid var(--border)", color: "var(--text-dim)", padding: "16px 32px", textDecoration: "none", fontSize: "13px", letterSpacing: "2px" }}>
              {t(L, "nav.explore")}
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "48px", justifyContent: "center", marginTop: "64px", paddingTop: "48px", borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
            {[
              { value: "80%", label: t(L, "bac.stats.revenue") },
              { value: "20", label: t(L, "bac.stats.langs") },
              { value: "0%", label: t(L, "bac.stats.fees") },
              { value: "3-level", label: t(L, "bac.stats.referral") },
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
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{t(L, "bac.why")}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "56px" }}>{t(L, "bac.why.title")}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "2px" }}>
            {TIERS.map((tier) => (
              <div key={tier.title} style={{ backgroundColor: "var(--bg-card)", padding: "36px 28px", borderTop: "2px solid var(--border)" }}>
                <span style={{ fontSize: "32px", display: "block", marginBottom: "16px" }}>{tier.icon}</span>
                <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "10px", fontFamily: "Georgia, serif" }}>{tier.title}</p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{t(L, "bac.how")}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "56px" }}>{t(L, "bac.how.title")}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", gap: "24px", alignItems: "flex-start", padding: "28px 24px", backgroundColor: "var(--bg-base)", borderLeft: "2px solid var(--border)" }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "48px" }}>{s.num}</span>
                <div>
                  <p style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "500" }}>{s.title}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue model */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px" }}>{t(L, "bac.revenue")}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", marginBottom: "48px" }}>{t(L, "bac.revenue.title")}</h2>
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
        </div>
      </section>

      {/* AI Manager */}
      <section style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{t(L, "bac.ai")}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", textAlign: "center", marginBottom: "16px" }}>{t(L, "bac.ai.title")}</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", textAlign: "center", marginBottom: "48px", lineHeight: 1.8 }}>{t(L, "bac.ai.sub")}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px" }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{ backgroundColor: "var(--bg-base)", padding: "24px 20px", border: "1px solid var(--border)" }}>
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
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px", textAlign: "center" }}>{t(L, "bac.faq")}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "normal", textAlign: "center", marginBottom: "48px" }}>{t(L, "bac.faq.title")}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", backgroundColor: "transparent", border: "none", color: "var(--text-primary)", fontSize: "15px", textAlign: "left", cursor: "pointer", gap: "16px" }}>
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "18px", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--border)" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8, paddingTop: "16px" }}>{faq.a}</p>
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
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "normal", marginBottom: "20px" }}>{t(L, "bac.cta.title")}</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, marginBottom: "40px" }}>{t(L, "bac.cta.sub")}</p>
          <WalletButton />
        </div>
      </section>

      <Footer />
    </main>
  );
}
