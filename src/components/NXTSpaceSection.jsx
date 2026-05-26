import { motion } from 'framer-motion'
import { useState } from 'react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

// NXTSpace brand colors from projects.nxtspace.de
const NXT_ORANGE = 'rgb(255, 45, 120)'
const NXT_DARK = '#1a1a2e'
const NXT_MID = '#16213e'

// SVG icons for tools (no emojis)
const ToolIcon = ({ type }) => {
  const s = { width: 16, height: 16, stroke: 'currentColor', fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (type === 'printer') return (
    <svg viewBox="0 0 24 24" style={s}>
      <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
      <rect x="6" y="14" width="12" height="8"/>
    </svg>
  )
  if (type === 'sewing') return (
    <svg viewBox="0 0 24 24" style={s}>
      <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
  if (type === 'laser') return (
    <svg viewBox="0 0 24 24" style={s}>
      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
    </svg>
  )
  if (type === 'robot') return (
    <svg viewBox="0 0 24 24" style={s}>
      <rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="12" cy="5" r="2"/>
      <line x1="8" y1="15" x2="8" y2="15"/><line x1="16" y1="15" x2="16" y2="15"/>
    </svg>
  )
  return null
}

const tools = [
  { iconType: 'printer', label: '3D Printer', status: 'available' },
  { iconType: 'sewing', label: 'Sewing & Embroidery', status: 'available' },
  { iconType: 'laser', label: 'Laser Cutter', status: 'coming soon' },
  { iconType: 'robot', label: 'Robot Area', status: 'in progress' },
]

export default function NXTSpaceSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="nxtspace" className="section-mobile" style={{ padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Dark background panel */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${NXT_DARK} 0%, ${NXT_MID} 100%)`,
      }} />
      {/* Orange glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '50vw', height: '50vw', maxWidth: '600px', maxHeight: '600px',
        background: `radial-gradient(ellipse, ${NXT_ORANGE}18 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: '40vw', height: '40vw', maxWidth: '400px', maxHeight: '400px',
        background: `radial-gradient(ellipse, ${NXT_ORANGE}0d 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,420px)',
          gap: '56px',
          alignItems: 'center',
        }} className="nxt-grid">

          {/* Left — text */}
          <div>
            <motion.div {...fade(0)} style={{ marginBottom: '16px' }}>
              <span style={{
                display: 'inline-block', padding: '3px 10px',
                fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.10em',
                textTransform: 'uppercase', color: NXT_ORANGE,
                border: `1px solid ${NXT_ORANGE}44`, borderRadius: '4px',
                background: `${NXT_ORANGE}12`,
              }}>
                Our Home Base
              </span>
            </motion.div>

            <motion.h2
              {...fade(0.06)}
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 900, color: '#f0f4f8',
                letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px',
              }}
            >
              Hosted by{' '}
              <span style={{ color: NXT_ORANGE }}>NXTSpace</span>
            </motion.h2>

            <motion.p
              {...fade(0.1)}
              style={{
                fontSize: '1rem', color: '#7a9ab0',
                lineHeight: 1.75, marginBottom: '24px', maxWidth: '440px',
              }}
            >
              NXTSpace is where students turn ideas into projects. A place to build, prototype,
              collaborate and learn from each other. No perfect idea needed, just start.
            </motion.p>

            <motion.p
              {...fade(0.13)}
              style={{
                fontSize: '0.88rem', color: '#4a6070',
                lineHeight: 1.7, marginBottom: '28px', maxWidth: '420px',
                fontStyle: 'italic',
              }}
            >
              "Start. Test. Fail. Learn. Build. That's the NXTSpace mindset."
            </motion.p>

            <motion.div {...fade(0.16)} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://register.nxtspace.de/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '10px 20px', borderRadius: '8px',
                  background: NXT_ORANGE, color: '#fff',
                  textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
                  boxShadow: `0 2px 12px ${NXT_ORANGE}40`,
                  transition: 'background 0.15s, transform 0.12s, box-shadow 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#d91f62'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = `0 4px 20px ${NXT_ORANGE}55`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = NXT_ORANGE
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = `0 2px 12px ${NXT_ORANGE}40`
                }}
              >
                Get Started
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a
                href="https://projects.nxtspace.de/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '10px 20px', borderRadius: '8px',
                  background: 'transparent', color: '#7a9ab0',
                  textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${NXT_ORANGE}44`
                  e.currentTarget.style.color = NXT_ORANGE
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = '#7a9ab0'
                }}
              >
                Register Project
              </a>
            </motion.div>
          </div>

          {/* Right — tools card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '28px 24px',
              backdropFilter: 'blur(12px)',
            }}
            className="nxt-card"
          >
            {/* Card header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '20px', paddingBottom: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '7px',
                background: `${NXT_ORANGE}18`, border: `1px solid ${NXT_ORANGE}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgb(255, 45, 120)', flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '0.83rem', fontWeight: 700, color: '#e2e8f0' }}>The Space</div>
                <div style={{ fontSize: '0.70rem', color: '#4a6070', marginTop: '1px' }}>Heilbronn · Open to students</div>
              </div>
            </div>

            {/* Tools */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              {tools.map((t, i) => (
                <div
                  key={t.label}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 12px', borderRadius: '8px',
                    background: hovered === i ? `${NXT_ORANGE}0d` : 'transparent',
                    border: `1px solid ${hovered === i ? NXT_ORANGE + '22' : 'transparent'}`,
                    transition: 'all 0.15s',
                    cursor: 'default',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ color: '#7a9ab0', display: 'flex', alignItems: 'center' }}><ToolIcon type={t.iconType} /></span>
                        <span style={{ fontSize: '0.82rem', fontWeight: 500, color: '#b8c8d8' }}>{t.label}</span>
                      </div>
                  <span style={{
                    fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.06em',
                    textTransform: 'uppercase', padding: '2px 7px', borderRadius: '3px',
                    color: t.status === 'available' ? '#22c55e' : NXT_ORANGE,
                    background: t.status === 'available' ? 'rgba(34,197,94,0.08)' : `${NXT_ORANGE}12`,
                    border: `1px solid ${t.status === 'available' ? 'rgba(34,197,94,0.2)' : NXT_ORANGE + '25'}`,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Mindset quote */}
            <div style={{
              padding: '12px 14px', borderRadius: '8px',
              background: `${NXT_ORANGE}0a`, border: `1px solid ${NXT_ORANGE}1a`,
            }}>
              <div style={{ fontSize: '0.75rem', color: '#4a6070', lineHeight: 1.6 }}>
                Join one of the monthly onboardings to start your own project at NXTSpace.
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nxt-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .nxt-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
