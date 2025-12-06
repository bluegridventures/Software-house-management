'use client'

import Image from 'next/image';

const employees = [
  { name: "Henry Dustin", role: "Web & App Developer", level: "Senior", imageSrc: "/assets/henry.png" },
  { name: "Aliya", role: "Front-end Developer", level: "Junior", imageSrc: "/assets/aliya.png" },
  { name: "Isma Rani", role: "AI / ML Engineer", level: "Junior", imageSrc: "/assets/isma.png" },
  { name: "Olliya Dilawar", role: "Full Stack Developer", level: "Junior", imageSrc: "/assets/olliya.png" },
  { name: "Laiba Javed", role: "AI / ML Engineer", level: "Junior", imageSrc: "/assets/laiba.png" },
  { name: "Fallak Sajad", role: "AI / ML Engineer", level: "Junior", imageSrc: "/assets/fallak.png" },
  { name: "Ikhlaq Ahmad", role: "AI / ML Engineer", level: "Junior", imageSrc: "/assets/ikhlaq.png" },
  { name: "Saqib Jadoon", role: "Full Stack Developer", level: "Junior", imageSrc: "/assets/saqib.png" },
]

export default function Workload() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 mb-8 border border-gray-200 w-full max-w-full overflow-x-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Workload</h2>
        <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center">
          View all
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {employees.map((employee, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-2 sm:gap-0"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={employee.imageSrc}
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{employee.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{employee.role}</p>
              </div>
            </div>
            <span className={`mt-2 sm:mt-0 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
              employee.level === "Senior" 
                ? "bg-blue-100 text-blue-700" 
                : "bg-green-100 text-green-700"
            }`}>
              {employee.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
