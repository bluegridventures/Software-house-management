"use client"

interface ActivityStreamProps {
  onViewMore?: () => void
}

const activities = [
  {
    user: "Oscar Holloway",
    role: "UI/UX Designer",
    action: "Updated the status of Mind Map task to in Progress",
    type: "update",
    image: "bg-rose-300",
  },
  {
    user: "Emily Tyler",
    role: "Copywriter",
    action: "Attached files to the task",
    type: "attach",
    image: "bg-purple-400",
  },
  {
    user: "Emily Tyler",
    role: "Copywriter",
    action: "Updated the status of Mind Map task to in Progress",
    type: "update",
    image: "bg-purple-400",
  },
]

export default function ActivityStream({ onViewMore }: ActivityStreamProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Activity Stream</h2>

      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <button
            key={idx}
            className="w-full flex gap-3 text-left p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-full ${activity.image} flex-shrink-0`}></div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 text-sm">{activity.user}</p>
              <p className="text-gray-500 text-xs mb-1">{activity.role}</p>
              <div className="flex items-center gap-2">
                {activity.type === "update" && (
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                )}
                {activity.type === "attach" && (
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.828l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                  </svg>
                )}
                <p className="text-gray-700 text-xs">{activity.action}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onViewMore}
        className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-1 py-2 rounded-lg hover:bg-blue-50 transition-colors"
      >
        View more
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          />
        </svg>
      </button>
    </div>
  )
}
