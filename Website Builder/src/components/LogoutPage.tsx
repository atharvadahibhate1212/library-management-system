import { BookOpen, LogIn, Home } from 'lucide-react'

interface Props { onLogin: () => void }

export default function LogoutPage({ onLogin }: Props) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
      <div style={{ textAlign: 'center', maxWidth: 460, padding: '0 24px' }}>
        <div style={{ width: 80, height: 80, borderRadius: 20, background: 'linear-gradient(135deg, #0f2149, #1a3a6b)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
          <BookOpen size={38} color="#c9a227" strokeWidth={1.8} />
        </div>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 36, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14 }}>
          You've been signed out
        </h1>
        <p style={{ fontSize: 15, color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: 36 }}>
          Thank you for using the <strong style={{ color: 'var(--foreground)' }}>Indira Institute Library Management System</strong>. Your session has been securely ended.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <button onClick={onLogin} style={{ padding: '11px 28px', borderRadius: 8, background: '#0f2149', color: 'white', border: 'none', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <LogIn size={16} /> Sign in Again
          </button>
          <button onClick={onLogin} style={{ padding: '11px 28px', borderRadius: 8, background: 'var(--card)', color: 'var(--foreground)', border: '1.5px solid var(--border)', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Home size={16} /> Return to Home
          </button>
        </div>
        <p style={{ marginTop: 48, fontSize: 11, color: 'var(--muted-foreground)', letterSpacing: '0.06em' }}>
          © 2024 INDIRA INSTITUTE · LIBRARY MANAGEMENT SYSTEM
        </p>
      </div>
    </div>
  )
}
