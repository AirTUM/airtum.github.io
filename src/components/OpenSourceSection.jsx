import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const openSourceItems = [
  {
    icon: '📐',
    title: 'CAD Designs',
    description:
      'Full Fusion 360 / FreeCAD source files for the custom sensor-bay nose modification, mounting brackets, and payload housing.',
    tags: ['Fusion 360', 'FreeCAD', 'STEP', 'STL'],
    color: 'cyan',
  },
  {
    icon: '🔌',
    title: 'Firmware & Configs',
    description:
      'ArduPlane parameter files, XIAO ESP32-S3 sensor firmware (Arduino/PlatformIO), and MAVLink integration scripts.',
    tags: ['ArduPlane', 'PlatformIO', 'C++', 'MAVLink'],
    color: 'blue',
  },
  {
    icon: '🐍',
    title: 'Python Data Pipeline',
    description:
      'Post-flight analysis scripts: parse .bin logs, correlate GPS + sensor data, and generate interactive Folium heatmaps.',
    tags: ['Python', 'Folium', 'Pandas', 'GeoJSON'],
    color: 'magenta',
  },
  {
    icon: '📋',
    title: 'Build Documentation',
    description:
      'Step-by-step assembly guides, wiring diagrams, BOM (bill of materials), and flight test reports.',
    tags: ['Markdown', 'KiCad', 'BOM', 'Docs'],
    color: 'green',
  },
]

const colorMap = {
  cyan: {
    border: 'hover:border-cyan-400/40',
    badge: 'bg-cyan-400/10 text-cyan-400',
    icon: 'bg-cyan-400/10 text-cyan-400',
  },
  blue: {
    border: 'hover:border-blue-400/40',
    badge: 'bg-blue-400/10 text-blue-400',
    icon: 'bg-blue-400/10 text-blue-400',
  },
  magenta: {
    border: 'hover:border-fuchsia-400/40',
    badge: 'bg-fuchsia-400/10 text-fuchsia-400',
    icon: 'bg-fuchsia-400/10 text-fuchsia-400',
  },
  green: {
    border: 'hover:border-emerald-400/40',
    badge: 'bg-emerald-400/10 text-emerald-400',
    icon: 'bg-emerald-400/10 text-emerald-400',
  },
}

const waysToContribute = [
  { emoji: '🛠️', title: 'Hardware Hacking', desc: 'Help improve the airframe, sensor mounts, or power systems.' },
  { emoji: '💻', title: 'Software Dev', desc: 'Contribute to firmware, data pipelines, or this website.' },
  { emoji: '📡', title: 'Flight Testing', desc: 'Join us for test flights and help collect real-world data.' },
  { emoji: '📚', title: 'Documentation', desc: 'Write guides, tutorials, or translate our docs.' },
]

export default function OpenSourceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <section id="opensource" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,245,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-emerald-400/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">
              Open Source
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Everything We Build,{' '}
            <span className="gradient-text-cyan">We Share</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            All hardware designs, firmware, CAD modifications, and data analysis scripts
            are published under open-source licenses. Knowledge should be free.
          </p>
        </motion.div>

        {/* Open source items grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {openSourceItems.map((item, i) => {
            const c = colorMap[item.color]
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className={`glass rounded-2xl p-6 border border-white/10 ${c.border} transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`px-2 py-0.5 text-xs font-mono rounded-md ${c.badge}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* GitHub CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-strong rounded-2xl p-8 border border-cyan-400/20 mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <h3 className="text-2xl font-black text-white">Find Us on GitHub</h3>
          </div>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Browse our repositories, star the project, open issues, or submit pull requests.
            Every contribution — big or small — makes a difference.
          </p>
          <a
            href="https://github.com/airtum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 glow-cyan"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(0,128,255,0.2))',
              border: '1px solid rgba(0,245,255,0.5)',
              color: '#00f5ff',
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/airtum
          </a>
        </motion.div>

        {/* Join Us section */}
        <div id="join" ref={ctaRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-fuchsia-400/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 pulse-cyan" />
              <span className="text-xs font-semibold tracking-widest text-fuchsia-400 uppercase">
                Get Involved
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to{' '}
              <span className="gradient-text-magenta">Build & Fly</span>
              {' '}With Us?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Whether you're a mechanical engineer, software developer, data scientist, or just
              passionate about aviation — there's a place for you in AirTUM.
            </p>
          </motion.div>

          {/* Ways to contribute */}
          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={ctaInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {waysToContribute.map((way, i) => (
              <motion.div
                key={way.title}
                variants={fadeUp}
                custom={i}
                className="glass rounded-xl p-5 border border-white/10 hover:border-fuchsia-400/20 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {way.emoji}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{way.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{way.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center"
          >
            <div
              className="inline-block rounded-3xl p-px"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.5), rgba(255,0,255,0.5))',
              }}
            >
              <div className="glass rounded-3xl px-12 py-10">
                <h3 className="text-2xl font-black text-white mb-3">
                  Join AirTUM Today
                </h3>
                <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
                  Reach out via GitHub, or find us at TUM Campus Heilbronn.
                  We meet weekly to work on the UAV and discuss new ideas.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://github.com/airtum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #00f5ff22, #0080ff22)',
                      border: '1px solid rgba(0,245,255,0.4)',
                      color: '#00f5ff',
                    }}
                  >
                    🚀 Start Contributing
                  </a>
                  <a
                    href="mailto:airtum@tum.de"
                    className="px-8 py-3.5 rounded-2xl font-bold text-sm glass border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-300"
                  >
                    ✉️ Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
