"use client";

import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";

import { useState } from "react";
import Navbar from "../components/Navbar";

const subscriptions = [
  { id: 1, creator: "Aria Nova", category: "Art & Illustration", preview: "✦", tier: "Supporter", price: 5, nextBilling: "Jul 15, 2026", status: "active" },
  { id: 3, creator: "Luna Craft", category: "Photography", preview: "◈", tier: "Adventurer", price: 20, nextBilling: "Jul 12, 2026", status: "active" },
  { id: 6, creator: "Sol Cipher", category: "Video & Film", preview: "▶", tier: "Watcher", price: 10, nextBilling: "Jul 8, 2026", status: "active" },
];

const purchases = [
  { id: 1, creator: "Echo Veil", title: "Midnight Drift", type: "AUDIO", amount: 5, date: "Jun 13, 2026", coin: "USDT", tx: "0x3f8a...c12e" },
  { id: 2, creator: "Luna Craft", title: "Iceland — Golden Hour Series", type: "IMAGE", amount: 25, date: "Jun 14, 2026", coin: "USDC", tx: "0x7b2d...f45a" },
  { id: 3, creator: "Sol Cipher", title: "The Waiting Room — Director's Cut", type: "VIDEO", amount: 12, date: "Jun 11, 2026", coin: "ETH", tx: "0x1a9c...d77f" },
];

const transactions = [
  { id: 1, creator: "Aria Nova", desc: "Supporter · Monthly", amount: 5, date: "Jun 15, 2026", coin: "USDT", status: "confirmed" },
  { id: 2, creator: "Luna Craft", desc: "Adventurer · Monthly", amount: 20, date: "Jun 12, 2026", coin: "USDC", status: "confirmed" },
  { id: 3, creator: "Sol Cipher", desc: "Watcher · Monthly", amount: 10, date: "Jun 8, 2026", coin: "USDT", status: "confirmed" },
  { id: 4, creator: "Echo Veil", desc: "Midnight Drift · Purchase", amount: 5, date: "Jun 13, 2026", coin: "USDT", status: "confirmed" },
  { id: 5, creator: "Luna Craft", desc: "Iceland Series · Purchase", amount: 25, date: "Jun 14, 2026", coin: "USDC", status: "confirmed" },
  { id: 6, creator: "Sol Cipher", desc: "Director's Cut · Purchase", amount: 12, date: "Jun 11, 2026", coin: "ETH", status: "confirmed" },
];

const TYPE_COLOR: Record<string, string> = {
  IMAGE: "#4A8FBF",
  VIDEO: "#BF4A4A",
  AUDIO: "#4ABF8A",
  TEXT: "#BF9A4A",
};

