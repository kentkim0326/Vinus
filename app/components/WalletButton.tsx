"use client";

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";
import { useEffect, useRef } from "react";
import { useLang } from "./LangProvider";
import { sanitizeReferrer, shortenAddress, isValidAddress } from "../lib/walletSecurity";
import { useToast } from "./Toast";

export default function WalletButton({ compact = false }: { compact?: boolean }) {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { lang } = useLang();
  const { showToast } = useToast();
  const prevConnected = useRef(isConnected);
  const isKo = lang === "ko";

  const isWrongNetwork = isConnected && chainId !== base.id;

  // Referral capture
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    const currentAddr = address ?? null;
    const cleanRef = sanitizeReferrer(ref, currentAddr);
    if (cleanRef) {
      localStorage.setItem("vinus-referrer", cleanRef);
    }
  }, []);

  // Toast on connect/disconnect
  useEffect(() => {
    if (prevConnected.current === false && isConnected && address) {
      showToast(
        isKo ? `지갑이 연결됐습니다: ${address.slice(0, 6)}...${address.slice(-4)}` : `Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`,
        "success"
      );
    }
    if (prevConnected.current === true && !isConnected) {
      showToast(isKo ? "지갑 연결이 해제됐습니다" : "Wallet disconnected", "info");
    }
    prevConnected.current = isConnected;
  }, [isConnected, address, isKo, showToast]);

  const shortAddress = shortenAddress(address);

  const btnStyle: React.CSSProperties = {
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
        aria-label={isKo ? "MetaMask 지갑 연결" : "Connect MetaMask wallet"}
        style={{
          ...btnStyle,
          backgroundColor: isPending ? "var(--bg-card)" : "var(--accent)",
          color: "var(--accent-fg)",
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? (isKo ? "연결 중..." : "CONNECTING...") : (isKo ? "지갑 연결" : "CONNECT WALLET")}
      </button>
    );
  }

  if (isWrongNetwork) {
    return (
      <button
        onClick={() => switchChain({ chainId: base.id })}
        aria-label={isKo ? "Base 네트워크로 전환" : "Switch to Base Network"}
        style={{ ...btnStyle, backgroundColor: "#BF8000", color: "#fff" }}
      >
        ⚠ {isKo ? "네트워크 변경" : "SWITCH TO BASE"}
      </button>
    );
  }

  return (
    <button
      onClick={() => disconnect()}
      title={isKo ? "클릭하여 연결 해제" : "Click to disconnect"}
      aria-label={`${isKo ? "지갑" : "Wallet"}: ${shortAddress}`}
      style={{
        ...btnStyle,
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--accent)",
        color: "var(--text-primary)",
      }}
    >
      <span style={{ color: "var(--accent)", fontSize: "8px" }}>●</span>
      {shortAddress}
    </button>
  );
}
