"use client"

import { useState } from "react"
import TabGroup from "./TabGroup"
import TweetComposer from "./TweetComposer"
import TweetList from "./TweetList"

export default function HomeContent() {
  const [activeTab, setActiveTab] = useState("for-you")

  const tabs = [
    { label: "For you", href: "/?tab=for-you" },
    { label: "Following", href: "/?tab=following" },
  ]

  return (
    <div>
      <TabGroup tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <TweetComposer />
      <TweetList />
    </div>
  )
}

