"use client";

import { useState } from "react";
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { parseEther } from "viem";
import type { CreatorPost } from "../lib/data";

// Vinus treasury address on Base (replace with real address before mainnet)
const VINUS_TREASURY = "0x000000000000000000000000000000000000dEaD" as const;

type TxStatus = "idle" | "pending" | "success" | "error";

export function PurchaseModal({
  post,
  creatorName,
  onClose,
}: {
  post: CreatorPost;
  creatorName: string;
  onClose: () => void;
}) {
  const { isConnected } = useAccount();
  const [txStatus, setTxStatus] = useState<TxStatus>("idle");
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>();

  const { sendTransactionAsync } = useSendTransaction();
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash: txHash });

  const handlePay = async () => {
    if (!post.price) return;
    setTxStatus("pending");
    try {
      const hash = await sendTransactionAsync({
        to: VINUS_TREASURY,
        value: parseEther(post.price),
      });
      setTxHash(hash);
      setTxStatus("success");
    } catch {
      setTxStatus("error");
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        backgroundColor: "rgba(0,0,0,0.88)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#0D0005",
          border: "1px solid #C0001A",
          padding: "40px",
          maxWidth: "460px",
          width: "100%",
        }}
      >
        {txStatus === "success" ? (
          /* ── Success state ── */
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              backgroundColor: "#1A0008", border: "2px solid #C0001A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "28px", margin: "0 auto 24px",
              boxShadow: "0 0 24px rgba(192,0,26,0.3)",
            }}>
              ✦
            </div>
            <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "4px", marginBottom: "12px" }}>
              PAYMENT CONFIRMED
            </p>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "normal", marginBottom: "16px" }}>
              Content unlocked.
            </h2>
            <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
              {post.title}
            </p>
            {txHash && (
              <a
                href={`https://sepolia.basescan.org/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "1px", textDecoration: "none" }}
              >
                VIEW ON BASESCAN ↗
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                display: "block", width: "100%", marginTop: "28px",
                backgroundColor: "#C0001A", color: "#F5F0F0", border: "none",
                padding: "14px", fontSize: "13px", letterSpacing: "2px", cursor: "pointer",
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          /* ── Purchase state ── */
          <>
            <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "4px", marginBottom: "20px" }}>
              PURCHASE CONTENT
            </p>
            <h2 style={{
              fontFamily: "Georgia, serif", fontSize: "20px",
              fontWeight: "normal", marginBottom: "8px", lineHeight: 1.4,
            }}>
              {post.title}
            </h2>
            <p style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>by {creatorName}</p>
            <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.7, marginBottom: "28px" }}>
              {post.description}
            </p>

            {/* Price box */}
            <div style={{
              backgroundColor: "#0A0003", border: "1px solid #1A0008",
              padding: "20px", marginBottom: "24px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ color: "#555", fontSize: "11px", letterSpacing: "1px" }}>USD VALUE</span>
                <span style={{ color: "#F5F0F0", fontSize: "16px" }}>${post.priceUSD}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#555", fontSize: "11px", letterSpacing: "1px" }}>PAY WITH ETH</span>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#C0001A" }}>
                  {post.price} ETH
                </span>
              </div>
              <p style={{ color: "#333", fontSize: "11px", marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #1A0008" }}>
                Base Network (Sepolia testnet) · Gas fees apply
              </p>
            </div>

            {!isConnected ? (
              /* Not connected — show ConnectButton */
              <div>
                <p style={{ color: "#555", fontSize: "12px", marginBottom: "16px", textAlign: "center" }}>
                  Connect your wallet to continue
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ConnectButton label="CONNECT WALLET" showBalance={false} chainStatus="name" />
                </div>
              </div>
            ) : txStatus === "pending" || isConfirming ? (
              /* Pending */
              <div style={{
                backgroundColor: "#0A0003", border: "1px solid #1A0008",
                padding: "20px", textAlign: "center",
              }}>
                <p style={{ color: "#C0001A", fontSize: "12px", letterSpacing: "2px", marginBottom: "8px" }}>
                  ⏳ PROCESSING...
                </p>
                <p style={{ color: "#555", fontSize: "12px", lineHeight: 1.6 }}>
                  {txHash ? "Waiting for confirmation on Base..." : "Confirm in your wallet"}
                </p>
              </div>
            ) : txStatus === "error" ? (
              /* Error */
              <div>
                <p style={{ color: "#C0001A", fontSize: "13px", textAlign: "center", marginBottom: "16px" }}>
                  Transaction failed or rejected.
                </p>
                <button
                  onClick={() => setTxStatus("idle")}
                  style={{
                    width: "100%", backgroundColor: "#C0001A", color: "#F5F0F0",
                    border: "none", padding: "14px", fontSize: "13px",
                    letterSpacing: "2px", cursor: "pointer",
                  }}
                >
                  TRY AGAIN
                </button>
              </div>
            ) : (
              /* Ready to pay */
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  onClick={handlePay}
                  style={{
                    backgroundColor: "#C0001A", color: "#F5F0F0", border: "none",
                    padding: "16px", fontSize: "13px", letterSpacing: "2px",
                    cursor: "pointer", width: "100%",
                  }}
                >
                  PAY {post.price} ETH · UNLOCK CONTENT
                </button>
                <button
                  onClick={onClose}
                  style={{
                    backgroundColor: "transparent", color: "#555",
                    border: "1px solid #1A0008", padding: "14px",
                    fontSize: "12px", letterSpacing: "1px",
                    cursor: "pointer", width: "100%",
                  }}
                >
                  CANCEL
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
