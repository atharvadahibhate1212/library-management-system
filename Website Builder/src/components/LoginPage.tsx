import { useState } from 'react'
import { BookOpen, Eye, EyeOff, Moon, Sun, GraduationCap, User, Library, Shield } from 'lucide-react'
import type { Role } from '../App'

interface Props {
  onLogin: (role: Role) => void
  darkMode: boolean
  setDarkMode: (v: boolean) => void
}

const roles: { role: Role; label: string; icon: React.ReactNode; color: string }[] = [
  { role: 'student', label: 'Student', icon: <GraduationCap size={18} />, color: '#2563eb' },
  { role: 'faculty', label: 'Faculty', icon: <User size={18} />, color: '#7c3aed' },
  { role: 'librarian', label: 'Librarian', icon: <Library size={18} />, color: '#0891b2' },
  { role: 'admin', label: 'Administrator', icon: <Shield size={18} />, color: '#c9a227' },
]

export default function LoginPage({ onLogin, darkMode, setDarkMode }: Props) {
  const [selectedRole, setSelectedRole] = useState<Role>('student')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('arjun.sharma@indira.edu')
  const [password, setPassword] = useState('password123')
  const [remember, setRemember] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); onLogin(selectedRole) }, 800)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="relative">
      {/* Left panel */}
      <div style={{ background: 'linear-gradient(145deg, #0f2149 0%, #1a3a6b 60%, #0f2149 100%)', position: 'relative', overflow: 'hidden' }} className="hidden lg:flex flex-col justify-between p-12">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, rgba(201,162,39,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'rgba(201,162,39,0.06)' }} />
        <div style={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div style={{ width: 48, height: 48, borderRadius: 12, background: '#c9a227', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={26} color="#0f2149" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ color: '#c9a227', fontFamily: "'Crimson Pro', serif", fontSize: 22, fontWeight: 600, lineHeight: 1 }}>Indira Institute</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Library Management System</div>
            </div>
          </div>

          <div style={{ color: 'white', fontFamily: "'Crimson Pro', serif", fontSize: 52, fontWeight: 600, lineHeight: 1.1, marginBottom: 20 }}>
            Knowledge<br />Without<br />Boundaries.
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.7, maxWidth: 380 }}>
            Access thousands of books, research papers, and digital resources. Manage your library membership and track borrowing history — all in one place.
          </p>
        </div>

        <div className="relative z-10">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {[['12,450+', 'Books'], ['3,200+', 'Members'], ['98%', 'Satisfaction']].map(([val, label]) => (
              <div key={label} style={{ borderTop: '1px solid rgba(201,162,39,0.4)', paddingTop: 16 }}>
                <div style={{ color: '#c9a227', fontSize: 26, fontWeight: 700, fontFamily: "'Crimson Pro', serif" }}>{val}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ backgroundColor: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative' }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ position: 'absolute', top: 24, right: 24, width: 36, height: 36, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--muted-foreground)' }}
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <div style={{ width: '100%', maxWidth: 420 }}>
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#0f2149', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BookOpen size={22} color="#c9a227" />
            </div>
            <div>
              <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 18, fontWeight: 600, color: 'var(--foreground)' }}>Indira Institute</div>
              <div style={{ fontSize: 10, color: 'var(--muted-foreground)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Library Management System</div>
            </div>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 32, fontWeight: 600, color: 'var(--foreground)', marginBottom: 6 }}>Welcome back</h1>
            <p style={{ color: 'var(--muted-foreground)', fontSize: 14 }}>Sign in to access your library account</p>
          </div>

          {/* Role selector */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 24 }}>
            {roles.map(({ role, label, icon, color }) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: `1.5px solid ${selectedRole === role ? color : 'var(--border)'}`,
                  background: selectedRole === role ? `${color}12` : 'var(--card)',
                  color: selectedRole === role ? color : 'var(--muted-foreground)',
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontSize: 13, fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {icon} {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--foreground)', marginBottom: 6 }}>Email / Username</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1.5px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <label style={{ fontSize: 13, fontWeight: 500, color: 'var(--foreground)' }}>Password</label>
                <a href="#" style={{ fontSize: 12, color: '#c9a227', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '10px 42px 10px 14px', borderRadius: 8, border: '1.5px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--muted-foreground)', cursor: 'pointer' }}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <input type="checkbox" id="remember" checked={remember} onChange={e => setRemember(e.target.checked)} style={{ width: 16, height: 16, accentColor: '#0f2149' }} />
              <label htmlFor="remember" style={{ fontSize: 13, color: 'var(--muted-foreground)', cursor: 'pointer' }}>Remember me for 30 days</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{ width: '100%', padding: '12px', borderRadius: 8, background: loading ? 'var(--muted)' : '#0f2149', color: 'white', fontSize: 15, fontWeight: 600, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', transition: 'all 0.15s', letterSpacing: '0.02em' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>New member? </span>
            <a href="#" style={{ fontSize: 13, color: '#c9a227', fontWeight: 500, textDecoration: 'none' }}>Register here</a>
          </div>

          <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <p style={{ fontSize: 11, color: 'var(--muted-foreground)', letterSpacing: '0.04em' }}>© 2024 INDIRA INSTITUTE · LIBRARY MANAGEMENT SYSTEM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
