"use client";

import { useState } from "react";
import { useAccount } from "wagmi";
import Navbar from "../../components/Navbar";

export default function EditProfilePage() {
  const { address } = useAccount();
  const [name, setName] = useState("Aria Nova");
  const [bio, setBio] = useState("Digital artist exploring the boundaries between light and shadow. Exclusive prints, process videos, and early access to new collections.");
  const [category, setCategory] = useState("Art & Illustration");
  const [twitter, setTwitter] = useState("@arianovo");
  const [instagram, setInstagram] = useState("@aria.nova");
  const [saved, setSaved] = useState(false);

  const categories = ["Art & Illustration", "Music & Audio", "Photography", "Digital Art", "Writing", "Video & Film"];

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <main style={{
      backgroundColor: "var(--bg-base)",
      minHeight: "100vh",
      color: "var(--text-primary)",
      fontFamily: "system-ui, sans-serif",
    }}>
      <Navbar />

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: "48px" }}>
          <p style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "5px", marginBottom: "12px" }}>
            SETTINGS
          </p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: "normal" }}>
            Edit Profile
          </h1>
        </div>

        {/* 지갑 주소 표시 */}
        <div style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
          padding: "20px 24px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}>
          <span style={{ color: "var(--accent)", fontSize: "10px" }}>●</span>
          <div>
            <p style={{ color: "var(--text-faint)", fontSize: "11px", letterSpacing: "2px", marginBottom: "4px" }}>
              WALLET ADDRESS
            </p>
            <p style={{
              color: "var(--text-primary)",
              fontSize: "13px",
              fontFamily: "monospace",
              letterSpacing: "0.5px",
            }}>
              {address ?? "Not connected"}
            </p>
          </div>
        </div>

        {/* 아바타 */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "40px",
          padding: "24px",
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
        }}>
          <div style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "var(--bg-deep)",
            border: "2px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            flexShrink: 0,
          }}>
            ✦
          </div>
          <div>
            <p style={{ fontSize: "15px", color: "var(--text-primary)", marginBottom: "8px" }}>Profile Photo</p>
            <button style={{
              backgroundColor: "transparent",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              padding: "8px 16px",
              fontSize: "12px",
              letterSpacing: "1px",
              cursor: "pointer",
            }}>
              UPLOAD PHOTO
            </button>
          </div>
        </div>

        {/* 폼 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
              DISPLAY NAME
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
              CATEGORY
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
                cursor: "pointer",
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} style={{ backgroundColor: "var(--bg-card)" }}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
              BIO
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box",
                fontFamily: "system-ui, sans-serif",
              }}
            />
            <p style={{ color: "var(--text-ghost)", fontSize: "12px", marginTop: "6px" }}>
              {bio.length} / 300 characters
            </p>
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
              TWITTER / X
            </label>
            <input
              type="text"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-dim)", fontSize: "11px", letterSpacing: "2px", marginBottom: "8px" }}>
              INSTAGRAM
            </label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                padding: "14px 16px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            <button
              onClick={handleSave}
              style={{
                flex: 1,
                backgroundColor: saved ? "var(--bg-deep)" : "var(--accent)",
                color: "var(--accent-fg)",
                border: `1px solid ${saved ? "var(--accent)" : "transparent"}`,
                padding: "16px",
                fontSize: "13px",
                letterSpacing: "2px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              {saved ? "✓ SAVED" : "SAVE CHANGES"}
            </button>
            <a href="/dashboard" style={{
              padding: "16px 24px",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "2px",
              display: "flex",
              alignItems: "center",
            }}>
              CANCEL
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
