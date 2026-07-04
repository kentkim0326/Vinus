"use client";

import { useLang } from "./LangProvider";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const { lang } = useLang();
  const pathname = usePathname();
  const isKo = lang === "ko";

  const tabs = [
    { href: "/",        icon: "⌂", label: isKo ? "홈" : "Home" },
    { href: "/explore", icon: "◎", label: isKo ? "탐색" : "Explore" },
    { href: "/feed",    icon: "⊞", label: isKo ? "피드" : "Feed" },
    { href: "/my",      icon: "◉", label: isKo ? "내 계정" : "My" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav style={{
      display: "none",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "var(--nav-bg)",
      borderTop: "1px solid var(--border)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      zIndex: 200,
      paddingBottom: "env(safe-area-inset-bottom)",
    }} className="mobile-bottom-nav">
      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-nav { display: flex !important; }
          body { padding-bottom: 64px; }
        }
      `}</style>
      {tabs.map((tab) => (
        <a
          key={tab.href}
          href={tab.href}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 4px",
            textDecoration: "none",
            color: isActive(tab.href) ? "var(--accent)" : "var(--text-dim)",
            gap: "4px",
            transition: "color 0.2s",
            minHeight: "56px",
          }}
        >
          <span style={{ fontSize: "20px", lineHeight: 1 }}>{tab.icon}</span>
          <span style={{ fontSize: "9px", letterSpacing: "0.5px" }}>{tab.label}</span>
        </a>
      ))}
    </nav>
  );
}
