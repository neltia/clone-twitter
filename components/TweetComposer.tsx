"use client"

import type React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarBlank, FilmStrip, Image, ListBullets, Smiley } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function TweetComposer() {
  const [tweet, setTweet] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: tweet }),
      })
      if (response.ok) {
        setTweet("")
        router.push("/posts")
      } else {
        console.error("Failed to create post")
      }
    } catch (error) {
      console.error("Error creating post:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b border-border">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-4">
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's happening?"
            className="w-full bg-transparent text-lg resize-none focus:outline-none min-h-[120px]"
          />
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <div className="flex space-x-2 text-primary">
              <button type="button" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <Image size={20} weight="fill" />
              </button>
              <button type="button" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <FilmStrip size={20} weight="fill" />
              </button>
              <button type="button" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <ListBullets size={20} weight="fill" />
              </button>
              <button type="button" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <Smiley size={20} weight="fill" />
              </button>
              <button type="button" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                <CalendarBlank size={20} weight="fill" />
              </button>
            </div>
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-full font-bold transition-colors"
              disabled={!tweet.trim()}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

