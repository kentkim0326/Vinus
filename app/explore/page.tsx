"use client";

import { imgSrc } from "../lib/basePath";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useDebounce } from "../lib/useDebounce";
import { creators } from "../lib/data";
import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";

const CATEGORIES = [
  "Art & Illustration",
  "Music & Audio",
  "Photography",
  "Digital Art",
  "Writing",
  "Video & Film",
];

export default function ExplorePage() {
  const { lang } = useLang();
  const isKo = lang === "ko";

  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [sort, setSort] = useState<"popular" | "newest">("popular");

  const filtered = creators
    .filter((c) => activeCategory === "all" || c.category === activeCategory)
    .filter((c) =>
      c.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      c.category.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .sort((a, b) => sort === "popular" ? b.subscribers - a.subscribers : b.id - a.id);

  const categoryLabels: Record<string, string> = isKo ? {
    "all": "전체",
    "Art & Illustration": "아트 & 일러스트",
    "Music & Audio": "음악 & 오디오",
    "Photography": "사진",
    "Digital Art": "디지털 아트",
    "Writing": "글쓰기",
    "Video & Film": "영상 & 영화",
  } : {
    "all": "All",
    "Art & Illustration": "Art & Illustration",
    "Music & Audio": "Music & Audio",
    "Photography": "Photography",
    "Digital Art": "Digital Art",
    "Writing": "Writing",
    "Video & Film": "Video & Film",
  };

  const allCategories = ["all", ...CATEGORIES];

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ padding: "48px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            {t(lang, "explore.label")}
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "48px", fontWeight: "normal", marginBottom: "8px" }}>
            {t(lang, "explore.title")}
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "15px" }}>
            {creators.length} {t(lang, "explore.sub")}
          </p>
        </div>

        {/* Search + sort */}
        <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t(lang, "explore.search")}
            style={{
              flex: 1,
              minWidth: "200px",
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-primary)",
              padding: "12px 16px",
              fontSize: "14px",
              outline: "none",
            }}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            {(["popular", "newest"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                style={{
                  padding: "12px 20px",
                  backgroundColor: sort === s ? "var(--accent)" : "transparent",
                  border: `1px solid ${sort === s ? "var(--accent)" : "var(--border)"}`,
                  color: sort === s ? "var(--accent-fg)" : "var(--text-dim)",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                }}
              >
                {s === "popular" ? t(lang, "explore.popular") : t(lang, "explore.newest")}
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                backgroundColor: activeCategory === cat ? "var(--accent)" : "transparent",
                border: `1px solid ${activeCategory === cat ? "var(--accent)" : "var(--border)"}`,
                color: activeCategory === cat ? "var(--accent-fg)" : "var(--text-dim)",
                fontSize: "12px",
                letterSpacing: "1px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>

        <p style={{ color: "var(--text-faint)", fontSize: "13px", marginBottom: "24px" }}>
          {filtered.length} {t(lang, "explore.found")}
        </p>

        {filtered.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {filtered.map((creator) => (
              <a
                key={creator.id}
                href={`/creator/${creator.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    padding: "32px 28px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.backgroundColor = "var(--bg-card-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  }}
                >
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    marginBottom: "20px",
                  }}>
                    <img loading="lazy" src={imgSrc(creator.avatar)} alt={creator.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "18px", fontWeight: "normal", color: "var(--text-primary)", marginBottom: "4px" }}>
                    {creator.name}
                  </h3>
                  <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "1.5px", marginBottom: "12px", textTransform: "uppercase" }}>
                    {categoryLabels[creator.category] ?? creator.category}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.6, marginBottom: "24px" }}>
                    {((typeof creator.bio === "string") ? creator.bio : (creator.bio as Record<string, string>)[lang] ?? (creator.bio as Record<string, string>).en)}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--text-faint)", fontSize: "12px" }}>
                      {creator.subscribers.toLocaleString()} {t(lang, "creator.subscribers")}
                    </span>
                    <span style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "1px" }}>
                      {creator.tier}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: "48px", marginBottom: "16px" }}>✦</p>
            <p style={{ fontSize: "16px", marginBottom: "8px", color: "var(--text-dim)" }}>
              {t(lang, "explore.empty")}
            </p>
            <p style={{ fontSize: "13px", color: "var(--text-ghost)" }}>
              {t(lang, "explore.empty.sub")}
            </p>
          </div>
        )}
      </div>

            <Footer />
    </main>
  );
}
