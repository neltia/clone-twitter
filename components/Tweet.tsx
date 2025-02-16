import { ChatCircle, ArrowsClockwise, Heart, Export, User } from "@phosphor-icons/react"

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
  return (
    <article className="p-4 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          {tweet.author.avatar ? (
            <img
              src={tweet.author.avatar || "/placeholder.svg"}
              alt={tweet.author.name}
              className="w-full h-full rounded-full"
            />
          ) : (
            <User size={24} weight="fill" className="text-muted-foreground" />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center space-x-1">
            <h3 className="font-bold hover:underline">{tweet.author.name}</h3>
            <span className="text-muted-foreground">@{tweet.author.username}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground hover:underline">{tweet.timestamp}</span>
          </div>
          <p className="text-[15px] leading-normal">{tweet.content}</p>
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

