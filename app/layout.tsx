import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://macfrag.app"),
  title: {
    default: "Mac Frag — MSL fragment shader playground for macOS",
    template: "%s | Mac Frag",
  },
  description:
    "A native macOS playground for writing Metal Shading Language fragment shaders. Live preview at 60 FPS, syntax highlighting, and instant recompilation.",
  openGraph: {
    title: "Mac Frag — MSL fragment shader playground for macOS",
    description:
      "A native macOS playground for writing Metal Shading Language fragment shaders. Live preview at 60 FPS.",
    url: "https://macfrag.app",
    siteName: "Mac Frag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mac Frag",
    description:
      "A native macOS playground for writing Metal fragment shaders with a live 60 FPS preview.",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
