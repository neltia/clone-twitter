"use client"

import { useEffect, useState } from "react"

interface TrendingTopic {
  topic: string
  tweets: string
  category: string
}

export default function Trends() {
  const [trends, setTrends] = useState<TrendingTopic[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await fetch("/api/trends")
        if (response.ok) {
          const data = await response.json()
          setTrends(data)
        } else {
          setError("Failed to fetch trends")
        }
      } catch (err) {
        setError("Error loading trends")
      }
    }

    fetchTrends()
  }, [])

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Trends</h1>
      </header>
      <div className="divide-y divide-border">
        {trends.map((trend, index) => (
          <div key={index} className="px-4 py-3 hover:bg-accent/50 cursor-pointer transition-colors">
            <p className="text-sm text-muted-foreground">{trend.category}</p>
            <p className="font-bold mt-0.5">{trend.topic}</p>
            <p className="text-sm text-muted-foreground mt-0.5">{trend.tweets} posts</p>
          </div>
        ))}
      </div>
    </div>
  )
}

