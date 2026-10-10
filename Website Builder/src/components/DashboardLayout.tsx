import { useState } from 'react'
import {
  LayoutDashboard, BookOpen, ClipboardList, History,
  CreditCard, FileText, Newspaper, Bell, Settings, LogOut,
  ChevronLeft, ChevronRight, Users, BarChart3, Database,
  Moon, Sun, Menu, BookMarked, AlertTriangle, Search
} from 'lucide-react'
import type { User } from '../App'
import StudentDashboard from './StudentDashboard'
import AdminDashboard from './AdminDashboard'
import BookCatalog from './BookCatalog'
import LibraryCard from './LibraryCard'
import RecordsHistory from './RecordsHistory'
import ResearchPublications from './ResearchPublications'
import NewsletterSection from './NewsletterSection'
import FineModule from './FineModule'
import LogoutPage from './LogoutPage'

interface Props {
  user: User
  onLogout: () => void
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

type View = 'dashboard' | 'books' | 'requests' | 'history' | 'card' | 'fines' | 'research' | 'newsletter' | 'users' | 'analytics' | 'settings' | 'logout'

interface NavItem { id: View; label: string; icon: React.ReactNode; roles: User['role'][] }

const ALL_NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'books', label: 'Book Catalog', icon: <BookOpen size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'requests', label: 'Book Requests', icon: <ClipboardList size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'history', label: 'Issue / Return', icon: <BookMarked size={18} />, roles: ['librarian', 'admin'] },
  { id: 'history', label: 'My History', icon: <History size={18} />, roles: ['student', 'faculty'] },
  { id: 'fines', label: 'Fines & Dues', icon: <AlertTriangle size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'card', label: 'Library Card', icon: <CreditCard size={18} />, roles: ['student', 'faculty'] },
  { id: 'research', label: 'Research Papers', icon: <FileText size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'newsletter', label: 'Newsletter', icon: <Newspaper size={18} />, roles: ['student', 'faculty', 'librarian', 'admin'] },
  { id: 'users', label: 'User Management', icon: <Users size={18} />, roles: ['librarian', 'admin'] },
  { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={18} />, roles: ['librarian', 'admin'] },
  { id: 'settings', label: 'Settings', icon: <Settings size={18} />, roles: ['admin'] },
]

