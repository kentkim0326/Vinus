"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<"fan" | "creator">("fan");

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
    }}>
      <Navbar />

      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <p style={{
            color: "var(--accent)",
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

          <div style={{ marginBottom: "24px" }}>
            <label style={{
              display: "block",
              color: "var(--text-dim)",
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
                  backgroundColor: role === "fan" ? "var(--accent)" : "transparent",
                  border: `1px solid ${role === "fan" ? "var(--accent)" : "var(--border)"}`,
                  color: "var(--text-primary)",
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
                  backgroundColor: role === "creator" ? "var(--accent)" : "transparent",
                  border: `1px solid ${role === "creator" ? "var(--accent)" : "var(--border)"}`,
                  color: "var(--text-primary)",
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
            <div>
              <label style={{
                display: "block",
                color: "var(--text-dim)",
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
              <label style={{
                display: "block",
                color: "var(--text-dim)",
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
              <label style={{
                display: "block",
                color: "var(--text-dim)",
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
            <button style={{
              width: "100%",
              backgroundColor: "var(--accent)",
              color: "var(--text-primary)",
              border: "none",
              padding: "16px",
              fontSize: "13px",
              letterSpacing: "2px",
              cursor: "pointer",
              marginTop: "8px",
            }}>
              CREATE ACCOUNT
            </button>
            <p style={{
              color: "var(--text-ghost)",
              fontSize: "12px",
              textAlign: "center",
              lineHeight: 1.6,
            }}>
              By joining you agree to our{" "}
              <a href="#" style={{ color: "var(--text-dim)", textDecoration: "underline" }}>Terms</a>
              {" "}and{" "}
              <a href="#" style={{ color: "var(--text-dim)", textDecoration: "underline" }}>Privacy Policy</a>
            </p>
            <p style={{
              color: "var(--text-faint)",
              fontSize: "13px",
              textAlign: "center",
            }}>
              Already have an account?{" "}
              <a href="/login" style={{ color: "var(--accent)", textDecoration: "none" }}>Log in</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}