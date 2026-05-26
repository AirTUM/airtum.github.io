import { motion } from 'framer-motion'
import { useState } from 'react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

const pillars = [
  {
    number: '01',
    title: 'Design & Build',
    desc: 'CAD to 3D-printed airframe. Real hardware, every session.',
    tags: ['FreeCAD', 'LW-PLA'],
  },
  {
    number: '02',
    title: 'Fly & Test',
    desc: 'Real flight tests. Tune autopilots, run missions, collect data.',
    tags: ['ArduPlane', 'MAVLink'],
  },
  {
    number: '03',
    title: 'Analyze & Share',
    desc: 'Post-flight pipelines. Everything published so the next builder starts further ahead.',
    tags: ['Python', 'GitHub'],
  },
]

export default function AboutSection() {
  const [active, setActive] = useState(null)

  return (
    <section id="about" className="section-mobile" style={{ padding: '88px 24px', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,101,189,0.02) 50%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <motion.div {...fade(0)} style={{ marginBottom: '48px' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>Who We Are</span>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
            fontWeight: 800, color: '#0d1117',
            letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '12px',
          }}>
            A community for people who build things that fly
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '480px' }}>
            AirTUM is a student club at TUM Campus Heilbronn. No prior experience required. Show up and start building.
          </p>
        </motion.div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '12px',
        }}>
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              {...fade(i * 0.07)}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              style={{
                padding: '24px 22px',
                borderRadius: '12px',
                background: active === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)',
                border: `1px solid ${active === i ? 'rgba(0,101,189,0.18)' : 'rgba(255,255,255,0.85)'}`,
                boxShadow: active === i
                  ? '0 4px 20px rgba(0,101,189,0.1), 0 1px 4px rgba(0,0,0,0.06)'
                  : '0 1px 4px rgba(0,0,0,0.04)',
                transform: active === i ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'all 0.2s ease',
                cursor: 'default',
                backdropFilter: 'blur(16px)',
              }}
            >
              <div style={{
                fontSize: '0.60rem', fontFamily: "'JetBrains Mono', monospace",
                color: active === i ? '#0065BD' : '#c0c8d4',
                letterSpacing: '0.08em', fontWeight: 600, marginBottom: '14px',
                transition: 'color 0.2s',
              }}>
                {p.number}
              </div>
              <h3 style={{
                fontSize: '0.95rem', fontWeight: 700, color: '#0d1117',
                marginBottom: '8px', letterSpacing: '-0.02em',
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#4a5568', lineHeight: 1.65, marginBottom: '14px' }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', gap: '5px' }}>
                {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
