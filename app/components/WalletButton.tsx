"use client";

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";

export default function WalletButton({ compact = false }: { compact?: boolean }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const isWrongNetwork = isConnected && chainId !== base.id;

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  const btnBase: React.CSSProperties = {
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "1.5px",
    cursor: "pointer",
    padding: compact ? "6px 14px" : "10px 20px",
    fontSize: compact ? "11px" : "12px",
    whiteSpace: "nowrap" as const,
    transition: "all 0.2s",
    border: "none",
  };

  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: connectors[0] })}
        style={{
          ...btnBase,
          backgroundColor: "transparent",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent-fg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "var(--accent)";
        }}
      >
        CONNECT WALLET
      </button>
    );
  }

  if (isWrongNetwork) {
    return (
      <button
        onClick={() => switchChain({ chainId: base.id })}
        style={{
          ...btnBase,
          backgroundColor: "var(--accent)",
          color: "var(--accent-fg)",
        }}
      >
        WRONG NETWORK
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      style={{
        ...btnBase,
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--accent)",
        color: "var(--text-primary)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ color: "var(--accent)", fontSize: "8px" }}>●</span>
      {compact ? shortAddress : shortAddress}
    </button>
  );
}
