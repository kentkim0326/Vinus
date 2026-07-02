"use client";

import Navbar from "../components/Navbar";
import { useState, useRef } from "react";

const stats = [
  { label: "SUBSCRIBERS", value: "2,840" },
  { label: "THIS MONTH", value: "$1,240" },
  { label: "TOTAL EARNED", value: "$14,820" },
  { label: "POSTS", value: "48" },
];

const posts = [
  { id: 1, title: "Behind the scenes — new collection", date: "Jun 15, 2026", type: "FREE", views: 1240, revenue: null },
  { id: 2, title: "Exclusive print pack vol.12", date: "Jun 10, 2026", type: "PAID", views: 890, revenue: "$178" },
  { id: 3, title: "Process video: light study series", date: "Jun 5, 2026", type: "PAID", views: 1100, revenue: "$132" },
  { id: 4, title: "Monthly wallpaper — June", date: "Jun 1, 2026", type: "SUB", views: 2200, revenue: null },
];

const CONTENT_TYPES = [
  { key: "image", label: "IMAGE", accept: "image/*", hint: "JPG, PNG, WEBP, GIF" },
  { key: "video", label: "VIDEO", accept: "video/*", hint: "MP4, MOV, WEBM" },
  { key: "audio", label: "AUDIO", accept: "audio/*", hint: "MP3, WAV, FLAC" },
  { key: "text", label: "TEXT", accept: null, hint: "Write directly" },
];

