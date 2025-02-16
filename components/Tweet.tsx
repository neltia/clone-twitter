import { ArrowsClockwise, ChatCircle, Export, Heart } from "@phosphor-icons/react"
import Link from "next/link"

interface TweetProps {
  tweet: {
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
}

export default function Tweet({ tweet }: TweetProps) {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <article className="p-4 border-b border-border hover:bg-secondary/50 transition-colors">
      <div className="flex space-x-3">
        <Link
          href={`/${tweet.author.username}`}
          className="flex-shrink-0"
          onClick={stopPropagation}
        >
          <img
            src={tweet.author.avatar || "/placeholder.svg"}
            alt=""
            className="w-12 h-12 rounded-full hover:opacity-80"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1">
            <Link
              href={`/${tweet.author.username}`}
              className="font-bold hover:underline"
              onClick={stopPropagation}
            >
              {tweet.author.name}
            </Link>
            <Link
              href={`/${tweet.author.username}`}
              className="text-muted-foreground hover:underline"
              onClick={stopPropagation}
            >
              @{tweet.author.username}
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href={`/${tweet.author.username}/status/${tweet.id}`}
              className="text-muted-foreground hover:underline"
            >
              {tweet.timestamp}
            </Link>
          </div>
          <Link href={`/${tweet.author.username}/status/${tweet.id}`} className="block">
            <p className="text-[15px] leading-normal whitespace-pre-wrap break-words">
              {tweet.content}
            </p>
          </Link>
          <div className="flex justify-between items-center pt-3 text-muted-foreground max-w-md">
            <button className="flex items-center space-x-2 group">
              <div className="p-2 group-hover:bg-blue-500/10 group-hover:text-blue-500 rounded-full transition-colors">
                <ChatCircle size={20} weight="regular" />
              </div>
              <span className="text-sm group-hover:text-blue-500">{tweet.replies}</span>
            </button>
            <button className="flex items-center space-x-2 group">
              <div className="p-2 group-hover:bg-green-500/10 group-hover:text-green-500 rounded-full transition-colors">
                <ArrowsClockwise size={20} weight="regular" />
              </div>
              <span className="text-sm group-hover:text-green-500">{tweet.retweets}</span>
            </button>
            <button className="flex items-center space-x-2 group">
              <div className="p-2 group-hover:bg-pink-500/10 group-hover:text-pink-500 rounded-full transition-colors">
                <Heart size={20} weight="regular" />
              </div>
              <span className="text-sm group-hover:text-pink-500">{tweet.likes}</span>
            </button>
            <button className="group">
              <div className="p-2 group-hover:bg-blue-500/10 group-hover:text-blue-500 rounded-full transition-colors">
                <Export size={20} weight="regular" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

