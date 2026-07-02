"use client";

import { useEffect, useState } from "react";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"pending" | "verified" | "denied">("pending");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem("vinus-age-verified");
    if (saved === "true") setStatus("verified");
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem("vinus-age-verified", "true");
    setStatus("verified");
  };

  const handleDeny = () => {
    setStatus("denied");
  };

  // Don't block SSR
  if (!mounted || status === "verified") return <>{children}</>;

  if (status === "denied") {
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
        <div style={{ textAlign: "center", maxWidth: "400px" }}>
          <p style={{ fontSize: "48px", marginBottom: "24px" }}>✦</p>
          <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "16px" }}>
            ACCESS RESTRICTED
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "28px",
            fontWeight: "normal",
            color: "var(--text-primary)",
            marginBottom: "16px",
          }}>
            You must be 18 or older to access Vinus.
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
            This platform contains content intended for adults only.
          </p>
        </div>
      </div>
    );
  }

  // Pending — show age gate
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
      <div style={{
        width: "100%",
        maxWidth: "440px",
        textAlign: "center",
      }}>
        {/* Logo */}
        <a href="/" style={{
          display: "inline-block",
          fontFamily: "Georgia, serif",
          fontSize: "28px",
          fontWeight: "bold",
          color: "var(--accent)",
          letterSpacing: "6px",
          textDecoration: "none",
          marginBottom: "48px",
        }}>
          VINUS
        </a>

        {/* Card */}
        <div style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
          padding: "48px 40px",
        }}>
          <div style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            backgroundColor: "var(--bg-deep)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            margin: "0 auto 32px",
          }}>
            ⚠
          </div>

          <p style={{
            color: "var(--accent)",
            fontSize: "10px",
            letterSpacing: "4px",
            marginBottom: "16px",
          }}>
            AGE VERIFICATION
          </p>

          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "26px",
            fontWeight: "normal",
            color: "var(--text-primary)",
            marginBottom: "16px",
            lineHeight: 1.3,
          }}>
            Are you 18 years of age or older?
          </h2>

          <p style={{
            color: "var(--text-muted)",
            fontSize: "14px",
            lineHeight: 1.7,
            marginBottom: "36px",
          }}>
            Vinus contains content created for adults. You must be at least 18 years old to enter.
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
              YES, I AM 18 OR OLDER
            </button>
            <button
              onClick={handleDeny}
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
              NO, I AM UNDER 18
            </button>
          </div>

          <p style={{
            color: "var(--text-ghost)",
            fontSize: "11px",
            marginTop: "24px",
            lineHeight: 1.6,
          }}>
            By entering you confirm you are of legal age in your jurisdiction and agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
