"use client";

import { href, imgSrc } from "../lib/basePath";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLang } from "../components/LangProvider";

const PHASES = [
  {
    phase: "Phase 1",
    status: "live",
    title: { en: "Foundation", ko: "기반 구축" },
    period: { en: "Q3 2026", ko: "2026년 3분기" },
    items: {
      en: [
        "MetaMask wallet login (no email required)",
        "Creator profiles & subscription tiers",
        "USDC / USDT / ETH payments on Base Network",
        "3-level referral smart contract",
        "20-language UI",
        "Age verification gate",
        "Dark / Light mode",
      ],
      ko: [
        "MetaMask 지갑 로그인 (이메일 불필요)",
        "크리에이터 프로필 & 구독 등급",
        "Base Network USDC / USDT / ETH 결제",
        "3단계 추천인 스마트 컨트랙트",
        "20개 언어 UI",
        "나이 확인 게이트",
        "다크 / 라이트 모드",
      ],
    },
  },
  {
    phase: "Phase 2",
    status: "building",
    title: { en: "AI Translation", ko: "AI 번역" },
    period: { en: "Q4 2026", ko: "2026년 4분기" },
    items: {
      en: [
        "Auto-translate posts to 20 languages on upload",
        "Real-time comment translation",
        "Real-time DM translation",
        "Creator writes in any language → fans read in theirs",
        "Translation powered by Claude AI",
      ],
      ko: [
        "업로드 시 20개 언어 자동 번역",
        "실시간 댓글 번역",
        "실시간 DM 번역",
        "크리에이터는 어떤 언어로든 작성 → 팬은 자신의 언어로 읽음",
        "Claude AI 기반 번역",
      ],
    },
  },
  {
    phase: "Phase 3",
    status: "planned",
    title: { en: "AI Chat Assistant", ko: "AI 채팅 비서" },
    period: { en: "Q1 2027", ko: "2027년 1분기" },
    items: {
      en: [
        "AI responds to fans 24/7 in creator's tone",
        "Creator sets personality, FAQ, boundaries",
        "Escalates personal/payment queries to creator",
        "Fan satisfaction analytics",
        "Multi-language fan engagement",
      ],
      ko: [
        "크리에이터 톤으로 24/7 팬 자동 응답",
        "크리에이터가 AI 성격, FAQ, 경계 설정",
        "개인적/결제 관련 문의는 크리에이터에게 전달",
        "팬 만족도 분석",
        "다국어 팬 소통",
      ],
    },
  },
  {
    phase: "Phase 4",
    status: "planned",
    title: { en: "AI Voice Dubbing", ko: "AI 음성 더빙" },
    period: { en: "Q2 2027", ko: "2027년 2분기" },
    items: {
      en: [
        "Upload video in Korean → AI dubs in English, Japanese, etc.",
        "Voice cloning from 30-second sample",
        "Lip-sync optimization",
        "Multi-language video library",
        "Powered by ElevenLabs",
      ],
      ko: [
        "한국어 영상 업로드 → AI가 영어, 일본어 등으로 더빙",
        "30초 샘플로 음성 복제",
        "립싱크 최적화",
        "다국어 영상 라이브러리",
        "ElevenLabs 기반",
      ],
    },
  },
  {
    phase: "Phase 5",
    status: "planned",
    title: { en: "Creator DAO & NFT", ko: "크리에이터 DAO & NFT" },
    period: { en: "Q3 2027", ko: "2027년 3분기" },
    items: {
      en: [
        "NFT membership passes for VIP fans",
        "Creator DAO: top fans vote on content direction",
        "On-chain exclusive content access via NFT",
        "Royalty splits for co-creators",
        "AI-generated content marketplace",
      ],
      ko: [
        "VIP 팬을 위한 NFT 멤버십 패스",
        "크리에이터 DAO: 상위 팬이 콘텐츠 방향 투표",
        "NFT를 통한 온체인 독점 콘텐츠 접근",
        "공동 창작자 로열티 분배",
        "AI 생성 콘텐츠 마켓플레이스",
      ],
    },
  },
];

const STATUS_CONFIG = {
  live:     { color: "#4AE04A", label: { en: "LIVE",     ko: "출시" } },
  building: { color: "#F0C060", label: { en: "BUILDING", ko: "개발 중" } },
  planned:  { color: "var(--text-ghost)", label: { en: "PLANNED", ko: "예정" } },
};

export default function RoadmapPage() {
  const { lang } = useLang();
  const L = lang as any;

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "80px 48px 64px", borderBottom: "1px solid var(--border)", background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            {t(L, "road.label")}
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: "normal", lineHeight: 1.1, marginBottom: "20px" }}>
            {t(L, "road.title")}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.8 }}>
            {t(L, "road.sub")}
          </p>
        </div>
      </section>

      {/* Timeline */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "64px 48px" }}>
        {PHASES.map((phase, i) => {
          const cfg = STATUS_CONFIG[phase.status as keyof typeof STATUS_CONFIG];
          return (
            <div key={phase.phase} style={{
              display: "flex",
              gap: "32px",
              marginBottom: "0",
              position: "relative",
            }}>
              {/* Timeline line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: cfg.color,
                  border: "2px solid var(--bg-base)",
                  boxShadow: `0 0 0 2px ${cfg.color}`,
                  flexShrink: 0,
                  marginTop: "4px",
                }} />
                {i < PHASES.length - 1 && (
                  <div style={{
                    width: "1px",
                    flex: 1,
                    backgroundColor: "var(--border)",
                    margin: "8px 0",
                    minHeight: "40px",
                  }} />
                )}
              </div>

              {/* Content */}
              <div style={{ flex: 1, paddingBottom: i < PHASES.length - 1 ? "48px" : "0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span style={{ color: "var(--text-ghost)", fontSize: "11px", letterSpacing: "2px" }}>
                    {phase.phase}
                  </span>
                  <span style={{
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    padding: "3px 8px",
                    border: `1px solid ${cfg.color}`,
                    color: cfg.color,
                  }}>
                    {cfg.label[lang === "ko" ? "ko" : "en"]}
                  </span>
                  <span style={{ color: "var(--text-ghost)", fontSize: "12px" }}>
                    {phase.period[lang === "ko" ? "ko" : "en"]}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "24px",
                  fontWeight: "normal",
                  color: "var(--text-primary)",
                  marginBottom: "20px",
                }}>
                  {phase.title[lang === "ko" ? "ko" : "en"]}
                </h2>

                <div style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  padding: "20px 24px",
                  borderLeft: `2px solid ${cfg.color}`,
                }}>
                  {phase.items[lang === "ko" ? "ko" : "en"].map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: j < phase.items.en.length - 1 ? "10px" : "0" }}>
                      <span style={{ color: cfg.color, fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                      <span style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "64px 48px", textAlign: "center" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "15px", marginBottom: "32px" }}>
          {t(L, "road.join")}
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={href("/become-a-creator")} style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-fg)",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "2px",
          }}>
            {t(L, "home.cta2")}
          </a>
          <a href={href("/explore")} style={{
            border: "1px solid var(--border)",
            color: "var(--text-dim)",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "2px",
          }}>
            {t(L, "nav.explore")}
          </a>
        </div>
      </div>

            <Footer />
    </main>
  );
}
