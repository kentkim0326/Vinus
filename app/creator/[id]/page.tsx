"use client";

import { useLang } from "../../components/LangProvider";
import { t } from "../../lib/i18n";

import { use, useState } from "react";
import Navbar from "../../components/Navbar";
import ContentGallery from "../../components/ContentGallery";
import PurchaseModal from "../../components/PurchaseModal";
import { creators } from "../../lib/data";

export function generateStaticParams() {
  return creators.map((c) => ({ id: String(c.id) }));
}
import { getCreatorContent, ContentItem } from "../../lib/content";
import ShareButton from "../../components/ShareButton";

export default function CreatorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const creator = creators.find((c) => c.id === Number(id));

  const { lang } = useLang();
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "tiers">("content");
  const [purchaseItem, setPurchaseItem] = useState<ContentItem | null>(null);

  if (!creator) {
    return (
      <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
        <Navbar />
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <p style={{ fontSize: "48px", marginBottom: "24px" }}>✦</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "normal", marginBottom: "12px" }}>
            {t(lang, "creator.notfound")}
          </h1>
          <a href="/explore" style={{ color: "var(--accent)", fontSize: "13px", letterSpacing: "2px", textDecoration: "none" }}>
            {t(lang, "creator.back")}
          </a>
        </div>
      </main>
    );
  }

  const contentItems = getCreatorContent(creator.id);

  const handleSubscribe = () => {
    if (selectedTier === null) return;
    setSubscribed(true);
    setTimeout(() => {
      window.location.href = `/subscribe/success?creator=${creator.id}&tier=${selectedTier}`;
    }, 800);
  };

  const handleContentSelect = (item: ContentItem) => {
    if (item.isFree) return;
    if (item.price !== null) {
      setPurchaseItem(item);
    } else {
      setActiveTab("tiers");
    }
  };

  const selectedTierData = selectedTier !== null ? creator.tiers[selectedTier] : null;

  return (
    <main style={{ backgroundColor: "var(--bg-base)", minHeight: "100vh", color: "var(--text-primary)", fontFamily: "system-ui, sans-serif" }}>
      <Navbar />

      {purchaseItem && (
        <PurchaseModal item={purchaseItem} onClose={() => setPurchaseItem(null)} />
      )}

      {/* Header banner */}
      <div style={{
        borderBottom: "1px solid #150005",
        background: "linear-gradient(180deg, var(--bg-card) 0%, var(--bg-base) 100%)",
        padding: "64px 48px 0",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <a href="/explore" style={{
            color: "var(--text-dim)",
            fontSize: "12px",
            letterSpacing: "2px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px",
          }}>
            {t(lang, "creator.back")}
          </a>

          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "48px" }}>
            <div style={{
              width: "96px",
              height: "96px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--accent)",
              flexShrink: 0,
              boxShadow: "0 0 32px var(--shadow-accent)",
            }}>
              <img src={creator.avatar} alt={creator.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ flex: 1, minWidth: "240px" }}>
              <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "10px" }}>
                {creator.category.toUpperCase()}
              </p>
              <h1 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: "normal",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}>
                {creator.name}
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, maxWidth: "520px", marginBottom: "28px" }}>
                {((typeof creator.bio === "string") ? creator.bio : (creator.bio as Record<string, string>)[lang] ?? (creator.bio as Record<string, string>).en)}
              </p>

              <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "var(--text-primary)" }}>
                    {creator.subscribers.toLocaleString()}
                  </span>
                  <span style={{ color: "var(--text-faint)", fontSize: "12px", letterSpacing: "1px" }}>{t(lang, "creator.subscribers")}</span>
                </div>
                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: "22px", color: "var(--text-primary)" }}>
                    {contentItems.length}
                  </span>
                  <span style={{ color: "var(--text-faint)", fontSize: "12px", letterSpacing: "1px" }}>{t(lang, "creator.posts")}</span>
                </div>
                <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border)" }} />
                <span style={{ color: "var(--text-faint)", fontSize: "13px" }}>{creator.twitter}</span>
                <span style={{ color: "var(--text-faint)", fontSize: "13px" }}>{creator.instagram}</span>
                <ShareButton creatorId={creator.id} compact />
              </div>
            </div>

            {/* Subscribe CTA */}
            <div style={{ flexShrink: 0 }}>
              {!subscribed ? (
                <a
                  href="#tiers"
                  onClick={() => setActiveTab("tiers")}
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--accent)",
                    color: "var(--text-primary)",
                    padding: "14px 28px",
                    textDecoration: "none",
                    fontSize: "12px",
                    letterSpacing: "2px",
                  }}
                >
                  SUBSCRIBE · {creator.tier}
                </a>
              ) : (
                <div style={{
                  backgroundColor: "var(--border)",
                  border: "1px solid #C0001A",
                  padding: "14px 24px",
                  textAlign: "center",
                }}>
                  <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "2px" }}>✦ SUBSCRIBED</p>
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "0", borderBottom: "none" }}>
            {(["content", "tiers"] as const).map((tab) => (
              <button
                key={tab}
                id={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "14px 28px",
                  backgroundColor: "transparent",
                  border: "none",
                  borderBottom: `2px solid ${activeTab === tab ? "var(--accent)" : "transparent"}`,
                  color: activeTab === tab ? "var(--text-primary)" : "var(--text-dim)",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                {tab === "content" ? `Content (${contentItems.length})` : "Subscribe"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 48px" }}>

        {/* Content tab */}
        {activeTab === "content" && (
          <ContentGallery items={contentItems} onSelect={handleContentSelect} />
        )}

        {/* Tiers tab */}
        {activeTab === "tiers" && (
          <div style={{ maxWidth: "520px" }}>
            <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "8px" }}>
              SUBSCRIPTION TIERS
            </p>
            <p style={{ color: "var(--text-dim)", fontSize: "14px", marginBottom: "32px", lineHeight: 1.7 }}>
              {t(lang, "creator.tiers.sub")}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
              {creator.tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  onClick={() => setSelectedTier(i)}
                  style={{
                    backgroundColor: selectedTier === i ? "var(--bg-card-hover)" : "var(--bg-card)",
                    border: `1px solid ${selectedTier === i ? "var(--accent)" : "var(--border)"}`,
                    padding: "24px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    position: "relative",
                  }}
                >
                  {i === 1 && (
                    <span style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      backgroundColor: "var(--accent)",
                      color: "var(--text-primary)",
                      fontSize: "9px",
                      letterSpacing: "2px",
                      padding: "3px 8px",
                    }}>
                      POPULAR
                    </span>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                    <p style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "18px",
                      color: selectedTier === i ? "var(--text-primary)" : "var(--text-secondary)",
                    }}>
                      {tier.name}
                    </p>
                    <div style={{ textAlign: "right" }}>
                      <span style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "24px",
                        color: selectedTier === i ? "var(--accent)" : "var(--text-primary)",
                      }}>
                        ${tier.price}
                      </span>
                      <span style={{ color: "var(--text-faint)", fontSize: "12px" }}>/mo</span>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {tier.perks.map((perk, pi) => (
                      <div key={pi} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ color: "var(--accent)", fontSize: "10px", marginTop: "3px", flexShrink: 0 }}>✦</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.5 }}>{perk}</span>
                      </div>
                    ))}
                  </div>

                  {selectedTier === i && (
                    <div style={{
                      marginTop: "16px",
                      paddingTop: "16px",
                      borderTop: "1px solid #1A0008",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}>
                      <span style={{ color: "var(--accent)", fontSize: "10px" }}>✦</span>
                      <span style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "1px" }}>{t(lang, "creator.selected")}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!subscribed ? (
              <button
                onClick={handleSubscribe}
                disabled={selectedTier === null}
                style={{
                  width: "100%",
                  backgroundColor: selectedTier !== null ? "var(--accent)" : "var(--bg-card)",
                  color: selectedTier !== null ? "var(--text-primary)" : "var(--text-ghost)",
                  border: `1px solid ${selectedTier !== null ? "transparent" : "var(--border)"}`,
                  padding: "18px",
                  fontSize: "13px",
                  letterSpacing: "2px",
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
                width: "100%",
                backgroundColor: "var(--border)",
                border: "1px solid #C0001A",
                padding: "18px",
                textAlign: "center",
              }}>
                <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "3px", marginBottom: "4px" }}>✦ SUBSCRIBED</p>
                <p style={{ color: "var(--text-muted)", fontSize: "12px" }}>
                  {selectedTierData?.name} · ${selectedTierData?.price}/mo
                </p>
              </div>
            )}

            <p style={{ color: "var(--text-ghost)", fontSize: "12px", textAlign: "center", marginTop: "16px", lineHeight: 1.6 }}>
              {t(lang, "creator.cancel")}
            </p>
          </div>
        )}
      </div>

      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid #150005",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{ fontFamily: "Georgia, serif", color: "var(--accent)", letterSpacing: "5px", fontSize: "16px" }}>
          VINUS
        </span>
        <span style={{ color: "var(--text-ultra)", fontSize: "12px" }}>2026 Vinus. All rights reserved.</span>
      </footer>
    </main>
  );
}
