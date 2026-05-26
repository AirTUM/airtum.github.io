import { motion } from 'framer-motion'

const footerLinks = {
  Project: [
    { label: 'About AirTUM', href: '#about' },
    { label: 'Flagship UAV', href: '#project' },
    { label: 'Sensor Payload', href: '#project' },
    { label: 'System Architecture', href: '#project' },
  ],
  Community: [
    { label: 'Open Source', href: '#opensource' },
    { label: 'Join Us', href: '#join' },
    { label: 'GitHub', href: 'https://github.com/airtum', external: true },
    { label: 'Contact', href: 'mailto:airtum@tum.de', external: true },
  ],
  Resources: [
    { label: 'ArduPlane Docs', href: 'https://ardupilot.org/plane/', external: true },
    { label: 'Flightory Lark', href: 'https://flightory.com', external: true },
    { label: 'Sensirion Sensors', href: 'https://sensirion.com', external: true },
    { label: 'TUM Heilbronn', href: 'https://www.tum.de/en/campus-heilbronn', external: true },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), transparent)',
        }}
      />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
                  <path d="M4 18 L18 6 L32 18 L18 14 Z" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.1)" strokeLinejoin="round" />
                  <path d="M18 14 L18 30" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M12 22 L24 22" stroke="#ff00ff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold text-xl tracking-wider">
                <span className="gradient-text-cyan">Air</span>
                <span className="text-white">TUM</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed mb-4 max-w-xs">
              Student aerospace community at TUM Campus Heilbronn. Building open-source
              autonomous UAVs for environmental sensing and beyond.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/airtum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:airtum@tum.de"
                className="w-9 h-9 rounded-lg glass border border-white/10 hover:border-cyan-400/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} AirTUM — TUM Campus Heilbronn Aerospace Community. MIT License.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              airtum.de
            </span>
            <span>·</span>
            <span>Built with React + Three.js</span>
            <span>·</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
