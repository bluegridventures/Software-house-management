'use client'

import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger visible only on sm and md */}
      <button
        className="sm:block md:block lg:hidden fixed top-3 left-3 z-50 bg-gray-200 text-gray-800 p-1.5 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          w-56 sm:w-52 max-sm:w-48 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col shadow-2xl border-r border-slate-700
          max-sm:fixed max-sm:z-40 max-sm:h-full max-sm:top-0 max-sm:left-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300
          lg:translate-x-0 lg:static
        `}
      >
        {/* Logo */}
        <div className="p-4 sm:p-5 border-b border-slate-700 flex max-sm:justify-center">
          <button
            onClick={() => onPageChange("Dashboard")}
            className="
              w-12 h-12 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center
              text-white font-bold shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105
            "
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H5.5A2 2 0 0 0 3.5 3.5v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9l-6-4.5z" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 max-sm:space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                onPageChange(item.label);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg cursor-pointer transition-all duration-200
                max-sm:text-xs text-sm
                ${currentPage === item.label
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg border-l-4 border-blue-300"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }
              `}
            >
              {/* ICONS */}
              {item.icon === "grid" && (
                <svg className="w-4 h-4 sm:w-5 sm:h-5 max-sm:w-4 max-sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm11 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM3 14a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm11 0a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z" />
                </svg>
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Support & Logout */}
        <div className="p-3 sm:p-4 border-t border-slate-700 space-y-1 sm:space-y-2 max-sm:space-y-1">
          <button className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white cursor-pointer hover:shadow-lg transition-all">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.172l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="text-sm max-sm:text-xs font-medium">Support</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-all"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 max-sm:w-4 max-sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-sm max-sm:text-xs font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}
