import { Download, Printer, BookOpen, CheckCircle } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

export default function LibraryCard({ user }: Props) {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>Digital Library Card</h1>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Your official Indira Institute Library membership card</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        {/* Card preview */}
        <div>
          {/* Front */}
          <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Front</p>
          <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 20, boxShadow: '0 12px 40px rgba(15,33,73,0.18)' }}>
            <div style={{ background: 'linear-gradient(135deg, #0f2149 0%, #1a3a6b 60%, #0a1533 100%)', padding: '28px 32px', position: 'relative', overflow: 'hidden' }}>
              {/* Pattern */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at center, rgba(201,162,39,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div style={{ position: 'absolute', right: -40, top: -40, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(201,162,39,0.15)' }} />
              <div style={{ position: 'absolute', right: -10, top: -10, width: 140, height: 140, borderRadius: '50%', border: '1px solid rgba(201,162,39,0.1)' }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: '#c9a227', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={22} color="#0f2149" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div style={{ color: '#c9a227', fontFamily: "'Crimson Pro', serif", fontSize: 17, fontWeight: 600 }}>Indira Institute</div>
                    <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Library Card</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: '0.08em', marginBottom: 2 }}>MEMBERSHIP ID</div>
                  <div style={{ color: '#c9a227', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600 }}>{user.membershipId}</div>
                </div>
              </div>

              {/* Member info */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, position: 'relative' }}>
                <div style={{ width: 72, height: 90, borderRadius: 8, background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(201,162,39,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 30, color: '#c9a227', fontWeight: 700, fontFamily: "'Crimson Pro', serif" }}>{user.name.charAt(0)}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, letterSpacing: '0.08em', marginBottom: 4 }}>CARD HOLDER</div>
                  <div style={{ color: 'white', fontFamily: "'Crimson Pro', serif", fontSize: 22, fontWeight: 600, marginBottom: 6 }}>{user.name}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 20px' }}>
                    {[['ID', user.id], ['Dept', user.department], ['Type', user.role.charAt(0).toUpperCase() + user.role.slice(1)], ['Valid Until', 'Dec 2025']].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 9, letterSpacing: '0.08em' }}>{label}</div>
                        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12, fontWeight: 500 }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* QR code placeholder */}
                <div style={{ width: 72, height: 72, background: 'white', borderRadius: 6, padding: 6, flexShrink: 0 }}>
                  <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(0deg, #0f2149 0px, #0f2149 3px, transparent 3px, transparent 6px), repeating-linear-gradient(90deg, #0f2149 0px, #0f2149 3px, transparent 3px, transparent 6px)', borderRadius: 2, opacity: 0.9 }} />
                </div>
              </div>

              {/* Status */}
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80' }} />
                  <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>ACTIVE</span>
                </div>
                {/* Barcode */}
                <div style={{ display: 'flex', gap: 1.5, alignItems: 'flex-end', height: 28 }}>
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} style={{ width: i % 3 === 0 ? 2 : 1, height: `${60 + Math.random() * 40}%`, background: 'rgba(255,255,255,0.5)' }} />
                  ))}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, letterSpacing: '0.06em' }}>INDIRA-2024</div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{ flex: 1, padding: '10px', borderRadius: 8, background: '#0f2149', color: 'white', border: 'none', fontSize: 13.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Download size={16} /> Download PDF
            </button>
            <button style={{ flex: 1, padding: '10px', borderRadius: 8, background: 'var(--card)', color: 'var(--foreground)', border: '1.5px solid var(--border)', fontSize: 13.5, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <Printer size={16} /> Print Card
            </button>
          </div>
        </div>

        {/* Card details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 16 }}>Card Details</h2>
            {[
              ['Card Number', 'IIL-2024-00147'],
              ['Membership ID', user.membershipId],
              ['Issue Date', '01 Jan 2024'],
              ['Valid Until', '31 Dec 2025'],
              ['Card Type', user.role.charAt(0).toUpperCase() + user.role.slice(1)],
              ['Department', user.department],
              ['Book Limit', user.role === 'faculty' ? '10 books' : '6 books'],
              ['Loan Period', user.role === 'faculty' ? '30 days' : '14 days'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '9px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: 12.5, color: 'var(--muted-foreground)' }}>{label}</span>
                <span style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--foreground)', fontFamily: label === 'Card Number' || label === 'Membership ID' ? 'JetBrains Mono, monospace' : undefined }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14 }}>Membership Status</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', borderRadius: 8, background: '#dcfce7', marginBottom: 12 }}>
              <CheckCircle size={18} color="#16a34a" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#15803d' }}>Active Member</div>
                <div style={{ fontSize: 11.5, color: '#166534' }}>All privileges enabled</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', background: 'var(--muted)', borderRadius: 8 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--foreground)', fontFamily: "'Crimson Pro', serif" }}>4</div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>Issued</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', padding: '12px', background: 'var(--muted)', borderRadius: 8 }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--foreground)', fontFamily: "'Crimson Pro', serif" }}>28</div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>Total Borrowed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
