"use client"

import { Bell, BookmarkSimple, DotsThreeCircle, EnvelopeSimple, FileText, House, User } from "@phosphor-icons/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  poppinsFont: string
}

export default function Sidebar({ poppinsFont }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: House, label: "Home", href: "/" },
    { icon: Bell, label: "Notifications", href: "/notifications" },
    { icon: EnvelopeSimple, label: "Messages", href: "/messages" },
    { icon: BookmarkSimple, label: "Bookmarks", href: "/bookmarks" },
    { icon: FileText, label: "Lists", href: "/lists" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: DotsThreeCircle, label: "More", href: "#" },
  ]

  return (
    <aside className="w-[275px] flex justify-end pr-4 sticky top-0 h-screen">
      <div className="flex flex-col h-full w-[80%]">
        <Link href="/" className="p-3 hover:bg-secondary rounded-full w-fit">
          <span className={`${poppinsFont} text-2xl font-bold text-white`}>Neltia Twitter</span>
        </Link>

        <nav className="space-y-1 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center space-x-4 text-xl hover:bg-secondary rounded-full p-3 transition-colors duration-200 ${
                  isActive ? "font-bold" : ""
                }`}
              >
                <item.icon size={24} weight={isActive ? "fill" : "regular"} />
                <span className="text-lg">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <button className="bg-primary hover:bg-primary/90 text-white rounded-full py-3 px-6 text-lg font-bold mt-4 w-full">
          Post
        </button>
      </div>
    </aside>
  )
}

