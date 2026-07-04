"use client";

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";
import { useEffect } from "react";
import { useLang } from "./LangProvider";

export default function WalletButton({ compact = false }: { compact?: boolean }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { lang } = useLang();

  const isWrongNetwork = isConnected && chainId !== base.id;

  // Save referral from URL params
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref && ref.startsWith("0x")) {
      localStorage.setItem("vinus-referrer", ref);
    }
  }, []);

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  const label = {
    connect: lang === "ko" ? "지갑 연결" : "CONNECT WALLET",
    connecting: lang === "ko" ? "연결 중..." : "CONNECTING...",
    wrongNetwork: lang === "ko" ? "네트워크 변경" : "SWITCH TO BASE",
    connected: shortAddress,
  };

  const base_style: React.CSSProperties = {
    fontFamily: "system-ui, sans-serif",
    letterSpacing: "1.5px",
    cursor: "pointer",
    padding: compact ? "6px 14px" : "10px 20px",
    fontSize: compact ? "11px" : "12px",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  if (!isConnected) {
    return (
      <button
        onClick={() => connect({ connector: connectors[0] })}
        disabled={isPending}
        style={{
          ...base_style,
          backgroundColor: isPending ? "var(--bg-card)" : "var(--accent)",
          color: "var(--accent-fg)",
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? label.connecting : label.connect}
      </button>
    );
  }

  if (isWrongNetwork) {
    return (
      <button
        onClick={() => switchChain({ chainId: base.id })}
        style={{
          ...base_style,
          backgroundColor: "#BF8000",
          color: "#fff",
        }}
      >
        ⚠ {label.wrongNetwork}
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      style={{
        ...base_style,
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--accent)",
        color: "var(--text-primary)",
      }}
      title={lang === "ko" ? "클릭하여 연결 해제" : "Click to disconnect"}
    >
      <span style={{ color: "var(--accent)", fontSize: "8px" }}>●</span>
      {label.connected}
    </button>
  );
}
