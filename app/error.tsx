"use client";

import { href, imgSrc } from "./lib/basePath";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "var(--bg-base)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      padding: "24px",
    }}>
      <div style={{ textAlign: "center", maxWidth: "480px" }}>
        <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "4px", marginBottom: "16px" }}>
          SOMETHING WENT WRONG
        </p>
        <h2 style={{
          fontFamily: "Georgia, serif",
          fontSize: "32px",
          fontWeight: "normal",
          color: "var(--text-primary)",
          marginBottom: "16px",
        }}>
          An error occurred.
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "40px", lineHeight: 1.7 }}>
          {error.message || "Something unexpected happened. Please try again."}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button
            onClick={reset}
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-fg)",
              border: "none",
              padding: "12px 28px",
              fontSize: "12px",
              letterSpacing: "2px",
              cursor: "pointer",
            }}
          >
            TRY AGAIN
          </button>
          <a href={href("/")} style={{
            border: "1px solid var(--border)",
            color: "var(--text-dim)",
            padding: "12px 28px",
            fontSize: "12px",
            letterSpacing: "2px",
            textDecoration: "none",
          }}>
            GO HOME
          </a>
        </div>
      </div>
    </div>
  );
}
