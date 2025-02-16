import dynamic from "next/dynamic"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarBlank, MapPin } from "@phosphor-icons/react"

const DynamicTabGroup = dynamic(() => import("@/components/TabGroup"), { ssr: false })

export default function Profile() {
  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Profile</h1>
      </header>

      <div className="border-b border-border">
        <div className="h-32 bg-muted"></div>
        <div className="px-4 pb-4">
          <Avatar className="w-32 h-32 border-4 border-background -mt-16 mb-3">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <h2 className="text-xl font-bold">Username</h2>
          <p className="text-muted-foreground">@username</p>

          <div className="flex items-center gap-4 mt-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarBlank size={16} />
              <span className="text-sm">Joined February 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span className="text-sm">Location</span>
            </div>
          </div>

          <div className="flex gap-4 mt-3">
            <p className="text-sm">
              <span className="font-bold text-foreground">0</span>{" "}
              <span className="text-muted-foreground">Following</span>
            </p>
            <p className="text-sm">
              <span className="font-bold text-foreground">0</span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </p>
          </div>
        </div>
      </div>

      <DynamicTabGroup
        tabs={[
          { label: "Posts", href: "/profile?tab=posts" },
          { label: "Replies", href: "/profile?tab=replies" },
          { label: "Highlights", href: "/profile?tab=highlights" },
          { label: "Media", href: "/profile?tab=media" },
          { label: "Likes", href: "/profile?tab=likes" },
        ]}
      />

      <div className="flex flex-col items-center justify-center min-h-[20vh] text-muted-foreground">
        <p className="text-xl font-bold">No posts yet</p>
        <p className="text-sm">When you post, it'll show up here.</p>
      </div>
    </div>
  )
}

