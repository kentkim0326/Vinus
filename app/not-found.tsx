"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

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
      </nav>

      {/* 404 콘텐츠 */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease",
      }}>
        <div style={{ maxWidth: "480px" }}>
          <p style={{
            fontFamily: "Georgia, serif",
            fontSize: "120px",
            color: "",
            lineHeight: 1,
            marginBottom: "8px",
            letterSpacing: "-4px",
          }}>
            404
          </p>

          <p style={{
            color: "#C0001A",
            fontSize: "11px",
            letterSpacing: "5px",
            marginBottom: "20px",
          }}>
            PAGE NOT FOUND
          </p>

          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "36px",
            fontWeight: "normal",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}>
            Lost in the dark.
          </h1>

          <p style={{
            color: "#555",
            fontSize: "15px",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "320px", margin: "0 auto" }}>
            <a href="/" style={{
              backgroundColor: "#C0001A",
              color: "#F5F0F0",
              padding: "16px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
              display: "block",
            }}>
              BACK TO HOME
            </a>
            <a href="/explore" style={{
              border: "1px solid #1A0008",
              color: "#555",
              padding: "16px",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
              display: "block",
            }}>
              EXPLORE CREATORS
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}