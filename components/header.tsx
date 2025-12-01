'use client'

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
    <div
      className="
        bg-white border-b border-slate-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-3
        flex flex-wrap items-center justify-between gap-2 sm:gap-3 md:gap-4 shadow-sm
      "
    >
      {/* Search Bar */}
      <div className="flex-1 min-w-[120px] max-w-sm w-full">
        <div className="relative">
          <svg
            className="absolute left-2 sm:left-3 md:left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-slate-400"
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
            className="
              w-full pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 md:pr-4 py-1.5 sm:py-2 md:py-2
              border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500
              focus:ring-1 focus:ring-blue-500 text-xs sm:text-sm md:text-sm transition-all
            "
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto justify-between sm:justify-end">
        {/* Bell Icon */}
        <button className="text-slate-600 hover:text-slate-900 transition-colors hover:bg-slate-100 p-1.5 sm:p-2 rounded-lg">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        {/* Profile & Logout */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 pl-2 sm:pl-4 md:pl-4 border-l border-slate-200 max-sm:w-full max-sm:justify-between">
          {/* Avatar */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-md cursor-pointer hover:shadow-lg transition-shadow"></div>

          {/* User Info */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-2 max-sm:flex-col max-sm:items-start">
            <button className="flex items-center gap-1 hover:bg-slate-100 px-2 py-0.5 rounded-lg transition-colors">
              <span className="text-xs sm:text-sm md:text-sm font-medium text-slate-900">{user?.name || "User"}</span>
              <span
                className={`
                  text-[10px] sm:text-xs md:text-xs font-semibold px-1.5 py-0.5 rounded-full
                  ${user?.role === "admin" ? "bg-red-100 text-red-700" : "bg-blue-100 text-blue-700"}
                `}
              >
                {user?.role === "admin" ? "Admin" : "User"}
              </span>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-slate-600 hover:text-red-600 transition-colors hover:bg-red-50 p-1.5 sm:p-2 md:p-2 rounded-lg"
            title="Logout"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}
