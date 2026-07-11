import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "./components/Web3Provider";
import { ThemeProvider } from "./components/ThemeProvider";
import { LangProvider } from "./components/LangProvider";
import AgeGate from "./components/AgeGate";
import DailyReward from "./components/DailyReward";
import { ToastProvider } from "./components/Toast";
import BottomNav from "./components/BottomNav";

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
    default: "Vinus — The World's First AI-Powered Web3 Creator Platform",
    template: "%s | Vinus",
  },
  description:
    "The world's first AI-powered Web3 creator platform. Subscribe to independent creators. Pay with crypto. Real-time AI translation in 20 languages. Anonymous. Transparent. Global.",
  keywords: ["creator platform", "web3", "crypto", "AI translation", "MetaMask", "USDC", "Base Network", "anonymous", "creator economy"],
  authors: [{ name: "Vinus" }],
  metadataBase: new URL("https://kentkim0326.github.io/Vinus"),
  openGraph: {
    type: "website",
    siteName: "Vinus",
    title: "Vinus — The World's First AI-Powered Web3 Creator Platform",
    description: "Anonymous. Transparent. Global. AI translation in 20 languages. Crypto payments on Base Network.",
    url: "https://vinus-black.vercel.app",
    images: [{ url: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/og-image.png", width: 1200, height: 630, alt: "Vinus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinus — AI-Powered Web3 Creator Platform",
    description: "Anonymous. Transparent. Global. AI translation in 20 languages.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/favicon.ico" },
      { url: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/apple-touch-icon.png" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem("vinus-theme");
    if (!t) t = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
                <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <link rel="manifest" href={(process.env.NEXT_PUBLIC_BASE_PATH || "") + "/manifest.json"} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LangProvider>
            <Web3Provider>
              <ToastProvider>
                <AgeGate>
                  {children}
            <DailyReward />
                  <BottomNav />
                </AgeGate>
              </ToastProvider>
            </Web3Provider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
