"use client"

import { useState } from "react"
import { useUser } from "@/components/user-context"

const projectsFinance = [
  {
    id: "PN0001265",
    name: "Medical App (iOS native)",
    type: "Monthly",
    totalCost: 45000,
    teamSize: 5,
    monthlyCost: 15000,
    teamMembers: [
      { name: "Sarah Chen", role: "Lead Dev", salary: 6000 },
      { name: "Mike Johnson", role: "Senior Dev", salary: 5500 },
      { name: "Lisa Park", role: "UI Designer", salary: 3500 },
      { name: "Tom Brady", role: "QA Engineer", salary: 3000 },
      { name: "Emma Watson", role: "Junior Dev", salary: 2000 },
    ],
  },
  {
    id: "PN0001221",
    name: "Food Delivery Service",
    type: "Fixed",
    totalCost: 120000,
    teamSize: 8,
    teamMembers: [
      { name: "Alex Rodriguez", role: "Project Manager", salary: 8000 },
      { name: "Jennifer Lee", role: "Lead Dev", salary: 7000 },
      { name: "David Smith", role: "Backend Dev", salary: 6500 },
      { name: "Sofia Martinez", role: "Backend Dev", salary: 6500 },
      { name: "James Wilson", role: "Frontend Dev", salary: 5500 },
      { name: "Olivia Brown", role: "Frontend Dev", salary: 5500 },
      { name: "Chris Taylor", role: "DevOps", salary: 6000 },
      { name: "Rachel White", role: "QA Lead", salary: 5000 },
    ],
  },
  {
    id: "PN0001290",
    name: "E-Commerce Platform",
    type: "Monthly",
    totalCost: 35000,
    teamSize: 4,
    monthlyCost: 12000,
    teamMembers: [
      { name: "Kevin Chang", role: "Full Stack Dev", salary: 5500 },
      { name: "Nancy Patel", role: "Full Stack Dev", salary: 5500 },
      { name: "Marcus Johnson", role: "Designer", salary: 3000 },
      { name: "Elena Garcia", role: "QA", salary: 2000 },
    ],
  },
]

