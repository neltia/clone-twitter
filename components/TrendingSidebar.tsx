"use client"

import type React from "react"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TrendingSidebar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const trendingTopics = [
    { topic: "Technology", tweets: "125K", category: "Technology" },
    { topic: "Sports", tweets: "89K", category: "Sports" },
    { topic: "Politics", tweets: "56K", category: "Politics" },
    { topic: "Entertainment", tweets: "34K", category: "Entertainment" },
  ]

  const handleShowMore = () => {
    router.push("/trends")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <aside className="w-[350px] pl-4 sticky top-0 h-screen overflow-y-auto">
      <div className="sticky top-0 z-10 pb-4 pt-2 bg-background">
        <form onSubmit={handleSearch} className="relative group">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary rounded-full py-2 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-background"
          />
          <button type="submit" className="absolute left-4 top-2.5 text-muted-foreground">
            <MagnifyingGlass size={20} />
          </button>
        </form>
      </div>

      <div className="bg-secondary rounded-2xl mt-4">
        <h2 className="font-bold text-xl p-4">What's happening</h2>
        <div className="divide-y divide-border">
          {trendingTopics.map((topic) => (
            <div key={topic.topic} className="px-4 py-3 hover:bg-accent/50 cursor-pointer transition-colors">
              <p className="text-sm text-muted-foreground">{topic.category}</p>
              <p className="font-bold mt-0.5">{topic.topic}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{topic.tweets} posts</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleShowMore}
          className="p-4 text-primary hover:bg-accent/50 w-full text-left rounded-b-2xl transition-colors"
        >
          Show more
        </button>
      </div>
    </aside>
  )
}

