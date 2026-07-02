"use client";

import { useLang } from "../components/LangProvider";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  const { lang } = useLang();
  const isKo = lang === "ko";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sections = isKo
    ? ["소개", "이용 방법", "이용약관", "자주 묻는 질문"]
    : ["About", "How It Works", "Terms", "Q&A"];

  const sectionIds = ["about", "how-it-works", "terms", "qa"];

  const principles = isKo ? [
    { title: "익명성", desc: "지갑 주소가 당신의 신원입니다. 이름, 이메일, 신분증 필요 없이 — 영원히." },
    { title: "투명성", desc: "모든 결제, 모든 커미션, 모든 추천인 수익이 온체인에 기록됩니다. 누구나 검증 가능합니다." },
    { title: "AI 우선 글로벌화", desc: "언어는 더 이상 장벽이 아닙니다. AI가 게시글, 댓글, DM을 실시간으로 20개 언어로 번역합니다." },
    { title: "크리에이터 우선 수익", desc: "크리에이터가 모든 수익의 80%를 가져갑니다. 결제는 스마트 컨트랙트를 통해 즉시, 직접 지갑으로 전송됩니다." },
  ] : [
    { title: "Anonymity", desc: "Your wallet address is your identity. No name, no email, no ID required — ever." },
    { title: "Transparency", desc: "Every payment, commission, and referral payout is recorded on-chain. Anyone can verify. No hidden fees." },
    { title: "AI-first globalization", desc: "Language is no longer a barrier. AI translates posts, comments, and DMs in real time across 20 languages." },
    { title: "Creator-first economics", desc: "Creators keep 80% of all revenue. Payments go directly to your wallet via smart contract — instantly." },
  ];

  const creatorSteps = isKo ? [
    { n: "1", t: "MetaMask 연결", d: "가입 없음. 지갑이 곧 계정입니다. 한 번 연결하면 바로 시작됩니다." },
    { n: "2", t: "프로필 설정", d: "표시 이름, 카테고리, 소개를 설정하세요. 지갑 주소는 비공개로 유지됩니다." },
    { n: "3", t: "구독 등급 설정", d: "가격과 혜택이 다른 최대 3개의 등급을 만드세요. 또는 개별 콘텐츠를 단건 판매할 수도 있습니다." },
    { n: "4", t: "콘텐츠 게시", d: "이미지, 영상, 오디오, 텍스트를 업로드하세요. AI가 즉시 20개 언어로 번역합니다." },
    { n: "5", t: "수익 창출", d: "모든 결제의 80%가 스마트 컨트랙트를 통해 즉시 지갑으로 전송됩니다." },
    { n: "6", t: "추천인으로 성장", d: "추천 링크를 공유하세요. 추천한 크리에이터가 수익을 올릴 때마다 자동으로 수익의 일부를 받습니다." },
  ] : [
    { n: "1", t: "Connect MetaMask", d: "No sign-up. Your wallet is your account. Connect once and you're in." },
    { n: "2", t: "Create your profile", d: "Set a display name, category, and bio. Your wallet address stays private." },
    { n: "3", t: "Set subscription tiers", d: "Create up to 3 tiers with different prices and perks. Or sell content individually." },
    { n: "4", t: "Post content", d: "Upload images, videos, audio, or text. AI instantly translates to 20 languages." },
    { n: "5", t: "Earn", d: "80% of every payment goes directly to your wallet via smart contract — instantly." },
    { n: "6", t: "Grow with referrals", d: "Share your referral link. Earn automatically when your referred creators earn revenue." },
  ];

  const fanSteps = isKo ? [
    { n: "1", t: "MetaMask 연결", d: "계정 불필요. 지갑을 연결하고 크리에이터를 탐색하세요." },
    { n: "2", t: "내 언어로 탐색", d: "모든 콘텐츠가 내 언어로 제공됩니다. AI가 자동으로 번역합니다." },
    { n: "3", t: "구독 또는 구매", d: "크리에이터 등급을 구독하거나 개별 게시물을 일회성 결제로 구매하세요." },
    { n: "4", t: "소통", d: "내 언어로 댓글과 DM을 보내세요. 크리에이터는 자신의 언어로 보고 답장합니다." },
  ] : [
    { n: "1", t: "Connect MetaMask", d: "No account needed. Connect your wallet and start browsing." },
    { n: "2", t: "Browse in your language", d: "All content is available in your language automatically." },
    { n: "3", t: "Subscribe or buy", d: "Subscribe to a creator's tier or buy individual posts with a one-time payment." },
    { n: "4", t: "Engage", d: "Comment and DM in your language. The creator sees it in theirs. Reply — you see it in yours." },
  ];

  const aiFeatures = isKo ? [
    "업로드 시 20개 언어로 게시글 번역",
    "댓글 및 DM 실시간 번역",
    "내 톤과 스타일로 24/7 팬 메시지 응답",
    "어떤 콘텐츠가 가장 성과가 좋은지 분석",
    "지역별 최적 게시 시간 추천",
    "여러 언어로 영상 콘텐츠 더빙 (곧 출시)",
  ] : [
    "Translates posts to 20 languages on upload",
    "Translates comments and DMs in real time",
    "Responds to fan messages 24/7 in your tone",
    "Analyzes which content performs best",
    "Recommends optimal posting times by region",
    "Dubs video content in multiple languages (coming soon)",
  ];

  const termsItems = isKo ? [
    { title: "1. 자격 요건", body: "Vinus를 이용하려면 만 18세 이상이어야 합니다. 지갑을 연결하고 플랫폼에 입장함으로써 이 요건을 충족함을 확인합니다. Vinus는 개인 신원 정보를 수집하거나 확인하지 않습니다." },
    { title: "2. 지갑 및 신원", body: "MetaMask 지갑 주소가 Vinus에서의 유일한 신원입니다. 지갑 보안과 개인 키 관리는 사용자 본인의 책임입니다. Vinus는 분실된 지갑을 복구하거나 트랜잭션을 되돌릴 수 없습니다." },
    { title: "3. 결제 및 수익", body: "모든 결제는 Base Network에서 USDC, USDT 또는 ETH로 처리됩니다. 스마트 컨트랙트가 수익을 자동 분배합니다: 크리에이터 80%, 추천인 최대 2%, Vinus 18%. 모든 트랜잭션은 되돌릴 수 없습니다." },
    { title: "4. 추천인 프로그램", body: "3단계 추천인 시스템은 스마트 컨트랙트로 운영됩니다. Vinus의 20% 수수료 중 10%가 추천인에게 배분됩니다(전체 트랜잭션의 2%). 추천인 관계는 크리에이터 등록 시 온체인에 기록되며 이후 변경 불가합니다." },
    { title: "5. 콘텐츠 정책", body: "크리에이터는 게시하는 콘텐츠에 전적으로 책임을 집니다. 금지 콘텐츠: 미성년자가 포함된 자료, 비동의 콘텐츠, 관련 법률을 위반하는 콘텐츠. Vinus는 이를 위반하는 콘텐츠를 삭제하고 계정을 정지할 권리를 보유합니다." },
    { title: "6. AI 번역", body: "AI 번역은 편의를 위해 제공됩니다. Vinus는 번역 정확성을 보장하지 않습니다. 미묘하거나 관용적인 언어의 경우 오류가 포함될 수 있습니다." },
    { title: "7. 익명성 및 개인정보", body: "Vinus는 개인 식별 정보를 수집하지 않습니다. 지갑 주소는 가명입니다 — 온체인에서 공개되지만 Vinus는 이를 실제 신원과 연결하지 않습니다." },
    { title: "8. 면책 조항", body: "Vinus는 어떠한 보증 없이 '있는 그대로' 제공됩니다. 암호화폐 가치는 변동성이 있습니다. Vinus는 시장 변동, 스마트 컨트랙트 버그, 네트워크 장애로 인한 손실에 대해 책임지지 않습니다." },
  ] : [
    { title: "1. Eligibility", body: "You must be 18 years of age or older to use Vinus. By connecting your wallet and entering the platform, you confirm that you meet this requirement." },
    { title: "2. Wallet & Identity", body: "Your MetaMask wallet address serves as your sole identity on Vinus. You are responsible for the security of your wallet and private keys." },
    { title: "3. Payments & Revenue", body: "All payments are processed on Base Network using USDC, USDT, or ETH. Smart contracts distribute revenue: 80% to creator, up to 2% to referrers, 18% to Vinus." },
    { title: "4. Referral Program", body: "10% of Vinus's 20% fee is shared with referrers (2% of total transaction). Referral relationships are recorded on-chain at registration and cannot be changed." },
    { title: "5. Content Policy", body: "Creators are solely responsible for content they publish. Prohibited: content involving minors, non-consensual content, illegal content." },
    { title: "6. AI Translation", body: "AI translations are provided for convenience. Vinus does not guarantee accuracy, particularly for nuanced or idiomatic language." },
    { title: "7. Anonymity & Privacy", body: "Vinus does not collect personally identifiable information. Wallet addresses are pseudonymous and not linked to real identities by Vinus." },
    { title: "8. Disclaimer", body: "Vinus is provided 'as is' without warranty. Vinus is not responsible for losses due to market fluctuations, smart contract bugs, or network failures." },
  ];

  const faqs = isKo ? [
    { q: "Vinus는 어떤 블록체인을 사용하나요?", a: "Base Network — Coinbase의 이더리움 L2입니다. 빠르고, 저렴하며, 안전합니다. 가스비는 일반적으로 트랜잭션당 $0.01 미만입니다." },
    { q: "어떤 암호화폐를 사용할 수 있나요?", a: "Base Network의 USDC(USD Coin), USDT(테더), ETH. 예측 가능한 수익을 원하는 크리에이터에게는 USDC, USDT 같은 스테이블코인을 권장합니다." },
    { q: "몇 개 언어를 지원하나요?", a: "플랫폼 UI는 20개 언어를 지원합니다. 콘텐츠 AI 번역은 Claude API를 통해 50개 이상의 언어를 지원합니다." },
    { q: "Vinus는 전 세계에서 이용 가능한가요?", a: "네. Vinus는 완전히 탈중앙화되어 있으며 인터넷이 연결된 모든 국가에서 접근 가능합니다. 지역 제한 없음. 현지 은행 계좌 불필요." },
    { q: "완전히 익명으로 이용할 수 있나요?", a: "네. MetaMask 지갑만 있으면 됩니다. 이메일, 전화번호, 신분증 불필요. 온체인 지갑 주소가 유일한 식별자입니다." },
    { q: "추천인 시스템은 어떻게 작동하나요?", a: "Vinus는 20% 플랫폼 수수료를 받습니다. 그 중 10%(전체 트랜잭션의 2%)가 추천인에게 자동 분배됩니다. Level 1: 전체의 1% · Level 2: 0.6% · Level 3: 0.4%. 모두 자동, 온체인, 영구적입니다." },
    { q: "AI 매니저란 무엇인가요?", a: "모든 크리에이터 계정에 내장된 AI 레이어입니다. 모든 콘텐츠를 자동 번역하고, 실시간으로 댓글과 DM을 번역하며, 오프라인 중에도 팬에게 응답하고, 콘텐츠 성과를 분석합니다." },
    { q: "수익을 어떻게 인출하나요?", a: "인출할 필요가 없습니다. 팬이 결제하는 순간 스마트 컨트랙트를 통해 MetaMask 지갑으로 직접 전송됩니다. 잔액 관리 없음. 인출 요청 없음. 지연 없음." },
    { q: "Vinus의 수수료는 얼마인가요?", a: "각 트랜잭션의 20%. 이 중 추천인에게 최대 2%가 자동 지급되어 Vinus의 실수령액은 18%입니다. 크리에이터는 항상 80%를 받습니다." },
  ] : [
    { q: "What blockchain does Vinus use?", a: "Base Network — Coinbase's Ethereum L2. Fast, cheap, secure. Gas fees are typically under $0.01 per transaction." },
    { q: "What cryptocurrencies are accepted?", a: "USDC, USDT, and ETH on Base Network. Stablecoins like USDC and USDT are recommended for predictable income." },
    { q: "How many languages does Vinus support?", a: "20 languages for the platform UI. AI translation for content supports 50+ languages via Claude API." },
    { q: "Is Vinus available worldwide?", a: "Yes. Fully decentralized and accessible from any country. No regional restrictions. No local banking required." },
    { q: "Can I remain completely anonymous?", a: "Yes. You only need a MetaMask wallet. No email, no phone number, no government ID." },
    { q: "How does the referral system work?", a: "Vinus takes a 20% platform fee. 10% of that fee (2% of total transaction) is shared with referrers. Level 1: 1% · Level 2: 0.6% · Level 3: 0.4%. All automatic, on-chain, forever." },
    { q: "What is the AI Manager?", a: "An AI layer built into every creator account. Automatically translates all content, handles fan comments and DMs in real time, responds to fans when you're offline, and provides analytics." },
    { q: "How do I withdraw my earnings?", a: "There's nothing to withdraw. Earnings go directly to your MetaMask wallet via smart contract the moment a fan pays. No delays." },
    { q: "What is Vinus's fee?", a: "20% of each transaction. Up to 2% is distributed to referrers automatically, so Vinus's effective take is 18%. Creator always keeps 80%." },
  ];

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "80px 48px 64px", borderBottom: "1px solid var(--border)", background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "16px" }}>
            {isKo ? "VINUS 소개" : "ABOUT VINUS"}
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: "normal", lineHeight: 1.1, marginBottom: "24px" }}>
            {isKo ? <>세계 최초<br /><span style={{ color: "var(--accent)" }}>AI 기반 Web3</span><br />크리에이터 플랫폼.</> : <>The world's first<br /><span style={{ color: "var(--accent)" }}>AI-powered Web3</span><br />creator platform.</>}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "17px", lineHeight: 1.9, maxWidth: "600px" }}>
            {isKo ? "Vinus는 모든 언어와 국경을 넘어 크리에이터와 팬을 연결합니다 — 익명으로, 투명하게, AI로." : "Vinus connects creators and fans across every language and border — anonymously, transparently, and powered by AI."}
          </p>
        </div>
      </section>

      {/* Section nav */}
      <div style={{ position: "sticky", top: "64px", backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--border)", zIndex: 50, backdropFilter: "blur(12px)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", gap: "0" }}>
          {sections.map((s, i) => (
            <a key={s} href={`#${sectionIds[i]}`} style={{ padding: "16px 24px", color: "var(--text-dim)", textDecoration: "none", fontSize: "12px", letterSpacing: "1.5px" }}>
              {s.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>

        {/* ABOUT */}
        <section id="about" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>{isKo ? "소개" : "ABOUT"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "24px" }}>
            {isKo ? "Vinus란 무엇인가요?" : "What is Vinus?"}
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.9, marginBottom: "24px" }}>
            {isKo ? "Vinus는 Base Network 기반의 탈중앙화 크리에이터 구독 플랫폼입니다. 크리에이터가 이미지, 영상, 오디오, 텍스트를 게시하면 팬들이 USDC, USDT 또는 ETH로 직접 구독하거나 구매합니다. 은행 없이. 지불 거절 없이. 국경 없이." : "Vinus is a decentralized creator subscription platform built on Base Network. Creators publish content and fans subscribe or purchase directly using USDC, USDT, or ETH. No banks. No chargebacks. No borders."}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.9, marginBottom: "40px" }}>
            {isKo ? "Vinus를 다르게 만드는 것은 AI 레이어입니다. 모든 게시글이 자동으로 20개 언어로 번역됩니다. 모든 댓글과 DM이 실시간으로 번역됩니다. 한국 크리에이터가 일본 팬과 대화할 수 있습니다 — 서로의 언어를 몰라도." : "What makes Vinus different is the AI layer. Every post is automatically translated into 20 languages. Every comment and DM is translated in real time. A Korean creator can have a live conversation with a Japanese fan — neither speaks the other's language."}
          </p>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "normal", marginBottom: "20px" }}>
            {isKo ? "핵심 원칙" : "Our core principles"}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {principles.map((p) => (
              <div key={p.title} style={{ padding: "24px", backgroundColor: "var(--bg-card)", borderLeft: "2px solid var(--accent)" }}>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "8px", fontWeight: "500" }}>{p.title}</p>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>{isKo ? "이용 방법" : "HOW IT WORKS"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "40px" }}>
            {isKo ? "크리에이터를 위한 가이드" : "For creators"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "56px" }}>
            {creatorSteps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "20px", padding: "24px", backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "32px" }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "6px", fontWeight: "500" }}>{s.t}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "40px" }}>
            {isKo ? "팬을 위한 가이드" : "For fans"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "56px" }}>
            {fanSteps.map((s) => (
              <div key={s.n} style={{ display: "flex", gap: "20px", padding: "24px", backgroundColor: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "var(--accent)", opacity: 0.5, flexShrink: 0, width: "32px" }}>{s.n}</span>
                <div>
                  <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "6px", fontWeight: "500" }}>{s.t}</p>
                  <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7 }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "24px" }}>
            {isKo ? "AI 매니저" : "The AI Manager"}
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9, marginBottom: "24px" }}>
            {isKo ? "AI 매니저는 Vinus의 핵심 AI 레이어입니다. 모든 크리에이터 계정에 자동으로 백그라운드에서 실행됩니다." : "The AI Manager is Vinus's core intelligence layer. It runs automatically in the background for every creator."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {aiFeatures.map((f) => (
              <div key={f} style={{ display: "flex", gap: "10px", padding: "16px", backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                <span style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TERMS */}
        <section id="terms" style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>{isKo ? "이용약관" : "TERMS"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "8px" }}>
            {isKo ? "서비스 이용약관" : "Terms of Service"}
          </h2>
          <p style={{ color: "var(--text-ghost)", fontSize: "12px", marginBottom: "40px" }}>Last updated: July 2026</p>
          {termsItems.map((item) => (
            <div key={item.title} style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "16px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "500" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.9 }}>{item.body}</p>
            </div>
          ))}
        </section>

        {/* Q&A */}
        <section id="qa" style={{ padding: "72px 0" }}>
          <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "24px" }}>{isKo ? "자주 묻는 질문" : "Q&A"}</p>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "48px" }}>
            {isKo ? "자주 묻는 질문들" : "Frequently Asked Questions"}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", backgroundColor: "transparent", border: "none", color: "var(--text-primary)", fontSize: "15px", textAlign: "left", cursor: "pointer", gap: "16px" }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "var(--accent)", fontSize: "18px", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8, paddingBottom: "20px" }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>VINUS</span>
          <span style={{ color: "var(--text-ghost)", fontSize: "11px", marginLeft: "16px", letterSpacing: "1px" }}>AI-POWERED · WEB3 · GLOBAL</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/become-a-creator" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none" }}>{isKo ? "크리에이터 되기" : "BECOME A CREATOR"}</a>
          <a href="/explore" style={{ color: "var(--text-ghost)", fontSize: "12px", textDecoration: "none" }}>{isKo ? "탐색" : "EXPLORE"}</a>
        </div>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>© 2026 Vinus. {isKo ? "모든 권리 보유." : "All rights reserved."}</span>
      </footer>
    </main>
  );
}