type AccessType = "FREE" | "SUB" | "PAID";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentType, setContentType] = useState("image");
  const [access, setAccess] = useState<AccessType>("FREE");
  const [price, setPrice] = useState("10");
  const [file, setFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "upload" | "posts">("overview");
  const [published, setPublished] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const selectedType = CONTENT_TYPES.find((t) => t.key === contentType)!;

  const handlePublish = () => {
    if (!title.trim()) return;
    setPublished(true);
    setTimeout(() => {
      setPublished(false);
      setTitle("");
      setContent("");
      setFile(null);
      setAccess("FREE");
      setPrice("10");
    }, 3000);
  };

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ padding: "48px", maxWidth: "1000px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            CREATOR DASHBOARD
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: "normal" }}>
            Welcome back, Aria
          </h1>
        </div>

        {/* Tabs */}
        <div style={{
          display: "flex",
          gap: "0",
          marginBottom: "48px",
          borderBottom: "1px solid #1A0008",
        }}>
          {(["overview", "upload", "posts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "12px 24px",
                backgroundColor: "transparent",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "#C0001A" : "transparent"}`,
                color: activeTab === tab ? "#F5F0F0" : "#555",
                fontSize: "12px",
                letterSpacing: "2px",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "48px",
            }}>
              {stats.map((stat) => (
                <div key={stat.label} style={{
                  backgroundColor: "#0D0005",
                  border: "1px solid #1A0008",
                  padding: "28px 24px",
                }}>
                  <p style={{ color: "#555", fontSize: "11px", letterSpacing: "3px", marginBottom: "12px" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "32px", color: "#F5F0F0" }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "normal" }}>
                Recent Posts
              </h2>
              <button
                onClick={() => setActiveTab("upload")}
                style={{
                  backgroundColor: "#C0001A",
                  color: "#F5F0F0",
                  border: "none",
                  padding: "10px 20px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                + NEW POST
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {posts.map((post) => (
                <div key={post.id} style={{
                  backgroundColor: "#0D0005",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div>
                    <p style={{ fontSize: "15px", marginBottom: "4px" }}>{post.title}</p>
                    <p style={{ color: "#555", fontSize: "12px" }}>{post.date}</p>
                  </div>
                  <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <span style={{ color: "#555", fontSize: "12px" }}>{post.views.toLocaleString()} views</span>
                    {post.revenue && (
                      <span style={{ color: "#4ABF8A", fontSize: "12px" }}>{post.revenue}</span>
                    )}
                    <span style={{
                      fontSize: "11px",
                      letterSpacing: "1px",
                      padding: "4px 10px",
                      border: `1px solid ${post.type === "FREE" ? "#333" : post.type === "SUB" ? "#666" : "#C0001A"}`,
                      color: post.type === "FREE" ? "#555" : post.type === "SUB" ? "#888" : "#C0001A",
                    }}>
                      {post.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload */}
        {activeTab === "upload" && (
          <div style={{ maxWidth: "640px" }}>
            {published ? (
              <div style={{
                textAlign: "center",
                padding: "80px 0",
              }}>
                <p style={{ fontSize: "48px", marginBottom: "20px" }}>✦</p>
                <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "4px", marginBottom: "12px" }}>
                  PUBLISHED
                </p>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: "normal" }}>
                  Your post is live.
                </h2>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "Georgia, serif", fontSize: "28px", fontWeight: "normal", marginBottom: "36px" }}>
                  New Post
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                  {/* Content type */}
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "10px" }}>
                      CONTENT TYPE
                    </label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {CONTENT_TYPES.map((t) => (
                        <button
                          key={t.key}
                          onClick={() => setContentType(t.key)}
                          style={{
                            flex: 1,
                            padding: "10px 4px",
                            backgroundColor: contentType === t.key ? "#1A0008" : "transparent",
                            border: `1px solid ${contentType === t.key ? "#C0001A" : "#1A0008"}`,
                            color: contentType === t.key ? "#F5F0F0" : "#555",
                            fontSize: "10px",
                            letterSpacing: "1.5px",
                            cursor: "pointer",
                          }}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                      TITLE
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Post title"
                      style={{
                        width: "100%",
                        backgroundColor: "#0D0005",
                        border: "1px solid #1A0008",
                        color: "#F5F0F0",
                        padding: "14px 16px",
                        fontSize: "14px",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  {/* File upload (not text type) */}
                  {contentType !== "text" && (
                    <div>
                      <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                        UPLOAD FILE
                      </label>
                      <input
                        ref={fileRef}
                        type="file"
                        accept={selectedType.accept ?? undefined}
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                        style={{ display: "none" }}
                      />
                      <div
                        onClick={() => fileRef.current?.click()}
                        style={{
                          border: `1px dashed ${file ? "#C0001A" : "#1A0008"}`,
                          padding: "40px",
                          textAlign: "center",
                          cursor: "pointer",
                          backgroundColor: file ? "#0A0003" : "transparent",
                          transition: "all 0.2s",
                        }}
                      >
                        {file ? (
                          <>
                            <p style={{ color: "#C0001A", fontSize: "14px", marginBottom: "4px" }}>✦ {file.name}</p>
                            <p style={{ color: "#444", fontSize: "12px" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          </>
                        ) : (
                          <>
                            <p style={{ color: "#444", fontSize: "14px", marginBottom: "8px" }}>
                              Drop file here or click to upload
                            </p>
                            <p style={{ color: "#333", fontSize: "12px" }}>{selectedType.hint}</p>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Description / text content */}
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                      {contentType === "text" ? "CONTENT" : "DESCRIPTION"}
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder={contentType === "text" ? "Write your post..." : "Describe this post for subscribers..."}
                      rows={contentType === "text" ? 10 : 4}
                      style={{
                        width: "100%",
                        backgroundColor: "#0D0005",
                        border: "1px solid #1A0008",
                        color: "#F5F0F0",
                        padding: "14px 16px",
                        fontSize: "14px",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                        fontFamily: "system-ui, sans-serif",
                      }}
                    />
                  </div>

                  {/* Access control */}
                  <div>
                    <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "12px" }}>
                      ACCESS
                    </label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {([
                        { key: "FREE", label: "FREE", desc: "Anyone" },
                        { key: "SUB", label: "SUBSCRIBERS", desc: "Paid members only" },
                        { key: "PAID", label: "PAID", desc: "One-time purchase" },
                      ] as const).map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => setAccess(opt.key)}
                          style={{
                            flex: 1,
                            padding: "12px 8px",
                            backgroundColor: access === opt.key ? (opt.key === "FREE" ? "#1A0008" : "#C0001A") : "transparent",
                            border: `1px solid ${access === opt.key ? "#C0001A" : "#1A0008"}`,
                            color: "#F5F0F0",
                            fontSize: "10px",
                            letterSpacing: "1.5px",
                            cursor: "pointer",
                            textAlign: "center",
                          }}
                        >
                          <div style={{ marginBottom: "4px" }}>{opt.label}</div>
                          <div style={{ color: access === opt.key ? "rgba(255,255,255,0.6)" : "#444", fontSize: "9px" }}>
                            {opt.desc}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price (only for PAID) */}
                  {access === "PAID" && (
                    <div>
                      <label style={{ display: "block", color: "#555", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
                        PRICE (USD)
                      </label>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <span style={{ color: "#C0001A", fontFamily: "Georgia, serif", fontSize: "20px" }}>$</span>
                        <input
                          type="number"
                          min="1"
                          max="999"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          style={{
                            width: "120px",
                            backgroundColor: "#0D0005",
                            border: "1px solid #C0001A",
                            color: "#F5F0F0",
                            padding: "14px 16px",
                            fontSize: "18px",
                            outline: "none",
                            fontFamily: "Georgia, serif",
                          }}
                        />
                        <div style={{ color: "#444", fontSize: "12px" }}>
                          <p>Buyers pay in ETH, USDT, or USDC</p>
                          <p style={{ color: "#333", fontSize: "11px", marginTop: "4px" }}>on Base Network</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Publish */}
                  <button
                    onClick={handlePublish}
                    disabled={!title.trim()}
                    style={{
                      width: "100%",
                      backgroundColor: title.trim() ? "#C0001A" : "#0D0005",
                      color: title.trim() ? "#F5F0F0" : "#333",
                      border: `1px solid ${title.trim() ? "transparent" : "#1A0008"}`,
                      padding: "18px",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      cursor: title.trim() ? "pointer" : "not-allowed",
                      marginTop: "8px",
                      transition: "all 0.2s",
                    }}
                  >
                    PUBLISH POST
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Posts */}
        {activeTab === "posts" && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", fontWeight: "normal" }}>
                All Posts
              </h2>
              <button
                onClick={() => setActiveTab("upload")}
                style={{
                  backgroundColor: "#C0001A",
                  color: "#F5F0F0",
                  border: "none",
                  padding: "10px 24px",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                }}
              >
                + NEW POST
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {posts.map((post) => (
                <div key={post.id} style={{
                  backgroundColor: "#0D0005",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <div>
                    <p style={{ fontSize: "15px", marginBottom: "4px" }}>{post.title}</p>
                    <p style={{ color: "#555", fontSize: "12px" }}>{post.date}</p>
                  </div>
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <span style={{ color: "#555", fontSize: "12px" }}>{post.views.toLocaleString()} views</span>
                    {post.revenue && (
                      <span style={{ color: "#4ABF8A", fontSize: "12px" }}>{post.revenue}</span>
                    )}
                    <span style={{
                      fontSize: "11px",
                      letterSpacing: "1px",
                      padding: "4px 10px",
                      border: `1px solid ${post.type === "FREE" ? "#333" : post.type === "SUB" ? "#666" : "#C0001A"}`,
                      color: post.type === "FREE" ? "#555" : post.type === "SUB" ? "#888" : "#C0001A",
                    }}>
                      {post.type}
                    </span>
                    <button style={{
                      backgroundColor: "transparent",
                      border: "1px solid #1A0008",
                      color: "#555",
                      padding: "6px 14px",
                      fontSize: "11px",
                      letterSpacing: "1px",
                      cursor: "pointer",
                    }}>
                      EDIT
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
