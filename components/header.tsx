"use client"

import { useUser } from "@/components/user-context"

interface HeaderProps {
  onLogout?: () => void
}

export default function Header({ onLogout }: HeaderProps) {
  const { user, logout } = useUser()

  const handleLogout = () => {
    logout()
    onLogout?.()
  }

  return (
    <div className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-600 hover:text-slate-900 transition-colors hover:bg-slate-100 p-2 rounded-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-md cursor-pointer hover:shadow-lg transition-shadow"></div>
          <div className="flex items-center gap-2">
            <div>
              <button className="flex items-center gap-1 hover:bg-slate-100 px-2 py-1 rounded-lg transition-colors">
                <span className="text-sm font-medium text-slate-900">{user?.name || "User"}</span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    user?.role === "admin" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user?.role === "admin" ? "Admin" : "User"}
                </span>
              </button>
            </div>
            <button
              onClick={handleLogout}
              className="text-slate-600 hover:text-red-600 transition-colors hover:bg-red-50 p-2 rounded-lg"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
