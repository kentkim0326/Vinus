"use client";

import { useState } from "react";
import { useLang } from "./LangProvider";
import { t } from "../lib/i18n";
import { ContentItem } from "../lib/content";

type Filter = "all" | "image" | "video" | "audio" | "text";

const TYPE_COLOR: Record<string, string> = {
  image: "#5AAFF0",
  video: "#F07070",
  audio: "#5ADFA0",
  text:  "#F0C060",
};

function ContentCard({
  item,
  onSelect,
  lang,
}: {
  item: ContentItem;
  onSelect: (item: ContentItem) => void;
  lang: string;
}) {
  const [hovered, setHovered] = useState(false);
  const isLocked = !item.isFree;

  return (
    <div
      onClick={() => onSelect(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "var(--bg-card-hover)" : "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        cursor: "pointer",
        transition: "all 0.2s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: "160px",
        backgroundColor: "var(--bg-deep)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
        position: "relative",
        borderBottom: "1px solid var(--border)",
      }}>
        <span style={{ filter: isLocked ? "blur(2px)" : "none", opacity: isLocked ? 0.4 : 1 }}>
          {item.thumbnail}
        </span>

        {/* Type badge */}
        <span style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: TYPE_COLOR[item.type] ?? "#888",
          color: "#0A0A0A",
          fontSize: "9px",
          fontWeight: "bold",
          letterSpacing: "1.5px",
          padding: "3px 7px",
        }}>
          {item.type.toUpperCase()}
        </span>

        {/* Duration / resolution */}
        {(item.duration || item.resolution) && (
          <span style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "var(--text-faint)",
            fontSize: "10px",
            letterSpacing: "1px",
            padding: "3px 7px",
          }}>
            {item.duration ?? item.resolution}
          </span>
        )}

        {/* Lock overlay */}
        {isLocked && (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ fontSize: "20px", opacity: 0.6 }}>🔒</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "16px" }}>
        <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "6px", lineHeight: 1.4 }}>
          {item.title}
        </p>
        <p style={{
          fontSize: "12px",
          color: "var(--text-muted)",
          marginBottom: "14px",
          lineHeight: 1.5,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {item.description}
        </p>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "12px",
          borderTop: "1px solid var(--border)",
        }}>
          <span style={{ color: "var(--text-faint)", fontSize: "11px" }}>{item.date}</span>
          {item.isFree ? (
            <span style={{ color: "var(--type-audio)", fontSize: "11px", letterSpacing: "1px" }}>
              {t(lang as any, "common.free")}
            </span>
          ) : item.price !== null ? (
            <span style={{ color: "var(--accent)", fontSize: "12px", fontFamily: "Georgia, serif" }}>
              ${item.price}
            </span>
          ) : (
            <span style={{ color: "var(--text-dim)", fontSize: "11px", letterSpacing: "1px" }}>
              {t(lang as any, "common.subscribers")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContentGallery({
  items,
  onSelect,
}: {
  items: ContentItem[];
  onSelect: (item: ContentItem) => void;
}) {
  const { lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all",   label: lang === "ko" ? "전체" : "ALL" },
    { key: "image", label: lang === "ko" ? "이미지" : "IMAGES" },
    { key: "video", label: lang === "ko" ? "영상" : "VIDEOS" },
    { key: "audio", label: lang === "ko" ? "오디오" : "AUDIO" },
    { key: "text",  label: lang === "ko" ? "텍스트" : "TEXT" },
  ];

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <div>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              padding: "7px 16px",
              backgroundColor: filter === f.key ? "var(--accent)" : "transparent",
              border: `1px solid ${filter === f.key ? "var(--accent)" : "var(--border)"}`,
              color: filter === f.key ? "var(--accent-fg)" : "var(--text-dim)",
              fontSize: "11px",
              letterSpacing: "1.5px",
              cursor: "pointer",
            }}
          >
            {f.label}
          </button>
        ))}
        <span style={{ color: "var(--text-ghost)", fontSize: "12px", alignSelf: "center", marginLeft: "8px" }}>
          {filtered.length} {lang === "ko" ? "개" : "items"}
        </span>
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "12px",
      }}>
        {filtered.map((item) => (
          <ContentCard key={item.id} item={item} onSelect={onSelect} lang={lang} />
        ))}
      </div>
    </div>
  );
}
