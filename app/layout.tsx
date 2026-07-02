import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "./components/Web3Provider";
import Web3Provider from "./components/Web3Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vinus — Support the creators you love",
    template: "%s | Vinus",
  },
  description:
    "Subscribe to independent creators. Get exclusive content. Pay with crypto. Vinus is the premium creator subscription platform.",
  keywords: ["creator", "subscription", "crypto", "exclusive content", "support creators"],
  authors: [{ name: "Vinus" }],
  metadataBase: new URL("https://vinus-black.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Vinus",
    title: "Vinus — Support the creators you love",
    description:
      "Subscribe to independent creators. Get exclusive content. Pay with crypto.",
    url: "https://vinus-black.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinus — Support the creators you love",
    description: "Subscribe to independent creators. Pay with crypto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F0F0]">
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
