import "@/styles/globals.css";
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
  manifest: "/site.webmanifest"
};

const viewport: Viewport = {
  themeColor: "white",
};

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

export { viewport };
