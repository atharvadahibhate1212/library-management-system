import { useState } from 'react'
import LoginPage from './components/LoginPage'
import DashboardLayout from './components/DashboardLayout'

export type Role = 'student' | 'faculty' | 'librarian' | 'admin'

export interface User {
  name: string
  id: string
  role: Role
  department: string
  membershipId: string
  avatar?: string
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  const handleLogin = (role: Role) => {
    const users: Record<Role, User> = {
      student: { name: 'Arjun Sharma', id: 'STU2024001', role: 'student', department: 'Computer Science', membershipId: 'LIB-2024-CS-001' },
      faculty: { name: 'Dr. Priya Mehta', id: 'FAC2024010', role: 'faculty', department: 'Electronics', membershipId: 'LIB-2024-EL-010' },
      librarian: { name: 'Suresh Patil', id: 'LIB2024001', role: 'librarian', department: 'Library', membershipId: 'LIB-2024-LB-001' },
      admin: { name: 'Rajesh Kulkarni', id: 'ADM2024001', role: 'admin', department: 'Administration', membershipId: 'LIB-2024-AD-001' },
    }
    setUser(users[role])
  }

  const handleLogout = () => setUser(null)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div style={{ minHeight: '100vh', backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        {!user ? (
          <LoginPage onLogin={handleLogin} darkMode={darkMode} setDarkMode={setDarkMode} />
        ) : (
          <DashboardLayout user={user} onLogout={handleLogout} darkMode={darkMode} setDarkMode={setDarkMode} />
        )}
      </div>
    </div>
  )
}
