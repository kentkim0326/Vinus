"use client";

import { useState } from "react";

const stats = [
  { label: "SUBSCRIBERS", value: "2,840" },
  { label: "THIS MONTH", value: "$1,240" },
  { label: "TOTAL EARNED", value: "$14,820" },
  { label: "POSTS", value: "48" },
];

const posts = [
  { id: 1, title: "Behind the scenes — new collection", date: "Jun 15, 2026", type: "FREE", views: 1240 },
  { id: 2, title: "Exclusive print pack vol.12", date: "Jun 10, 2026", type: "PAID", views: 890 },
  { id: 3, title: "Process video: light study series", date: "Jun 5, 2026", type: "PAID", views: 1100 },
  { id: 4, title: "Monthly wallpaper — June", date: "Jun 1, 2026", type: "FREE", views: 2200 },
];

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState<"FREE" | "PAID">("FREE");
  const [activeTab, setActiveTab] = useState<"overview" | "upload" | "posts">("overview");

  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* 네비게이션 */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 48px",
        borderBottom: "1px solid #1A0005",
        position: "sticky",
        top: 0,
        backgroundColor: "#0A0A0A",
        zIndex: 100,
      }}>
        <a href="/" style={{
          fontSize: "22px",
          fontFamily: "Georgia, serif",
          fontWeight: "bold",
          color: "#C0001A",
          letterSpacing: "5px",
          textDecoration: "none",
        }}>
          VINUS
        </a>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="/feed" style={{ color: "#666", textDecoration: "none", fontSize: "13px" }}>Feed</a>
          <span style={{ color: "#F5F0F0", fontSize: "13px" }}>Aria Nova</span>
        </div>
      </nav>

      <div style={{ padding: "48px", maxWidth: "1000px" }}>
        {/* 헤더 */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            CREATOR DASHBOARD
          </p>
          <h1 style={{
            fontFamily: "Georgia, serif",
            fontSize: "40px",
            fontWeight: "normal",
          }}>
            Welcome back, Aria
          </h1>
        </div>

        {/* 탭 */}
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

        {/* 오버뷰 탭 */}
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
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "32px",
                    color: "#F5F0F0",
                  }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* 최근 게시물 */}
            <div>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
                fontWeight: "normal",
                marginBottom: "24px",
              }}>
                Recent Posts
              </h2>
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
                    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                      <span style={{ color: "#555", fontSize: "12px" }}>{post.views.toLocaleString()} views</span>
                      <span style={{
                        fontSize: "11px",
                        letterSpacing: "1px",
                        padding: "4px 10px",
                        border: `1px solid ${post.type === "FREE" ? "#333" : "#C0001A"}`,
                        color: post.type === "FREE" ? "#555" : "#C0001A",
                      }}>
                        {post.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 업로드 탭 */}
        {activeTab === "upload" && (
          <div style={{ maxWidth: "600px" }}>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "28px",
              fontWeight: "normal",
              marginBottom: "36px",
            }}>
              New Post
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* 제목 */}
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>
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

              {/* 내용 */}
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>
                  CONTENT
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write something for your subscribers..."
                  rows={6}
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

              {/* 파일 업로드 */}
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>
                  ATTACH FILE
                </label>
                <div style={{
                  border: "1px dashed #1A0008",
                  padding: "40px",
                  textAlign: "center",
                  cursor: "pointer",
                }}>
                  <p style={{ color: "#444", fontSize: "14px", marginBottom: "8px" }}>
                    Drop files here or click to upload
                  </p>
                  <p style={{ color: "#333", fontSize: "12px" }}>
                    Images, videos, audio, documents
                  </p>
                </div>
              </div>

              {/* 공개 설정 */}
              <div>
                <label style={{
                  display: "block",
                  color: "#555",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}>
                  ACCESS
                </label>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => setPostType("FREE")}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: postType === "FREE" ? "#1A0008" : "transparent",
                      border: `1px solid ${postType === "FREE" ? "#C0001A" : "#1A0008"}`,
                      color: postType === "FREE" ? "#F5F0F0" : "#555",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    FREE
                  </button>
                  <button
                    onClick={() => setPostType("PAID")}
                    style={{
                      flex: 1,
                      padding: "12px",
                      backgroundColor: postType === "PAID" ? "#C0001A" : "transparent",
                      border: `1px solid ${postType === "PAID" ? "#C0001A" : "#1A0008"}`,
                      color: "#F5F0F0",
                      fontSize: "12px",
                      letterSpacing: "2px",
                      cursor: "pointer",
                    }}
                  >
                    PAID ONLY
                  </button>
                </div>
              </div>

              {/* 발행 버튼 */}
              <button style={{
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
                border: "none",
                padding: "16px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
                marginTop: "8px",
              }}>
                PUBLISH POST
              </button>
            </div>
          </div>
        )}

        {/* 게시물 탭 */}
        {activeTab === "posts" && (
          <div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}>
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
                    <span style={{
                      fontSize: "11px",
                      letterSpacing: "1px",
                      padding: "4px 10px",
                      border: `1px solid ${post.type === "FREE" ? "#333" : "#C0001A"}`,
                      color: post.type === "FREE" ? "#555" : "#C0001A",
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