import { BookOpen, Clock, AlertTriangle, TrendingUp, Star, Bell } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

const stats = [
  { label: 'Books Issued', value: '4', icon: <BookOpen size={20} />, color: '#2563eb', bg: '#eff6ff' },
  { label: 'Due Soon', value: '1', icon: <Clock size={20} />, color: '#d97706', bg: '#fffbeb' },
  { label: 'Pending Requests', value: '2', icon: <TrendingUp size={20} />, color: '#7c3aed', bg: '#f5f3ff' },
  { label: 'Fine Due', value: '₹40', icon: <AlertTriangle size={20} />, color: '#dc2626', bg: '#fef2f2' },
]

const currentBooks = [
  { title: 'Data Structures & Algorithms', author: 'Thomas H. Cormen', issued: '2024-11-10', due: '2024-11-25', status: 'safe', daysLeft: 8 },
  { title: 'Operating System Concepts', author: 'Abraham Silberschatz', issued: '2024-11-05', due: '2024-11-20', status: 'warning', daysLeft: 3 },
  { title: 'Computer Networks', author: 'Andrew S. Tanenbaum', issued: '2024-10-28', due: '2024-11-12', status: 'overdue', daysLeft: -5 },
  { title: 'Database System Concepts', author: 'Henry F. Korth', issued: '2024-11-08', due: '2024-11-28', status: 'safe', daysLeft: 11 },
]

const notifications = [
  { text: "Your request for 'Artificial Intelligence' has been approved.", time: '2h ago', type: 'success' },
  { text: "'Operating System Concepts' is due in 3 days.", time: '5h ago', type: 'warning' },
  { text: "New books added to Computer Science section.", time: '1d ago', type: 'info' },
]

const statusStyle = (status: string) => {
  if (status === 'safe') return { color: '#16a34a', bg: '#dcfce7', label: 'Safe' }
  if (status === 'warning') return { color: '#d97706', bg: '#fef3c7', label: 'Due Soon' }
  return { color: '#dc2626', bg: '#fee2e2', label: 'Overdue' }
}

export default function StudentDashboard({ user }: Props) {
  return (
    <div>
      {/* Welcome banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f2149 0%, #1a3a6b 100%)', borderRadius: 12, padding: '28px 32px', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -20, top: -20, width: 180, height: 180, borderRadius: '50%', background: 'rgba(201,162,39,0.08)' }} />
        <div style={{ position: 'absolute', right: 60, bottom: -30, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'relative' }}>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 4 }}>
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 30, fontWeight: 600, color: 'white', marginBottom: 6 }}>
            Welcome back, {user.name.split(' ')[0]}!
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
            {user.department} · Membership: <span style={{ color: '#c9a227', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>{user.membershipId}</span>
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
            <button style={{ padding: '8px 18px', borderRadius: 7, background: '#c9a227', color: '#0f2149', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Search Books</button>
            <button style={{ padding: '8px 18px', borderRadius: 7, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, cursor: 'pointer' }}>Download Library Card</button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'var(--card)', borderRadius: 10, padding: '20px 20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {s.icon}
            </div>
            <div>
              <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--foreground)', fontFamily: "'Crimson Pro', serif" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        {/* Issued books */}
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)' }}>Currently Issued Books</h2>
            <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>4 of 6 limit used</span>
          </div>
          <div>
            {currentBooks.map((book, i) => {
              const s = statusStyle(book.status)
              return (
                <div key={i} style={{ padding: '14px 22px', borderBottom: i < currentBooks.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 52, borderRadius: 4, background: '#0f2149', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BookOpen size={18} color="#c9a227" />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--foreground)', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{book.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{book.author}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginTop: 2, fontFamily: 'JetBrains Mono, monospace' }}>Due: {book.due}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: s.color, background: s.bg, padding: '3px 8px', borderRadius: 12 }}>{s.label}</span>
                    <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginTop: 4 }}>
                      {book.daysLeft >= 0 ? `${book.daysLeft}d left` : `${Math.abs(book.daysLeft)}d overdue`}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Notifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Bell size={15} color="var(--muted-foreground)" />
              <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)' }}>Notifications</h2>
            </div>
            {notifications.map((n, i) => (
              <div key={i} style={{ padding: '12px 20px', borderBottom: i < notifications.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: 12.5, color: 'var(--foreground)', lineHeight: 1.5, marginBottom: 4 }}>{n.text}</div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{n.time}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Star size={15} color="#c9a227" /> Featured Books
            </h2>
            {[
              { title: 'Clean Code', author: 'Robert C. Martin' },
              { title: 'The Pragmatic Programmer', author: 'David Thomas' },
              { title: 'Introduction to AI', author: 'Stuart Russell' },
            ].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a227', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--foreground)' }}>{b.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{b.author}</div>
                </div>
              </div>
            ))}
            <button style={{ marginTop: 4, width: '100%', padding: '8px', borderRadius: 7, background: '#0f2149', color: 'white', border: 'none', fontSize: 12.5, fontWeight: 500, cursor: 'pointer' }}>Request a Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
