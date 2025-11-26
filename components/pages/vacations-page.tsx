"use client"

export default function VacationsPage() {
  const vacations = [
    { name: "Alice Johnson", dates: "Dec 15 - Dec 28, 2025", days: 13, status: "Approved", destination: "Paris" },
    { name: "Bob Smith", dates: "Jan 5 - Jan 12, 2026", days: 7, status: "Pending", destination: "Tokyo" },
    { name: "Carol White", dates: "Dec 20 - Jan 3, 2026", days: 14, status: "Approved", destination: "Bali" },
    { name: "David Chen", dates: "Nov 27 - Dec 5, 2025", days: 8, status: "Approved", destination: "London" },
    { name: "Emma Davis", dates: "Jan 10 - Jan 17, 2026", days: 7, status: "Pending", destination: "Dubai" },
    { name: "Frank Miller", dates: "Dec 1 - Dec 8, 2025", days: 7, status: "Approved", destination: "Barcelona" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
          Vacations
        </h1>
        <p className="text-slate-600">Manage team vacation schedules and approvals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vacations.map((vacation, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{vacation.name}</h3>
                <p className="text-slate-600 text-sm">{vacation.destination}</p>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  vacation.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {vacation.status}
              </span>
            </div>
            <div className="space-y-3">
              <p className="text-slate-600 text-sm">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 2a1 1 0 00-1 1v2H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v2H7V3a1 1 0 00-1-1z" />
                </svg>
                {vacation.dates}
              </p>
              <div className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
                <span className="text-slate-600 text-sm">Total Days</span>
                <span className="text-2xl font-bold text-blue-600">{vacation.days}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
