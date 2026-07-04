"use client";

import { href, imgSrc } from "./lib/basePath";

import Navbar from "./components/Navbar";
import { useLang } from "./components/LangProvider";
import { t } from "./lib/i18n";

export default function NotFound() {
  const { lang } = useLang();
  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{
        maxWidth: "560px",
        margin: "0 auto",
        padding: "120px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(80px, 15vw, 140px)",
          color: "var(--border)",
          lineHeight: 1,
          marginBottom: "8px",
          letterSpacing: "-4px",
        }}>
          404
        </p>

        <p style={{
          color: "var(--accent)",
          fontSize: "11px",
          letterSpacing: "5px",
          marginBottom: "20px",
        }}>
          PAGE NOT FOUND
        </p>

        <h1 style={{
          fontFamily: "Georgia, serif",
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "normal",
          marginBottom: "16px",
          color: "var(--text-primary)",
        }}>
          {t(lang, "creator.notfound")}
        </h1>

        <p style={{
          color: "var(--text-dim)",
          fontSize: "15px",
          lineHeight: 1.8,
          marginBottom: "56px",
        }}>
          The page you're looking for may have been moved,<br />
          deleted, or never existed.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={href("/")} style={{
            backgroundColor: "var(--accent)",
            color: "var(--text-primary)",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>
            GO HOME
          </a>
          <a href={href("/explore")} style={{
            border: "1px solid #1A0008",
            color: "var(--text-dim)",
            padding: "14px 32px",
            textDecoration: "none",
            fontSize: "13px",
            letterSpacing: "2px",
          }}>
            EXPLORE CREATORS
          </a>
        </div>
      </div>
    </main>
  );
}
