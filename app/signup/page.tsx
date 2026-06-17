"use client";

import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"fan" | "creator">("fan");

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* 네비게이션 */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        borderBottom: "1px solid #1A0005",
      }}>
        <a href="/" style={{
          fontSize: "22px",
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          color: "#C0001A",
          letterSpacing: "5px",
          textDecoration: "none",
        }}>
          VINUS
        </a>
        <a href="/login" style={{
          color: "#666",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "1px",
        }}>
          Already have an account? Log in →
        </a>
      </nav>

      {/* 회원가입 폼 */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px",
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <p style={{
            color: "#C0001A",
            fontSize: "11px",
            letterSpacing: "5px",
            marginBottom: "16px",
          }}>
            JOIN VINUS
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "40px",
            fontWeight: "normal",
            marginBottom: "48px",
          }}>
            Create account
          </h1>

          {/* 역할 선택 */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{
              display: "block",
              color: "#555",
              fontSize: "11px",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}>
              I AM A
            </label>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setRole("fan")}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: role === "fan" ? "#C0001A" : "transparent",
                  border: `1px solid ${role === "fan" ? "#C0001A" : "#1A0008"}`,
                  color: "#F5F0F0",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                FAN
              </button>
              <button
                onClick={() => setRole("creator")}
                style={{
                  flex: 1,
                  padding: "12px",
                  backgroundColor: role === "creator" ? "#C0001A" : "transparent",
                  border: `1px solid ${role === "creator" ? "#C0001A" : "#1A0008"}`,
                  color: "#F5F0F0",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                CREATOR
              </button>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* 이름 */}
            <div>
              <label style={{
                display: "block",
                color: "#555",
                fontSize: "11px",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}>
                NAME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
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

            {/* 이메일 */}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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

            {/* 비밀번호 */}
            <div>
              <label style={{
                display: "block",
                color: "#555",
                fontSize: "11px",
                letterSpacing: "2px",
                marginBottom: "8px",
              }}>
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
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

            {/* 가입 버튼 */}
            <button
              style={{
                width: "100%",
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
                border: "none",
                padding: "16px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
                marginTop: "8px",
              }}
            >
              CREATE ACCOUNT
            </button>

            <p style={{
              color: "#333",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: 1.6,
            }}>
              By joining you agree to our{" "}
              <a href="#" style={{ color: "#555", textDecoration: "underline" }}>Terms</a>
              {" "}and{" "}
              <a href="#" style={{ color: "#555", textDecoration: "underline" }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}