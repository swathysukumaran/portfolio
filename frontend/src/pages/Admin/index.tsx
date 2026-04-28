import { useState, useEffect } from "react";
import {
  fetchMessages,
  markMessageRead,
  deleteMessage,
  type Message,
} from "../../lib/api";

const SESSION_KEY = "portfolio_admin_key";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const [adminKey, setAdminKey] = useState(
    () => sessionStorage.getItem(SESSION_KEY) || ""
  );
  const [keyInput, setKeyInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const isAuthed = Boolean(adminKey);
  const unreadCount = messages.filter((m) => !m.read).length;

  useEffect(() => {
    if (!isAuthed) return;
    setLoading(true);
    setFetchError(null);
    fetchMessages(adminKey)
      .then(setMessages)
      .catch((err) => {
        if (err.message === "Unauthorized") {
          setAuthError(true);
          setAdminKey("");
          sessionStorage.removeItem(SESSION_KEY);
        } else {
          setFetchError("Failed to load messages.");
        }
      })
      .finally(() => setLoading(false));
  }, [adminKey, isAuthed]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    sessionStorage.setItem(SESSION_KEY, keyInput);
    setAdminKey(keyInput);
    setKeyInput("");
    setAuthError(false);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAdminKey("");
    setMessages([]);
  }

  async function handleMarkRead(id: string) {
    try {
      const updated = await markMessageRead(id, adminKey);
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, read: updated.read } : m))
      );
    } catch {
      /* ignore */
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteMessage(id, adminKey);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch {
      /* ignore */
    }
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="bg-surface border border-border rounded-2xl p-8 w-full max-w-sm">
          <h1 className="font-heading font-bold text-text text-xl mb-1">
            Admin
          </h1>
          <p className="text-muted text-sm mb-6 font-body">
            Enter your admin key to view messages.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="Admin key"
              required
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text text-sm font-body focus:outline-none focus:border-accent transition-colors"
            />
            {authError && (
              <p className="text-red-400 text-xs font-body">Invalid key.</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-bg rounded-lg text-sm font-medium font-body hover:bg-accent/90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text font-body">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-bg/80 backdrop-blur-md z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="font-heading font-bold text-text">Messages</h1>
            {unreadCount > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                {unreadCount} new
              </span>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-muted hover:text-accent transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {loading && (
          <div className="space-y-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-32 rounded-xl bg-surface border border-border animate-pulse"
              />
            ))}
          </div>
        )}

        {fetchError && <p className="text-muted text-sm">{fetchError}</p>}

        {!loading && !fetchError && messages.length === 0 && (
          <p className="text-muted text-sm">No messages yet.</p>
        )}

        {!loading && !fetchError && messages.length > 0 && (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`bg-surface rounded-xl p-5 border transition-colors ${
                  !msg.read ? "border-accent/30" : "border-border"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <p className="text-text font-medium text-sm">{msg.name}</p>
                    <a
                      href={`mailto:${msg.email}`}
                      className="text-accent text-xs hover:underline"
                    >
                      {msg.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {!msg.read && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                        New
                      </span>
                    )}
                    <span className="text-muted text-xs">
                      {formatDate(msg.createdAt)}
                    </span>
                  </div>
                </div>

                <p className="text-muted text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.message}
                </p>

                <div className="flex gap-3 mt-4">
                  {!msg.read && (
                    <button
                      onClick={() => handleMarkRead(msg._id)}
                      className="text-xs text-muted hover:text-accent transition border border-border hover:border-accent rounded-full px-3 py-1"
                    >
                      Mark read
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="text-xs text-muted hover:text-red-400 transition border border-border hover:border-red-400/50 rounded-full px-3 py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
