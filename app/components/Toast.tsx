"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<{
  showToast: (message: string, type?: ToastType) => void;
}>({ showToast: () => {} });

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const colors: Record<ToastType, string> = {
    success: "var(--accent)",
    error: "#BF4A4A",
    info: "#4A8FBF",
  };

  const icons: Record<ToastType, string> = {
    success: "✦",
    error: "✕",
    info: "ℹ",
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 9999,
        pointerEvents: "none",
      }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              backgroundColor: "var(--bg-card)",
              border: `1px solid ${colors[toast.type]}`,
              borderLeft: `3px solid ${colors[toast.type]}`,
              padding: "14px 20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minWidth: "260px",
              maxWidth: "360px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              animation: "slideIn 0.3s ease",
            }}
          >
            <span style={{ color: colors[toast.type], fontSize: "12px", flexShrink: 0 }}>
              {icons[toast.type]}
            </span>
            <span style={{ color: "var(--text-primary)", fontSize: "13px", lineHeight: 1.5 }}>
              {toast.message}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
