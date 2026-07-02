"use client";

import { useTheme } from "./ThemeProvider";

interface VinusLogoProps {
  size?: number;
  className?: string;
}

export default function VinusLogo({ size = 40, className }: VinusLogoProps) {
  const { theme } = useTheme();

  return (
    <img
      src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
      alt="Vinus"
      width={size}
      height={size}
      style={{
        objectFit: "contain",
        display: "block",
        transition: "opacity 0.2s ease",
      }}
      className={className}
    />
  );
}
