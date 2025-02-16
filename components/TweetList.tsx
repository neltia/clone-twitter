"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Tweet from "./Tweet"

interface TweetData {
  id: string
  author: {
    name: string
    username: string
    avatar: string
  }
  content: string
  timestamp: string
  likes: number
  retweets: number
  replies: number
}

// Mock data for tweets
const mockTweets: TweetData[] = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "/placeholder.svg",
    },
    content: "This is a mock tweet",
    timestamp: "2h",
    likes: 10,
    retweets: 5,
    replies: 3,
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/placeholder.svg",
    },
    content: "Another mock tweet",
    timestamp: "5h",
    likes: 20,
    retweets: 8,
    replies: 6,
  },
]

export default function TweetList() {
  const [tweets, setTweets] = useState<TweetData[]>([])
  const [isNotFound, setIsNotFound] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch("/api/posts")
        if (response.ok) {
          const data = await response.json()
          setTweets(data)
        } else if (response.status === 404) {
          setIsNotFound(true)
          setTweets(mockTweets)
        } else {
          // For other errors, use mock data
          setTweets(mockTweets)
        }
      } catch (err) {
        // If there's an error, use mock data
        setTweets(mockTweets)
      }
    }

    fetchTweets()
  }, [])

  const handleTweetClick = (tweet: TweetData) => {
    router.push(`/${tweet.author.username}/status/${tweet.id}`)
  }

  if (tweets.length === 0) {
    return <div className="p-4">Loading tweets...</div>
  }

  return (
    <div>
      {isNotFound && (
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="font-bold">Note:</p>
          <p>We couldn't find the requested tweets. Showing example tweets instead.</p>
        </div>
      )}
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onClick={() => handleTweetClick(tweet)} />
      ))}
    </div>
  )
}