export default function MyPage() {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState<"subscriptions" | "purchases" | "history" | "settings">("subscriptions");

  const totalMonthly = subscriptions.reduce((sum, s) => sum + s.price, 0);
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "48px" }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "var(--border)",
            border: "2px solid #C0001A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            flexShrink: 0,
          }}>
            👤
          </div>
          <div>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "4px" }}>
              MY ACCOUNT
            </p>
            <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal" }}>
              John Fan
            </h1>
          </div>
        </div>

        {/* Summary */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "12px",
          marginBottom: "48px",
        }}>
          {[
            { label: "SUBSCRIPTIONS", value: subscriptions.length },
            { label: "CONTENT OWNED", value: purchases.length },
            { label: "MONTHLY SPEND", value: `$${totalMonthly}` },
            { label: "TOTAL PAID", value: `$${totalSpent}` },
          ].map((stat) => (
            <div key={stat.label} style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid #1A0008",
              padding: "20px",
            }}>
              <p style={{ color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                {stat.label}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "28px" }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #1A0008", marginBottom: "32px" }}>
          {(["subscriptions", "purchases", "history", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "12px 20px",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "var(--accent)" : "transparent"}`,
                color: activeTab === tab ? "var(--text-primary)" : "var(--text-dim)",
                fontSize: "11px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Subscriptions */}
        {activeTab === "subscriptions" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {subscriptions.map((sub) => (
                <div key={sub.id} style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid #1A0008",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}>
                  <div style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "var(--border)",
                    border: "1px solid #C0001A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}>
                    {sub.preview}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "15px", marginBottom: "4px" }}>{sub.creator}</p>
                    <p style={{ color: "var(--text-dim)", fontSize: "12px" }}>{sub.tier} · ${sub.price}/mo</p>
                  </div>
                  <div style={{ textAlign: "right", marginRight: "16px" }}>
                    <p style={{ color: "var(--text-faint)", fontSize: "11px", marginBottom: "2px" }}>{lang === "ko" ? "다음 결제일" : "Next billing"}</p>
                    <p style={{ fontSize: "13px" }}>{sub.nextBilling}</p>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <a href={`/creator/${sub.id}`} style={{
                      padding: "6px 14px",
                      border: "1px solid #1A0008",
                      color: "var(--text-dim)",
                      fontSize: "11px",
                      letterSpacing: "1px",
                      textDecoration: "none",
                    }}>
                      VIEW
                    </a>
                    <button style={{
                      padding: "6px 14px",
                      border: "1px solid #1A0008",
                      backgroundColor: "transparent",
                      color: "var(--text-dim)",
                      fontSize: "11px",
                      letterSpacing: "1px",
                      cursor: "pointer",
                    }}>
                      CANCEL
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px" }}>
              <a href="/explore" style={{
                display: "inline-block",
                backgroundColor: "var(--accent)",
                color: "var(--text-primary)",
                padding: "12px 28px",
                textDecoration: "none",
                fontSize: "12px",
                letterSpacing: "2px",
              }}>
                + DISCOVER MORE CREATORS
              </a>
            </div>
          </div>
        )}

        {/* Purchases (single-item content) */}
        {activeTab === "purchases" && (
          <div>
            <p style={{ color: "var(--text-dim)", fontSize: "13px", marginBottom: "24px" }}>
              Content you've purchased individually with crypto.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {purchases.map((p) => (
                <div key={p.id} style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid #1A0008",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}>
                  <span style={{
                    padding: "4px 8px",
                    backgroundColor: TYPE_COLOR[p.type] + "22",
                    border: `1px solid ${TYPE_COLOR[p.type]}44`,
                    color: TYPE_COLOR[p.type],
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    flexShrink: 0,
                  }}>
                    {p.type}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", marginBottom: "4px" }}>{p.title}</p>
                    <p style={{ color: "var(--text-dim)", fontSize: "12px" }}>{p.creator} · {p.date}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: "var(--text-primary)", marginBottom: "2px" }}>
                      ${p.amount}
                    </p>
                    <p style={{ color: "var(--text-ghost)", fontSize: "10px", letterSpacing: "1px" }}>{p.coin} · {p.tx}</p>
                  </div>
                  <button style={{
                    padding: "8px 16px",
                    backgroundColor: "var(--accent)",
                    border: "none",
                    color: "var(--text-primary)",
                    fontSize: "11px",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}>
                    ACCESS
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History */}
        {activeTab === "history" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {transactions.map((tx) => (
                <div key={tx.id} style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid #1A0008",
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{ fontSize: "14px", marginBottom: "4px" }}>{tx.creator}</p>
                    <p style={{ color: "var(--text-dim)", fontSize: "12px" }}>{tx.desc} · {tx.date}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{
                      color: "var(--text-dim)",
                      fontSize: "11px",
                      padding: "3px 8px",
                      border: "1px solid #1A0008",
                    }}>
                      {tx.coin}
                    </span>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>${tx.amount}</span>
                    <span style={{ color: "var(--success)", fontSize: "11px", letterSpacing: "1px" }}>
                      ✓ {tx.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", padding: "16px 24px", backgroundColor: "var(--bg-card)", border: "1px solid #1A0008", display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "var(--text-dim)", fontSize: "13px" }}>{lang === "ko" ? "총 결제 금액" : "Total paid (all time)"}</span>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "18px", color: "var(--accent)" }}>${totalSpent}</span>
            </div>
          </div>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <div style={{ maxWidth: "480px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                  DISPLAY NAME
                </label>
                <input
                  type="text"
                  defaultValue="John Fan"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid #1A0008",
                    color: "var(--text-primary)",
                    padding: "14px 16px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid #1A0008",
                    color: "var(--text-primary)",
                    padding: "14px 16px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                  WALLET ADDRESS
                </label>
                <input
                  type="text"
                  placeholder="Connect wallet to auto-fill"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid #1A0008",
                    color: "var(--text-dim)",
                    padding: "14px 16px",
                    fontSize: "13px",
                    outline: "none",
                    boxSizing: "border-box",
                    fontFamily: "monospace",
                  }}
                />
              </div>
              <button style={{
                backgroundColor: "var(--accent)",
                color: "var(--text-primary)",
                border: "none",
                padding: "14px",
                fontSize: "12px",
                letterSpacing: "2px",
                cursor: "pointer",
                marginTop: "8px",
              }}>
                SAVE CHANGES
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
