"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletButton({ compact = false }: { compact?: boolean }) {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        if (!mounted) return null;
        const connected = mounted && account && chain;

        return (
          <div>
            {!connected ? (
              <button
                onClick={openConnectModal}
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #C0001A",
                  color: "#C0001A",
                  padding: compact ? "6px 14px" : "10px 20px",
                  fontSize: compact ? "11px" : "12px",
                  letterSpacing: "2px",
                  cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
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
                CONNECT WALLET
              </button>
            ) : chain.unsupported ? (
              <button
                onClick={openChainModal}
                style={{
                  backgroundColor: "#C0001A",
                  border: "none",
                  color: "#F5F0F0",
                  padding: compact ? "6px 14px" : "10px 20px",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                }}
              >
                WRONG NETWORK
              </button>
            ) : (
              <button
                onClick={openAccountModal}
                style={{
                  backgroundColor: "#1A0008",
                  border: "1px solid #C0001A",
                  color: "#F5F0F0",
                  padding: compact ? "6px 14px" : "10px 20px",
                  fontSize: compact ? "11px" : "12px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  fontFamily: "system-ui, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#C0001A", fontSize: "8px" }}>●</span>
                {compact
                  ? `${account.address.slice(0, 6)}...${account.address.slice(-4)}`
                  : account.displayName}
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
