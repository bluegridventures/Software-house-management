"use client"

import { useState } from "react"
import { useUser } from "@/components/user-context"

export default function ProjectsPage() {
  const { isAdmin } = useUser()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [projects, setProjects] = useState([
    {
      id: "PN0001265",
      name: "Medical App (iOS native)",
      date: "Sep 12, 2024",
      priority: "High",
      status: "In Progress",
      tasks: { all: 34, active: 13 },
      team: ["Alice", "Bob", "Carol"],
      progress: 65,
    },
    {
      id: "PN0001221",
      name: "Food Delivery Service",
      date: "Sep 10, 2024",
      priority: "Medium",
      status: "In Progress",
      tasks: { all: 50, active: 24 },
      team: ["David", "Emma", "Frank"],
      progress: 45,
    },
    {
      id: "PN0001290",
      name: "E-Commerce Platform",
      date: "May 28, 2024",
      priority: "High",
      status: "Completed",
      tasks: { all: 23, active: 0 },
      team: ["Grace", "Henry", "Iris"],
      progress: 100,
    },
    {
      id: "PN0001312",
      name: "Analytics Dashboard",
      date: "Nov 1, 2024",
      priority: "Medium",
      status: "Planning",
      tasks: { all: 18, active: 5 },
      team: ["Jack", "Kate"],
      progress: 15,
    },
    {
      id: "PN0001345",
      name: "Mobile App v2.0",
      date: "Oct 15, 2024",
      priority: "Low",
      status: "On Hold",
      tasks: { all: 42, active: 8 },
      team: ["Leo", "Mia", "Noah"],
      progress: 30,
    },
  ])

  const handleStatusChange = (id: string, newStatus: string) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, status: newStatus } : p)))
    setEditingId(null)
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
            All Projects
          </h1>
          <p className="text-slate-600">Manage and track all your software house projects</p>
        </div>
        {isAdmin && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
            <p className="text-sm font-medium text-blue-700">Edit Mode: Enabled</p>
            <p className="text-xs text-blue-600">Click status badges to edit</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-slate-500 text-xs mb-1">{project.id}</p>
                <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : project.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {project.priority}
                </span>
                {isAdmin ? (
                  <select
                    value={project.status}
                    onChange={(e) => handleStatusChange(project.id, e.target.value)}
                    className={`text-xs font-semibold px-3 py-1 rounded-full border-2 cursor-pointer transition-colors ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700 border-green-300"
                        : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-700 border-blue-300"
                          : project.status === "Planning"
                            ? "bg-purple-100 text-purple-700 border-purple-300"
                            : "bg-gray-100 text-gray-700 border-gray-300"
                    }`}
                  >
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Planning</option>
                    <option>On Hold</option>
                  </select>
                ) : (
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : project.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : project.status === "Planning"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.status}
                  </span>
                )}
              </div>
            </div>

            <p className="text-slate-600 text-sm mb-4">Started {project.date}</p>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-600">Progress</span>
                <span className="text-sm font-semibold text-slate-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-600 text-xs mb-2">All Tasks</p>
                <p className="text-2xl font-bold text-slate-900">{project.tasks.all}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-600 text-xs mb-2">Active</p>
                <p className="text-2xl font-bold text-slate-900">{project.tasks.active}</p>
              </div>
              <div className="col-span-2 bg-slate-50 rounded-lg p-4">
                <p className="text-slate-600 text-xs mb-2">Team Members</p>
                <div className="flex -space-x-2">
                  {project.team.map((member, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      title={member}
                    >
                      {member[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
