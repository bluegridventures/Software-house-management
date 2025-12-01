"use client"

import { useState } from "react"
import { useUser } from "@/components/user-context"

export default function EmployeesPage() {
  const { isAdmin } = useUser()
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Henry Dustin",
      role: "Senior Intern",
      department: "Web & App Development",
      email: "alice@company.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Aliya",
      role: "Junior Intern",
      department: "Web Developement",
      email: "aliy.atanoli07@gmail.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Isma Rani",
      role: "Junior Intern",
      department: "AI / ML",
      email: "ismazahra163@gmail.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Olliya Dilawar",
      role: "Junior Intern",
      department: "Web Development",
      email: "olliyadilawar11@gmail.com",
      status: "Active",
    },
    {
      id: 5,
      name: "Laiba",
      role: "Junior Intern",
      department: "AI / ML",
      email: "laibajavedofficial1108@gmail.com",
      status: "Active",
    },
    {
      id: 6,
      name: "Fallak Sajad",
      role: "Junior Intern",
      department: "AI / ML",
      email: "frank@company.com",
      status: "Active",
    },
    {
      id: 7,
      name: "Ikhlaq Ahmad",
      role: "Junior Intern",
      department: "AI / ML",
      email: "grace@company.com",
      status: "Active",
    },
    {
      id: 8,
      name: "Saqib Jadoon",
      role: "Junior Intern",
      department: "Web Developement",
      email: "henry@company.com",
      status: "Active",
    },
  ])

  const handleStatusChange = (id: number, newStatus: string) => {
    setEmployees(employees.map((e) => (e.id === id ? { ...e, status: newStatus } : e)))
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
            Employees
          </h1>
          <p className="text-sm sm:text-base text-slate-600">Manage team members and their information</p>
        </div>
        {isAdmin && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-3 sm:px-4 py-2">
            <p className="text-xs sm:text-sm font-medium text-red-700">Admin Mode</p>
            <p className="text-xs text-red-600">Click status to modify</p>
          </div>
        )}
      </div>

      {/* Mobile Card View */}
      <div className="block lg:hidden space-y-4">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">{emp.name}</h3>
                <p className="text-sm text-slate-600">{emp.role}</p>
              </div>
              {isAdmin ? (
                <select
                  value={emp.status}
                  onChange={(e) => handleStatusChange(emp.id, e.target.value)}
                  className={`text-xs font-semibold px-2 py-1 rounded-full border-2 cursor-pointer transition-colors ${
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
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    emp.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {emp.status}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="text-slate-500 font-medium w-24">Department:</span>
                <span className="text-slate-700">{emp.department}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-slate-500 font-medium w-24">Email:</span>
                <span className="text-slate-700 break-all">{emp.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-white rounded-lg overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 xl:px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                <th className="px-4 xl:px-6 py-3 text-left text-sm font-semibold text-slate-900">Role</th>
                <th className="px-4 xl:px-6 py-3 text-left text-sm font-semibold text-slate-900">Department</th>
                <th className="px-4 xl:px-6 py-3 text-left text-sm font-semibold text-slate-900">Email</th>
                <th className="px-4 xl:px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 xl:px-6 py-4 text-sm font-medium text-slate-900">{emp.name}</td>
                  <td className="px-4 xl:px-6 py-4 text-sm text-slate-600">{emp.role}</td>
                  <td className="px-4 xl:px-6 py-4 text-sm text-slate-600">{emp.department}</td>
                  <td className="px-4 xl:px-6 py-4 text-sm text-slate-600">{emp.email}</td>
                  <td className="px-4 xl:px-6 py-4">
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
    </div>
  )
}