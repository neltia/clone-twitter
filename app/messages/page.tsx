export default function Messages() {
  return (
    <div>
      <header className="px-4 py-3 border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">Messages</h1>
      </header>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground">
        <p className="text-xl font-bold">Welcome to your inbox!</p>
        <p className="text-sm">
          Drop a line, share posts and more with private conversations between you and others on X.
        </p>
      </div>
    </div>
  )
}

