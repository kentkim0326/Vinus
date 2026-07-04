export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "var(--bg-base)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "24px",
    }}>
      <div style={{
        width: "48px",
        height: "48px",
        border: "2px solid var(--border)",
        borderTopColor: "var(--accent)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <span style={{
        fontFamily: "Georgia, serif",
        color: "var(--accent)",
        letterSpacing: "4px",
        fontSize: "14px",
      }}>
        VINUS
      </span>
    </div>
  );
}
