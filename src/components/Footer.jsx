import { useLocation, Link } from 'react-router-dom'

const footerLinks = [
  { l: 'Community', h: '/#about' },
  { l: 'NXTSpace', h: '/#nxtspace' },
  { l: 'Projects', h: '/projects' },
  { l: 'Open Source', h: '/#opensource' },
  { l: 'GitHub', h: 'https://github.com/airtum', ext: true },
  { l: 'Contact', h: 'mailto:contact@airtum.de', ext: true },
]

const legalLinks = [
  { l: 'Impressum', h: '/impressum' },
  { l: 'Datenschutz', h: '/impressum#datenschutz' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const isDark = location.pathname === '/projects' || location.pathname === '/impressum'

  const bg = isDark ? 'rgba(10,15,26,0.95)' : 'rgba(255,255,255,0.6)'
  const border = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const linkColor = isDark ? '#7a9ab0' : '#9aa5b4'
  const linkHover = isDark ? '#c8daea' : '#0065BD'
  const legalColor = isDark ? '#5a7a90' : '#c0c8d4'
  const legalHover = isDark ? '#a0bfd0' : '#6b7a8d'
  const copyColor = isDark ? '#4a6a80' : '#c0c8d4'

  return (
    <footer style={{
      borderTop: `1px solid ${border}`,
      padding: '40px 24px',
      background: bg,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: '24px',
      }}>
        {/* Top row */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          {/* Brand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={isDark ? '/logo-white.png' : '/logo-color.png'}
              alt="AirTUM"
              style={{
                height: '60px', width: 'auto', objectFit: 'contain',
                opacity: 0.55, transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '1'}
              onMouseLeave={e => e.currentTarget.style.opacity = '0.55'}
            />
          </Link>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {footerLinks.map(link => (
              link.ext ? (
                <a
                  key={link.l}
                  href={link.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.78rem', color: linkColor, textDecoration: 'none',
                    letterSpacing: '0.01em', fontWeight: 500, transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = linkHover}
                  onMouseLeave={e => e.currentTarget.style.color = linkColor}
                >
                  {link.l}
                </a>
              ) : (
                <a
                  key={link.l}
                  href={link.h}
                  style={{
                    fontSize: '0.78rem', color: linkColor, textDecoration: 'none',
                    letterSpacing: '0.01em', fontWeight: 500, transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = linkHover}
                  onMouseLeave={e => e.currentTarget.style.color = linkColor}
                >
                  {link.l}
                </a>
              )
            ))}
          </div>
        </div>

        {/* Bottom row — legal + copyright */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
          paddingTop: '16px', borderTop: `1px solid ${border}`,
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            {legalLinks.map(link => (
              <Link
                key={link.l}
                to={link.h}
                style={{
                  fontSize: '0.72rem', color: legalColor, textDecoration: 'none',
                  letterSpacing: '0.01em', fontWeight: 500, transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = legalHover}
                onMouseLeave={e => e.currentTarget.style.color = legalColor}
              >
                {link.l}
              </Link>
            ))}
          </div>
          <div style={{
            fontSize: '0.70rem', color: copyColor,
            fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.03em',
          }}>
            © {year} AirTUM - MIT License
          </div>
        </div>
      </div>
    </footer>
  )
}
