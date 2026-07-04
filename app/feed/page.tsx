"use client";

import { imgSrc } from "../lib/basePath";

import { useLang } from "../components/LangProvider";
import { t } from "../lib/i18n";

import { useState } from "react";
import Navbar from "../components/Navbar";
import PurchaseModal from "../components/PurchaseModal";
import { ContentItem } from "../lib/content";

type PostType = "FREE" | "PAID";

interface Post {
  id: number;
  creatorId: number;
  creator: string;
  category: string;
  preview: string;
  title: string;
  content: string | null;
  date: string;
  type: PostType;
  likes: number;
  hasImage: boolean;
  price: number | null;
}

const posts: Post[] = [
  {
    id: 1,
    creatorId: 1,
    creator: "Aria Nova",
    category: "Art & Illustration",
    preview: "✦", image: "/content/thumb_1.jpg",
    title: "Behind the scenes — new collection",
    content: "Today I want to share the entire process behind my latest collection. Starting from initial sketches to final digital renders, every step has been a journey of discovery...",
    date: "Jun 15, 2026",
    type: "FREE",
    likes: 284,
    hasImage: true,
    price: null,
  },
  {
    id: 2,
    creatorId: 3,
    creator: "Luna Craft",
    category: "Photography",
    preview: "◈", image: "/content/thumb_8.jpg",
    title: "Golden hour series — Iceland",
    content: "Three weeks in Iceland chasing the perfect light. This series is the result of 400+ hours of waiting, hiking, and freezing...",
    date: "Jun 14, 2026",
    type: "FREE",
    likes: 512,
    hasImage: true,
    price: null,
  },
  {
    id: 3,
    creatorId: 2,
    creator: "Echo Veil",
    category: "Music & Audio",
    preview: "♪", image: "/content/thumb_20.jpg",
    title: "Exclusive track — Midnight Drift",
    content: null,
    date: "Jun 13, 2026",
    type: "PAID",
    likes: 198,
    hasImage: false,
    price: 5,
  },
  {
    id: 4,
    creatorId: 4,
    creator: "Nyx Studio",
    category: "Digital Art",
    preview: "⬡", image: "/content/thumb_10.jpg",
    title: "Concept art drop — Project Aether",
    content: "First look at the world of Project Aether. These are early concept pieces exploring the visual language of a world where technology and nature have merged...",
    date: "Jun 12, 2026",
    type: "FREE",
    likes: 376,
    hasImage: true,
    price: null,
  },
  {
    id: 5,
    creatorId: 6,
    creator: "Sol Cipher",
    category: "Video & Film",
    preview: "▶", image: "/content/thumb_14.jpg",
    title: "Director's cut — The Waiting Room",
    content: null,
    date: "Jun 11, 2026",
    type: "PAID",
    likes: 445,
    hasImage: false,
    price: 12,
  },
  {
    id: 6,
    creatorId: 5,
    creator: "Vex Origins",
    category: "Writing",
    preview: "✒", image: "/content/thumb_26.jpg",
    title: "Chapter 12 — The Hollow City",
    content: "The city had been silent for three days before anyone noticed. Not the usual silence of early morning or late night, but something deeper...",
    date: "Jun 10, 2026",
    type: "FREE",
    likes: 167,
    hasImage: false,
    price: null,
  },
];

