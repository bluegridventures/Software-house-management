"use client"

import { useState } from "react"

export default function MessengerPage() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1)
  const [showChat, setShowChat] = useState(false)

  const conversations = [
    { id: 1, name: "Engineering Team", lastMessage: "Sprint planning tomorrow at 10 AM", time: "2 min ago", unread: 3 },
    { id: 2, name: "Alice Johnson", lastMessage: "Can you review the API design?", time: "15 min ago", unread: 0 },
    { id: 3, name: "Design Team", lastMessage: "New mockups are ready for review", time: "1 hour ago", unread: 5 },
    { id: 4, name: "Bob Smith", lastMessage: "Thanks for the feedback", time: "3 hours ago", unread: 0 },
    { id: 5, name: "Project Updates", lastMessage: "Milestone 2 completed successfully", time: "Yesterday", unread: 2 },
  ]

  const selectedConv = conversations.find(c => c.id === selectedConversation)

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
          Messenger
        </h1>
        <p className="text-sm sm:text-base text-slate-600">Team communication and messaging</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 h-[calc(100vh-200px)] sm:h-[600px]">
        {/* Conversations List */}
        <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col ${showChat ? 'hidden lg:flex' : 'flex'}`}>
          <div className="p-3 sm:p-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => {
                  setSelectedConversation(conv.id)
                  setShowChat(true)
                }}
                className="p-3 sm:p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-slate-900 text-sm">{conv.name}</h3>
                  {conv.unread > 0 && (
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {conv.unread}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-xs truncate">{conv.lastMessage}</p>
                <p className="text-slate-400 text-xs mt-1">{conv.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className={`lg:col-span-2 bg-white rounded-lg border border-slate-200 flex flex-col ${showChat ? 'flex' : 'hidden lg:flex'}`}>
          <div className="p-3 sm:p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
            <button
              onClick={() => setShowChat(false)}
              className="lg:hidden text-slate-600 hover:text-slate-900"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <h2 className="font-semibold text-slate-900 text-sm sm:text-base">{selectedConv?.name || "Engineering Team"}</h2>
              <p className="text-slate-600 text-xs sm:text-sm">12 members</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
            {[1, 2, 3, 4].map((msg) => (
              <div key={msg} className={`flex ${msg % 2 === 0 ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] sm:max-w-xs px-3 sm:px-4 py-2 rounded-lg ${
                    msg % 2 === 0
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-slate-100 text-slate-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm">This is a sample message in the chat</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 sm:p-4 border-t border-slate-200 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 whitespace-nowrap">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}