export default function FinancesPage() {
  const { isAdmin } = useUser()
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [projects, setProjects] = useState(projectsFinance)

  const handleSalaryChange = (projectId: string, memberIndex: number, newSalary: number) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              teamMembers: p.teamMembers.map((m, idx) => (idx === memberIndex ? { ...m, salary: newSalary } : m)),
            }
          : p,
      ),
    )
  }

  const totalRevenue = projects.reduce((sum, p) => sum + (p.type === "Monthly" ? p.monthlyCost : p.totalCost / 12), 0)
  const totalTeamMembers = projects.reduce((sum, p) => sum + p.teamSize, 0)

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-slate-500 text-xs sm:text-sm mb-1">Financial Overview</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Project Finances
          </h1>
        </div>
        {isAdmin && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 sm:px-4 py-2">
            <p className="text-xs sm:text-sm font-medium text-amber-700">Finance Admin</p>
            <p className="text-xs text-amber-600">Salary editable</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm mb-2">Total Monthly Revenue</p>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">${(totalRevenue / 1000).toFixed(0)}k</p>
          <p className="text-xs text-green-600 mt-2">+5% from last month</p>
        </div>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm mb-2">Active Projects</p>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">{projects.length}</p>
          <p className="text-xs text-slate-500 mt-2">2 Monthly, 1 Fixed</p>
        </div>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm mb-2">Total Team Size</p>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">{totalTeamMembers}</p>
          <p className="text-xs text-slate-500 mt-2">Across all projects</p>
        </div>
        <div className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm">
          <p className="text-slate-600 text-xs sm:text-sm mb-2">Average Project Value</p>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900">
            $
            {(
              projects.reduce((sum, p) => sum + (p.type === "Monthly" ? p.monthlyCost * 3 : p.totalCost), 0) /
              projects.length /
              1000
            ).toFixed(0)}
            k
          </p>
          <p className="text-xs text-slate-500 mt-2">3-month average</p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              className="w-full p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between hover:bg-slate-50 transition-colors gap-4"
            >
              <div className="flex-1 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div>
                    <p className="text-slate-600 text-xs mb-1">{project.id}</p>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900">{project.name}</h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                      project.type === "Monthly" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 sm:mr-4">
                <div>
                  <p className="text-slate-600 text-xs mb-1">Team Size</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900">{project.teamSize}</p>
                </div>
                <div>
                  <p className="text-slate-600 text-xs mb-1">
                    {project.type === "Monthly" ? "Monthly Cost" : "Total Cost"}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900">
                    ${(project.type === "Monthly" ? project.monthlyCost : project.totalCost).toLocaleString()}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-slate-600 transition-transform ${expandedProject === project.id ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </button>

            {expandedProject === project.id && (
              <div className="border-t border-slate-200 p-4 sm:p-6 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <p className="text-slate-600 text-sm mb-3 font-semibold">Payment Structure</p>
                    {project.type === "Monthly" ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Monthly Cost:</span>
                          <span className="font-semibold">${project.monthlyCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Quarterly (3 months):</span>
                          <span className="font-semibold">${(project.monthlyCost * 3).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Annual:</span>
                          <span className="font-semibold text-green-600">
                            ${(project.monthlyCost * 12).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Fixed Cost:</span>
                          <span className="font-semibold">${project.totalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Monthly Equivalent:</span>
                          <span className="font-semibold">${Math.round(project.totalCost / 12).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Payment Status:</span>
                          <span className="font-semibold text-blue-600">In Progress</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-3 font-semibold">Team Allocation</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Total Team:</span>
                        <span className="font-semibold">{project.teamSize} members</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Total Monthly Salary:</span>
                        <span className="font-semibold">
                          ${project.teamMembers.reduce((sum, m) => sum + m.salary, 0).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Avg Salary Per Member:</span>
                        <span className="font-semibold">
                          $
                          {Math.round(
                            project.teamMembers.reduce((sum, m) => sum + m.salary, 0) / project.teamSize,
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <p className="text-slate-600 text-sm font-semibold mb-3">Team Members & Compensation</p>
                  <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <div className="inline-block min-w-full align-middle">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-slate-300 bg-slate-100">
                            <th className="text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700">Name</th>
                            <th className="text-left px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700">Role</th>
                            <th className="text-right px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">
                              {isAdmin ? "Monthly Salary (Edit)" : "Monthly Salary"}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.teamMembers.map((member, idx) => (
                            <tr key={idx} className="border-b border-slate-200 hover:bg-white transition-colors">
                              <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-900">{member.name}</td>
                              <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-600">{member.role}</td>
                              <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-slate-900 text-right">
                                {isAdmin ? (
                                  <input
                                    type="number"
                                    value={member.salary}
                                    onChange={(e) =>
                                      handleSalaryChange(project.id, idx, Number.parseInt(e.target.value) || 0)
                                    }
                                    className="w-20 sm:w-24 px-2 py-1 border border-blue-300 rounded bg-blue-50 text-right text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                ) : (
                                  `$${member.salary.toLocaleString()}`
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-4 bg-white rounded-lg border border-slate-200">
                  <p className="text-slate-600 text-sm font-semibold mb-2">Profitability Analysis</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      {project.type === "Monthly" ? (
                        <>
                          <p className="text-xs text-slate-600 mb-1">Monthly Revenue vs Costs</p>
                          <p className="text-base sm:text-lg font-bold text-green-600">
                            $
                            {(
                              project.monthlyCost - project.teamMembers.reduce((sum, m) => sum + m.salary, 0)
                            ).toLocaleString()}{" "}
                            profit
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs text-slate-600 mb-1">Total Revenue vs Team Cost</p>
                          <p className="text-base sm:text-lg font-bold text-green-600">
                            $
                            {(
                              project.totalCost - project.teamMembers.reduce((sum, m) => sum + m.salary * 12, 0)
                            ).toLocaleString()}{" "}
                            total profit
                          </p>
                        </>
                      )}
                    </div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
                      {project.type === "Monthly"
                        ? Math.round(
                            ((project.monthlyCost - project.teamMembers.reduce((sum, m) => sum + m.salary, 0)) /
                              project.monthlyCost) *
                              100,
                          )
                        : Math.round(
                            ((project.totalCost - project.teamMembers.reduce((sum, m) => sum + m.salary * 12, 0)) /
                              project.totalCost) *
                              100,
                          )}
                      %
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}