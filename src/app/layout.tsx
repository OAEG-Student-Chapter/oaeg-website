import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {AppFooter} from "@/app/components/app-footer";
import {AppHeader} from "@/app/components/app-header/app-header";
import AppBody from "@/app/components/app-body";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OAEG',
  description: 'Old Anandian Engineers Guild',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppHeader/>
      <AppBody>
          {children}
      </AppBody>
      <AppFooter/>
      </body>
    </html>
  )
}
