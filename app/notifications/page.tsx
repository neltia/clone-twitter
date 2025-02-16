import NotificationsContent from "@/components/NotificationsContent"

export default function Notifications() {
  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Notifications</h1>
      </header>
      <NotificationsContent />
    </div>
  )
}

