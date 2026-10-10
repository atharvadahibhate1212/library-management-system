import { useState } from 'react'
import { Search, Download, ExternalLink, FileText } from 'lucide-react'

const papers = [
  { id: 'RP001', title: 'Deep Learning for Image Recognition in Medical Diagnostics', authors: 'Dr. Priya Mehta, Arjun Sharma', dept: 'Computer Science', type: 'Journal', date: '2024-10-15', doi: '10.1000/xyz123', abstract: 'This paper presents a novel deep learning architecture for automated medical image analysis, achieving 94.2% accuracy on the benchmark dataset. The proposed model incorporates attention mechanisms and transfer learning techniques.' },
  { id: 'RP002', title: 'Blockchain-Based Secure Data Sharing in Healthcare Systems', authors: 'Prof. Ramesh Kulkarni, Sneha Kumar', dept: 'Electronics', type: 'Conference', date: '2024-09-20', doi: '10.1000/abc456', abstract: 'A decentralized framework for secure patient data sharing using permissioned blockchain technology. The system ensures data integrity and patient privacy while enabling seamless data exchange.' },
  { id: 'RP003', title: 'Optimization of Renewable Energy Systems Using Genetic Algorithms', authors: 'Dr. Kavita Singh', dept: 'Mechanical', type: 'Journal', date: '2024-08-05', doi: '10.1000/def789', abstract: 'An evolutionary computation approach to optimize the placement and configuration of solar panels and wind turbines in hybrid renewable energy systems.' },
  { id: 'RP004', title: 'Natural Language Processing for Regional Language Text Classification', authors: 'Prof. Anita Desai, Rahul Patil', dept: 'Computer Science', type: 'Patent', date: '2024-07-12', doi: '10.1000/ghi012', abstract: 'A transformer-based NLP model fine-tuned for Marathi and Hindi text classification tasks with improved accuracy over existing multilingual models.' },
  { id: 'RP005', title: 'Smart Irrigation System Using IoT and Machine Learning', authors: 'Dr. Vijay Nair', dept: 'Electronics', type: 'Conference', date: '2024-06-28', doi: '10.1000/jkl345', abstract: 'An IoT-enabled precision agriculture system that uses ML models to predict soil moisture and automate irrigation schedules, reducing water usage by 35%.' },
]

const types = ['All', 'Journal', 'Conference', 'Patent', 'Project']
const depts = ['All Departments', 'Computer Science', 'Electronics', 'Mechanical', 'Civil', 'MBA']

const typeColors: Record<string, { color: string; bg: string }> = {
  Journal: { color: '#2563eb', bg: '#dbeafe' },
  Conference: { color: '#7c3aed', bg: '#ede9fe' },
  Patent: { color: '#d97706', bg: '#fef3c7' },
  Project: { color: '#059669', bg: '#d1fae5' },
}

export default function ResearchPublications() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All')
  const [dept, setDept] = useState('All Departments')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = papers.filter(p =>
    (type === 'All' || p.type === type) &&
    (dept === 'All Departments' || p.dept === dept) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.authors.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 28, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4 }}>Research Publications</h1>
        <p style={{ fontSize: 13, color: 'var(--muted-foreground)' }}>Faculty and student research papers, journals, conference proceedings, and patents</p>
      </div>

      {/* Filters */}
      <div style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', padding: '16px 20px', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: 200 }}>
          <Search size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted-foreground)' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search publications..." style={{ width: '100%', paddingLeft: 34, paddingRight: 12, paddingTop: 8, paddingBottom: 8, borderRadius: 7, border: '1.5px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {types.map(t => (
            <button key={t} onClick={() => setType(t)} style={{ padding: '6px 12px', borderRadius: 6, border: `1.5px solid ${type === t ? '#0f2149' : 'var(--border)'}`, background: type === t ? '#0f2149' : 'transparent', color: type === t ? 'white' : 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer', fontWeight: type === t ? 600 : 400 }}>{t}</button>
          ))}
        </div>
        <select value={dept} onChange={e => setDept(e.target.value)} style={{ padding: '7px 12px', borderRadius: 7, border: '1.5px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', fontSize: 13, outline: 'none', cursor: 'pointer' }}>
          {depts.map(d => <option key={d}>{d}</option>)}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map(paper => {
          const tc = typeColors[paper.type] || { color: '#6b7280', bg: '#f3f4f6' }
          const isExpanded = expanded === paper.id
          return (
            <div key={paper.id} style={{ background: 'var(--card)', borderRadius: 10, border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: '#f4f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FileText size={20} color="#0f2149" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: tc.color, background: tc.bg, padding: '2px 10px', borderRadius: 10 }}>{paper.type}</span>
                      <span style={{ fontSize: 11.5, color: 'var(--muted-foreground)' }}>{paper.dept}</span>
                      <span style={{ fontSize: 11.5, color: 'var(--muted-foreground)', marginLeft: 'auto' }}>{paper.date}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--foreground)', marginBottom: 4, lineHeight: 1.4, fontFamily: "'Crimson Pro', serif" }}>{paper.title}</h3>
                    <p style={{ fontSize: 12.5, color: 'var(--muted-foreground)', marginBottom: 8 }}>{paper.authors}</p>
                    <div style={{ fontSize: 11.5, color: 'var(--muted-foreground)', fontFamily: 'JetBrains Mono, monospace' }}>DOI: {paper.doi}</div>

                    {isExpanded && (
                      <div style={{ marginTop: 14, padding: '14px', borderRadius: 8, background: 'var(--muted)', fontSize: 13, color: 'var(--foreground)', lineHeight: 1.6 }}>
                        <strong style={{ fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Abstract</strong>
                        <p style={{ marginTop: 6 }}>{paper.abstract}</p>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
                      <button onClick={() => setExpanded(isExpanded ? null : paper.id)} style={{ padding: '5px 14px', borderRadius: 6, border: '1.5px solid var(--border)', background: 'transparent', color: 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer' }}>
                        {isExpanded ? 'Hide Abstract' : 'Read Abstract'}
                      </button>
                      <button style={{ padding: '5px 14px', borderRadius: 6, border: 'none', background: '#0f2149', color: 'white', fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Download size={13} /> Download PDF
                      </button>
                      <button style={{ padding: '5px 14px', borderRadius: 6, border: 'none', background: 'transparent', color: 'var(--muted-foreground)', fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
                        <ExternalLink size={13} /> View DOI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
