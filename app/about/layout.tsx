import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Vinus",
  description: "The world's first AI-powered Web3 creator platform. Anonymous. Transparent. Global.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
