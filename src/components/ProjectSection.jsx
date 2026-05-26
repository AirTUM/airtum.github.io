import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const techCards = [
  {
    category: 'Airframe',
    icon: '✈️',
    color: 'cyan',
    title: 'Flightory Lark',
    specs: [
      { label: 'Platform', value: 'Flightory Lark Fixed-Wing' },
      { label: 'Wingspan', value: '1290 mm' },
      { label: 'Materials', value: 'LW-PLA / PETG' },
      { label: 'Method', value: 'FDM 3D Printing' },
      { label: 'Modification', value: 'Custom sensor-bay nose' },
    ],
    description:
      'A lightweight, 3D-printed fixed-wing platform optimized for long-endurance atmospheric sensing missions over urban environments.',
  },
  {
    category: 'Avionics & Control',
    icon: '🎛️',
    color: 'blue',
    title: 'ArduPlane Stack',
    specs: [
      { label: 'Autopilot', value: 'ArduPlane (open-source)' },
      { label: 'Flight Controller', value: 'AtomRC F405-NAVI' },
      { label: 'Telemetry', value: 'MAVLink / 915 MHz' },
      { label: 'GCS', value: 'Mission Planner / QGC' },
      { label: 'Modes', value: 'Auto, FBWA, Manual' },
    ],
    description:
      'Full autonomous waypoint navigation with real-time MAVLink telemetry. Supports geofencing, return-to-launch, and custom mission scripting.',
  },
  {
    category: 'Sensor Payload',
    icon: '🔬',
    color: 'magenta',
    title: 'Environmental Suite',
    specs: [
      { label: 'MCU', value: 'Seeed XIAO ESP32-S3' },
      { label: 'Particulates', value: 'Sensirion SEN55 (PM1–10)' },
      { label: 'CO₂', value: 'Sensirion SCD41' },
      { label: 'VOC / NOx', value: 'Sensirion SGP41' },
      { label: 'Env. Baseline', value: 'Bosch BME688' },
    ],
    description:
      'GPS-tagged multi-parameter air quality logging at 1 Hz. Data streams over UART to the flight controller for geo-referenced heatmap generation.',
  },
  {
    category: 'Data Pipeline',
    icon: '📊',
    color: 'green',
    title: 'Python Analytics',
    specs: [
      { label: 'Language', value: 'Python 3.11+' },
      { label: 'Geo-viz', value: 'Folium / Matplotlib' },
      { label: 'Data Format', value: 'CSV + GeoJSON' },
      { label: 'Log Source', value: 'ArduPlane .bin logs' },
      { label: 'Output', value: 'Interactive heatmaps' },
    ],
    description:
      'Post-flight scripts parse ArduPlane dataflash logs, correlate sensor readings with GPS coordinates, and render interactive pollution heatmaps.',
  },
]

const sensors = [
  { name: 'PM2.5 / PM10', icon: '💨', desc: 'Fine particulate matter via Sensirion SEN55 optical counter', color: 'text-cyan-400' },
  { name: 'CO₂', icon: '🌿', desc: 'Carbon dioxide concentration via SCD41 NDIR sensor', color: 'text-green-400' },
  { name: 'VOC Index', icon: '🧪', desc: 'Volatile organic compounds via SGP41 MOx sensor', color: 'text-yellow-400' },
  { name: 'NOx Index', icon: '⚗️', desc: 'Nitrogen oxide index via SGP41 dual-channel MOx', color: 'text-orange-400' },
  { name: 'Temperature', icon: '🌡️', desc: 'Ambient temperature via BME688 environmental sensor', color: 'text-red-400' },
  { name: 'Humidity', icon: '💧', desc: 'Relative humidity via BME688 for data correction', color: 'text-blue-400' },
]

const colorMap = {
  cyan: {
    border: 'border-cyan-400/20 hover:border-cyan-400/50',
    badge: 'bg-cyan-400/10 text-cyan-400 border-cyan-400/20',
    icon: 'bg-cyan-400/10 text-cyan-400',
    label: 'text-cyan-400',
    dot: 'bg-cyan-400',
  },
  blue: {
    border: 'border-blue-400/20 hover:border-blue-400/50',
    badge: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    icon: 'bg-blue-400/10 text-blue-400',
    label: 'text-blue-400',
    dot: 'bg-blue-400',
  },
  magenta: {
    border: 'border-fuchsia-400/20 hover:border-fuchsia-400/50',
    badge: 'bg-fuchsia-400/10 text-fuchsia-400 border-fuchsia-400/20',
    icon: 'bg-fuchsia-400/10 text-fuchsia-400',
    label: 'text-fuchsia-400',
    dot: 'bg-fuchsia-400',
  },
  green: {
    border: 'border-emerald-400/20 hover:border-emerald-400/50',
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    icon: 'bg-emerald-400/10 text-emerald-400',
    label: 'text-emerald-400',
    dot: 'bg-emerald-400',
  },
}

