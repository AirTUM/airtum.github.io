import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProposalModal } from '../context/ProposalModalContext'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

const specs = [
  { category: 'Airframe', items: [
    { l: 'Platform', v: 'Flightory Lark' },
    { l: 'Wingspan', v: '1290 mm' },
    { l: 'Material', v: 'LW-PLA / PETG' },
    { l: 'Method', v: 'FDM 3D Print' },
    { l: 'Mod', v: 'Custom sensor-bay nose' },
  ]},
  { category: 'Avionics', items: [
    { l: 'Autopilot', v: 'ArduPlane' },
    { l: 'FC', v: 'AtomRC F405-NAVI' },
    { l: 'Telemetry', v: 'MAVLink 915 MHz' },
    { l: 'GCS', v: 'Mission Planner' },
    { l: 'Modes', v: 'Auto / FBWA / Manual' },
  ]},
  { category: 'Sensor Payload', items: [
    { l: 'MCU', v: 'XIAO ESP32-S3' },
    { l: 'Particulates', v: 'Sensirion SEN55' },
    { l: 'CO2', v: 'Sensirion SCD41' },
    { l: 'VOC / NOx', v: 'Sensirion SGP41' },
    { l: 'Environment', v: 'Bosch BME688' },
  ]},
  { category: 'Data Pipeline', items: [
    { l: 'Language', v: 'Python 3.11+' },
    { l: 'Geo-viz', v: 'Folium / Matplotlib' },
    { l: 'Format', v: 'CSV + GeoJSON' },
    { l: 'Log source', v: 'ArduPlane .bin' },
    { l: 'Output', v: 'Heatmaps' },
  ]},
]

const archNodes = [
  { label: 'Sensors', sub: 'SEN55 · SCD41\nSGP41 · BME688' },
  { label: 'ESP32-S3', sub: 'Sensor MCU\nI2C · Logger' },
  { label: 'F405-NAVI', sub: 'ArduPlane\nGPS tag' },
  { label: 'Ground Station', sub: 'MAVLink\n915 MHz' },
]

