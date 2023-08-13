import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {AppFooter} from "@/app/components/app-footer/app-footer";
import {AppHeader} from "@/app/components/app-header/app-header";
import AppBody from "@/app/components/app-body/app-body";
import AppHeroSection from "@/app/components/app-hero/app-hero-section";
import Head from "next/head";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Official Website of OAEG',
    description: 'Old Anandian Engineers Guild'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:image" content="https://oaeg-website.vercel.app/images/oaeg.png"/>
            <meta property="og:image" content="https://oaeg-website.vercel.app/images/oaeg.png"/>
            <meta property="twitter:title" content="Official Website of OAEG"/>
            <meta property="og:title" content="Official Website of OAEG"/>
            <meta property="og:url" content="www.oaeg.lk"/>
        </Head>
        <body className={inter.className}>
        <AppHeader/>
        <AppBody>
            <AppHeroSection/>{children}
        </AppBody>
        <AppFooter/>
        </body>
        </html>
    )
}
