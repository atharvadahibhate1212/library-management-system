import { AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

const overdueBooks = [
  { book: 'Computer Networks', author: 'A.S. Tanenbaum', dueDate: '2024-11-09', daysOverdue: 5, finePerDay: 5, totalFine: 25, status: 'overdue' },
  { book: 'Operating System Concepts', author: 'A. Silberschatz', dueDate: '2024-11-17', daysLeft: 3, finePerDay: 5, totalFine: 0, status: 'warning' },
  { book: 'Introduction to Algorithms', author: 'T.H. Cormen', dueDate: '2024-11-25', daysLeft: 11, finePerDay: 5, totalFine: 0, status: 'safe' },
]

const fineHistory = [
  { id: 'FN-001', book: 'Database Systems', amount: 60, date: '2024-10-30', paid: true },
  { id: 'FN-002', book: 'Computer Networks', amount: 25, date: '2024-11-14', paid: false },
]

const statusMap = {
  safe: { color: '#16a34a', bg: '#dcfce7', label: 'Safe', icon: <CheckCircle size={16} /> },
  warning: { color: '#d97706', bg: '#fef3c7', label: 'Due Soon', icon: <Clock size={16} /> },
  overdue: { color: '#dc2626', bg: '#fee2e2', label: 'Overdue', icon: <AlertTriangle size={16} /> },
}

export default function FineModule({ user: _user }: Props) {
  const totalFine = fineHistory.filter(f => !f.paid).reduce((acc, f) => acc + f.amount, 0)

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>Fines & Due Dates</h1>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Track due dates and outstanding fines for your issued books</p>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1.5px solid #fee2e2', padding: '20px' }}>
          <div style={{ fontSize: 11, color: '#dc2626', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>TOTAL FINE DUE</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#dc2626', fontFamily: "'Crimson Pro', serif" }}>₹{totalFine}</div>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginTop: 4 }}>From {fineHistory.filter(f => !f.paid).length} unpaid fine(s)</div>
        </div>
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1.5px solid #fef3c7', padding: '20px' }}>
          <div style={{ fontSize: 11, color: '#d97706', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>DUE SOON</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#d97706', fontFamily: "'Crimson Pro', serif" }}>1</div>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginTop: 4 }}>Book due within 3 days</div>
        </div>
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1.5px solid #dcfce7', padding: '20px' }}>
          <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 600, letterSpacing: '0.05em', marginBottom: 8 }}>FINE RATE</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#16a34a', fontFamily: "'Crimson Pro', serif" }}>₹5</div>
          <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginTop: 4 }}>Per day per book</div>
        </div>
      </div>

      {/* Due dates tracker */}
      <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 20 }}>
        <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)' }}>Current Books — Due Date Tracker</h2>
        </div>
        {overdueBooks.map((b, i) => {
          const s = statusMap[b.status as keyof typeof statusMap]
          return (
            <div key={i} style={{ padding: '16px 22px', borderBottom: i < overdueBooks.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {s.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--foreground)', marginBottom: 2 }}>{b.book}</div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{b.author}</div>
              </div>
              <div style={{ textAlign: 'center', minWidth: 100 }}>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginBottom: 2 }}>Due Date</div>
                <div style={{ fontSize: 13, fontFamily: 'JetBrains Mono, monospace', color: 'var(--foreground)', fontWeight: 500 }}>{b.dueDate}</div>
              </div>
              <div style={{ textAlign: 'center', minWidth: 80 }}>
                {b.status === 'overdue' ? (
                  <>
                    <div style={{ fontSize: 11, color: '#dc2626', marginBottom: 2 }}>Overdue</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', fontFamily: "'Crimson Pro', serif" }}>{b.daysOverdue}d</div>
                  </>
                ) : (
                  <>
                    <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginBottom: 2 }}>Days Left</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: s.color, fontFamily: "'Crimson Pro', serif" }}>{b.daysLeft}d</div>
                  </>
                )}
              </div>
              <div style={{ textAlign: 'right', minWidth: 80 }}>
                {b.totalFine > 0 ? (
                  <>
                    <div style={{ fontSize: 11, color: '#dc2626', marginBottom: 2 }}>Fine</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: '#dc2626', fontFamily: "'Crimson Pro', serif" }}>₹{b.totalFine}</div>
                  </>
                ) : (
                  <span style={{ fontSize: 11.5, color: '#16a34a', fontWeight: 600 }}>No fine</span>
                )}
              </div>
              <span style={{ padding: '4px 12px', borderRadius: 12, background: s.bg, color: s.color, fontSize: 11.5, fontWeight: 600, flexShrink: 0 }}>{s.label}</span>
            </div>
          )
        })}
      </div>

      {/* Fine history */}
      <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 22px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)' }}>Fine History</h2>
          {totalFine > 0 && (
            <button style={{ padding: '7px 16px', borderRadius: 7, background: '#0f2149', color: 'white', border: 'none', fontSize: 12.5, fontWeight: 600, cursor: 'pointer' }}>Pay Fine ₹{totalFine}</button>
          )}
        </div>
        {fineHistory.map((f, i) => (
          <div key={f.id} style={{ padding: '14px 22px', borderBottom: i < fineHistory.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--muted-foreground)', flexShrink: 0 }}>{f.id}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground)' }}>{f.book}</div>
              <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{f.date}</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: f.paid ? '#16a34a' : '#dc2626', fontFamily: "'Crimson Pro', serif" }}>₹{f.amount}</div>
            <span style={{ padding: '3px 10px', borderRadius: 10, background: f.paid ? '#dcfce7' : '#fee2e2', color: f.paid ? '#16a34a' : '#dc2626', fontSize: 11.5, fontWeight: 600 }}>
              {f.paid ? 'Paid' : 'Unpaid'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
