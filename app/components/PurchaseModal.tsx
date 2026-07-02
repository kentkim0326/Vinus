"use client";

import { useState, useEffect } from "react";
import { useAccount, useConnect, useSendTransaction } from "wagmi";
import { parseEther } from "viem";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { Content } from "../lib/content";

type PurchaseStep = "select" | "confirm" | "processing" | "success" | "error";
type PaymentToken = "ETH" | "USDT";

interface PurchaseModalProps {
  content: Content;
  creatorName: string;
  onClose: () => void;
}

// Creator wallet addresses (mock — replace with real addresses)
const CREATOR_WALLETS: Record<number, `0x${string}`> = {
  1: "0x1234567890123456789012345678901234567891",
  2: "0x1234567890123456789012345678901234567892",
  3: "0x1234567890123456789012345678901234567893",
  4: "0x1234567890123456789012345678901234567894",
  5: "0x1234567890123456789012345678901234567895",
  6: "0x1234567890123456789012345678901234567896",
  7: "0x1234567890123456789012345678901234567897",
  8: "0x1234567890123456789012345678901234567898",
  9: "0x1234567890123456789012345678901234567899",
};

export default function PurchaseModal({ content, creatorName, onClose }: PurchaseModalProps) {
  const { isConnected, address } = useAccount();
  const [step, setStep] = useState<PurchaseStep>("select");
  const [token, setToken] = useState<PaymentToken>("ETH");
  const [txHash, setTxHash] = useState<string>("");

  const { sendTransaction, isPending } = useSendTransaction();

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const ethPrice = content.priceEth ?? "0.003";
  const usdPrice = content.price ?? 10;
  const creatorWallet = CREATOR_WALLETS[content.creatorId];

  const handlePay = async () => {
    if (!isConnected || !creatorWallet) return;
    setStep("processing");
    try {
      sendTransaction(
        {
          to: creatorWallet,
          value: parseEther(ethPrice),
        },
        {
          onSuccess: (hash) => {
            setTxHash(hash);
            setStep("success");
          },
          onError: () => setStep("error"),
        }
      );
    } catch {
      setStep("error");
    }
  };

  const accessLabel = {
    free: "FREE",
    subscription: "SUBSCRIBERS ONLY",
    paid: "PURCHASE TO UNLOCK",
  }[content.access];

  const typeIcon = { image: "🖼", video: "🎬", audio: "🎵", text: "📝" }[content.type];

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div style={{
        backgroundColor: "#0D0005",
        border: "1px solid #2A0010",
        width: "100%",
        maxWidth: "480px",
        position: "relative",
      }}>
        {/* 헤더 */}
        <div style={{
          padding: "24px",
          borderBottom: "1px solid #1A0008",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
          <div>
            <p style={{ color: "#C0001A", fontSize: "10px", letterSpacing: "3px", marginBottom: "6px" }}>
              {accessLabel}
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "17px", color: "#F5F0F0", lineHeight: 1.3 }}>
              {content.title}
            </p>
            <p style={{ color: "#555", fontSize: "12px", marginTop: "4px" }}>
              {typeIcon} {content.type.toUpperCase()} · {creatorName}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#444",
              fontSize: "20px",
              cursor: "pointer",
              padding: "0 0 0 16px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* 콘텐츠 */}
        <div style={{ padding: "28px 24px" }}>

          {/* 썸네일 미리보기 */}
          <div style={{
            backgroundColor: "#0A0003",
            border: "1px solid #1A0008",
            height: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
          }}>
            <span style={{ fontSize: "56px", filter: "blur(2px)", opacity: 0.4 }}>
              {typeIcon}
            </span>
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "8px",
            }}>
              <span style={{ fontSize: "24px" }}>🔒</span>
              <span style={{ color: "#555", fontSize: "12px", letterSpacing: "2px" }}>
                LOCKED
              </span>
            </div>
          </div>

          <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.7, marginBottom: "24px" }}>
            {content.description}
          </p>

          {step === "success" ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <p style={{ fontSize: "40px", marginBottom: "16px" }}>✦</p>
              <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "3px", marginBottom: "8px" }}>
                PAYMENT CONFIRMED
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "22px", marginBottom: "12px" }}>
                Content unlocked.
              </p>
              {txHash && (
                <p style={{ color: "#444", fontSize: "11px", wordBreak: "break-all", marginBottom: "20px" }}>
                  tx: {txHash.slice(0, 20)}...
                </p>
              )}
              <button
                onClick={onClose}
                style={{
                  backgroundColor: "#C0001A",
                  color: "#F5F0F0",
                  border: "none",
                  padding: "14px 32px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                VIEW CONTENT
              </button>
            </div>

          ) : step === "error" ? (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <p style={{ color: "#C0001A", fontSize: "14px", marginBottom: "16px" }}>
                Transaction failed. Please try again.
              </p>
              <button
                onClick={() => setStep("confirm")}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #C0001A",
                  color: "#C0001A",
                  padding: "12px 28px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                RETRY
              </button>
            </div>

          ) : !isConnected ? (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#555", fontSize: "13px", marginBottom: "20px" }}>
                Connect your wallet to purchase
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ConnectButton />
              </div>
            </div>

          ) : step === "processing" || isPending ? (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{
                width: "40px",
                height: "40px",
                border: "2px solid #1A0008",
                borderTop: "2px solid #C0001A",
                borderRadius: "50%",
                margin: "0 auto 16px",
                animation: "spin 1s linear infinite",
              }} />
              <p style={{ color: "#555", fontSize: "13px", letterSpacing: "2px" }}>
                PROCESSING...
              </p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>

          ) : (
            <>
              {/* 결제 토큰 선택 */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "10px" }}>
                  PAY WITH
                </p>
                <div style={{ display: "flex", gap: "8px" }}>
                  {(["ETH", "USDT"] as PaymentToken[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setToken(t)}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: token === t ? "#1A0008" : "transparent",
                        border: `1px solid ${token === t ? "#C0001A" : "#1A0008"}`,
                        color: token === t ? "#F5F0F0" : "#555",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* 가격 표시 */}
              <div style={{
                backgroundColor: "#0A0003",
                border: "1px solid #1A0008",
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}>
                <span style={{ color: "#555", fontSize: "12px", letterSpacing: "1px" }}>TOTAL</span>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#F5F0F0" }}>
                    {token === "ETH" ? `${ethPrice} ETH` : `$${usdPrice} USDT`}
                  </p>
                  <p style={{ color: "#444", fontSize: "11px" }}>on Base Network</p>
                </div>
              </div>

              {/* 구매 버튼 */}
              <button
                onClick={handlePay}
                style={{
                  width: "100%",
                  backgroundColor: "#C0001A",
                  color: "#F5F0F0",
                  border: "none",
                  padding: "16px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                PAY {token === "ETH" ? `${ethPrice} ETH` : `$${usdPrice} USDT`}
              </button>

              <p style={{ color: "#333", fontSize: "11px", textAlign: "center", marginTop: "12px" }}>
                Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
