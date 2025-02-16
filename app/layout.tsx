import Sidebar from "@/components/Sidebar"
import dynamic from "next/dynamic"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const TrendingSidebar = dynamic(() => import("@/components/TrendingSidebar"), { ssr: false })

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "X Clone",
  description: "A modern X (Twitter) clone built with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <div className="flex justify-center">
          <div className="flex w-full max-w-[1265px]">
            <Sidebar />
            <main className="flex-1 min-w-0 border-x border-border">
              <div className="max-w-[600px] w-full">{children}</div>
            </main>
            <TrendingSidebar />
          </div>
        </div>
      </body>
    </html>
  )
}

