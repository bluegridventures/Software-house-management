"use client"

import Workload from "@/components/workload"
import Projects from "@/components/projects"
import NearestEvents from "@/components/nearest-events"
import ActivityStream from "@/components/activity-stream"

interface DashboardPageProps {
  onNavigate?: (page: string) => void
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-slate-500 text-sm mb-1">Welcome back, Evan!</p>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm text-slate-700">Nov 16, 2025 - Dec 16, 2025</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Workload />
          <Projects onViewAll={() => onNavigate?.("Projects")} />
        </div>
        <div className="space-y-8">
          <NearestEvents onViewAll={() => onNavigate?.("Calendar")} />
          <ActivityStream onViewMore={() => onNavigate?.("Dashboard")} />
        </div>
      </div>
    </div>
  )
}