export default function ProjectsPage() {
  const { openModal } = useProposalModal()
  return (
    <div style={{
      backgroundColor: '#0a0f1a',
      minHeight: '100vh',
      color: '#e2e8f0',
    }}>
      {/* Hero */}
      <section style={{
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,101,189,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,101,189,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          pointerEvents: 'none',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,101,189,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <motion.div {...fade(0)}>
            <Link
              to="/"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                fontSize: '0.78rem', color: '#7a9ab0', textDecoration: 'none',
                marginBottom: '32px', fontWeight: 500,
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#4da3ff'}
              onMouseLeave={e => e.currentTarget.style.color = '#7a9ab0'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Community
            </Link>
          </motion.div>

          <motion.div {...fade(0.05)} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src="/logo-white.png"
              alt="AirTUM"
              style={{ height: '24px', width: 'auto', objectFit: 'contain', opacity: 0.85 }}
            />
            <span style={{
              display: 'inline-block', padding: '3px 10px',
              fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.10em',
              textTransform: 'uppercase', color: '#0065BD',
              border: '1px solid rgba(0,101,189,0.28)', borderRadius: '4px',
              background: 'rgba(0,101,189,0.07)',
            }}>
              Projects
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.08,
              color: '#f0f4f8',
              marginBottom: '16px',
            }}
          >
            What we build
          </motion.h1>
          <motion.p
            {...fade(0.15)}
            style={{ fontSize: '1rem', color: '#8aacbf', maxWidth: '480px', lineHeight: 1.7 }}
          >
            Every project is open-source and built by the community. Fork it, improve it, build on it.
          </motion.p>
        </div>
      </section>

      {/* Project card — AirTUM CPS */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <motion.div
            {...fade(0.2)}
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              overflow: 'hidden',
            }}
          >
            {/* Card header */}
            <div style={{
              padding: '28px 32px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px',
                }}>
                  <span style={{
                    padding: '2px 9px', fontSize: '0.66rem', fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: '#0065BD', border: '1px solid rgba(0,101,189,0.3)',
                    borderRadius: '3px', background: 'rgba(0,101,189,0.08)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    BIE · SS26
                  </span>
                  <span style={{
                    padding: '2px 9px', fontSize: '0.66rem', fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: '3px', background: 'rgba(34,197,94,0.06)',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    Active
                  </span>
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: '#f0f4f8',
                  letterSpacing: '-0.025em',
                  marginBottom: '8px',
                  lineHeight: 1.2,
                }}>
                  Autonomous Air Quality Monitor
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#8aacbf', maxWidth: '560px', lineHeight: 1.7 }}>
                  A 3D-printed fixed-wing UAV on the Flightory Lark airframe, autonomously mapping
                  PM2.5, CO2, VOC, and NOx over urban environments with GPS-tagged sensor logs.
                  Genesis project for the CPS module at TUM Campus Heilbronn.
                </p>
              </div>

              <a
                href="https://github.com/CPSCourse-TUM-HN/ss26-team_16-airtum"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '8px',
                  background: '#0065BD', color: '#fff',
                  textDecoration: 'none', fontSize: '0.83rem', fontWeight: 600,
                  boxShadow: '0 2px 12px rgba(0,101,189,0.3)',
                  transition: 'background 0.15s, transform 0.12s, box-shadow 0.15s',
                  flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#004f96'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,101,189,0.4)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#0065BD'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,101,189,0.3)'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Spec grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0',
            }}>
              {specs.map((s, si) => (
                <div
                  key={s.category}
                  style={{
                    padding: '24px 28px',
                    borderRight: si < specs.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div style={{
                    fontSize: '0.62rem', color: '#0065BD',
                    letterSpacing: '0.10em', textTransform: 'uppercase',
                    fontWeight: 600, marginBottom: '14px',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {s.category}
                  </div>
                  {s.items.map(item => (
                    <div key={item.l} style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'baseline', padding: '5px 0',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      fontSize: '0.78rem', gap: '12px',
                    }}>
                      <span style={{ color: '#7a9ab0', fontWeight: 500, whiteSpace: 'nowrap' }}>
                        {item.l}
                      </span>
                      <span style={{
                        color: '#4da3ff',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.72rem', textAlign: 'right',
                      }}>
                        {item.v}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* System architecture */}
            <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{
                fontSize: '0.62rem', color: '#5a8090',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontWeight: 600, marginBottom: '16px',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                System Architecture
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {archNodes.map((node, i) => (
                  <div key={node.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      padding: '10px 14px', borderRadius: '7px',
                      border: '1px solid rgba(0,101,189,0.2)',
                      background: 'rgba(0,101,189,0.06)',
                      minWidth: '100px',
                    }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#b8c8d8', marginBottom: '3px' }}>
                        {node.label}
                      </div>
                      <div style={{
                        fontSize: '0.62rem', color: '#6a8a9a',
                        fontFamily: "'JetBrains Mono', monospace",
                        lineHeight: 1.5, whiteSpace: 'pre',
                      }}>
                        {node.sub}
                      </div>
                    </div>
                    {i < archNodes.length - 1 && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a6a80" strokeWidth="2" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* What we measure */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{
                fontSize: '0.62rem', color: '#5a8090',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                fontWeight: 600, marginBottom: '16px',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                What We Measure
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '8px',
              }}>
                {[
                  { name: 'PM2.5 / PM10', desc: 'Fine particulate matter · Sensirion SEN55' },
                  { name: 'CO2', desc: 'Carbon dioxide · Sensirion SCD41 NDIR' },
                  { name: 'VOC Index', desc: 'Volatile organics · Sensirion SGP41' },
                  { name: 'NOx Index', desc: 'Nitrogen oxides · Sensirion SGP41' },
                  { name: 'Temperature', desc: 'Ambient temp · Bosch BME688' },
                  { name: 'Humidity', desc: 'Relative humidity · Bosch BME688' },
                ].map(s => (
                  <div
                    key={s.name}
                    style={{
                      padding: '12px 14px', borderRadius: '7px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.02)',
                      transition: 'border-color 0.15s, background 0.15s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(0,101,189,0.25)'
                      e.currentTarget.style.background = 'rgba(0,101,189,0.05)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <div style={{
                      fontSize: '0.78rem', fontWeight: 600, color: '#4da3ff',
                      marginBottom: '3px', fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {s.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#6a8a9a' }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* More projects placeholder */}
          <motion.div
            {...fade(0.3)}
            style={{
              marginTop: '16px',
              padding: '24px 28px',
              borderRadius: '12px',
              border: '1px dashed rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#7a9ab0', marginBottom: '4px' }}>
                More projects coming
              </div>
              <div style={{ fontSize: '0.78rem', color: '#7a9ab0' }}>
                Have an idea? Propose a project to the community.
              </div>
            </div>
            <button
              onClick={openModal}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '8px 16px', borderRadius: '7px',
                border: '1px solid rgba(0,101,189,0.3)',
                color: '#4da3ff', cursor: 'pointer',
                fontSize: '0.8rem', fontWeight: 500,
                background: 'rgba(0,101,189,0.07)',
                transition: 'border-color 0.15s, color 0.15s, background 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,101,189,0.55)'
                e.currentTarget.style.background = 'rgba(0,101,189,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,101,189,0.3)'
                e.currentTarget.style.background = 'rgba(0,101,189,0.07)'
              }}
            >
              Propose a project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