function TechCard({ card, index }) {
  const c = colorMap[card.color]
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className={`glass rounded-2xl p-6 border ${c.border} transition-all duration-300 hover:-translate-y-2 group flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
          {card.icon}
        </div>
        <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${c.badge}`}>
          {card.category}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-5">{card.description}</p>

      {/* Specs list */}
      <div className="mt-auto space-y-2">
        {card.specs.map((spec) => (
          <div key={spec.label} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
            <span className="text-xs text-slate-500 font-medium">{spec.label}</span>
            <span className={`text-xs font-mono font-semibold ${c.label}`}>{spec.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const sensorsRef = useRef(null)
  const sensorsInView = useInView(sensorsRef, { once: true, margin: '-80px' })

  return (
    <section id="project" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,128,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass border border-blue-400/30 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
              Genesis Project · BIE 4th Semester
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Flagship:{' '}
            <span className="gradient-text-cyan">Autonomous Aerial</span>
            <br />
            <span className="gradient-text-cyan">Air Quality Monitor</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A 3D-printed fixed-wing UAV built on the{' '}
            <span className="text-white font-semibold">Flightory Lark</span> airframe,
            autonomously mapping PM2.5, CO₂, VOC, and NOx concentrations across
            urban environments with centimeter-level GPS precision.
          </p>
        </motion.div>

        {/* Mission statement banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-strong rounded-2xl p-6 mb-16 border border-cyan-400/20 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl">
            🛩️
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white mb-1">Mission Profile</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Autonomous waypoint missions over Heilbronn city center and TUM campus. The UAV
              follows pre-planned GPS routes at 80–120m AGL, logging geo-tagged sensor data
              every second. Post-flight Python scripts generate interactive pollution heatmaps
              for urban air quality research.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-2 text-center">
            <div className="px-4 py-2 bg-green-400/10 border border-green-400/20 rounded-xl">
              <div className="text-green-400 font-bold text-lg">Active</div>
              <div className="text-slate-500 text-xs">Development</div>
            </div>
          </div>
        </motion.div>

        {/* Tech cards grid */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {techCards.map((card, i) => (
            <TechCard key={card.category} card={card} index={i} />
          ))}
        </motion.div>

        {/* Sensor payload detail */}
        <div ref={sensorsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sensorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-black text-white mb-3">
              What We Measure
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Six environmental parameters logged simultaneously at 1 Hz with GPS tagging
            </p>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            animate={sensorsInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sensors.map((sensor, i) => (
              <motion.div
                key={sensor.name}
                variants={fadeUp}
                custom={i}
                className="glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-start gap-4 group hover:-translate-y-1"
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {sensor.icon}
                </div>
                <div>
                  <div className={`text-sm font-bold mb-1 ${sensor.color}`}>{sensor.name}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{sensor.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Architecture diagram (text-based) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sensorsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 glass rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">System Architecture</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            {[
              { label: 'Sensors', sub: 'SEN55 · SCD41 · SGP41 · BME688', color: 'border-fuchsia-400/40 text-fuchsia-300' },
              { label: '→', sub: 'I²C Bus', color: 'text-slate-500 border-transparent', arrow: true },
              { label: 'XIAO ESP32-S3', sub: 'Sensor MCU · Data Logger', color: 'border-cyan-400/40 text-cyan-300' },
              { label: '→', sub: 'UART / MAVLink', color: 'text-slate-500 border-transparent', arrow: true },
              { label: 'F405-NAVI', sub: 'ArduPlane · GPS Tagging', color: 'border-blue-400/40 text-blue-300' },
              { label: '→', sub: '915 MHz RF', color: 'text-slate-500 border-transparent', arrow: true },
              { label: 'Ground Station', sub: 'Mission Planner · Live Telemetry', color: 'border-emerald-400/40 text-emerald-300' },
            ].map((node, i) =>
              node.arrow ? (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-slate-400 text-xl">→</span>
                  <span className="text-xs text-slate-600 mt-1">{node.sub}</span>
                </div>
              ) : (
                <div
                  key={i}
                  className={`px-4 py-3 rounded-xl border glass text-center min-w-[130px] ${node.color}`}
                >
                  <div className="font-bold text-sm">{node.label}</div>
                  <div className="text-xs text-slate-500 mt-1">{node.sub}</div>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
