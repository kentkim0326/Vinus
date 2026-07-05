"use client";

import { useState } from "react";
import { imgSrc } from "../lib/basePath";

export default function SmartImage({
  src,
  alt,
  fallback,
  style,
  className,
}: {
  src: string;
  alt: string;
  fallback?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--bg-deep)",
          color: "var(--text-ghost)",
          fontSize: "32px",
          ...style,
        }}
        aria-label={alt}
      >
        {fallback ?? "✦"}
      </div>
    );
  }

  return (
    <img
      src={imgSrc(src)}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
      style={{ objectFit: "cover", ...style }}
    />
  );
}
