"use client";

import { useAccount } from "wagmi";
import { useLang } from "./LangProvider";
import { useToast } from "./Toast";

export default function ShareButton({
  creatorId,
  compact = false,
}: {
  creatorId?: number;
  compact?: boolean;
}) {
  const { address } = useAccount();
  const { lang } = useLang();
  const { showToast } = useToast();
  const isKo = lang === "ko";

  const handleShare = async () => {
    const base = window.location.origin;
    const path = creatorId ? `/creator/${creatorId}` : "";
    const ref = address ? `?ref=${address}` : "";
    const url = `${base}${path}${ref}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Vinus",
          text: isKo
            ? "세계 최초 AI 기반 Web3 크리에이터 플랫폼"
            : "The world's first AI-powered Web3 creator platform",
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        showToast(
          isKo ? "추천 링크가 복사됐습니다!" : "Referral link copied!",
          "success"
        );
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        showToast(isKo ? "링크 복사됨!" : "Link copied!", "success");
      } catch {
        showToast(isKo ? "링크 복사 실패" : "Failed to copy link", "error");
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      aria-label={isKo ? "공유하기" : "Share"}
      style={{
        backgroundColor: "transparent",
        border: "1px solid var(--border)",
        color: "var(--text-dim)",
        padding: compact ? "6px 12px" : "10px 18px",
        fontSize: compact ? "11px" : "12px",
        letterSpacing: "1.5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transition: "all 0.2s",
      }}
    >
      <span style={{ fontSize: "14px" }}>↗</span>
      {!compact && (isKo ? "공유" : "SHARE")}
    </button>
  );
}
