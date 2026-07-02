"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LangProvider";
import { t } from "../lib/i18n";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"pending" | "verified" | "denied">("verified");
  const { lang } = useLang();

  useEffect(() => {
    const saved = sessionStorage.getItem("vinus-age-verified");
    if (saved !== "true") {
      setStatus("pending");
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem("vinus-age-verified", "true");
    setStatus("verified");
  };

  // Always render children to avoid hydration mismatch
  // Overlay on top when pending/denied
  return (
    <>
      {children}

      {status === "denied" && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--bg-base)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
        }}>
          <div style={{ textAlign: "center", maxWidth: "400px" }}>
            <p style={{ fontSize: "48px", marginBottom: "24px" }}>✦</p>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", marginBottom: "16px" }}>
              {t(lang, "age.denied.label")}
            </p>
            <h1 style={{
              fontFamily: "Georgia, serif",
              fontSize: "24px",
              fontWeight: "normal",
              color: "var(--text-primary)",
              marginBottom: "16px",
              lineHeight: 1.4,
            }}>
              {t(lang, "age.denied.title")}
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
              {t(lang, "age.denied.body")}
            </p>
          </div>
        </div>
      )}

      {status === "pending" && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--bg-base)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          fontFamily: "system-ui, sans-serif",
          padding: "24px",
        }}>
          <a href="/" style={{
            fontFamily: "Georgia, serif",
            fontSize: "28px",
            fontWeight: "bold",
            color: "var(--accent)",
            letterSpacing: "6px",
            textDecoration: "none",
            marginBottom: "40px",
            display: "block",
          }}>
            VINUS
          </a>

          <div style={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border)",
            padding: "44px 36px",
            textAlign: "center",
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "var(--bg-deep)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              margin: "0 auto 28px",
            }}>
              ⚠
            </div>

            <p style={{ color: "var(--accent)", fontSize: "10px", letterSpacing: "4px", marginBottom: "14px" }}>
              {t(lang, "age.label")}
            </p>

            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "24px",
              fontWeight: "normal",
              color: "var(--text-primary)",
              marginBottom: "14px",
              lineHeight: 1.35,
            }}>
              {t(lang, "age.title")}
            </h2>

            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "32px" }}>
              {t(lang, "age.body")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleVerify}
                style={{
                  width: "100%",
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-fg)",
                  border: "none",
                  padding: "16px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {t(lang, "age.yes")}
              </button>
              <button
                onClick={() => setStatus("denied")}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "var(--text-dim)",
                  border: "1px solid var(--border)",
                  padding: "16px",
                  fontSize: "13px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                {t(lang, "age.no")}
              </button>
            </div>

            <p style={{ color: "var(--text-ghost)", fontSize: "11px", marginTop: "20px", lineHeight: 1.6 }}>
              {t(lang, "age.terms")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
