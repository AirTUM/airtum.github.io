import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const makerspaces = [
  {
    name: 'Experimenta',
    role: 'Science Center & Fab Lab',
    description:
      'Access to professional fabrication tools, laser cutters, and prototyping equipment for airframe construction and sensor housing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    name: 'NxtSpace',
    role: 'Innovation Hub & Co-Working',
    description:
      'Collaborative workspace for software development, electronics prototyping, and team coordination on our open-source UAV platform.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'magenta',
  },
  {
    name: 'CPS Lab @ TUM',
    role: 'Cyber-Physical Systems Research',
    description:
      'University lab infrastructure for embedded systems development, sensor integration, and autonomous flight algorithm testing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    color: 'blue',
  },
]

const values = [
  {
    icon: '🔧',
    title: 'Hands-On Building',
    desc: 'We design, 3D-print, and assemble real flying hardware — not just simulations.',
  },
  {
    icon: '🛸',
    title: 'Autonomous Systems',
    desc: 'Pushing the frontier of self-navigating UAVs with open autopilot stacks.',
  },
  {
    icon: '📡',
    title: 'Real-World Data',
    desc: 'Our UAVs collect actionable environmental data over Heilbronn and beyond.',
  },
  {
    icon: '🌍',
    title: 'Open Source First',
    desc: 'Every schematic, CAD file, and script is published for the community.',
  },
]

function MakerspaceCard({ space, index }) {
  const colorMap = {
    cyan: {
      border: 'hover:border-cyan-400/40',
      icon: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    },
    magenta: {
      border: 'hover:border-fuchsia-400/40',
      icon: 'text-fuchsia-400',
      bg: 'bg-fuchsia-400/10',
      badge: 'bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/20',
    },
    blue: {
      border: 'hover:border-blue-400/40',
      icon: 'text-blue-400',
      bg: 'bg-blue-400/10',
      badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    },
  }
  const c = colorMap[space.color]

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`glass rounded-2xl p-6 border border-white/10 ${c.border} transition-all duration-300 group hover:-translate-y-1`}
    >
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4 ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
        {space.icon}
      </div>
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${c.badge}`}>
        {space.role}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{space.name}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{space.description}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,255,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)',
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
          <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-fuchsia-400/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400" />
            <span className="text-xs font-semibold tracking-widest text-fuchsia-400 uppercase">
              Who We Are
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            A Community of{' '}
            <span className="gradient-text-magenta">Makers & Engineers</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AirTUM is a student-led aerospace community at TUM Campus Heilbronn, building
            open-source cyber-physical systems at the intersection of embedded engineering,
            autonomous flight, and environmental sensing.
          </p>
        </motion.div>

        {/* Two-column layout: description + values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl p-8 border border-cyan-400/15">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                We are a group of students from TUM Campus Heilbronn who believe that the best
                way to learn engineering is to build real systems that fly, sense, and communicate.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Leveraging the local makerspace ecosystem — Experimenta's fabrication labs,
                NxtSpace's collaborative environment, and TUM's CPS research infrastructure —
                we design and build autonomous UAVs from scratch.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Our projects span the full stack: mechanical design in CAD, 3D printing with
                LW-PLA, embedded firmware on ArduPlane, sensor integration over I²C/UART, and
                Python-based geospatial data analysis.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['ArduPlane', 'ESP32', 'Python', 'FreeCAD', 'MAVLink', 'LW-PLA', 'I²C', 'UART'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono font-semibold bg-white/5 border border-white/10 rounded-lg text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: values grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5 border border-white/10 hover:border-cyan-400/20 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {v.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Makerspaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Where We Build
          </h3>
          <p className="text-slate-500 text-sm">
            Our community operates across three key spaces in Heilbronn
          </p>
        </motion.div>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-3 gap-6"
        >
          {makerspaces.map((space, i) => (
            <MakerspaceCard key={space.name} space={space} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
