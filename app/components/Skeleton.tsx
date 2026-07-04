"use client";

export function SkeletonCard() {
  return (
    <div style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
      padding: "32px 28px",
      animation: "pulse 1.5s ease-in-out infinite",
    }}>
      <div style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "var(--border)",
        marginBottom: "20px",
      }} />
      <div style={{ height: "18px", backgroundColor: "var(--border)", marginBottom: "8px", width: "60%" }} />
      <div style={{ height: "12px", backgroundColor: "var(--border)", marginBottom: "16px", width: "40%" }} />
      <div style={{ height: "12px", backgroundColor: "var(--border)", marginBottom: "8px", width: "100%" }} />
      <div style={{ height: "12px", backgroundColor: "var(--border)", marginBottom: "8px", width: "90%" }} />
      <div style={{ height: "12px", backgroundColor: "var(--border)", width: "70%" }} />
      <div style={{
        marginTop: "24px",
        paddingTop: "16px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
      }}>
        <div style={{ height: "12px", backgroundColor: "var(--border)", width: "35%" }} />
        <div style={{ height: "12px", backgroundColor: "var(--border)", width: "20%" }} />
      </div>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

export function SkeletonPost() {
  return (
    <div style={{
      backgroundColor: "var(--bg-card)",
      border: "1px solid var(--border)",
      marginBottom: "2px",
      animation: "pulse 1.5s ease-in-out infinite",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "20px 24px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--border)", flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ height: "14px", backgroundColor: "var(--border)", marginBottom: "6px", width: "40%" }} />
          <div style={{ height: "11px", backgroundColor: "var(--border)", width: "25%" }} />
        </div>
      </div>
      <div style={{ padding: "24px" }}>
        <div style={{ height: "20px", backgroundColor: "var(--border)", marginBottom: "12px", width: "70%" }} />
        <div style={{ height: "14px", backgroundColor: "var(--border)", marginBottom: "8px", width: "100%" }} />
        <div style={{ height: "14px", backgroundColor: "var(--border)", width: "85%" }} />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "16px",
    }}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