export default function DashboardLayout({ user, onLogout, darkMode, setDarkMode }: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeView, setActiveView] = useState<View>('dashboard')
  const [notifications] = useState(3)

  const navItems = ALL_NAV.filter(item => item.roles.includes(user.role))
    .filter((item, idx, arr) => arr.findIndex(a => a.id === item.id) === idx)

  const navigate = (id: View) => {
    setActiveView(id)
    setMobileOpen(false)
  }

  const renderView = () => {
    if (activeView === 'logout') return <LogoutPage onLogin={onLogout} />
    switch (activeView) {
      case 'dashboard': return (user.role === 'admin' || user.role === 'librarian') ? <AdminDashboard user={user} /> : <StudentDashboard user={user} />
      case 'books': return <BookCatalog user={user} />
      case 'card': return <LibraryCard user={user} />
      case 'history': return <RecordsHistory user={user} />
      case 'fines': return <FineModule user={user} />
      case 'research': return <ResearchPublications />
      case 'newsletter': return <NewsletterSection />
      default: return (
        <div style={{ padding: 60, textAlign: 'center', color: 'var(--muted-foreground)' }}>
          <Database size={48} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
          <p style={{ fontSize: 16 }}>This module is coming soon.</p>
        </div>
      )
    }
  }

  const sidebarW = collapsed ? 64 : 240

  const sidebarEl = (
    <aside style={{ width: sidebarW, minHeight: '100vh', background: '#0f2149', display: 'flex', flexDirection: 'column', transition: 'width 0.2s', position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50, overflowX: 'hidden' }}>
      <div style={{ padding: collapsed ? '18px 14px' : '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 12, minHeight: 68 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: '#c9a227', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <BookOpen size={19} color="#0f2149" strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <div>
            <div style={{ color: '#c9a227', fontFamily: "'Crimson Pro', serif", fontSize: 15, fontWeight: 600, lineHeight: 1, whiteSpace: 'nowrap' }}>Indira Institute</div>
            <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2, whiteSpace: 'nowrap' }}>Library System</div>
          </div>
        )}
      </div>

      <nav style={{ flex: 1, padding: '10px 8px', overflowY: 'auto', overflowX: 'hidden' }}>
        {navItems.map((item) => {
          const active = activeView === item.id
          return (
            <button key={item.id + item.label} onClick={() => navigate(item.id)} title={collapsed ? item.label : undefined}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 7, marginBottom: 2, border: 'none', background: active ? 'rgba(201,162,39,0.15)' : 'transparent', color: active ? '#c9a227' : 'rgba(255,255,255,0.58)', fontSize: 13, fontWeight: active ? 600 : 400, cursor: 'pointer', textAlign: 'left', transition: 'all 0.12s', justifyContent: collapsed ? 'center' : 'flex-start', whiteSpace: 'nowrap' }}>
              <span style={{ flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
              {!collapsed && active && <span style={{ marginLeft: 'auto', width: 5, height: 5, borderRadius: '50%', background: '#c9a227', flexShrink: 0 }} />}
            </button>
          )
        })}
      </nav>

      <div style={{ padding: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button onClick={() => navigate('logout')}
          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 7, border: 'none', background: 'transparent', color: 'rgba(248,113,113,0.75)', fontSize: 13, cursor: 'pointer', justifyContent: collapsed ? 'center' : 'flex-start', marginBottom: 6, whiteSpace: 'nowrap' }}>
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
        <button onClick={() => setCollapsed(!collapsed)}
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 7, borderRadius: 7, border: 'none', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.38)', cursor: 'pointer' }}>
          {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
        </button>
      </div>
    </aside>
  )

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Mobile overlay */}
      {mobileOpen && <div onClick={() => setMobileOpen(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 40 }} />}

      {/* Desktop sidebar */}
      <div style={{ display: 'none' }} className="lg-sidebar-placeholder" />
      <div style={{ width: sidebarW, flexShrink: 0, transition: 'width 0.2s' }} className="hidden lg:block" />
      <div className="hidden lg:block">{sidebarEl}</div>

      {/* Mobile sidebar */}
      {mobileOpen && <div className="lg:hidden">{sidebarEl}</div>}

      {/* Main area */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Top navbar */}
        <header style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 30, background: 'var(--card)', borderBottom: '1px solid var(--border)', height: 64, display: 'flex', alignItems: 'center', paddingInline: 24, gap: 16 }}>
          <div style={{ width: sidebarW, flexShrink: 0, transition: 'width 0.2s' }} className="hidden lg:block" />
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} style={{ border: 'none', background: 'none', color: 'var(--foreground)', cursor: 'pointer', marginRight: 4 }}>
            <Menu size={22} />
          </button>

          <div style={{ flex: 1, maxWidth: 460, position: 'relative' }}>
            <Search size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
            <input placeholder="Search books, members..." style={{ width: '100%', paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8, borderRadius: 7, border: '1.5px solid var(--border)', background: 'var(--muted)', color: 'var(--foreground)', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={() => setDarkMode(!darkMode)} style={{ width: 34, height: 34, borderRadius: 7, border: '1px solid var(--border)', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--muted-foreground)' }}>
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <div style={{ position: 'relative' }}>
              <button style={{ width: 34, height: 34, borderRadius: 7, border: '1px solid var(--border)', background: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--muted-foreground)' }}>
                <Bell size={15} />
              </button>
              {notifications > 0 && <span style={{ position: 'absolute', top: -4, right: -4, width: 17, height: 17, borderRadius: '50%', background: '#ef4444', color: 'white', fontSize: 9.5, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{notifications}</span>}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, paddingLeft: 10, borderLeft: '1px solid var(--border)' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#0f2149', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a227', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                {user.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--foreground)', lineHeight: 1 }}>{user.name}</div>
                <div style={{ fontSize: 10.5, color: 'var(--muted-foreground)', textTransform: 'capitalize' }}>{user.role}</div>
              </div>
            </div>
          </div>
        </header>

        <main style={{ marginTop: 64, padding: '24px', flex: 1 }}>
          {renderView()}
        </main>
      </div>
    </div>
  )
}
