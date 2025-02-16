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

// Mock data for a tweet
const mockTweet: TweetData = {
  id: "1",
  author: {
    name: "John Doe",
    username: "johndoe",
    avatar: "/placeholder.svg",
  },
  content: "This is a mock tweet for the detail page",
  timestamp: "2h",
  likes: 10,
  retweets: 5,
  replies: 3,
}

// Mock data for comments
const mockComments: CommentData[] = [
  {
    id: "1",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/placeholder.svg",
    },
    content: "This is a mock comment",
    timestamp: "1h",
  },
  {
    id: "2",
    author: {
      name: "Alice Johnson",
      username: "alicej",
      avatar: "/placeholder.svg",
    },
    content: "Another mock comment",
    timestamp: "30m",
  },
]

export default function TweetDetail() {
  const { username, id } = useParams()
  const [tweet, setTweet] = useState<TweetData | null>(null)
  const [comments, setComments] = useState<CommentData[]>([])
  const [isNotFound, setIsNotFound] = useState(false)

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
        } else if (tweetResponse.status === 404 || commentsResponse.status === 404) {
          setIsNotFound(true)
          setTweet(mockTweet)
          setComments(mockComments)
        } else {
          // For other errors, use mock data
          setTweet(mockTweet)
          setComments(mockComments)
        }
      } catch (err) {
        // If there's an error, use mock data
        setTweet(mockTweet)
        setComments(mockComments)
      }
    }

    fetchTweetAndComments()
  }, [id])

  if (!tweet) {
    return <div className="p-4">Loading tweet...</div>
  }

  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Tweet</h1>
      </header>
      {isNotFound && (
        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
          <p className="font-bold">Note:</p>
          <p>We couldn't find the requested tweet. Showing an example tweet instead.</p>
        </div>
      )}
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

