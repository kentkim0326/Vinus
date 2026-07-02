"use client";

import { useState } from "react";
import { useLang } from "./LangProvider";
import { LANGUAGES } from "../lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        title="Change language"
        style={{
          backgroundColor: "transparent",
          border: "1px solid var(--border)",
          color: "var(--text-dim)",
          height: "34px",
          padding: "0 10px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          cursor: "pointer",
          fontSize: "13px",
          whiteSpace: "nowrap",
        }}
      >
        <span>{current.flag}</span>
        <span style={{ fontSize: "10px", letterSpacing: "1px" }}>
          {current.code.toUpperCase()}
        </span>
        <span style={{ fontSize: "9px", color: "var(--text-ghost)" }}>▾</span>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 200 }}
          />
          {/* Dropdown */}
          <div style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            zIndex: 201,
            minWidth: "160px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}>
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setOpen(false); }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  padding: "11px 16px",
                  backgroundColor: lang === l.code ? "var(--bg-card-hover)" : "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  color: lang === l.code ? "var(--accent)" : "var(--text-muted)",
                  fontSize: "13px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: "16px" }}>{l.flag}</span>
                <span>{l.label}</span>
                {lang === l.code && (
                  <span style={{ marginLeft: "auto", color: "var(--accent)", fontSize: "10px" }}>✦</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
