"use client";

import { href, imgSrc } from "../lib/basePath";

import { useLang } from "./LangProvider";
import VinusLogo from "./VinusLogo";

export default function Footer() {
  const { lang } = useLang();
  const isKo = lang === "ko";

  return (
    <footer style={{
      padding: "32px 48px",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "12px",
    }}>
      <a href={href("/")} style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <VinusLogo size={24} />
        <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "14px" }}>
          VINUS
        </span>
        <span style={{ color: "var(--text-ghost)", fontSize: "10px", letterSpacing: "1px", marginLeft: "8px" }}>
          AI-POWERED · WEB3 · GLOBAL
        </span>
      </a>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <a href={href("/about")} style={{ color: "var(--text-ghost)", fontSize: "11px", textDecoration: "none", letterSpacing: "1px" }}>
          {isKo ? "소개" : "ABOUT"}
        </a>
        <a href={href("/become-a-creator")} style={{ color: "var(--text-ghost)", fontSize: "11px", textDecoration: "none", letterSpacing: "1px" }}>
          {isKo ? "크리에이터 되기" : "BECOME A CREATOR"}
        </a>
        <a href={href("/roadmap")} style={{ color: "var(--text-ghost)", fontSize: "11px", textDecoration: "none", letterSpacing: "1px" }}>
          {isKo ? "로드맵" : "ROADMAP"}
        </a>
        <a href={href("/explore")} style={{ color: "var(--text-ghost)", fontSize: "11px", textDecoration: "none", letterSpacing: "1px" }}>
          {isKo ? "탐색" : "EXPLORE"}
        </a>
      </div>
      <span style={{ color: "var(--text-ultra)", fontSize: "11px" }}>
        © 2026 Vinus. {isKo ? "모든 권리 보유." : "All rights reserved."}
      </span>
    </footer>
  );
}
