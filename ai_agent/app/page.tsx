export default function Page() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 bg-muted p-4 border-r border-border">
        <h2 className="text-xl font-semibold mb-4">Conversations</h2>
        <ul className="space-y-2">
          <li className="p-2 rounded hover:bg-muted-foreground cursor-pointer">
            Chat 1
          </li>
          <li className="p-2 rounded hover:bg-muted-foreground cursor-pointer">
            Chat 2
          </li>
          <li className="p-2 rounded hover:bg-muted-foreground cursor-pointer">
            New Chat
          </li>
        </ul>
      </aside>

      {/* Chat Area */}
      <main className="flex flex-col flex-1">
        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="bg-muted p-4 rounded max-w-xl self-start">
            Hello! How can I help you today?
          </div>
          <div className="bg-primary text-primary-foreground p-4 rounded max-w-xl self-end">
            Tell me a joke.
          </div>
        </div>

        {/* Input Bar */}
        <div className="border-t border-border p-4">
          <form className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border border-border rounded bg-background"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
