import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useProposalModal } from '../context/ProposalModalContext'

function buildProposalMailto(form) {
  const subject = encodeURIComponent(`[AirTUM] Project Proposal: ${form.title || 'New Project'}`)
  const body = encodeURIComponent(
    `Hi AirTUM Team,\n\nI'd like to propose a new project for the community.\n\n` +
    `Project Title: ${form.title}\n` +
    `Your Name: ${form.name}\n` +
    `Area of Interest: ${form.area}\n\n` +
    `Description:\n${form.description}\n\n` +
    `Looking forward to hearing from you!\n\n${form.name}`
  )
  return `mailto:contact@airtum.de?subject=${subject}&body=${body}`
}

const inputStyle = {
  width: '100%',
  padding: '10px 13px',
  borderRadius: '8px',
  border: '1px solid rgba(0,0,0,0.10)',
  background: 'rgba(255,255,255,0.85)',
  fontSize: '0.88rem',
  color: '#0d1117',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 600,
  color: '#4a5568',
  marginBottom: '5px',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}

export default function ProposalModal() {
  const { open, closeModal } = useProposalModal()
  const [form, setForm] = useState({ name: '', title: '', area: '', description: '' })
  const [touched, setTouched] = useState(false)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleChange = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const handleClose = () => {
    closeModal()
    setForm({ name: '', title: '', area: '', description: '' })
    setTouched(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched(true)
    if (!form.name || !form.title || !form.description) return
    window.location.href = buildProposalMailto(form)
    handleClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={handleClose}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(10, 15, 26, 0.55)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          />

          {/* Centering container — sits above backdrop, flex-centers the panel */}
          <div
            style={{
              position: 'fixed', inset: 0, zIndex: 1001,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{
                pointerEvents: 'all',
                width: '100%',
                maxWidth: '560px',
                maxHeight: '90vh',
                overflowY: 'auto',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.97)',
                border: '1px solid rgba(255,255,255,1)',
                boxShadow: '0 24px 80px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                padding: '36px 36px 32px',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0d1117', letterSpacing: '-0.025em', marginBottom: '5px' }}>
                    Propose a Project
                  </div>
                  <div style={{ fontSize: '0.83rem', color: '#6b7a8d', lineHeight: 1.6 }}>
                    Your mail client will open with everything pre-filled.
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '4px', borderRadius: '6px', color: '#9aa5b4',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'color 0.15s, background 0.15s', flexShrink: 0, marginLeft: '12px',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#0d1117'; e.currentTarget.style.background = 'rgba(0,0,0,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#9aa5b4'; e.currentTarget.style.background = 'none' }}
                  aria-label="Close"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* Name + Title row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="modal-form-row">
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input
                      type="text"
                      placeholder="Max Mustermann"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      style={{ ...inputStyle, borderColor: touched && !form.name ? '#ef4444' : 'rgba(0,0,0,0.10)' }}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(0,101,189,0.12)'}
                      onBlur={e => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Project Title *</label>
                    <input
                      type="text"
                      placeholder="e.g. Weather Balloon"
                      value={form.title}
                      onChange={e => handleChange('title', e.target.value)}
                      style={{ ...inputStyle, borderColor: touched && !form.title ? '#ef4444' : 'rgba(0,0,0,0.10)' }}
                      onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(0,101,189,0.12)'}
                      onBlur={e => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Area of Interest</label>
                  <select
                    value={form.area}
                    onChange={e => handleChange('area', e.target.value)}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(0,101,189,0.12)'}
                    onBlur={e => e.target.style.boxShadow = 'none'}
                  >
                    <option value="">Select an area…</option>
                    <option value="Hardware / Airframe">Hardware / Airframe</option>
                    <option value="Firmware / Embedded">Firmware / Embedded</option>
                    <option value="Data Science / Analysis">Data Science / Analysis</option>
                    <option value="Flight Operations">Flight Operations</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Description *</label>
                  <textarea
                    placeholder="What do you want to build? What problem does it solve?"
                    value={form.description}
                    onChange={e => handleChange('description', e.target.value)}
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '110px',
                      borderColor: touched && !form.description ? '#ef4444' : 'rgba(0,0,0,0.10)',
                    }}
                    onFocus={e => e.target.style.boxShadow = '0 0 0 3px rgba(0,101,189,0.12)'}
                    onBlur={e => e.target.style.boxShadow = 'none'}
                  />
                </div>

                {touched && (!form.name || !form.title || !form.description) && (
                  <div style={{ fontSize: '0.78rem', color: '#ef4444', marginTop: '-6px' }}>
                    Please fill in all required fields.
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center', padding: '12px 20px', fontSize: '0.9rem' }}
                  >
                    Open Mail Client
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn-secondary"
                    style={{ padding: '12px 20px', fontSize: '0.9rem' }}
                  >
                    Cancel
                  </button>
                </div>

                <div style={{ fontSize: '0.70rem', color: '#9aa5b4', textAlign: 'center', lineHeight: 1.5 }}>
                  Sends to contact@airtum.de · No data is stored on this site
                </div>
              </form>
            </motion.div>
          </div>

          <style>{`
            @media (max-width: 560px) {
              .modal-form-row { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  )
}
