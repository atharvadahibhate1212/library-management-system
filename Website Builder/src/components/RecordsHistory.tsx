import { useState } from 'react'
import { Download } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

const records = [
  { id: 'ISS-2401', book: 'Introduction to Algorithms', author: 'T.H. Cormen', issued: '2024-11-01', due: '2024-11-15', returned: '2024-11-14', status: 'Returned', fine: 0 },
  { id: 'ISS-2402', book: 'Operating System Concepts', author: 'A. Silberschatz', issued: '2024-11-05', due: '2024-11-20', returned: null, status: 'Issued', fine: 0 },
  { id: 'ISS-2403', book: 'Computer Networks', author: 'A.S. Tanenbaum', issued: '2024-10-10', due: '2024-10-24', returned: '2024-10-30', status: 'Returned (Late)', fine: 60 },
  { id: 'ISS-2404', book: 'Design Patterns', author: 'Erich Gamma', issued: '2024-09-15', due: '2024-09-29', returned: '2024-09-28', status: 'Returned', fine: 0 },
  { id: 'ISS-2405', book: 'Fluent Python', author: 'Luciano Ramalho', issued: '2024-08-20', due: '2024-09-03', returned: '2024-09-02', status: 'Returned', fine: 0 },
  { id: 'REQ-2401', book: 'Artificial Intelligence', author: 'Stuart Russell', issued: null, due: null, returned: null, status: 'Pending Request', fine: 0 },
  { id: 'REQ-2399', book: 'Machine Learning', author: 'Tom Mitchell', issued: null, due: null, returned: null, status: 'Rejected', fine: 0 },
]

const statusStyle: Record<string, { color: string; bg: string }> = {
  'Returned': { color: '#16a34a', bg: '#dcfce7' },
  'Issued': { color: '#2563eb', bg: '#dbeafe' },
  'Returned (Late)': { color: '#d97706', bg: '#fef3c7' },
  'Pending Request': { color: '#7c3aed', bg: '#ede9fe' },
  'Rejected': { color: '#dc2626', bg: '#fee2e2' },
}

export default function RecordsHistory({ user }: Props) {
  const [filter, setFilter] = useState('All')

  const filters = ['All', 'Issued', 'Returned', 'Returned (Late)', 'Pending Request', 'Rejected']
  const filtered = filter === 'All' ? records : records.filter(r => r.status === filter)

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>
            {user.role === 'librarian' || user.role === 'admin' ? 'Issue & Return Management' : 'My Library History'}
          </h1>
          <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Complete record of all book transactions</p>
        </div>
        <button style={{ padding: '9px 18px', borderRadius: 8, background: '#0f2149', color: 'white', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Download size={15} /> Export
        </button>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: '6px 14px', borderRadius: 6, border: `1.5px solid ${filter === f ? '#0f2149' : 'var(--border)'}`, background: filter === f ? '#0f2149' : 'var(--card)', color: filter === f ? 'white' : 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer', fontWeight: filter === f ? 600 : 400 }}>{f}</button>
        ))}
      </div>

      <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
          <thead>
            <tr style={{ background: 'var(--muted)' }}>
              {['Record ID', 'Book', 'Issue Date', 'Due Date', 'Return Date', 'Status', 'Fine'].map(h => (
                <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const s = statusStyle[r.status] || { color: '#6b7280', bg: '#f3f4f6' }
              return (
                <tr key={r.id} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace' }}>{r.id}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)' }}>{r.book}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{r.author}</div>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>{r.issued || '—'}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>{r.due || '—'}</td>
                  <td style={{ padding: '13px 16px', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap' }}>{r.returned || '—'}</td>
                  <td style={{ padding: '13px 16px' }}>
                    <span style={{ fontSize: 11.5, fontWeight: 600, color: s.color, background: s.bg, padding: '3px 10px', borderRadius: 12, whiteSpace: 'nowrap' }}>{r.status}</span>
                  </td>
                  <td style={{ padding: '13px 16px', fontSize: 13, fontWeight: r.fine > 0 ? 600 : 400, color: r.fine > 0 ? '#dc2626' : 'var(--muted-foreground)' }}>
                    {r.fine > 0 ? `₹${r.fine}` : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--muted-foreground)' }}>
        <span>Showing {filtered.length} of {records.length} records</span>
        <span>Total Fine Paid: <strong style={{ color: 'var(--foreground)' }}>₹60</strong></span>
      </div>
    </div>
  )
}
