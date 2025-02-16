"use client"

import { useState } from "react"
import TabGroup from "./TabGroup"

export default function NotificationsContent() {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { label: "All", href: "/notifications?tab=all" },
    { label: "Verified", href: "/notifications?tab=verified" },
    { label: "Mentions", href: "/notifications?tab=mentions" },
  ]

  return (
    <>
      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground">
        <p className="text-xl font-bold">No notifications yet</p>
        <p className="text-sm">When you get notifications, they'll show up here.</p>
      </div>
    </>
  )
}

