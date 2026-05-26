import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const WORDS = ['Build.', 'Fly.', 'Iterate.', 'Share.']

const pillars = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: 'Weekly Build Sessions',
    sub: 'NxtSpace · Every week',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Full-Stack Aerospace',
    sub: 'CAD → Firmware → Flight',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Open Source Everything',
    sub: 'MIT License · GitHub',
  },
]

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % WORDS.length)
        setVisible(true)
      }, 280)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '110px 24px 72px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none' }} />

      {/* Ambient washes */}
      <div style={{
        position: 'absolute', top: '-15%', left: '-8%',
        width: '55vw', height: '55vw', maxWidth: '650px', maxHeight: '650px',
        background: 'radial-gradient(ellipse, rgba(0,101,189,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', right: '-5%',
        width: '45vw', height: '45vw', maxWidth: '500px', maxHeight: '500px',
        background: 'radial-gradient(ellipse, rgba(0,101,189,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,380px)',
          gap: '56px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginBottom: '24px' }}
            >
              <span className="pill">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0065BD', display: 'inline-block', flexShrink: 0 }} />
                TUM Campus Heilbronn · NxtSpace
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-0.038em',
                color: '#0d1117',
                margin: 0,
              }}>
                The plane builders
                <br />
                at <span className="text-gradient">TUM Heilbronn.</span>
              </h1>

              {/* Animated word */}
              <div style={{
                fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-0.038em',
                height: 'clamp(3.2rem, 7.5vw, 5.8rem)',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '28px',
              }}>
                <span style={{
                  color: '#0065BD',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                  display: 'inline-block',
                }}>
                  {WORDS[wordIndex]}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
            >
              <a href="#join" className="btn-primary">Join the Community</a>
              <a href="/projects" className="btn-secondary">See Projects</a>
            </motion.div>
          </div>

          {/* Right — interactive card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card hero-card"
            style={{ padding: '24px' }}
          >
            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              marginBottom: '20px', paddingBottom: '16px',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '8px',
                background: 'rgba(0,101,189,0.06)', border: '1px solid rgba(0,101,189,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                overflow: 'hidden', padding: '4px',
              }}>
                <img src="/logo-color.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.83rem', fontWeight: 700, color: '#0d1117', letterSpacing: '-0.01em' }}>AirTUM</div>
                <div style={{ fontSize: '0.70rem', color: '#9aa5b4', marginTop: '1px' }}>Student Club · Open to all</div>
              </div>
            </div>

            {/* Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '18px' }}>
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'flex', gap: '10px', alignItems: 'center',
                    padding: '10px 10px', borderRadius: '8px',
                    background: hovered === i ? 'rgba(0,101,189,0.05)' : 'transparent',
                    transition: 'background 0.15s',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    background: hovered === i ? 'rgba(0,101,189,0.12)' : 'rgba(0,101,189,0.06)',
                    border: `1px solid ${hovered === i ? 'rgba(0,101,189,0.2)' : 'rgba(0,101,189,0.10)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, color: '#0065BD',
                    transition: 'background 0.15s, border-color 0.15s',
                  }}>
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.80rem', fontWeight: 600, color: '#0d1117', letterSpacing: '-0.01em' }}>{p.title}</div>
                    <div style={{ fontSize: '0.70rem', color: '#9aa5b4', marginTop: '1px' }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{
              paddingTop: '14px', borderTop: '1px solid rgba(0,0,0,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: '0.70rem', color: '#9aa5b4' }}>Heilbronn, Germany</span>
              <a
                href="#join"
                style={{
                  fontSize: '0.73rem', fontWeight: 600, color: '#0065BD',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px',
                  transition: 'gap 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '7px'}
                onMouseLeave={e => e.currentTarget.style.gap = '4px'}
              >
                Get involved
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
        }}
      >
        <span style={{ fontSize: '0.60rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c0c8d4', fontWeight: 600 }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, rgba(0,101,189,0.35), transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-card { display: none !important; }
        }
      `}</style>
    </section>
  )
}
