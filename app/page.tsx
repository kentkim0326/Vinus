"use client";

import { href, imgSrc } from "./lib/basePath";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import VinusLogo from "./components/VinusLogo";
import { useState } from "react";
import { useCountUp } from "./lib/useCountUp";
import { creators } from "./lib/data";
import { useLang } from "./components/LangProvider";
import { t } from "./lib/i18n";

type Creator = typeof creators[0];


function AnimatedStats({ lang }: { lang: string }) {
  const c1 = useCountUp(9, 1500);
  const c2 = useCountUp(18000, 2000);
  const c3 = useCountUp(100, 1800);

  const stats = [
    { ref: c1.ref, value: c1.count + "+", label: t(lang as any, "home.stat.creators") },
    { ref: c2.ref, value: c2.count >= 1000 ? Math.floor(c2.count/1000) + "K+" : c2.count + "+", label: t(lang as any, "home.stat.subscribers") },
    { ref: c3.ref, value: c3.count + "%", label: t(lang as any, "home.stat.crypto") },
  ];

  return (
    <div style={{ display: "flex", gap: "40px", marginTop: "56px", paddingTop: "40px", borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
      {stats.map((stat) => (
        <div key={stat.label} ref={stat.ref as any}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "28px", color: "var(--text-primary)", marginBottom: "4px" }}>
            {stat.value}
          </p>
          <p style={{ color: "var(--text-faint)", fontSize: "12px", letterSpacing: "1px" }}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

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

function getAIFeatures(lang: string) {
  const isKo = lang === "ko";
  return [
    { icon: "🌐", label: t(lang as any, "home.ai.translation"), desc: t(lang as any, "home.ai.translation.desc") },
    { icon: "🎙", label: t(lang as any, "home.ai.dubbing"), desc: t(lang as any, "home.ai.dubbing.desc") },
    { icon: "🤖", label: t(lang as any, "home.ai.manager"), desc: t(lang as any, "home.ai.manager.desc") },
    { icon: "📊", label: t(lang as any, "home.ai.analytics"), desc: t(lang as any, "home.ai.analytics.desc") },
    { icon: "💎", label: t(lang as any, "home.ai.payments"), desc: t(lang as any, "home.ai.payments.desc") },
    { icon: "🔗", label: t(lang as any, "home.ai.referral"), desc: t(lang as any, "home.ai.referral.desc") },
  ];
}

export default function Home() {
  const { lang } = useLang();
  const isKo = lang === "ko";

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
              {t(lang, "home.badge")}
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
            {t(lang, "home.ai.sub")}
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
            <a href={href("/become-a-creator")} style={{
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
          <AnimatedStats lang={lang} />
        </div>

        {/* Hero — floating creator avatars */}
        <div
          className="hero-cards"
          style={{
            flex: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {[1, 3, 2, 8, 4, 9].map((id, i) => (
              <a key={id} href={href(`/creator/${id}`)} style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--bg-base)",
                marginLeft: i === 0 ? "0" : "-14px",
                position: "relative",
                zIndex: 10 - i,
                transition: "transform 0.2s",
              }}>
                <img
                  src={imgSrc(`/creators/creator_${id}.jpg`)}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </a>
            ))}
            <span style={{
              marginLeft: "12px",
              color: "var(--accent)",
              fontSize: "14px",
              fontFamily: "Georgia, serif",
            }}>
              +9
            </span>
          </div>
          <p style={{
            color: "var(--text-dim)",
            fontSize: "12px",
            letterSpacing: "1.5px",
            textAlign: "center",
          }}>
            {t(lang, "home.section.title")}
          </p>
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
              {lang === "ko" ? "한 번 업로드하세요. 전 세계에 도달하세요. AI 매니저가 번역, 더빙, 팬 채팅, 분석을 자동으로 처리합니다." : "Upload once. Reach the world. Your AI Manager handles translation, dubbing, fan chat, and analytics — automatically."}
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "2px",
          }}>
            {getAIFeatures(lang).map((f) => (
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
            {(lang === "ko" ? [
              { step: "01", title: "MetaMask 연결",  desc: "이메일 없이. 비밀번호 없이. 지갑이 당신의 신원입니다." },
              { step: "02", title: "콘텐츠 업로드",    desc: "내 언어로 영상, 이미지, 오디오, 텍스트를 게시하세요." },
              { step: "03", title: "AI가 일합니다",   desc: "20개 언어로 번역, 더빙, 게시를 즉시 처리합니다." },
              { step: "04", title: "팬이 암호화폐로 결제",desc: "구독 또는 구매. Base Network에서 USDC, ETH." },
              { step: "05", title: "추천인 수익", desc: "3단계 온체인 추천인: 자동 분배." },
            ] : [
              { step: "01", title: "Connect MetaMask",  desc: "No email. No password. Your wallet is your identity." },
              { step: "02", title: "Upload Content",    desc: "Post videos, images, audio, or text in your language." },
              { step: "03", title: "AI Goes to Work",   desc: "Translates, dubs, and publishes to 20 languages instantly." },
              { step: "04", title: "Fans Pay in Crypto",desc: "Subscribe or buy content. USDC, ETH on Base Network." },
              { step: "05", title: "Referral Earnings", desc: "3-level on-chain referral: auto-distributed." },
            ]).map((s, i) => (
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
            <a href={href("/explore")} style={{ color: "var(--text-dim)", fontSize: "12px", textDecoration: "none", letterSpacing: "2px" }}>
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

      {/* Leaderboard + Referral banner */}
      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <a href={href("/leaderboard")} style={{
            padding: "32px", backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)", textDecoration: "none",
          }}>
            <span style={{ fontSize: "32px", display: "block", marginBottom: "12px" }}>🏆</span>
            <p style={{ fontSize: "18px", color: "var(--text-primary)", marginBottom: "6px", fontFamily: "Georgia, serif" }}>
              {lang === "ko" ? "톱 크리에이터 랭킹" : "Top Creator Rankings"}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.6 }}>
              {lang === "ko" ? "실시간 순위를 확인하세요" : "See who's trending right now"}
            </p>
            <span style={{ color: "var(--accent)", fontSize: "13px", marginTop: "12px", display: "inline-block" }}>
              {lang === "ko" ? "랭킹 보기 →" : "View rankings →"}
            </span>
          </a>
          <a href={href("/referral")} style={{
            padding: "32px", backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)", textDecoration: "none",
          }}>
            <span style={{ fontSize: "32px", display: "block", marginBottom: "12px" }}>💰</span>
            <p style={{ fontSize: "18px", color: "var(--text-primary)", marginBottom: "6px", fontFamily: "Georgia, serif" }}>
              {lang === "ko" ? "친구 초대하고 수익" : "Invite & Earn"}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-dim)", lineHeight: 1.6 }}>
              {lang === "ko" ? "3단계 온체인 추천 보상" : "3-level on-chain referral rewards"}
            </p>
            <span style={{ color: "var(--accent)", fontSize: "13px", marginTop: "12px", display: "inline-block" }}>
              {lang === "ko" ? "시작하기 →" : "Get started →"}
            </span>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
            <Footer />
    </main>
  );
}