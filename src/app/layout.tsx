import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AppFooter } from "@/components/app-footer/app-footer";
import { AppHeader } from "@/components/app-header/app-header";
import AppBody from "@/components/app-body/app-body";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Official Website of OAEG",
  description: "Old Anandian Engineers Guild",
  twitter: {
    title: "Official Website of OAEG",
  },
  openGraph: {
    title: "Official Website of OAEG",
    url: "www.oaeg.lk",
  },
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/icons/safari-pinned-tab.svg",
        rel: "mask-icon",
        color: "#5bbad5",
      },
    ],
  },
};

const viewport: Viewport = {
  themeColor: "white",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        <AppBody>{children}</AppBody>
        <AppFooter />
      </body>
    </html>
  );
}

export { viewport }