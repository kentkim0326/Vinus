"use client";

import { useState } from "react";
import WalletButton from "./WalletButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 48px",
      borderBottom: "1px solid #1A0005",
      position: "sticky",
      top: 0,
      backgroundColor: "#0A0A0A",
      zIndex: 100,
    }}>
      {/* 로고 */}
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

      {/* 데스크탑 메뉴 */}
      <div style={{
        display: "flex",
        gap: "24px",
        alignItems: "center",
      }}
        className="desktop-nav"
      >
        <a href="/explore" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>Explore</a>
        <a href="/feed" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>Feed</a>
        <a href="/login" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>Log in</a>
        <WalletButton compact />
        <a href="/signup" style={{
          backgroundColor: "#C0001A",
          color: "#F5F0F0",
          padding: "8px 22px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "2px",
        }}>JOIN</a>
      </div>

      {/* 햄버거 버튼 (모바일) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#F5F0F0",
          fontSize: "24px",
          cursor: "pointer",
          padding: "4px",
          display: "none",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "64px",
          left: 0,
          right: 0,
          backgroundColor: "#0A0A0A",
          borderBottom: "1px solid #1A0005",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 99,
        }}
          className="mobile-menu"
        >
          <a href="/explore" onClick={() => setMenuOpen(false)} style={{ color: "#888", textDecoration: "none", fontSize: "16px" }}>Explore</a>
          <a href="/feed" onClick={() => setMenuOpen(false)} style={{ color: "#888", textDecoration: "none", fontSize: "16px" }}>Feed</a>
          <a href="/login" onClick={() => setMenuOpen(false)} style={{ color: "#888", textDecoration: "none", fontSize: "16px" }}>Log in</a>
          <a href="/signup" onClick={() => setMenuOpen(false)} style={{
            backgroundColor: "#C0001A",
            color: "#F5F0F0",
            padding: "14px",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "2px",
            textAlign: "center",
          }}>JOIN</a>
        </div>
      )}
    </nav>
  );
}