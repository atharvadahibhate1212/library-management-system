import { Calendar, BookOpen, Megaphone, Download, ArrowRight } from 'lucide-react'

const events = [
  { title: 'Annual Book Fair 2024', date: 'Dec 5-7, 2024', type: 'Book Fair', desc: 'Browse 500+ publishers and get exclusive discounts on academic titles.' },
  { title: 'Research Writing Workshop', date: 'Nov 25, 2024', type: 'Workshop', desc: 'Learn academic writing skills with guidance from faculty experts.' },
  { title: 'Inter-College Debate Competition', date: 'Dec 12, 2024', type: 'Competition', desc: 'Open to all undergraduate students. Topic: AI in Education.' },
  { title: 'Digital Library Orientation', date: 'Nov 28, 2024', type: 'Seminar', desc: 'Learn to navigate e-resources, databases, and research portals.' },
]

const news = [
  { title: '2,000 New E-books Added to Digital Collection', date: 'Nov 12, 2024', category: 'Library News' },
  { title: 'Extended Library Hours for Exam Season', date: 'Nov 10, 2024', category: 'Announcement' },
  { title: 'Indira Institute Ranked Among Top 50 Libraries', date: 'Nov 5, 2024', category: 'Achievement' },
  { title: 'New RFID Book Tracking System Installed', date: 'Oct 30, 2024', category: 'Infrastructure' },
]

const featured = [
  { title: 'Sapiens: A Brief History', author: 'Yuval Noah Harari', genre: 'History' },
  { title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help' },
  { title: 'The Phoenix Project', author: 'Gene Kim', genre: 'Technology' },
]

const typeColors: Record<string, { color: string; bg: string }> = {
  'Book Fair': { color: '#d97706', bg: '#fef3c7' },
  'Workshop': { color: '#7c3aed', bg: '#ede9fe' },
  'Competition': { color: '#dc2626', bg: '#fee2e2' },
  'Seminar': { color: '#2563eb', bg: '#dbeafe' },
  'Library News': { color: '#059669', bg: '#d1fae5' },
  'Announcement': { color: '#d97706', bg: '#fef3c7' },
  'Achievement': { color: '#c9a227', bg: '#fefce8' },
  'Infrastructure': { color: '#6b7280', bg: '#f3f4f6' },
}

export default function NewsletterSection() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>Newsletter & Events</h1>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Stay updated with library events, announcements, and news</p>
      </div>

      {/* Monthly newsletter banner */}
      <div style={{ background: 'linear-gradient(135deg, #0f2149 0%, #1a3a6b 100%)', borderRadius: 12, padding: '28px 32px', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 200, height: 200, borderRadius: '50%', background: 'rgba(201,162,39,0.08)' }} />
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c9a227', fontWeight: 600 }}>Monthly Newsletter</span>
          <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 26, fontWeight: 600, color: 'white', marginTop: 6, marginBottom: 8 }}>November 2024 Edition</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>New arrivals, upcoming events, research highlights, and more.</p>
        </div>
        <button style={{ padding: '10px 22px', borderRadius: 8, background: '#c9a227', color: '#0f2149', border: 'none', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Download size={16} /> Download Newsletter
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        <div>
          {/* Events */}
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Calendar size={17} color="#c9a227" /> Upcoming Events
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            {events.map((e, i) => {
              const tc = typeColors[e.type] || { color: '#6b7280', bg: '#f3f4f6' }
              return (
                <div key={i} style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '18px 22px', display: 'flex', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#0f2149', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Calendar size={20} color="#c9a227" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: tc.color, background: tc.bg, padding: '2px 10px', borderRadius: 10 }}>{e.type}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{e.date}</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>{e.title}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--muted-foreground)' }}>{e.desc}</div>
                  </div>
                  <button style={{ flexShrink: 0, padding: '6px 12px', borderRadius: 6, background: 'var(--muted)', color: 'var(--muted-foreground)', border: 'none', fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                    Register <ArrowRight size={12} />
                  </button>
                </div>
              )
            })}
          </div>

          {/* Recent News */}
          <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Megaphone size={17} color="#c9a227" /> Recent News
          </h2>
          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
            {news.map((n, i) => {
              const tc = typeColors[n.category] || { color: '#6b7280', bg: '#f3f4f6' }
              return (
                <div key={i} style={{ padding: '14px 22px', borderBottom: i < news.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: tc.color, background: tc.bg, padding: '2px 8px', borderRadius: 8, flexShrink: 0 }}>{n.category}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--foreground)' }}>{n.title}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)', marginTop: 2 }}>{n.date}</div>
                  </div>
                  <ArrowRight size={14} color="var(--muted-foreground)" style={{ flexShrink: 0 }} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <BookOpen size={15} color="#c9a227" /> Featured Books
            </h2>
            {featured.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 14, paddingBottom: 14, borderBottom: i < featured.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ width: 42, height: 54, borderRadius: 6, background: '#0f2149', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <BookOpen size={18} color="#c9a227" />
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)', lineHeight: 1.3 }}>{b.title}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)', marginTop: 2 }}>{b.author}</div>
                  <span style={{ fontSize: 10.5, color: '#7c3aed', background: '#ede9fe', padding: '1px 6px', borderRadius: 4, marginTop: 4, display: 'inline-block' }}>{b.genre}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '20px' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: 'var(--foreground)', marginBottom: 14 }}>Quick Downloads</h2>
            {[
              ['Library Rules & Regulations', 'PDF'],
              ['Borrowing Policy 2024', 'PDF'],
              ['E-Resource Guide', 'PDF'],
              ['Research Database Access', 'PDF'],
            ].map(([title, type]) => (
              <div key={title} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '1px solid var(--border)' }}>
                <Download size={14} color="var(--muted-foreground)" />
                <span style={{ fontSize: 13, color: 'var(--foreground)', flex: 1 }}>{title}</span>
                <span style={{ fontSize: 11, color: '#dc2626', background: '#fee2e2', padding: '1px 6px', borderRadius: 4 }}>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
