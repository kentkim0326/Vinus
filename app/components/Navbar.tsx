"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LangProvider";
import { t } from "../lib/i18n";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { lang } = useLang();
  const isDark = theme === "dark";

  return (
    <nav style={{
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
    }}>
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
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }} className="desktop-nav">
        <a href="/explore" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>
          {t(lang, "nav.explore")}
        </a>
        <a href="/feed" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>
          {t(lang, "nav.feed")}
        </a>
        <a href="/login" style={{ color: "var(--text-dim)", textDecoration: "none", fontSize: "13px" }}>
          {t(lang, "nav.login")}
        </a>

        {/* Language toggle */}
        <LangToggle />

        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={isDark ? "Light mode" : "Dark mode"}
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
        }}>
          {t(lang, "nav.join")}
        </a>
      </div>

      {/* Mobile right side */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div className="mobile-menu-btn" style={{ display: "none" }}>
          <LangToggle />
        </div>
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
        }}>
          <a href="/explore" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>
            {t(lang, "nav.explore")}
          </a>
          <a href="/feed" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>
            {t(lang, "nav.feed")}
          </a>
          <a href="/login" onClick={() => setMenuOpen(false)} style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "16px" }}>
            {t(lang, "nav.login")}
          </a>
          <a href="/signup" onClick={() => setMenuOpen(false)} style={{
            backgroundColor: "var(--accent)",
            color: "var(--accent-fg)",
            padding: "14px",
            textDecoration: "none",
            fontSize: "14px",
            letterSpacing: "2px",
            textAlign: "center",
          }}>
            {t(lang, "nav.join")}
          </a>
        </div>
      )}
    </nav>
  );
}
