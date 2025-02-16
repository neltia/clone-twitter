"use client"
import TabGroup from "./TabGroup"

export default function ProfileContent() {
  return (
    <>
      <TabGroup
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
    </>
  )
}

