"use client"

import Tweet from "@/components/Tweet"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

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

interface CommentData {
  id: string
  author: {
    name: string
    username: string
    avatar: string
  }
  content: string
  timestamp: string
}

export default function TweetDetail() {
  const { id } = useParams()
  const [tweet, setTweet] = useState<TweetData | null>(null)
  const [comments, setComments] = useState<CommentData[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTweetAndComments = async () => {
      try {
        const tweetResponse = await fetch(`/api/tweet/${id}`)
        const commentsResponse = await fetch(`/api/tweet/${id}/comments`)

        if (tweetResponse.ok && commentsResponse.ok) {
          const tweetData = await tweetResponse.json()
          const commentsData = await commentsResponse.json()
          setTweet(tweetData)
          setComments(commentsData)
        } else {
          setError("Failed to fetch tweet or comments")
        }
      } catch (err) {
        setError("Error loading tweet details")
      }
    }

    fetchTweetAndComments()
  }, [id])

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  if (!tweet) {
    return <div className="p-4">Loading tweet...</div>
  }

  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Tweet</h1>
      </header>
      <Tweet tweet={tweet} />
      <div className="border-t border-border">
        <h2 className="text-xl font-bold p-4">Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-border p-4">
            <div className="flex items-center mb-2">
              <img
                src={comment.author.avatar || "/placeholder.svg"}
                alt={comment.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-bold">{comment.author.name}</p>
                <p className="text-sm text-gray-500">@{comment.author.username}</p>
              </div>
            </div>
            <p>{comment.content}</p>
            <p className="text-sm text-gray-500 mt-2">{comment.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

