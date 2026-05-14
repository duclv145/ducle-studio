import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Inter, JetBrains_Mono, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const display = Libre_Caslon_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const serif = Noto_Serif_Display({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans-pri",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-pri",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://ducle.studio";
const title = "DucLe Portfolio — Digital design that refuses to blend.";
const description =
  "DucLe is an independent design & development studio in Hanoi crafting bold brands, websites and digital products for founders who care about the details.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · DucLe Portfolio",
  },
  description,
  applicationName: "DucLe Portfolio",
  authors: [{ name: "DucLe Portfolio", url: siteUrl }],
  creator: "DucLe Portfolio",
  publisher: "DucLe Portfolio",
  keywords: [
    "design studio",
    "branding",
    "web design",
    "Next.js development",
    "motion design",
    "Hanoi",
    "Vietnam design",
    "DucLe",
  ],
  category: "design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "DucLe Studio",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@duclestudio",
    site: "@duclestudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="grain bg-bg text-ink min-h-svh selection:bg-yellow">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
