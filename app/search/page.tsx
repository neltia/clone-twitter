"use client"
import Tweet from "@/components/Tweet"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MoreHorizontal } from 'lucide-react'
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface SearchTab {
  id: string
  label: string
  href: string
}

const searchTabs: SearchTab[] = [
  { id: "top", label: "인기", href: "?tab=top" },
  { id: "latest", label: "최신", href: "?tab=latest" },
  { id: "people", label: "사용자", href: "?tab=people" },
  { id: "media", label: "미디어", href: "?tab=media" },
  { id: "lists", label: "리스트", href: "?tab=lists" },
]

// Mock tweets data
const mockTweets = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
      avatar: "/placeholder.svg",
    },
    content: "Just had an amazing experience with the new feature! #technology #innovation",
    timestamp: "2h",
    likes: 42,
    retweets: 12,
    replies: 5,
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/placeholder.svg",
    },
    content: "Working on something exciting! Can't wait to share it with everyone 🚀",
    timestamp: "4h",
    likes: 128,
    retweets: 34,
    replies: 15,
  },
]

export default function Search() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")
  const activeTab = searchParams.get("tab") || "top"

  // Mock user data
  const users = [
    {
      name: "user01",
      username: "user01",
      avatar: "/placeholder.svg",
      verified: true,
      bio: "테스트용 유저 소개입니다.",
    },
    {
      name: "user02",
      username: "user02",
      avatar: "/placeholder.svg",
      verified: true,
      bio: "테스트용 유저 소개입니다.",
    },
    {
      name: "user03",
      username: "user03",
      avatar: "/placeholder.svg",
      verified: false,
      bio: "테스트용 유저 소개입니다.",
    },
  ]

  return (
    <div className="min-h-screen flex">
      {/* Main content */}
      <div className="flex-1 max-w-[600px] border-l border-border">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="flex items-center px-4 py-3">
            <Link href="/" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex-1">
              <input
                type="search"
                placeholder="검색"
                defaultValue={query}
                className="w-full bg-secondary rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="ml-4">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          {/* Tabs */}
          <div className="flex">
            {searchTabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.href}
                className={`flex-1 text-center py-3 relative ${
                  activeTab === tab.id
                    ? "font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-primary after:rounded-full"
                    : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </header>

        {/* Search results */}
        <div className="divide-y divide-border">
          {/* User results */}
          {users.map((user) => (
            <div key={user.username} className="p-4 hover:bg-secondary/50 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Link href={`/${user.username}`} className="hover:opacity-80">
                    <img src={user.avatar || "/placeholder.svg"} alt="" className="w-12 h-12 rounded-full" />
                  </Link>
                  <div>
                    <div className="flex items-center gap-1">
                      <Link href={`/${user.username}`} className="hover:underline">
                        <span className="font-bold">{user.name}</span>
                      </Link>
                      {user.verified && (
                        <span className="text-primary">
                          <svg viewBox="0 0 22 22" className="h-5 w-5 fill-current">
                            <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
                          </svg>
                        </span>
                      )}
                      <Link href={`/${user.username}`} className="hover:underline">
                        <span className="text-muted-foreground">@{user.username}</span>
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>
                  </div>
                </div>
                <Button variant="outline" className="rounded-full">
                  팔로우
                </Button>
              </div>
            </div>
          ))}

          {/* Tweet results */}
          {mockTweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </div>
    </div>
  )
}

