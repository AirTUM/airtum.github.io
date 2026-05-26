import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function ProjectSection() {
  return (
    <section id="project" style={{ padding: '88px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <motion.div {...fade(0)} style={{ marginBottom: '32px' }}>
          <span className="tag" style={{ marginBottom: '14px', display: 'inline-block' }}>Projects</span>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3.5vw, 2.6rem)',
            fontWeight: 800, color: '#0d1117',
            letterSpacing: '-0.03em', lineHeight: 1.12,
          }}>
            What we build
          </h2>
        </motion.div>

        {/* Project teaser card */}
        <motion.div
          {...fade(0.08)}
          style={{
            borderRadius: '14px',
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.9)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            overflow: 'hidden',
            transition: 'box-shadow 0.2s, transform 0.2s',
            cursor: 'default',
          }}
          whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(0,101,189,0.1)' }}
        >
          <div style={{
            padding: '24px 28px',
            display: 'flex', alignItems: 'flex-start',
            justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap',
          }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              {/* Badges */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                {[
                  { text: 'BIE · SS26', color: '#0065BD' },
                  { text: 'Active', color: '#16a34a' },
                  { text: 'Open Source', color: '#7c3aed' },
                ].map(b => (
                  <span key={b.text} style={{
                    padding: '2px 9px', fontSize: '0.65rem', fontWeight: 600,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    color: b.color, border: `1px solid ${b.color}30`,
                    borderRadius: '3px', background: `${b.color}08`,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {b.text}
                  </span>
                ))}
              </div>

              <h3 style={{
                fontSize: '1.05rem', fontWeight: 700, color: '#0d1117',
                letterSpacing: '-0.02em', marginBottom: '8px',
              }}>
                Autonomous Air Quality Monitor
              </h3>
              <p style={{ fontSize: '0.83rem', color: '#6b7a8d', lineHeight: 1.65, marginBottom: '16px', maxWidth: '440px' }}>
                3D-printed fixed-wing UAV mapping PM2.5, CO2, VOC and NOx over urban environments.
                Genesis project for the CPS module at TUM Campus Heilbronn.
              </p>

              {/* Inline specs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {[
                  ['Platform', 'Flightory Lark'],
                  ['Wingspan', '1290 mm'],
                  ['Autopilot', 'ArduPlane'],
                ].map(([l, v]) => (
                  <div key={l} style={{
                    padding: '4px 10px', borderRadius: '5px',
                    background: 'rgba(0,101,189,0.05)', border: '1px solid rgba(0,101,189,0.12)',
                    display: 'flex', gap: '5px', alignItems: 'baseline',
                  }}>
                    <span style={{ fontSize: '0.65rem', color: '#9aa5b4', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{l}</span>
                    <span style={{ fontSize: '0.75rem', color: '#0065BD', fontFamily: "'JetBrains Mono', monospace" }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Link
                  to="/projects"
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '8px 18px' }}
                >
                  Full Details
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <a
                  href="https://github.com/CPSCourse-TUM-HN/ss26-team_16-airtum"
                  target="_blank" rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '8px 18px' }}
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right accent — logo icon */}
            <div style={{
              width: '100px', height: '100px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(0,101,189,0.06) 0%, rgba(0,101,189,0.02) 100%)',
              border: '1px solid rgba(0,101,189,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              padding: '18px',
            }} className="project-icon-box">
              <img src="/logo-color.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.55 }} />
            </div>
          </div>
        </motion.div>

      </div>
      <style>{`@media (max-width: 560px) { .project-icon-box { display: none !important; } }`}</style>
    </section>
  )
}
