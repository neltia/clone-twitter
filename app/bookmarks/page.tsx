export default function Bookmarks() {
  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Bookmarks</h1>
      </header>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground">
        <p className="text-xl font-bold">Save posts for later</p>
        <p className="text-sm">Bookmark posts to easily find them again in the future.</p>
      </div>
    </div>
  )
}

