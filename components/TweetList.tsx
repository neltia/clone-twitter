"use client"

import { useState, useEffect } from "react"
import Tweet from "./Tweet"

// This data should ideally come from an API or database
const mockTweets = [
  {
    id: "1",
    author: { name: "John Doe", username: "johndoe", avatar: "/placeholder.svg" },
    content: "Just setting up my Twitter clone!",
    timestamp: "2h",
    likes: 5,
    retweets: 2,
    replies: 1,
  },
  {
    id: "2",
    author: { name: "Jane Smith", username: "janesmith", avatar: "/placeholder.svg" },
    content: "This Twitter clone looks amazing! Great job on the UI.",
    timestamp: "4h",
    likes: 10,
    retweets: 3,
    replies: 2,
  },
]

export default function TweetList() {
  const [tweets, setTweets] = useState(mockTweets)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulating an API call
    const fetchTweets = async () => {
      try {
        // In a real app, this would be an API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setTweets(mockTweets)
      } catch (err) {
        setError("Failed to fetch tweets")
      }
    }

    fetchTweets()
  }, [])

  if (error) {
    return <div className="p-4 text-red-500">Error loading tweets: {error}</div>
  }

  if (tweets.length === 0) {
    return <div className="p-4">Loading tweets...</div>
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

