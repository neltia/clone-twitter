"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

interface TabGroupProps {
  tabs: {
    label: string
    href: string
  }[]
  initialActiveTab?: string
}

export default function TabGroup({ tabs, initialActiveTab }: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTab || tabs[0].href.split("=")[1])

  useEffect(() => {
    if (initialActiveTab) {
      setActiveTab(initialActiveTab)
    }
  }, [initialActiveTab])

  return (
    <div className="border-b border-border">
      <div className="flex">
        {tabs.map((tab) => {
          const isActive = tab.href.includes(activeTab)
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className="flex-1"
              onClick={(e) => {
                e.preventDefault()
                setActiveTab(tab.href.split("=")[1])
              }}
            >
              <div className="flex flex-col items-center hover:bg-secondary/50 transition-colors">
                <div className="px-8 py-4 relative">
                  <span className="text-[15px] font-medium">{tab.label}</span>
                  {isActive && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full" />}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

