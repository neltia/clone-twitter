"use client"

import { useState } from "react"
import TabGroup from "./TabGroup"

export default function ListsContent() {
  const [activeTab, setActiveTab] = useState("pinned")

  const tabs = [
    { label: "Pinned Lists", href: "/lists?tab=pinned" },
    { label: "Discover Lists", href: "/lists?tab=discover" },
  ]

  return (
    <>
      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground">
        <p className="text-xl font-bold">Your lists</p>
        <p className="text-sm">You haven't created or followed any lists. When you do, they'll show up here.</p>
      </div>
    </>
  )
}

