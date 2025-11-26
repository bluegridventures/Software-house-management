"use client"

import { useState } from "react"
import { useUser } from "@/components/user-context"

export default function EmployeesPage() {
  const { isAdmin } = useUser()
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      role: "Senior Developer",
      department: "Engineering",
      email: "alice@company.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "UI/UX Designer",
      department: "Design",
      email: "bob@company.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Carol White",
      role: "Project Manager",
      department: "Management",
      email: "carol@company.com",
      status: "Active",
    },
    {
      id: 4,
      name: "David Chen",
      role: "Backend Developer",
      department: "Engineering",
      email: "david@company.com",
      status: "On Leave",
    },
    {
      id: 5,
      name: "Emma Davis",
      role: "QA Engineer",
      department: "Quality",
      email: "emma@company.com",
      status: "Active",
    },
    {
      id: 6,
      name: "Frank Miller",
      role: "DevOps Engineer",
      department: "Infrastructure",
      email: "frank@company.com",
      status: "Active",
    },
    {
      id: 7,
      name: "Grace Lee",
      role: "Data Analyst",
      department: "Analytics",
      email: "grace@company.com",
      status: "Active",
    },
    {
      id: 8,
      name: "Henry Wilson",
      role: "Frontend Developer",
      department: "Engineering",
      email: "henry@company.com",
      status: "Active",
    },
  ])

  const handleStatusChange = (id: number, newStatus: string) => {
    setEmployees(employees.map((e) => (e.id === id ? { ...e, status: newStatus } : e)))
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
            Employees
          </h1>
          <p className="text-slate-600">Manage team members and their information</p>
        </div>
        {isAdmin && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2">
            <p className="text-sm font-medium text-red-700">Admin Mode</p>
            <p className="text-xs text-red-600">Click status to modify</p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Department</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-slate-900">{emp.name}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{emp.role}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{emp.department}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{emp.email}</td>
                <td className="px-6 py-4">
                  {isAdmin ? (
                    <select
                      value={emp.status}
                      onChange={(e) => handleStatusChange(emp.id, e.target.value)}
                      className={`text-xs font-semibold px-3 py-1 rounded-full border-2 cursor-pointer transition-colors ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700 border-green-300"
                          : "bg-orange-100 text-orange-700 border-orange-300"
                      }`}
                    >
                      <option>Active</option>
                      <option>On Leave</option>
                      <option>Inactive</option>
                    </select>
                  ) : (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        emp.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
