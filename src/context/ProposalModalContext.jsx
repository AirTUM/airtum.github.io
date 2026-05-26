import { createContext, useContext, useState } from 'react'

const ProposalModalContext = createContext(null)

export function ProposalModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ProposalModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ProposalModalContext.Provider>
  )
}

export function useProposalModal() {
  const ctx = useContext(ProposalModalContext)
  if (!ctx) throw new Error('useProposalModal must be used inside ProposalModalProvider')
  return ctx
}
