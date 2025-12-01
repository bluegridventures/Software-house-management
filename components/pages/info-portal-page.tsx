"use client"

export default function InfoPortalPage() {
  const documents = [
    { id: 1, title: "Company Handbook", category: "HR", date: "Nov 15, 2025", views: 234 },
    { id: 2, title: "Development Guidelines", category: "Engineering", date: "Nov 10, 2025", views: 456 },
    { id: 3, title: "Design System v2.0", category: "Design", date: "Nov 5, 2025", views: 189 },
    { id: 4, title: "Security Policy", category: "IT", date: "Oct 28, 2025", views: 567 },
    { id: 5, title: "Project Management Process", category: "Management", date: "Oct 20, 2025", views: 123 },
    { id: 6, title: "Code Review Checklist", category: "Engineering", date: "Oct 15, 2025", views: 345 },
  ]

  const announcements = [
    { id: 1, title: "New Office Location", date: "Nov 24, 2025", priority: "High" },
    { id: 2, title: "Company Retreat 2025", date: "Nov 20, 2025", priority: "Medium" },
    { id: 3, title: "Updated Benefits Package", date: "Nov 15, 2025", priority: "High" },
  ]

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
          Info Portal
        </h1>
        <p className="text-sm sm:text-base text-slate-600">Company information, documents, and announcements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Documents */}
        <div className="lg:col-span-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Documents</h2>
          <div className="space-y-3 sm:space-y-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">{doc.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                        {doc.category}
                      </span>
                      <span className="whitespace-nowrap">{doc.date}</span>
                      <span className="whitespace-nowrap">{doc.views} views</span>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-slate-400 hover:text-slate-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements Sidebar */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Announcements</h2>
          <div className="space-y-3 sm:space-y-4">
            {announcements.map((ann) => (
              <div
                key={ann.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 border border-blue-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-slate-900 text-xs sm:text-sm flex-1">{ann.title}</h3>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${
                      ann.priority === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {ann.priority}
                  </span>
                </div>
                <p className="text-slate-600 text-xs">{ann.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}