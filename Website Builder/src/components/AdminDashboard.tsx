import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { BookOpen, Users, DollarSign, TrendingUp, BookMarked } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

const stats = [
  { label: 'Total Books', value: '12,450', change: '+124 this month', icon: <BookOpen size={20} />, color: '#2563eb', bg: '#eff6ff' },
  { label: 'Active Members', value: '3,218', change: '+47 this week', icon: <Users size={20} />, color: '#7c3aed', bg: '#f5f3ff' },
  { label: 'Books Issued Today', value: '86', change: '12 pending returns', icon: <BookMarked size={20} />, color: '#059669', bg: '#ecfdf5' },
  { label: 'Fine Collected', value: '₹18,400', change: '+₹2,200 this week', icon: <DollarSign size={20} />, color: '#d97706', bg: '#fffbeb' },
]

const monthlyData = [
  { month: 'Jun', issued: 420, returned: 390 },
  { month: 'Jul', issued: 510, returned: 480 },
  { month: 'Aug', issued: 380, returned: 400 },
  { month: 'Sep', issued: 620, returned: 590 },
  { month: 'Oct', issued: 710, returned: 660 },
  { month: 'Nov', issued: 680, returned: 630 },
]

const deptData = [
  { dept: 'CS', books: 2840 },
  { dept: 'Electronics', books: 1920 },
  { dept: 'Mech', books: 1540 },
  { dept: 'Civil', books: 980 },
  { dept: 'MBA', books: 760 },
]

const pieData = [
  { name: 'Available', value: 8200, color: '#16a34a' },
  { name: 'Issued', value: 3460, color: '#2563eb' },
  { name: 'Processing', value: 790, color: '#d97706' },
]

const recentActivity = [
  { user: 'Arjun Sharma', action: 'Issued', book: 'Data Structures & Algorithms', time: '10 min ago', status: 'issued' },
  { user: 'Priya Patel', action: 'Returned', book: 'Operating System Concepts', time: '25 min ago', status: 'returned' },
  { user: 'Rahul Desai', action: 'Requested', book: 'Machine Learning', time: '1h ago', status: 'pending' },
  { user: 'Sneha Kumar', action: 'Fine Paid', book: '₹80 fine cleared', time: '2h ago', status: 'paid' },
  { user: 'Vikram Singh', action: 'Overdue', book: 'Computer Networks', time: '3h ago', status: 'overdue' },
]

const statusColors: Record<string, string> = {
  issued: '#2563eb', returned: '#16a34a', pending: '#d97706', paid: '#059669', overdue: '#dc2626',
}

export default function AdminDashboard({ user }: Props) {
  return (
    <div>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f2149 0%, #1a3a6b 100%)', borderRadius: 12, padding: '24px 32px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 200, height: 200, borderRadius: '50%', background: 'rgba(201,162,39,0.07)' }} />
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginBottom: 4 }}>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 26, fontWeight: 600, color: 'white', marginBottom: 4 }}>
            {user.role === 'admin' ? 'Admin Control Panel' : 'Librarian Dashboard'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>Indira Institute Library · {user.name}</p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ padding: '8px 16px', borderRadius: 7, background: '#c9a227', color: '#0f2149', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Issue Book</button>
          <button style={{ padding: '8px 16px', borderRadius: 7, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: 13, cursor: 'pointer' }}>Generate Report</button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'var(--card)', borderRadius: 10, padding: '20px', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: s.bg, color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              <TrendingUp size={14} color="#16a34a" />
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--foreground)', fontFamily: "'Crimson Pro', serif", marginBottom: 2 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: '#16a34a' }}>{s.change}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        {/* Monthly bar chart */}
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 18 }}>Monthly Book Activity</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData} barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="issued" name="Issued" fill="#0f2149" radius={[4, 4, 0, 0]} />
              <Bar dataKey="returned" name="Returned" fill="#c9a227" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 16, marginTop: 8, justifyContent: 'center' }}>
            <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#0f2149', display: 'inline-block' }} /> Issued</span>
            <span style={{ fontSize: 11, color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: '#c9a227', display: 'inline-block' }} /> Returned</span>
          </div>
        </div>

        {/* Pie chart */}
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 18 }}>Book Inventory Status</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={pieData} innerRadius={50} outerRadius={75} dataKey="value" stroke="none">
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ flex: 1 }}>
              {pieData.map(d => (
                <div key={d.name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--foreground)' }}>{d.value.toLocaleString()}</div>
                    <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{d.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Dept chart */}
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
          <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 18 }}>Books by Department</h2>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={deptData} layout="vertical" barSize={14}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} />
              <YAxis dataKey="dept" type="category" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} axisLine={false} tickLine={false} width={55} />
              <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="books" fill="#1a3a6b" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity feed */}
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)' }}>Recent Activity</h2>
          </div>
          {recentActivity.map((a, i) => (
            <div key={i} style={{ padding: '12px 20px', borderBottom: i < recentActivity.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: statusColors[a.status], flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, color: 'var(--foreground)', fontWeight: 500 }}>{a.user} <span style={{ fontWeight: 400, color: 'var(--muted-foreground)' }}>— {a.action}</span></div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.book}</div>
              </div>
              <div style={{ fontSize: 10.5, color: 'var(--muted-foreground)', flexShrink: 0 }}>{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
