import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppFooter } from "@/app/components/app-footer/app-footer";
import { AppHeader } from "@/app/components/app-header/app-header";
import AppBody from "@/app/components/app-body/app-body";
import Head from "next/head";
import React from "react";
import Launch from "@/app/components/launch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Official Website of OAEG",
  description: "Old Anandian Engineers Guild",
  themeColor: "#ffffff",
  twitter: {
    card: "summary_large_image",
    title: "Official Website of OAEG",
    images: [
      {
        url: "https://oaeg-website.pages.dev/images/logo_oaeg.png",
      },
    ],
  },
  openGraph: {
    title: "Official Website of OAEG",
    url: "www.oaeg.lk",
    images: [
      {
        url: "https://oaeg-website.pages.dev/images/logo_oaeg.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={inter.className}>
      <Launch/>
      <>
        <AppHeader />
        <AppBody>{children}</AppBody>
        <AppFooter />
      </>

      </body>
    </html>
  );
}
