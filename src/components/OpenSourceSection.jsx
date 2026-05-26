import { motion } from 'framer-motion'
import { useState } from 'react'
import { useProposalModal } from '../context/ProposalModalContext'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const workstreams = [
  { number: '01', label: 'Hardware', desc: 'Airframe, mounts, power systems.' },
  { number: '02', label: 'Software', desc: 'Firmware, autopilot, data pipelines.' },
  { number: '03', label: 'Flight Ops', desc: 'Test flights, mission planning.' },
  { number: '04', label: 'Docs', desc: 'Guides, build logs, tutorials.' },
]

export default function OpenSourceSection() {
  const [hovered, setHovered] = useState(null)
  const { openModal } = useProposalModal()

  return (
    <>
      {/* Open Source */}
      <section id="opensource" style={{ padding: '88px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.div {...fade(0)} style={{ marginBottom: '40px' }}>
            <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>Open Source</span>
            <h2 style={{
              fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
              fontWeight: 800, color: '#0d1117',
              letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '10px',
            }}>
              Everything we build, we share
            </h2>
            <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '440px' }}>
              All hardware, firmware, CAD, and data scripts are published under open licenses.
            </p>
          </motion.div>

          {/* Repo tiles */}
          <motion.div
            {...fade(0.08)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            {[
              { title: 'CAD & Hardware', tags: ['FreeCAD', 'STL'] },
              { title: 'Firmware', tags: ['ArduPlane', 'C++'] },
              { title: 'Data Pipeline', tags: ['Python', 'Folium'] },
              { title: 'Documentation', tags: ['Markdown', 'KiCad'] },
            ].map((r, i) => (
              <div
                key={r.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '18px 18px', borderRadius: '10px',
                  background: hovered === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)',
                  border: `1px solid ${hovered === i ? 'rgba(0,101,189,0.16)' : 'rgba(255,255,255,0.85)'}`,
                  boxShadow: hovered === i ? '0 4px 16px rgba(0,101,189,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
                  transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)',
                  transition: 'all 0.18s ease',
                  cursor: 'default',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div style={{
                  width: '28px', height: '28px', borderRadius: '6px',
                  background: hovered === i ? 'rgba(0,101,189,0.1)' : 'rgba(0,101,189,0.06)',
                  border: '1px solid rgba(0,101,189,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px', color: '#0065BD', transition: 'background 0.18s',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div style={{ fontSize: '0.83rem', fontWeight: 700, color: '#0d1117', marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  {r.title}
                </div>
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                  {r.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            {...fade(0.16)}
            style={{
              padding: '20px 24px', borderRadius: '10px',
              background: 'rgba(0,101,189,0.04)', border: '1px solid rgba(0,101,189,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '14px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0d1117', marginBottom: '2px' }}>Find us on GitHub</div>
              <div style={{ fontSize: '0.78rem', color: '#6b7a8d' }}>Browse repos, open issues, submit PRs.</div>
            </div>
            <a
              href="https://github.com/airtum"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '8px 18px' }}
            >
              github.com/airtum
            </a>
          </motion.div>
        </div>
      </section>

      {/* Join */}
      <section id="join" style={{ padding: '72px 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.div {...fade(0)} style={{ marginBottom: '40px' }}>
            <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>Get Involved</span>
            <h2 style={{
              fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
              fontWeight: 800, color: '#0d1117',
              letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '10px',
            }}>
              Join the club at NXTSpace
            </h2>
            <p style={{ fontSize: '0.93rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '420px' }}>
              Mechanical design, firmware, data science, or just aviation. There's a place for you.
              We meet weekly at NXTSpace Heilbronn.
            </p>
          </motion.div>

          {/* Workstreams — full width */}
          <motion.div {...fade(0.08)}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
              marginBottom: '28px',
            }}>
              {workstreams.map((w) => (
                <div
                  key={w.label}
                  style={{
                    padding: '20px 20px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.6)',
                    border: '1px solid rgba(255,255,255,0.85)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.18s, transform 0.18s, background 0.18s',
                    cursor: 'default',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.9)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.6)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{
                    fontSize: '0.60rem', fontFamily: "'JetBrains Mono', monospace",
                    color: '#0065BD', letterSpacing: '0.08em', fontWeight: 600,
                    marginBottom: '12px', opacity: 0.7,
                  }}>
                    {w.number}
                  </div>
                  <div style={{ fontSize: '0.87rem', fontWeight: 700, color: '#0d1117', marginBottom: '5px', letterSpacing: '-0.015em' }}>
                    {w.label}
                  </div>
                  <div style={{ fontSize: '0.77rem', color: '#6b7a8d', lineHeight: 1.6 }}>{w.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="https://github.com/airtum" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Contributing
              </a>
              <a href="mailto:contact@airtum.de" className="btn-secondary">Contact Us</a>
            </div>
          </motion.div>

          {/* Propose a Project CTA — opens modal */}
          <motion.div
            {...fade(0.14)}
            style={{
              padding: '32px 36px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0d1117', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                Have an idea for a project?
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b7a8d', lineHeight: 1.6, maxWidth: '480px' }}>
                Propose it to the community. Fill in a short form and we'll get back to you. No perfect idea needed, just start.
              </div>
            </div>
            <button
              onClick={openModal}
              className="btn-primary"
              style={{ flexShrink: 0, padding: '12px 24px', fontSize: '0.9rem' }}
            >
              Propose a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
