"use client";

import Navbar from "../components/Navbar";
import { useState } from "react";

const posts = [
  {
    id: 1,
    creator: "Aria Nova",
    category: "Art & Illustration",
    preview: "✦",
    title: "Behind the scenes — new collection",
    content: "Today I want to share the entire process behind my latest collection. Starting from initial sketches to final digital renders, every step has been a journey of discovery...",
    date: "Jun 15, 2026",
    type: "FREE",
    likes: 284,
    hasImage: true,
  },
  {
    id: 2,
    creator: "Luna Craft",
    category: "Photography",
    preview: "◈",
    title: "Golden hour series — Iceland",
    content: "Three weeks in Iceland chasing the perfect light. This series is the result of 400+ hours of waiting, hiking, and freezing...",
    date: "Jun 14, 2026",
    type: "FREE",
    likes: 512,
    hasImage: true,
  },
  {
    id: 3,
    creator: "Echo Veil",
    category: "Music & Audio",
    preview: "♪",
    title: "Exclusive track — Midnight Drift",
    content: null,
    date: "Jun 13, 2026",
    type: "PAID",
    likes: 198,
    hasImage: false,
  },
  {
    id: 4,
    creator: "Nyx Studio",
    category: "Digital Art",
    preview: "⬡",
    title: "Concept art drop — Project Aether",
    content: "First look at the world of Project Aether. These are early concept pieces exploring the visual language of a world where technology and nature have merged...",
    date: "Jun 12, 2026",
    type: "FREE",
    likes: 376,
    hasImage: true,
  },
  {
    id: 5,
    creator: "Sol Cipher",
    category: "Video & Film",
    preview: "▶",
    title: "Director's cut — The Waiting Room",
    content: null,
    date: "Jun 11, 2026",
    type: "PAID",
    likes: 445,
    hasImage: false,
  },
  {
    id: 6,
    creator: "Vex Origins",
    category: "Writing",
    preview: "✒",
    title: "Chapter 12 — The Hollow City",
    content: "The city had been silent for three days before anyone noticed. Not the usual silence of early morning or late night, but something deeper...",
    date: "Jun 10, 2026",
    type: "FREE",
    likes: 167,
    hasImage: false,
  },
];

function PostCard({ post }: { post: typeof posts[0] }) {
  const [liked, setLiked] = useState(false);
  const isLocked = post.type === "PAID";

  return (
    <div style={{
      backgroundColor: "#0D0005",
      border: "1px solid #1A0008",
      marginBottom: "2px",
    }}>
      {/* 크리에이터 헤더 */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "20px 24px 16px",
        borderBottom: "1px solid #1A0008",
      }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#1A0008",
          border: "1px solid #2A0010",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          flexShrink: 0,
        }}>
          {post.preview}
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "14px", color: "#F5F0F0", marginBottom: "2px" }}>{post.creator}</p>
          <p style={{ fontSize: "11px", color: "#444", letterSpacing: "1px" }}>{post.category.toUpperCase()}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "#444", fontSize: "12px" }}>{post.date}</span>
          <span style={{
            fontSize: "10px",
            letterSpacing: "1px",
            padding: "3px 8px",
            border: `1px solid ${post.type === "FREE" ? "#333" : "#C0001A"}`,
            color: post.type === "FREE" ? "#555" : "#C0001A",
          }}>
            {post.type}
          </span>
        </div>
      </div>

      {/* 콘텐츠 */}
      <div style={{ padding: "24px" }}>
        <h3 style={{
          fontFamily: "Georgia, serif",
          fontSize: "20px",
          fontWeight: "normal",
          marginBottom: "12px",
          color: "#F5F0F0",
        }}>
          {post.title}
        </h3>

        {isLocked ? (
          /* 잠긴 콘텐츠 */
          <div style={{
            backgroundColor: "#0A0003",
            border: "1px solid #1A0008",
            padding: "40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "linear-gradient(to bottom, transparent, #0A0003)",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ color: "#333", fontSize: "14px", marginBottom: "20px" }}>
                This content is for subscribers only
              </p>
              <button style={{
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
                border: "none",
                padding: "12px 28px",
                fontSize: "12px",
                letterSpacing: "2px",
                cursor: "pointer",
              }}>
                SUBSCRIBE TO UNLOCK
              </button>
            </div>
          </div>
        ) : (
          /* 공개 콘텐츠 */
          <div>
            {post.hasImage && (
              <div style={{
                backgroundColor: "#0A0003",
                border: "1px solid #1A0008",
                height: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                fontSize: "48px",
                color: "#1A0008",
              }}>
                {post.preview}
              </div>
            )}
            <p style={{
              color: "#777",
              fontSize: "15px",
              lineHeight: 1.8,
            }}>
              {post.content}
            </p>
          </div>
        )}
      </div>

      {/* 하단 액션 */}
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
            color: liked ? "#C0001A" : "#444",
            fontSize: "13px",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span style={{ fontSize: "16px" }}>{liked ? "♥" : "♡"}</span>
          <span>{post.likes + (liked ? 1 : 0)}</span>
        </button>
        <button style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "transparent",
          border: "none",
          color: "#444",
          fontSize: "13px",
          cursor: "pointer",
          padding: 0,
        }}>
          <span>💬</span>
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
}

export default function FeedPage() {
  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* 네비게이션 */}
      <Navbar />

      <div style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "48px 24px",
      }}>
        <div style={{ marginBottom: "40px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            YOUR FEED
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "36px",
            fontWeight: "normal",
          }}>
            Latest from creators
          </h1>
        </div>

        {/* 필터 */}
        <div style={{
          display: "flex",
          gap: "8px",
          marginBottom: "32px",
        }}>
          {["All", "Free", "Paid"].map((filter) => (
            <button
              key={filter}
              style={{
                padding: "8px 18px",
                backgroundColor: filter === "All" ? "#C0001A" : "transparent",
                border: `1px solid ${filter === "All" ? "#C0001A" : "#1A0008"}`,
                color: filter === "All" ? "#F5F0F0" : "#555",
                fontSize: "12px",
                letterSpacing: "1px",
                cursor: "pointer",
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 포스트 목록 */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}