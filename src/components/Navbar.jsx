import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Community', href: '/#about' },
  { label: 'NXTSpace', href: '/#nxtspace' },
  { label: 'Open Source', href: '/#opensource' },
  { label: 'Join', href: '/#join' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isDark = location.pathname === '/projects' || location.pathname === '/impressum'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setScrolled(false)
    setOpen(false)
  }, [location.pathname])

  const textColor = isDark ? '#4a6070' : '#4a5568'
  const textHover = isDark ? '#e2e8f0' : '#0065BD'
  const bgScrolled = isDark ? 'rgba(10,15,26,0.92)' : 'rgba(245,246,248,0.88)'
  const borderScrolled = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const mobileBg = isDark ? 'rgba(10,15,26,0.97)' : 'rgba(245,246,248,0.97)'

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.25s ease',
        padding: scrolled ? '6px 24px' : '12px 24px',
        background: scrolled ? bgScrolled : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
        borderBottom: scrolled ? `1px solid ${borderScrolled}` : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={isDark ? '/logo-white.png' : '/logo-color.png'}
            alt="AirTUM"
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden md:flex">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{
                padding: '6px 14px', fontSize: '0.83rem', fontWeight: 500,
                color: textColor, textDecoration: 'none', borderRadius: '6px',
                letterSpacing: '0.01em', transition: 'color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = textHover
                e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,101,189,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = textColor
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {l.label}
            </a>
          ))}

          {/* GitHub as plain link */}
          <a
            href="https://github.com/airtum"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '6px 14px', fontSize: '0.83rem', fontWeight: 500,
              color: textColor, textDecoration: 'none', borderRadius: '6px',
              letterSpacing: '0.01em', transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = textHover
              e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,101,189,0.06)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = textColor
              e.currentTarget.style.background = 'transparent'
            }}
          >
            GitHub
          </a>

          {/* Projects as primary CTA */}
          <Link
            to="/projects"
            style={{
              marginLeft: '8px', padding: '7px 16px',
              fontSize: '0.83rem', fontWeight: 600,
              color: '#ffffff', textDecoration: 'none',
              borderRadius: '7px', background: '#0065BD',
              letterSpacing: '0.01em',
              transition: 'background 0.15s, box-shadow 0.15s, transform 0.12s',
              boxShadow: '0 2px 8px rgba(0,101,189,0.22)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#004f96'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,101,189,0.32)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#0065BD'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,101,189,0.22)'
            }}
          >
            Projects
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '6px', color: textColor, borderRadius: '6px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}
          onMouseLeave={e => e.currentTarget.style.background = 'none'}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <><line x1="3" y1="3" x2="15" y2="15" /><line x1="15" y1="3" x2="3" y2="15" /></>
            ) : (
              <><line x1="2" y1="5" x2="16" y2="5" /><line x1="2" y1="9" x2="16" y2="9" /><line x1="2" y1="13" x2="16" y2="13" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              borderTop: `1px solid ${borderScrolled}`,
              marginTop: '10px',
              background: mobileBg,
              backdropFilter: 'blur(20px)',
            }}
          >
            <div style={{ padding: '12px 0 16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '10px 4px', fontSize: '0.9rem',
                    color: textColor, textDecoration: 'none',
                    letterSpacing: '0.01em', fontWeight: 500, transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = textHover}
                  onMouseLeave={e => e.currentTarget.style.color = textColor}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://github.com/airtum"
                target="_blank" rel="noopener noreferrer"
                style={{ padding: '10px 4px', fontSize: '0.9rem', color: textColor, textDecoration: 'none', fontWeight: 500 }}
              >
                GitHub
              </a>
              <Link
                to="/projects"
                onClick={() => setOpen(false)}
                style={{
                  marginTop: '8px', padding: '10px 4px',
                  fontSize: '0.9rem', color: '#0065BD',
                  textDecoration: 'none', fontWeight: 700,
                }}
              >
                Projects
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
