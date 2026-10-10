import { useState } from 'react'
import { Search, ChevronLeft, ChevronRight, BookOpen, Star } from 'lucide-react'
import type { User } from '../App'

interface Props { user: User }

const books = [
  { id: 'BK001', isbn: '978-0262033848', title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', publisher: 'MIT Press', edition: '4th', category: 'Computer Science', language: 'English', shelf: 'A-12', copies: 8, available: 5, price: 3200, status: 'Available', rating: 4.8 },
  { id: 'BK002', isbn: '978-0133943030', title: 'Operating System Concepts', author: 'Abraham Silberschatz', publisher: 'Wiley', edition: '10th', category: 'Computer Science', language: 'English', shelf: 'A-15', copies: 6, available: 2, price: 2800, status: 'Available', rating: 4.6 },
  { id: 'BK003', isbn: '978-0136019701', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', publisher: 'Prentice Hall', edition: '5th', category: 'Computer Science', language: 'English', shelf: 'A-18', copies: 5, available: 0, price: 2600, status: 'Issued', rating: 4.5 },
  { id: 'BK004', isbn: '978-0073523323', title: 'Database System Concepts', author: 'Henry F. Korth', publisher: 'McGraw-Hill', edition: '7th', category: 'Computer Science', language: 'English', shelf: 'B-04', copies: 7, available: 4, price: 2900, status: 'Available', rating: 4.7 },
  { id: 'BK005', isbn: '978-0201633610', title: 'Design Patterns', author: 'Erich Gamma', publisher: 'Addison-Wesley', edition: '1st', category: 'Software Engineering', language: 'English', shelf: 'B-11', copies: 4, available: 3, price: 3100, status: 'Available', rating: 4.9 },
  { id: 'BK006', isbn: '978-0131103627', title: 'The C Programming Language', author: 'Brian W. Kernighan', publisher: 'Prentice Hall', edition: '2nd', category: 'Programming', language: 'English', shelf: 'C-02', copies: 10, available: 7, price: 1800, status: 'Available', rating: 4.8 },
  { id: 'BK007', isbn: '978-1491952023', title: 'Fluent Python', author: 'Luciano Ramalho', publisher: "O'Reilly", edition: '2nd', category: 'Programming', language: 'English', shelf: 'C-09', copies: 5, available: 1, price: 3500, status: 'Available', rating: 4.7 },
  { id: 'BK008', isbn: '978-0136083238', title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', publisher: 'Pearson', edition: '4th', category: 'AI & ML', language: 'English', shelf: 'D-01', copies: 6, available: 3, price: 4200, status: 'Available', rating: 4.9 },
]

const categories = ['All', 'Computer Science', 'Software Engineering', 'Programming', 'AI & ML', 'Electronics', 'Mathematics']

const bookColors = ['#0f2149', '#1a3a6b', '#2563eb', '#7c3aed', '#059669', '#d97706', '#dc2626', '#0891b2']

export default function BookCatalog({ user: _user }: Props) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [view, setView] = useState<'grid' | 'table'>('grid')
  const [requested, setRequested] = useState<string[]>([])

  const filtered = books.filter(b =>
    (category === 'All' || b.category === category) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()) || b.isbn.includes(search))
  )

  const handleRequest = (id: string) => setRequested(r => r.includes(id) ? r : [...r, id])

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>Book Catalog</h1>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Browse and request from {books.length.toLocaleString()}+ titles in the Indira Institute Library</p>
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <Search size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title, author, ISBN..." style={{ width: '100%', paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8, borderRadius: 7, border: '1.5px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)} style={{ padding: '6px 14px', borderRadius: 6, border: `1.5px solid ${category === c ? '#0f2149' : 'var(--border)'}`, background: category === c ? '#0f2149' : 'transparent', color: category === c ? 'white' : 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer', fontWeight: category === c ? 600 : 400 }}>{c}</button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          {(['grid', 'table'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{ padding: '6px 12px', borderRadius: 6, border: '1.5px solid var(--border)', background: view === v ? 'var(--muted)' : 'transparent', color: 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer', textTransform: 'capitalize' }}>{v}</button>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 16 }}>Showing {filtered.length} results</p>

      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
          {filtered.map((book, i) => (
            <div key={book.id} style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', transition: 'box-shadow 0.15s' }}>
              <div style={{ height: 140, background: bookColors[i % bookColors.length], display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <BookOpen size={40} color="rgba(255,255,255,0.3)" />
                <div style={{ position: 'absolute', top: 10, right: 10 }}>
                  <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 10, background: book.available > 0 ? 'rgba(22,163,74,0.9)' : 'rgba(220,38,38,0.9)', color: 'white', fontWeight: 600 }}>
                    {book.available > 0 ? `${book.available} avail.` : 'Issued'}
                  </span>
                </div>
                <div style={{ position: 'absolute', bottom: 10, left: 10, right: 10 }}>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 9, letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>{book.isbn}</div>
                </div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4, lineHeight: 1.3 }}>{book.title}</div>
                <div style={{ fontSize: 12, color: 'var(--muted-foreground)', marginBottom: 2 }}>{book.author}</div>
                <div style={{ fontSize: 11, color: 'var(--muted-foreground)', marginBottom: 10 }}>{book.publisher} · {book.edition} Ed.</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 11, color: 'var(--muted-foreground)', background: 'var(--muted)', padding: '2px 8px', borderRadius: 10 }}>{book.category}</span>
                  <span style={{ fontSize: 11, color: '#d97706', display: 'flex', alignItems: 'center', gap: 3 }}><Star size={11} fill="#d97706" />{book.rating}</span>
                </div>
                <button onClick={() => handleRequest(book.id)} disabled={book.available === 0 || requested.includes(book.id)}
                  style={{ width: '100%', padding: '7px', borderRadius: 6, background: requested.includes(book.id) ? '#16a34a' : book.available === 0 ? 'var(--muted)' : '#0f2149', color: requested.includes(book.id) ? 'white' : book.available === 0 ? 'var(--muted-foreground)' : 'white', border: 'none', fontSize: 12, fontWeight: 500, cursor: book.available === 0 ? 'not-allowed' : 'pointer' }}>
                  {requested.includes(book.id) ? '✓ Requested' : book.available === 0 ? 'Not Available' : 'Request Book'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--muted)' }}>
                {['Book ID', 'Title / Author', 'Category', 'Shelf', 'Copies', 'Available', 'Action'].map(h => (
                  <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontSize: 11.5, fontWeight: 600, color: 'var(--muted-foreground)', letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((book, i) => (
                <tr key={book.id} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'var(--muted)' + '40' }}>
                  <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace' }}>{book.id}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--foreground)' }}>{book.title}</div>
                    <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{book.author}</div>
                  </td>
                  <td style={{ padding: '12px 16px', fontSize: 12, color: 'var(--muted-foreground)' }}>{book.category}</td>
                  <td style={{ padding: '12px 16px', fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--muted-foreground)' }}>{book.shelf}</td>
                  <td style={{ padding: '12px 16px', fontSize: 13, color: 'var(--foreground)', textAlign: 'center' }}>{book.copies}</td>
                  <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: book.available > 0 ? '#16a34a' : '#dc2626' }}>{book.available}</span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <button onClick={() => handleRequest(book.id)} disabled={book.available === 0 || requested.includes(book.id)}
                      style={{ padding: '5px 14px', borderRadius: 6, background: requested.includes(book.id) ? '#16a34a' : book.available === 0 ? 'var(--muted)' : '#0f2149', color: requested.includes(book.id) || book.available > 0 ? 'white' : 'var(--muted-foreground)', border: 'none', fontSize: 11.5, cursor: book.available === 0 ? 'not-allowed' : 'pointer', fontWeight: 500 }}>
                      {requested.includes(book.id) ? 'Requested' : book.available === 0 ? 'Unavailable' : 'Request'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ width: 32, height: 32, borderRadius: 7, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ChevronLeft size={16} />
        </button>
        {[1, 2, 3].map(p => (
          <button key={p} onClick={() => setPage(p)} style={{ width: 32, height: 32, borderRadius: 7, border: `1px solid ${page === p ? '#0f2149' : 'var(--border)'}`, background: page === p ? '#0f2149' : 'var(--card)', color: page === p ? 'white' : 'var(--muted-foreground)', fontSize: 13, cursor: 'pointer', fontWeight: page === p ? 600 : 400 }}>{p}</button>
        ))}
        <button onClick={() => setPage(p => p + 1)} style={{ width: 32, height: 32, borderRadius: 7, border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
