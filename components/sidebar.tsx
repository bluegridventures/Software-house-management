"use client"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
  onLogout: () => void
}

const menuItems = [
  { icon: "grid", label: "Dashboard" },
  { icon: "folder", label: "Projects" },
  { icon: "wallet", label: "Finances" },
  { icon: "calendar", label: "Calendar" },
  { icon: "plane", label: "Vacations" },
  { icon: "users", label: "Employees" },
  { icon: "info", label: "Info Portal" },
]

export default function Sidebar({ currentPage, onPageChange, onLogout }: SidebarProps) {
  return (
    <div className="w-56 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col shadow-2xl border-r border-slate-700">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <button
          onClick={() => onPageChange("Dashboard")}
          className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transform"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H5.5A2 2 0 0 0 3.5 3.5v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-6-4.5z" />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onPageChange(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
              currentPage === item.label
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-l-4 border-blue-300"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            {item.icon === "grid" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm11 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM3 14a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm11 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" />
              </svg>
            )}
            {item.icon === "folder" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a2 2 0 012-2h6a1 1 0 01.707.293l2.828 2.829a1 1 0 01.21.33h2.25A2 2 0 0117 9v8a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
              </svg>
            )}
            {item.icon === "wallet" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            )}
            {item.icon === "calendar" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a1 1 0 00-1 1v2H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v2H7V3a1 1 0 00-1-1z" />
              </svg>
            )}
            {item.icon === "plane" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2.101a7.002 7.002 0 0111.601-2.566 1 1 0 11-1.423 1.415A5.002 5.002 0 005.09 9H7a1 1 0 010 2H3a1 1 0 01-1-1z" />
              </svg>
            )}
            {item.icon === "users" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6a4 4 0 110 8H3a4 4 0 010-8h6z" />
              </svg>
            )}
            {item.icon === "info" && (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            )}
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Support & Logout */}
      <div className="p-4 border-t border-slate-700 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer hover:shadow-lg transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="text-sm font-medium">Support</span>
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}
