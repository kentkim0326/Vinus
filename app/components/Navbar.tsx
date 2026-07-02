"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const navStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 48px",
    borderBottom: "1px solid var(--border)",
    position: "sticky",
    top: 0,
    backgroundColor: "var(--nav-bg)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    zIndex: 100,
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a href="/" style={{
        fontSize: "22px",
        fontFamily: "Georgia, serif",
        fontWeight: "bold",
        color: "var(--accent)",
        letterSpacing: "5px",
        textDecoration: "none",
      }}>
        VINUS
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }} className="desktop-nav">
        <a href="/explore" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>Explore</a>
        <a href="/feed" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>Feed</a>
        <a href="/login" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>Log in</a>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text-dim)",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "15px",
            flexShrink: 0,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.color = "var(--text-dim)";
          }}
        >
          {isDark ? "☀" : "☽"}
        </button>

        <a href="/signup" style={{
          backgroundColor: "var(--accent)",
          color: "var(--accent-fg)",
          padding: "8px 22px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "2px",
        }}>JOIN</a>
      </div>

      {/* Mobile hamburger */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {/* Theme toggle (mobile) */}
        <button
          onClick={toggle}
          className="mobile-menu-btn"
          style={{
            backgroundColor: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text-dim)",
            width: "34px",
            height: "34px",
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          {isDark ? "☀" : "☽"}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "var(--text-primary)",
            fontSize: "24px",
            cursor: "pointer",
            padding: "4px",
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "64px",
          left: 0,
          right: 0,
          backgroundColor: "var(--nav-bg)",
          borderBottom: "1px solid var(--border)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: 99,
        }} className="mobile-menu">
          <a href="/explore" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>Explore</a>
          <a href="/feed" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>Feed</a>
          <a href="/login" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>Log in</a>
          <a href="/signup" onClick={() => setMenuOpen(false)} style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-fg)",
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
