"use client"

export default function CalendarPage() {
  const events = [
    { date: "Nov 20, 2025", title: "Team Standup", time: "10:00 AM", attendees: 8, type: "meeting" },
    { date: "Nov 21, 2025", title: "Client Presentation", time: "2:00 PM", attendees: 5, type: "presentation" },
    { date: "Nov 22, 2025", title: "Sprint Planning", time: "9:00 AM", attendees: 12, type: "planning" },
    { date: "Nov 24, 2025", title: "Design Review", time: "3:30 PM", attendees: 6, type: "review" },
    { date: "Nov 25, 2025", title: "Budget Meeting", time: "11:00 AM", attendees: 4, type: "meeting" },
    { date: "Nov 27, 2025", title: "Project Kickoff", time: "10:30 AM", attendees: 10, type: "kickoff" },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
          Calendar
        </h1>
        <p className="text-slate-600">View and manage all upcoming events and meetings</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-slate-500 text-sm mb-1">{event.date}</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{event.title}</h3>
              <div className="flex items-center gap-4">
                <span className="text-slate-600 text-sm">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    />
                  </svg>
                  {event.time}
                </span>
                <span className="text-slate-600 text-sm">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6a4 4 0 110 8H3a4 4 0 010-8h6z" />
                  </svg>
                  {event.attendees} attendees
                </span>
              </div>
            </div>
            <span
              className={`text-xs font-semibold px-4 py-2 rounded-full ${
                event.type === "meeting"
                  ? "bg-blue-100 text-blue-700"
                  : event.type === "presentation"
                    ? "bg-purple-100 text-purple-700"
                    : event.type === "planning"
                      ? "bg-green-100 text-green-700"
                      : event.type === "review"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-pink-100 text-pink-700"
              }`}
            >
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
