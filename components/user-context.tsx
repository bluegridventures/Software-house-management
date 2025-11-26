"use client"

import React, { createContext, useState, type ReactNode } from "react"

export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  isAdmin: boolean
  logout: () => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAdmin: user?.role === "admin",
        logout: () => setUser(null),
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
