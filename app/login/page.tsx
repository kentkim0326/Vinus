"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
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
            color: "#C0001A",
            fontSize: "11px",
            letterSpacing: "5px",
            marginBottom: "16px",
          }}>
            WELCOME BACK
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "40px",
            fontWeight: "normal",
            marginBottom: "48px",
          }}>
            Log in
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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

            <button style={{
              width: "100%",
              backgroundColor: "#C0001A",
              color: "#F5F0F0",
              border: "none",
              padding: "16px",
              fontSize: "13px",
              letterSpacing: "2px",
              cursor: "pointer",
              marginTop: "8px",
            }}>
              LOG IN
            </button>

            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              margin: "8px 0",
            }}>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#1A0008" }} />
              <span style={{ color: "#333", fontSize: "12px" }}>or</span>
              <div style={{ flex: 1, height: "1px", backgroundColor: "#1A0008" }} />
            </div>

            <a href="/signup" style={{
              display: "block",
              textAlign: "center",
              border: "1px solid #1A0008",
              color: "#666",
              padding: "16px",
              fontSize: "13px",
              letterSpacing: "2px",
              textDecoration: "none",
            }}>
              CREATE ACCOUNT
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}