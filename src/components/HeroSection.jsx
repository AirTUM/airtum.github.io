import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const statItems = [
  { value: '1290mm', label: 'Wingspan' },
  { value: '4+', label: 'Sensor Types' },
  { value: '100%', label: 'Open Source' },
  { value: 'ArduPlane', label: 'Autopilot' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,245,255,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass border border-cyan-400/30 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 pulse-cyan" />
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            TUM Campus Heilbronn · BIE 4th Semester
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6"
        >
          <span className="gradient-text-hero block">AirTUM</span>
          <span className="text-white/90 text-4xl sm:text-5xl lg:text-6xl font-bold block mt-2">
            Aerospace Community
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build. Fly. Analyze.{' '}
          <span className="text-slate-300">
            The home for autonomous UAV developers at TUM Campus Heilbronn.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          {/* Primary CTA */}
          <a
            href="#join"
            className="group relative px-8 py-4 rounded-2xl font-semibold text-base overflow-hidden transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(0,128,255,0.2))',
              border: '1px solid rgba(0,245,255,0.4)',
            }}
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.3), rgba(0,128,255,0.3))',
              }}
            />
            <span className="relative flex items-center gap-2 text-cyan-300 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Join the Community
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#project"
            className="group px-8 py-4 rounded-2xl font-semibold text-base glass border border-white/10 hover:border-magenta-400/40 transition-all duration-300"
            style={{ '--tw-border-opacity': 1 }}
          >
            <span className="flex items-center gap-2 text-slate-300 group-hover:text-white transition-colors">
              <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Explore Our Flagship Project
            </span>
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              className="glass rounded-xl p-4 text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-xl font-black gradient-text-cyan">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
