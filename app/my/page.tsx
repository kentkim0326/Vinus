"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

const subscriptions = [
  {
    id: 1,
    creator: "Aria Nova",
    category: "Art & Illustration",
    preview: "✦",
    tier: "Supporter",
    price: 5,
    nextBilling: "Jul 15, 2026",
    status: "active",
  },
  {
    id: 3,
    creator: "Luna Craft",
    category: "Photography",
    preview: "◈",
    tier: "Adventurer",
    price: 20,
    nextBilling: "Jul 12, 2026",
    status: "active",
  },
  {
    id: 6,
    creator: "Sol Cipher",
    category: "Video & Film",
    preview: "▶",
    tier: "Watcher",
    price: 10,
    nextBilling: "Jul 8, 2026",
    status: "active",
  },
];

const transactions = [
  { id: 1, creator: "Aria Nova", amount: 5, date: "Jun 15, 2026", coin: "USDT", status: "confirmed" },
  { id: 2, creator: "Luna Craft", amount: 20, date: "Jun 12, 2026", coin: "BTC", status: "confirmed" },
  { id: 3, creator: "Sol Cipher", amount: 10, date: "Jun 8, 2026", coin: "USDT", status: "confirmed" },
  { id: 4, creator: "Aria Nova", amount: 5, date: "May 15, 2026", coin: "USDT", status: "confirmed" },
  { id: 5, creator: "Luna Craft", amount: 20, date: "May 12, 2026", coin: "BTC", status: "confirmed" },
];

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<"subscriptions" | "transactions" | "settings">("subscriptions");

  const totalMonthly = subscriptions.reduce((sum, s) => sum + s.price, 0);

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        {/* 헤더 */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "48px",
        }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "#1A0008",
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
            <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "4px" }}>
              MY ACCOUNT
            </p>
            <h1 style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              fontWeight: "normal",
            }}>
              John Fan
            </h1>
          </div>
        </div>

        {/* 요약 카드 */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "12px",
          marginBottom: "48px",
        }}>
          {[
            { label: "SUBSCRIPTIONS", value: subscriptions.length },
            { label: "MONTHLY SPEND", value: `$${totalMonthly}` },
            { label: "TOTAL PAID", value: `$${transactions.reduce((s, t) => s + t.amount, 0)}` },
          ].map((stat) => (
            <div key={stat.label} style={{
              backgroundColor: "#0D0005",
              border: "1px solid #1A0008",
              padding: "20px",
            }}>
              <p style={{ color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                {stat.label}
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "28px" }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* 탭 */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid #1A0008",
          marginBottom: "32px",
        }}>
          {(["subscriptions", "transactions", "settings"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "#C0001A" : "transparent"}`,
                color: activeTab === tab ? "#F5F0F0" : "#555",
                fontSize: "12px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 구독 탭 */}
        {activeTab === "subscriptions" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {subscriptions.map((sub) => (
                <div key={sub.id} style={{
                  backgroundColor: "#0D0005",
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
                    backgroundColor: "#1A0008",
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
                    <p style={{ color: "#555", fontSize: "12px" }}>{sub.tier} · ${sub.price}/mo</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "#444", fontSize: "12px", marginBottom: "4px" }}>
                      Next billing
                    </p>
                    <p style={{ fontSize: "13px" }}>{sub.nextBilling}</p>
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginLeft: "16px" }}>
                    <a href={`/creator/${sub.id}`} style={{
                      padding: "6px 14px",
                      border: "1px solid #1A0008",
                      color: "#555",
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
                      color: "#555",
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
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
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

        {/* 결제 내역 탭 */}
        {activeTab === "transactions" && (
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {transactions.map((tx) => (
                <div key={tx.id} style={{
                  backgroundColor: "#0D0005",
                  border: "1px solid #1A0008",
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{ fontSize: "14px", marginBottom: "4px" }}>{tx.creator}</p>
                    <p style={{ color: "#555", fontSize: "12px" }}>{tx.date}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{
                      color: "#555",
                      fontSize: "12px",
                      padding: "3px 8px",
                      border: "1px solid #1A0008",
                    }}>
                      {tx.coin}
                    </span>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "16px" }}>
                      ${tx.amount}
                    </span>
                    <span style={{
                      color: "#2A7A2A",
                      fontSize: "11px",
                      letterSpacing: "1px",
                    }}>
                      ✓ {tx.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 설정 탭 */}
        {activeTab === "settings" && (
          <div style={{ maxWidth: "480px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>
                  DISPLAY NAME
                </label>
                <input
                  type="text"
                  defaultValue="John Fan"
                  style={{
                    width: "100%",
                    backgroundColor: "#0D0005",
                    border: "1px solid #1A0008",
                    color: "#F5F0F0",
                    padding: "14px 16px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>
                  EMAIL
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  style={{
                    width: "100%",
                    backgroundColor: "#0D0005",
                    border: "1px solid #1A0008",
                    color: "#F5F0F0",
                    padding: "14px 16px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <button style={{
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
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