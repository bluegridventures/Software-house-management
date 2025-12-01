"use client"

import { useState } from "react"
import { UserProvider } from "@/components/user-context"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import DashboardPage from "@/components/pages/dashboard-page"
import ProjectsPage from "@/components/pages/projects-page"
import CalendarPage from "@/components/pages/calendar-page"
import VacationsPage from "@/components/pages/vacations-page"
import EmployeesPage from "@/components/pages/employees-page"
import InfoPortalPage from "@/components/pages/info-portal-page"
import FinancesPage from "@/components/pages/finances-page"
import LoginPage from "@/components/pages/login-page"

function HomeContent() {
  const [currentPage, setCurrentPage] = useState("Dashboard")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:transform-none ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <Sidebar
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page)
            setIsSidebarOpen(false)
          }}
          onLogout={() => {
            setIsLoggedIn(false)
            setIsSidebarOpen(false)
          }}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        <Header
          onLogout={() => setIsLoggedIn(false)}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1 overflow-auto">
          {currentPage === "Dashboard" && <DashboardPage onNavigate={setCurrentPage} />}
          {currentPage === "Projects" && <ProjectsPage />}
          {currentPage === "Finances" && <FinancesPage />}
          {currentPage === "Calendar" && <CalendarPage />}
          {currentPage === "Vacations" && <VacationsPage />}
          {currentPage === "Employees" && <EmployeesPage />}
          {currentPage === "Info Portal" && <InfoPortalPage />}
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <UserProvider>
      <HomeContent />
    </UserProvider>
  )
}