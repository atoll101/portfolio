import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#238879",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yamin.com.au"),
  title: {
    default: "Yamin Mustafa",
    template: "%s | Yamin Mustafa",
  },
  description:
    "Systems Analyst specializing in insurance technology and LLM integration. Building innovative solutions with React, Next.js, and AI. Masters of IT (AI & Cybersecurity) at UNSW.",
  keywords: [
    "Systems Analyst",
    "Full-Stack Developer",
    "Insurance Technology",
    "LLM Integration",
    "AI Solutions",
    "React",
    "Next.js",
    "TypeScript",
    "Cybersecurity",
    "UNSW",
  ],
  authors: [{ name: "Yamin Mustafa" }],
  creator: "Yamin Mustafa",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://yamin.com.au",
    siteName: "Yamin Mustafa Portfolio",
    title: "Yamin Mustafa",
    description:
      "Systems Analyst specializing in insurance technology and LLM integration. Building innovative solutions with React, Next.js, and AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yamin Mustafa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamin Mustafa",
    description:
      "Systems Analyst specializing in insurance technology and LLM integration. Building innovative solutions with React, Next.js, and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
