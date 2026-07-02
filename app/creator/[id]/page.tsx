"use client";

import { use, useState } from "react";
import Navbar from "../../components/Navbar";
import { PurchaseModal } from "../../components/PurchaseModal";
import { creators, creatorPosts } from "../../lib/data";
import type { CreatorPost } from "../../lib/data";

const TYPE_ICON: Record<string, string> = {
  image: "🖼",
  video: "▶",
  audio: "♪",
  text: "✒",
};

const ACCESS_LABEL: Record<string, string> = {
  free: "FREE",
  subscription: "SUBSCRIBERS",
  purchase: "BUY",
};

function ContentCard({
  post,
  onPurchase,
  onSubscribe,
}: {
  post: CreatorPost;
  onPurchase: (post: CreatorPost) => void;
  onSubscribe: () => void;
}) {
  const isLocked = post.access !== "free";

  return (
    <div style={{
      backgroundColor: "#0D0005",
      border: "1px solid #1A0008",
      overflow: "hidden",
      transition: "border-color 0.2s",
      cursor: isLocked ? "default" : "pointer",
    }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A0010"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1A0008"; }}
    >
      {/* Thumbnail */}
      <div style={{
        position: "relative",
        height: "180px",
        backgroundColor: "#0A0003",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "52px",
        overflow: "hidden",
      }}>
        {/* blur overlay for locked */}
        {isLocked && (
          <div style={{
            position: "absolute", inset: 0,
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            zIndex: 2,
          }}>
            <span style={{ fontSize: "28px" }}>🔒</span>
            {post.access === "purchase" && post.priceUSD && (
              <span style={{
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
                fontSize: "12px",
                letterSpacing: "1px",
                padding: "4px 12px",
              }}>
                ${post.priceUSD} · {post.price} ETH
              </span>
            )}
            {post.access === "subscription" && (
              <span style={{
                border: "1px solid #C0001A",
                color: "#C0001A",
                fontSize: "11px",
                letterSpacing: "1px",
                padding: "4px 12px",
              }}>
                SUBSCRIBERS ONLY
              </span>
            )}
          </div>
        )}
        <span style={{ opacity: isLocked ? 0.2 : 1 }}>{post.thumbnail}</span>

        {/* type badge */}
        <div style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#0A0003",
          border: "1px solid #1A0008",
          padding: "3px 8px",
          fontSize: "10px",
          letterSpacing: "1px",
          color: "#555",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          zIndex: 3,
        }}>
          <span>{TYPE_ICON[post.type]}</span>
          <span>{post.type.toUpperCase()}</span>
        </div>

        {/* duration badge */}
        {post.duration && (
          <div style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: "3px 8px",
            fontSize: "11px",
            color: "#AAA",
            zIndex: 3,
          }}>
            {post.duration}
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px" }}>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "15px",
          color: "#F5F0F0",
          marginBottom: "6px",
          lineHeight: 1.4,
        }}>
          {post.title}
        </p>
        <p style={{
          color: "#555",
          fontSize: "12px",
          lineHeight: 1.6,
          marginBottom: "14px",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        } as React.CSSProperties}>
          {post.description}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ color: "#444", fontSize: "11px" }}>{post.date}</span>
            <span style={{ color: "#444", fontSize: "11px" }}>♡ {post.likes}</span>
          </div>

          {post.access === "free" && (
            <span style={{ color: "#555", fontSize: "10px", letterSpacing: "1px", border: "1px solid #333", padding: "3px 8px" }}>
              FREE
            </span>
          )}
          {post.access === "subscription" && (
            <button
              onClick={onSubscribe}
              style={{
                backgroundColor: "#C0001A",
                color: "#F5F0F0",
                border: "none",
                padding: "6px 14px",
                fontSize: "11px",
                letterSpacing: "1px",
                cursor: "pointer",
              }}
            >
              SUBSCRIBE
            </button>
          )}
          {post.access === "purchase" && (
            <button
              onClick={() => onPurchase(post)}
              style={{
                backgroundColor: "transparent",
                color: "#C0001A",
                border: "1px solid #C0001A",
                padding: "6px 14px",
                fontSize: "11px",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#C0001A";
                e.currentTarget.style.color = "#F5F0F0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#C0001A";
              }}
            >
              BUY · ${post.priceUSD}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CreatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const creator = creators.find((c) => c.id === Number(id));
  const posts = creatorPosts.filter((p) => p.creatorId === Number(id));

  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [purchaseModal, setPurchaseModal] = useState<CreatorPost | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "image" | "video" | "audio" | "text">("all");

  if (!creator) {
    return (
      <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#F5F0F0", fontFamily: "system-ui, sans-serif" }}>
        <Navbar />
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <p style={{ fontSize: "48px", marginBottom: "24px" }}>✦</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "12px" }}>
            Creator not found
          </h1>
          <a href="/explore" style={{ color: "#C0001A", fontSize: "13px", letterSpacing: "2px", textDecoration: "none" }}>
            ← BACK TO EXPLORE
          </a>
        </div>
      </main>
    );
  }

  const handleSubscribe = () => {
    if (selectedTier === null) return;
    setSubscribed(true);
    setTimeout(() => {
      window.location.href = `/subscribe/success?creator=${creator.id}&tier=${selectedTier}`;
    }, 800);
  };

  const scrollToTiers = () => {
    document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" });
  };

  const selectedTierData = selectedTier !== null ? creator.tiers[selectedTier] : null;

  const filteredPosts = activeTab === "all"
    ? posts
    : posts.filter((p) => p.type === activeTab);

  const freePosts = posts.filter((p) => p.access === "free").length;
  const paidPosts = posts.filter((p) => p.access !== "free").length;

  return (
    <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#F5F0F0", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {/* Purchase Modal */}
      {purchaseModal && (
        <PurchaseModal
          post={purchaseModal}
          creatorName={creator.name}
          onClose={() => setPurchaseModal(null)}
        />
      )}

      {/* Header */}
      <div style={{
        borderBottom: "1px solid #150005",
        background: "linear-gradient(180deg, #0D0005 0%, #0A0A0A 100%)",
        padding: "64px 48px 56px",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <a href="/explore" style={{
            color: "#555", fontSize: "12px", letterSpacing: "2px",
            textDecoration: "none", display: "inline-flex", alignItems: "center",
            gap: "8px", marginBottom: "40px",
          }}>
            ← EXPLORE
          </a>

          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              width: "96px", height: "96px", borderRadius: "50%",
              backgroundColor: "#1A0008", border: "2px solid #C0001A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "36px", flexShrink: 0,
              boxShadow: "0 0 32px rgba(192,0,26,0.2)",
            }}>
              {creator.preview}
            </div>

            <div style={{ flex: 1, minWidth: "240px" }}>
              <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
                {creator.category.toUpperCase()}
              </p>
              <h1 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: "normal", lineHeight: 1.1, marginBottom: "16px",
              }}>
                {creator.name}
              </h1>
              <p style={{ color: "#777", fontSize: "15px", lineHeight: 1.8, maxWidth: "520px", marginBottom: "28px" }}>
                {creator.bio}
              </p>

              <div style={{ display: "flex", gap: "28px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#F5F0F0" }}>
                    {creator.subscribers.toLocaleString()}
                  </span>
                  <span style={{ color: "#444", fontSize: "12px", letterSpacing: "1px" }}>subscribers</span>
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#F5F0F0" }}>{posts.length}</span>
                  <span style={{ color: "#444", fontSize: "12px", letterSpacing: "1px" }}>posts</span>
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "#F5F0F0" }}>{freePosts}</span>
                  <span style={{ color: "#444", fontSize: "12px", letterSpacing: "1px" }}>free</span>
                </div>
                <div style={{ width: "1px", height: "20px", backgroundColor: "#1A0008" }} />
                <span style={{ color: "#444", fontSize: "13px" }}>{creator.twitter}</span>
                <span style={{ color: "#444", fontSize: "13px" }}>{creator.instagram}</span>
              </div>
            </div>

            {/* Quick subscribe CTA */}
            <div style={{ flexShrink: 0 }}>
              <button
                onClick={scrollToTiers}
                style={{
                  backgroundColor: "#C0001A", color: "#F5F0F0",
                  border: "none", padding: "14px 28px",
                  fontSize: "13px", letterSpacing: "2px", cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {creator.tier.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main two-column layout */}
      <div style={{
        maxWidth: "960px", margin: "0 auto",
        padding: "56px 48px",
        display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "flex-start",
      }}>

        {/* LEFT — Content Gallery */}
        <div style={{ flex: "1 1 520px", minWidth: 0 }}>

          {/* Content count + filter tabs */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px" }}>
              CONTENT · {filteredPosts.length} {activeTab === "all" ? "posts" : activeTab}
            </p>
          </div>

          {/* Type filter */}
          <div style={{ display: "flex", gap: "6px", marginBottom: "28px", flexWrap: "wrap" }}>
            {(["all", "image", "video", "audio", "text"] as const).map((tab) => {
              const count = tab === "all" ? posts.length : posts.filter((p) => p.type === tab).length;
              if (tab !== "all" && count === 0) return null;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "6px 14px",
                    backgroundColor: activeTab === tab ? "#C0001A" : "transparent",
                    border: `1px solid ${activeTab === tab ? "#C0001A" : "#1A0008"}`,
                    color: activeTab === tab ? "#F5F0F0" : "#555",
                    fontSize: "11px", letterSpacing: "1px", cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {tab === "all" ? "ALL" : `${TYPE_ICON[tab]} ${tab.toUpperCase()}`}
                  {count > 0 && (
                    <span style={{ marginLeft: "6px", opacity: 0.6 }}>({count})</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "12px",
            }}>
              {filteredPosts.map((post) => (
                <ContentCard
                  key={post.id}
                  post={post}
                  onPurchase={setPurchaseModal}
                  onSubscribe={scrollToTiers}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#333" }}>
              <p style={{ fontSize: "32px", marginBottom: "12px" }}>{TYPE_ICON[activeTab] ?? "✦"}</p>
              <p style={{ fontSize: "14px" }}>No {activeTab} posts yet</p>
            </div>
          )}

          {posts.length === 0 && (
            <div style={{
              textAlign: "center", padding: "80px 0",
              border: "1px dashed #1A0008",
            }}>
              <p style={{ fontSize: "32px", marginBottom: "16px" }}>✦</p>
              <p style={{ color: "#444", fontSize: "14px", marginBottom: "8px" }}>No content yet</p>
              <p style={{ color: "#333", fontSize: "12px" }}>Subscribe to get notified when {creator.name} posts</p>
            </div>
          )}
        </div>

        {/* RIGHT — Tiers */}
        <div id="tiers" style={{ flex: "0 0 300px" }}>
          <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "24px" }}>
            SUBSCRIPTION TIERS
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
            {creator.tiers.map((tier, i) => (
              <div
                key={tier.name}
                onClick={() => setSelectedTier(i)}
                style={{
                  backgroundColor: selectedTier === i ? "#110008" : "#0D0005",
                  border: `1px solid ${selectedTier === i ? "#C0001A" : "#1A0008"}`,
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                {i === 1 && (
                  <span style={{
                    position: "absolute", top: "10px", right: "10px",
                    backgroundColor: "#C0001A", color: "#F5F0F0",
                    fontSize: "9px", letterSpacing: "2px", padding: "2px 6px",
                  }}>
                    POPULAR
                  </span>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: "16px", color: selectedTier === i ? "#F5F0F0" : "#DDD" }}>
                    {tier.name}
                  </p>
                  <div>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: selectedTier === i ? "#C0001A" : "#F5F0F0" }}>
                      ${tier.price}
                    </span>
                    <span style={{ color: "#444", fontSize: "11px" }}>/mo</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {tier.perks.map((perk, pi) => (
                    <div key={pi} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "#C0001A", fontSize: "9px", marginTop: "4px", flexShrink: 0 }}>✦</span>
                      <span style={{ color: "#777", fontSize: "12px", lineHeight: 1.5 }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {!subscribed ? (
            <button
              onClick={handleSubscribe}
              disabled={selectedTier === null}
              style={{
                width: "100%",
                backgroundColor: selectedTier !== null ? "#C0001A" : "#0D0005",
                color: selectedTier !== null ? "#F5F0F0" : "#333",
                border: `1px solid ${selectedTier !== null ? "transparent" : "#1A0008"}`,
                padding: "16px",
                fontSize: "13px", letterSpacing: "2px",
                cursor: selectedTier !== null ? "pointer" : "not-allowed",
                transition: "all 0.2s",
              }}
            >
              {selectedTier === null
                ? "SELECT A TIER"
                : `SUBSCRIBE · $${creator.tiers[selectedTier].price}/MO`}
            </button>
          ) : (
            <div style={{
              width: "100%", backgroundColor: "#1A0008",
              border: "1px solid #C0001A", padding: "16px", textAlign: "center",
            }}>
              <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "3px", marginBottom: "4px" }}>✦ SUBSCRIBED</p>
              <p style={{ color: "#777", fontSize: "12px" }}>
                {selectedTierData?.name} · ${selectedTierData?.price}/mo
              </p>
            </div>
          )}

          <p style={{ color: "#333", fontSize: "11px", textAlign: "center", marginTop: "12px", lineHeight: 1.6 }}>
            Cancel anytime · Pay with ETH on Base
          </p>

          {/* About */}
          <div style={{ marginTop: "32px", backgroundColor: "#0D0005", border: "1px solid #1A0008", padding: "24px" }}>
            <p style={{ color: "#555", fontSize: "11px", letterSpacing: "3px", marginBottom: "12px" }}>ABOUT</p>
            <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.8 }}>{creator.bio}</p>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #1A0008", display: "flex", gap: "16px" }}>
              <a href={`https://twitter.com/${creator.twitter.replace("@", "")}`}
                style={{ color: "#444", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>
                X / TWITTER
              </a>
              <a href={`https://instagram.com/${creator.instagram.replace("@", "")}`}
                style={{ color: "#444", fontSize: "12px", textDecoration: "none", letterSpacing: "1px" }}>
                INSTAGRAM
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer style={{
        padding: "40px 48px", borderTop: "1px solid #150005",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{ fontFamily: "Georgia, serif", color: "#C0001A", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "#2A2A2A", fontSize: "12px" }}>© 2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}
