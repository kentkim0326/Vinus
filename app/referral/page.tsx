"use client";

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useLang } from "../components/LangProvider";
import { href } from "../lib/basePath";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WalletButton from "../components/WalletButton";
import ShareButton from "../components/ShareButton";
import { useToast } from "../components/Toast";

export default function ReferralPage() {
  const { lang } = useLang();
  const { address, isConnected } = useAccount();
  const { showToast } = useToast();
  const isKo = lang === "ko";
  const [refLink, setRefLink] = useState("");

  useEffect(() => {
    if (address) {
      setRefLink(`${window.location.origin}${window.location.pathname.replace(/\/referral.*/, "")}?ref=${address}`);
    }
  }, [address]);

  // Mock referral data
  const stats = {
    l1: { count: 8, earnings: 240 },
    l2: { count: 23, earnings: 138 },
    l3: { count: 51, earnings: 102 },
  };
  const total = stats.l1.earnings + stats.l2.earnings + stats.l3.earnings;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(refLink);
      showToast(isKo ? "추천 링크 복사됨!" : "Referral link copied!", "success");
    } catch {
      showToast(isKo ? "복사 실패" : "Copy failed", "error");
    }
  };

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "5px", marginBottom: "12px" }}>
          {isKo ? "추천인 프로그램" : "REFERRAL PROGRAM"}
        </p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "normal", marginBottom: "16px" }}>
          {isKo ? "친구를 초대하고 평생 수익을" : "Invite Friends, Earn Forever"}
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8 }}>
          {isKo
            ? "3단계 온체인 추천으로 자동 수익을 창출하세요. 스마트 컨트랙트가 모든 것을 처리합니다."
            : "Earn from 3 levels of on-chain referrals. Smart contracts handle everything automatically."}
        </p>
      </section>

      {!isConnected ? (
        <section style={{ padding: "40px 24px", textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
          <div style={{ padding: "40px", border: "1px solid var(--border)", backgroundColor: "var(--bg-card)" }}>
            <p style={{ color: "var(--text-dim)", fontSize: "14px", marginBottom: "24px" }}>
              {isKo ? "지갑을 연결하여 추천 링크를 받으세요" : "Connect your wallet to get your referral link"}
            </p>
            <WalletButton />
          </div>
        </section>
      ) : (
        <>
          {/* Total earnings */}
          <section style={{ padding: "20px 24px", maxWidth: "700px", margin: "0 auto" }}>
            <div style={{
              padding: "40px",
              background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-deep) 100%)",
              border: "1px solid var(--accent)",
              textAlign: "center",
              marginBottom: "32px",
            }}>
              <p style={{ color: "var(--text-dim)", fontSize: "12px", letterSpacing: "2px", marginBottom: "8px" }}>
                {isKo ? "총 추천 수익" : "TOTAL REFERRAL EARNINGS"}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "56px", color: "var(--accent)", lineHeight: 1 }}>
                ${total}
              </p>
              <p style={{ color: "var(--text-faint)", fontSize: "12px", marginTop: "8px" }}>
                {stats.l1.count + stats.l2.count + stats.l3.count} {isKo ? "명 추천" : "referrals"}
              </p>
            </div>

            {/* Referral link */}
            <div style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "12px" }}>
                {isKo ? "내 추천 링크" : "YOUR REFERRAL LINK"}
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <input
                  readOnly
                  value={refLink}
                  style={{
                    flex: 1, minWidth: "200px", padding: "14px 16px",
                    backgroundColor: "var(--bg-deep)", border: "1px solid var(--border)",
                    color: "var(--text-muted)", fontSize: "13px", fontFamily: "monospace",
                  }}
                />
                <button onClick={copyLink} style={{
                  backgroundColor: "var(--accent)", color: "var(--accent-fg)",
                  border: "none", padding: "14px 24px", fontSize: "12px",
                  letterSpacing: "1px", cursor: "pointer", whiteSpace: "nowrap",
                }}>
                  {isKo ? "복사" : "COPY"}
                </button>
              </div>
            </div>

            {/* 3-level breakdown */}
            <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "2px", marginBottom: "16px" }}>
              {isKo ? "단계별 수익" : "EARNINGS BY LEVEL"}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { level: 1, pct: "1%", data: stats.l1, color: "var(--accent)" },
                { level: 2, pct: "0.6%", data: stats.l2, color: "#BF8000" },
                { level: 3, pct: "0.4%", data: stats.l3, color: "var(--text-dim)" },
              ].map((tier) => (
                <div key={tier.level} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "20px 24px", backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)", borderLeft: `3px solid ${tier.color}`,
                }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    backgroundColor: "var(--bg-deep)", border: `1px solid ${tier.color}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Georgia, serif", fontSize: "18px", color: tier.color, flexShrink: 0,
                  }}>
                    L{tier.level}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", color: "var(--text-primary)" }}>
                      {isKo ? `${tier.level}단계` : `Level ${tier.level}`} · {tier.pct}
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                      {tier.data.count} {isKo ? "명" : "referrals"}
                    </p>
                  </div>
                  <p style={{ fontSize: "18px", color: tier.color, fontWeight: "bold", fontFamily: "Georgia, serif" }}>
                    ${tier.data.earnings}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "32px", textAlign: "center" }}>
              <ShareButton />
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
