"use client";

import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";

import Navbar from "../components/Navbar";
import { useState } from "react";
import { creators } from "../lib/data";

const categories = ["all", "Art & Illustration", "Music & Audio", "Photography", "Digital Art", "Writing", "Video & Film"];


export default function ExplorePage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"popular" | "newest">("popular");

  const filtered = creators
    .filter((c) => activeCategory === "All" || c.category === activeCategory)
    .filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => sort === "popular" ? b.subscribers - a.subscribers : b.id - a.id);

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
            DISCOVER
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "48px",
            fontWeight: "normal",
            marginBottom: "8px",
          }}>
            Explore Creators
          </h1>
          <p style={{ color: "var(--text-dim)", fontSize: "15px" }}>
            {creators.length} {t(lang, "explore.sub")}
          </p>
        </div>

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
              border: "1px solid #1A0008",
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
                  color: sort === s ? "var(--text-primary)" : "var(--text-dim)",
                  fontSize: "12px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(categories.indexOf(cat) === 0 ? ALL_KEY : cat)}
              style={{
                padding: "8px 16px",
                backgroundColor: (categories.indexOf(cat) === 0 ? activeCategory === ALL_KEY : activeCategory === cat) ? "var(--accent)" : "transparent",
                border: `1px solid ${(categories.indexOf(cat) === 0 ? activeCategory === ALL_KEY : activeCategory === cat) ? "var(--accent)" : "var(--border)"}`,
                color: (categories.indexOf(cat) === 0 ? activeCategory === ALL_KEY : activeCategory === cat) ? "var(--text-primary)" : "var(--text-dim)",
                fontSize: "12px",
                letterSpacing: "1px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {cat}
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
                    border: "1px solid #1A0008",
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
                    flexShrink: 0,
                  }}>
                    <img src={creator.avatar} alt={creator.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <h3 style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "18px",
                    fontWeight: "normal",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}>
                    {creator.name}
                  </h3>
                  <p style={{
                    color: "var(--accent)",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}>
                    {creator.category}
                  </p>
                  <p style={{
                    color: "var(--text-dim)",
                    fontSize: "13px",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                  }}>
                    {creator.bio}
                  </p>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid #1A0008",
                  }}>
                    <span style={{ color: "var(--text-faint)", fontSize: "12px" }}>
                      {creator.subscribers.toLocaleString()} subscribers
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
            <p style={{ fontSize: "16px", marginBottom: "8px", color: "var(--text-faint)" }}>No {t(lang, "explore.found")}</p>
            <p style={{ fontSize: "13px", color: "var(--text-ghost)" }}>{t(lang, "explore.empty.sub")}</p>
          </div>
        )}
      </div>

      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid #150005",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "80px",
      }}>
        <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}