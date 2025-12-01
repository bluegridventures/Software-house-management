"use client"

interface ProjectsProps {
  onViewAll?: () => void
}

const projects = [
  {
    id: "PN0001265",
    name: "Medical App (iOS native)",
    date: "Sep 12, 2020",
    priority: "Medium",
    tasks: { all: 34, active: 13 },
    assignees: 3,
  },
  {
    id: "PN0001221",
    name: "Food Delivery Service",
    date: "Sep 10, 2020",
    priority: "Medium",
    tasks: { all: 50, active: 24 },
    assignees: 3,
  },
  {
    id: "PN0001290",
    name: "Food Delivery Service",
    date: "May 28, 2020",
    priority: "Low",
    tasks: { all: 23, active: 20 },
    assignees: 3,
  },
]

export default function Projects({ onViewAll }: ProjectsProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 mt-8 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Projects</h2>

        <button
          onClick={onViewAll}
          className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors self-start sm:self-auto"
        >
          View all
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            />
          </svg>
        </button>
      </div>

      {/* Projects list */}
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-300"
          >
            {/* Project Title */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
              <div>
                <p className="text-gray-500 text-xs mb-1">{project.id}</p>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {project.name}
                </h3>
              </div>

              {/* Priority */}
              <div className="flex items-center gap-1 self-start sm:self-auto">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    project.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : project.priority === "Low"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {project.priority}
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-xs mb-4">Created {project.date}</p>

            {/* Task Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 text-xs mb-2">All tasks</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {project.tasks.all}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-xs mb-2">Active tasks</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {project.tasks.active}
                    </p>
                  </div>

                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    {Array(project.assignees)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