function PostCard({
  post,
  onPurchase,
  lang,
}: {
  post: Post;
  onPurchase: (item: ContentItem) => void;
  lang: string;
}) {
  const [liked, setLiked] = useState(false);
  const isLocked = post.type === "PAID";

  const handleBuy = () => {
    onPurchase({
      id: post.id,
      creatorId: post.creatorId,
      type: "image",
      title: post.title,
      description: `Exclusive content by ${post.creator}`,
      price: post.price,
      isFree: false,
      thumbnail: post.preview,
      date: post.date,
    });
  };

  return (
    <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid #1A0008", marginBottom: "2px" }}>
      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "20px 24px 16px",
        borderBottom: "1px solid #1A0008",
      }}>
        <a
          href={`/creator/${post.creatorId}`}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "var(--border)",
            border: "1px solid #2A0010",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          {post.preview}
        </a>
        <div style={{ flex: 1 }}>
          <a href={`/creator/${post.creatorId}`} style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "14px", color: "var(--text-primary)", marginBottom: "2px" }}>{post.creator}</p>
          </a>
          <p style={{ fontSize: "11px", color: "var(--text-faint)", letterSpacing: "1px" }}>{post.category.toUpperCase()}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "var(--text-faint)", fontSize: "12px" }}>{post.date}</span>
          <span style={{
            fontSize: "10px",
            letterSpacing: "1px",
            padding: "3px 8px",
            border: `1px solid ${post.type === "FREE" ? "var(--text-ghost)" : "var(--accent)"}`,
            color: post.type === "FREE" ? "var(--text-dim)" : "var(--accent)",
          }}>
            {post.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px" }}>
        <h3 style={{
          fontFamily: "Georgia, serif",
          fontSize: "20px",
          fontWeight: "normal",
          marginBottom: "12px",
          color: "var(--text-primary)",
        }}>
          {post.title}
        </h3>

        {isLocked ? (
          <div style={{ position: "relative" }}>
            <div style={{
              backgroundColor: "var(--bg-deep)",
              border: "1px solid #1A0008",
              padding: "24px",
              filter: "blur(3px)",
              userSelect: "none",
              color: "var(--text-faint)",
              fontSize: "14px",
              lineHeight: 1.8,
            }}>
              This content is locked. Subscribe or purchase to access exclusive content from {post.creator}.
            </div>
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              backgroundColor: "rgba(10,0,3,0.7)",
            }}>
              <p style={{ color: "var(--text-dim)", fontSize: "13px" }}>
                {post.price !== null ? lang === "ko" ? `$${post.price}에 구매` : `Buy for $${post.price}` : lang === "ko" ? "구독자 전용" : "Subscribers only"}
              </p>
              {post.price !== null ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={handleBuy}
                    style={{
                      backgroundColor: "var(--accent)",
                      color: "var(--text-primary)",
                      border: "none",
                      padding: "10px 22px",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    BUY · ${post.price}
                  </button>
                  <a
                    href={`/creator/${post.creatorId}`}
                    style={{
                      border: "1px solid #1A0008",
                      color: "var(--text-dim)",
                      padding: "10px 18px",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textDecoration: "none",
                    }}
                  >
                    SUBSCRIBE
                  </a>
                </div>
              ) : (
                <a
                  href={`/creator/${post.creatorId}`}
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--text-primary)",
                    padding: "10px 22px",
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textDecoration: "none",
                  }}
                >
                  SUBSCRIBE TO UNLOCK
                </a>
              )}
            </div>
          </div>
        ) : (
          <div>
            {post.hasImage && (
              <div style={{
                backgroundColor: "var(--bg-deep)",
                border: "1px solid #1A0008",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                fontSize: "48px",
                color: "var(--border)",
              }}>
                {post.preview}
              </div>
            )}
            <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8 }}>
              {post.content}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        padding: "16px 24px",
        borderTop: "1px solid #1A0008",
        display: "flex",
        alignItems: "center",
        gap: "24px",
      }}>
        <button
          onClick={() => setLiked(!liked)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "transparent",
            border: "none",
            color: liked ? "var(--accent)" : "var(--text-faint)",
            fontSize: "13px",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ fontSize: "16px" }}>{liked ? "♥" : "♡"}</span>
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>
        <a
          href={`/creator/${post.creatorId}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--text-faint)",
            fontSize: "13px",
            textDecoration: "none",
          }}
        >
          <span>→ View creator</span>
        </a>
      </div>
    </div>
  );
}

export default function FeedPage() {
  const { lang } = useLang();
  const [activeFilter, setActiveFilter] = useState<"All" | "Free" | "Paid">("All");
  const [purchaseItem, setPurchaseItem] = useState<ContentItem | null>(null);

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "Free") return post.type === "FREE";
    if (activeFilter === "Paid") return post.type === "PAID";
    return true;
  });

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      {purchaseItem && (
        <PurchaseModal item={purchaseItem} onClose={() => setPurchaseItem(null)} />
      )}

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            YOUR FEED
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: "normal" }}>
            Latest from creators
          </h1>
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
          {(["All", "Free", "Paid"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: "8px 18px",
                backgroundColor: activeFilter === filter ? "var(--accent)" : "transparent",
                border: `1px solid ${activeFilter === filter ? "var(--accent)" : "var(--border)"}`,
                color: activeFilter === filter ? "var(--text-primary)" : "var(--text-dim)",
                fontSize: "12px",
                letterSpacing: "1px",
                cursor: "pointer",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <p style={{ color: "var(--text-faint)", fontSize: "13px", marginBottom: "24px" }}>
          {filteredPosts.length} {t(lang, "feed.posts")}
        </p>

        <div>
          {filteredPosts.map((post) => (
            <PostCard lang={lang} key={post.id} post={post} onPurchase={setPurchaseItem} />
          ))}
        </div>
      </div>
    </main>
  );
}