"use client";

import { useLang } from "./LangProvider";
import { t } from "../lib/i18n";
import { useToast } from "./Toast";

import { useState } from "react";
import { ContentItem } from "../lib/content";

type Step = "select" | "pay" | "done";

const COINS = [
  { symbol: "ETH", name: "Ethereum", rate: 0.00028 },
  { symbol: "USDT", name: "Tether", rate: 1.0 },
  { symbol: "USDC", name: "USD Coin", rate: 1.0 },
];

export default function PurchaseModal({
  item,
  onClose,
}: {
  item: ContentItem;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const { showToast } = useToast();
  const [step, setStep] = useState<Step>("select");
  const [selectedCoin, setSelectedCoin] = useState(COINS[1]);
  const [txHash, setTxHash] = useState("");

  const price = item.price ?? 0;
  const cryptoAmount = (price * selectedCoin.rate).toFixed(
    selectedCoin.symbol === "ETH" ? 6 : 2
  );

  const handlePay = () => {
    setStep("pay");
    setTimeout(() => {
      const hash = "0x" + Math.random().toString(16).slice(2, 18) + "...";
      setTxHash(hash);
      setStep("done");
      showToast(lang === "ko" ? "콘텐츠 잠금이 해제됐습니다!" : "Content unlocked!", "success");
    }, 2000);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid #1A0008",
          width: "100%",
          maxWidth: "460px",
          padding: "36px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "transparent",
            border: "none",
            color: "var(--text-dim)",
            fontSize: "20px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          X
        </button>

        {step === "select" && (
          <>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", marginBottom: "20px" }}>
              PURCHASE CONTENT
            </p>

            <div style={{
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
              padding: "18px",
              backgroundColor: "var(--bg-deep)",
              border: "1px solid #1A0008",
              marginBottom: "28px",
            }}>
              <span style={{ fontSize: "32px" }}>{item.thumbnail}</span>
              <div>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "4px" }}>{item.title}</p>
                <p style={{ fontSize: "12px", color: "var(--text-dim)", lineHeight: 1.5 }}>{item.description}</p>
                <p style={{ fontSize: "13px", color: "var(--accent)", marginTop: "8px", fontFamily: "Georgia, serif" }}>
                  ${item.price}
                </p>
              </div>
            </div>

            <p style={{ color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "12px" }}>
              PAY WITH
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "28px" }}>
              {COINS.map((coin) => (
                <div
                  key={coin.symbol}
                  onClick={() => setSelectedCoin(coin)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 16px",
                    backgroundColor: selectedCoin.symbol === coin.symbol ? "var(--bg-card-hover)" : "transparent",
                    border: `1px solid ${selectedCoin.symbol === coin.symbol ? "var(--accent)" : "var(--border)"}`,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: selectedCoin.symbol === coin.symbol ? "var(--accent)" : "var(--text-ghost)",
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: "14px", color: "var(--text-primary)" }}>{coin.symbol}</span>
                    <span style={{ fontSize: "12px", color: "var(--text-faint)" }}>{coin.name}</span>
                  </div>
                  <span style={{ fontSize: "13px", color: "var(--accent)", fontFamily: "Georgia, serif" }}>
                    {(price * coin.rate).toFixed(coin.symbol === "ETH" ? 6 : 2)} {coin.symbol}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #1A0008", paddingTop: "20px", marginBottom: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "13px" }}>{t(lang, "buy.price")}</span>
                <span style={{ color: "var(--text-primary)", fontSize: "13px" }}>${price}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "13px" }}>{t(lang, "buy.network")}</span>
                <span style={{ color: "var(--text-primary)", fontSize: "13px" }}>Base</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-dim)", fontSize: "13px" }}>{t(lang, "buy.youpay")}</span>
                <span style={{ color: "var(--accent)", fontSize: "16px", fontFamily: "Georgia, serif" }}>
                  {cryptoAmount} {selectedCoin.symbol}
                </span>
              </div>
            </div>

            <button
              onClick={handlePay}
              style={{
                width: "100%",
                backgroundColor: "var(--accent)",
                color: "var(--text-primary)",
                border: "none",
                padding: "16px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
              }}
            >
              CONNECT WALLET + PAY
            </button>
            <p style={{ color: "var(--text-ghost)", fontSize: "11px", textAlign: "center", marginTop: "12px" }}>
              {t(lang, "buy.powered")}
            </p>
          </>
        )}

        {step === "pay" && (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{
              width: "60px",
              height: "60px",
              border: "2px solid #C0001A",
              borderTopColor: "transparent",
              borderRadius: "50%",
              margin: "0 auto 24px",
              animation: "spin 1s linear infinite",
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", marginBottom: "12px" }}>
              PROCESSING
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "14px" }}>
              {t(lang, "buy.confirm")}
            </p>
          </div>
        )}

        {step === "done" && (
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "var(--border)",
              border: "2px solid #C0001A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              margin: "0 auto 24px",
              boxShadow: "0 0 24px rgba(192,0,26,0.3)",
            }}>
              ✦
            </div>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", marginBottom: "12px" }}>
              PAYMENT CONFIRMED
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: "normal", marginBottom: "12px" }}>
              Content unlocked.
            </h2>
            <p style={{ color: "var(--text-dim)", fontSize: "13px", marginBottom: "8px" }}>{item.title}</p>
            <p style={{ color: "var(--text-ghost)", fontSize: "11px", letterSpacing: "1px", marginBottom: "32px" }}>
              TX: {txHash}
            </p>
            <button
              onClick={onClose}
              style={{
                width: "100%",
                backgroundColor: "var(--accent)",
                color: "var(--text-primary)",
                border: "none",
                padding: "14px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
              }}
            >
              VIEW CONTENT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
