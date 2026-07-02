"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import { creators } from "../../lib/data";

function SuccessContent() {
  const [visible, setVisible] = useState(false);
  const searchParams = useSearchParams();

  const creatorId = Number(searchParams.get("creator") ?? 1);
  const tierIndex = Number(searchParams.get("tier") ?? 0);

  const creator = creators.find((c) => c.id === creatorId) ?? creators[0];
  const tier = creator.tiers[tierIndex] ?? creator.tiers[0];

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div style={{
      maxWidth: "560px",
      margin: "0 auto",
      padding: "80px 24px",
      textAlign: "center",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.6s ease",
    }}>
      <div style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#1A0008",
        border: "2px solid #C0001A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "32px",
        margin: "0 auto 40px",
        boxShadow: "0 0 32px rgba(192,0,26,0.3)",
      }}>
        {creator.preview}
      </div>

      <p style={{ color: "#C0001A", fontSize: "11px", letterSpacing: "5px", marginBottom: "16px" }}>
        SUBSCRIPTION CONFIRMED
      </p>

      <h1 style={{
        fontFamily: "Georgia, serif",
        fontSize: "48px",
        fontWeight: "normal",
        marginBottom: "24px",
        lineHeight: 1.1,
      }}>
        You're in.
      </h1>

      <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.8, marginBottom: "8px" }}>
        Your subscription to{" "}
        <span style={{ color: "#F5F0F0" }}>{creator.name}</span> is now active.
      </p>

      <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.8, marginBottom: "56px" }}>
        {tier.name} tier · ${tier.price}/mo · Paid with crypto
      </p>

      <div style={{
        border: "1px solid #1A0008",
        padding: "28px",
        marginBottom: "40px",
        textAlign: "left",
      }}>
        <p style={{ color: "#555", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px" }}>
          YOUR PERKS
        </p>
        {tier.perks.map((perk, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ color: "#C0001A", fontSize: "10px" }}>✦</span>
            <span style={{ color: "#888", fontSize: "14px" }}>{perk}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a href="/feed" style={{
          backgroundColor: "#C0001A",
          color: "#F5F0F0",
          padding: "16px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "2px",
          display: "block",
        }}>
          GO TO YOUR FEED
        </a>
        <a href="/explore" style={{
          border: "1px solid #1A0008",
          color: "#555",
          padding: "16px",
          textDecoration: "none",
          fontSize: "13px",
          letterSpacing: "2px",
          display: "block",
        }}>
          EXPLORE MORE CREATORS
        </a>
      </div>
    </div>
  );
}

export default function SubscribeSuccessPage() {
  return (
    <main style={{
      backgroundColor: "#0A0A0A",
      minHeight: "100vh",
      color: "#F5F0F0",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />
      <Suspense fallback={
        <div style={{ textAlign: "center", padding: "120px 24px", color: "#444" }}>
          Loading...
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
