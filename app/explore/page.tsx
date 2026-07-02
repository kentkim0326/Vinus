"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";
import { creators } from "../lib/data";

const categories = ["All", "Art & Illustration", "Music & Audio", "Photography", "Digital Art", "Writing", "Video & Film"];


export default function ExplorePage() {
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
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ padding: "48px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
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
          <p style={{ color: "#555", fontSize: "15px" }}>
            {creators.length} creators · Find your next favorite
          </p>
        </div>

        <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search creators..."
            style={{
              flex: 1,
              minWidth: "200px",
              backgroundColor: "#0D0005",
              border: "1px solid #1A0008",
              color: "#F5F0F0",
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
                  backgroundColor: sort === s ? "#C0001A" : "transparent",
                  border: `1px solid ${sort === s ? "#C0001A" : "#1A0008"}`,
                  color: sort === s ? "#F5F0F0" : "#555",
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
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 16px",
                backgroundColor: activeCategory === cat ? "#C0001A" : "transparent",
                border: `1px solid ${activeCategory === cat ? "#C0001A" : "#1A0008"}`,
                color: activeCategory === cat ? "#F5F0F0" : "#555",
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

        <p style={{ color: "#444", fontSize: "13px", marginBottom: "24px" }}>
          {filtered.length} creators found
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
                    backgroundColor: "#0D0005",
                    border: "1px solid #1A0008",
                    padding: "32px 28px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#C0001A";
                    e.currentTarget.style.backgroundColor = "#110008";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1A0008";
                    e.currentTarget.style.backgroundColor = "#0D0005";
                  }}
                >
                  <div style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "#1A0008",
                    border: "1px solid #2A0010",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}>
                    {creator.preview}
                  </div>
                  <h3 style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "18px",
                    fontWeight: "normal",
                    color: "#F5F0F0",
                    marginBottom: "4px",
                  }}>
                    {creator.name}
                  </h3>
                  <p style={{
                    color: "#C0001A",
                    fontSize: "11px",
                    letterSpacing: "1.5px",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}>
                    {creator.category}
                  </p>
                  <p style={{
                    color: "#555",
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
                    <span style={{ color: "#444", fontSize: "12px" }}>
                      {creator.subscribers.toLocaleString()} subscribers
                    </span>
                    <span style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "1px" }}>
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
            <p style={{ fontSize: "16px", marginBottom: "8px", color: "#444" }}>No creators found</p>
            <p style={{ fontSize: "13px", color: "#333" }}>Try a different search or category</p>
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
        <span style={{ fontFamily: "Georgia, serif", color: "#C0001A", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "#2A2A2A", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}