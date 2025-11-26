"use client"

const employees = [
  { name: "Shawn Stone", role: "UI/UX Designer", level: "Middle", image: "bg-pink-300" },
  { name: "Randy Delgado", role: "UI/UX Designer", level: "Junior", image: "bg-yellow-300" },
  { name: "Emily Tyler", role: "Copywriter", level: "Middle", image: "bg-purple-400" },
  { name: "Louis Castro", role: "Copywriter", level: "Senior", image: "bg-teal-300" },
  { name: "Blake Silva", role: "iOS Developer", level: "Senior", image: "bg-blue-300" },
  { name: "Joel Phillips", role: "UI/UX Designer", level: "Middle", image: "bg-green-300" },
  { name: "Wayne Marsh", role: "Copywriter", level: "Junior", image: "bg-indigo-300" },
  { name: "Oscar Holloway", role: "UI/UX Designer", level: "Middle", image: "bg-rose-300" },
]

export default function Workload() {
  return (
    <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Workload</h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
          View all
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {employees.map((emp, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div
              className={`w-16 h-16 rounded-full ${emp.image} mb-3 flex items-center justify-center border-4 border-white shadow-md`}
            ></div>
            <h3 className="font-semibold text-gray-900 text-sm">{emp.name}</h3>
            <p className="text-gray-600 text-xs mb-2">{emp.role}</p>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                emp.level === "Senior"
                  ? "bg-purple-100 text-purple-700"
                  : emp.level === "Middle"
                    ? "bg-gray-100 text-gray-700"
                    : "bg-blue-100 text-blue-700"
              }`}
            >
              {emp.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
