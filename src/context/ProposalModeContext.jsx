import { createContext, useContext, useState, useEffect } from 'react'

const ProposalModeContext = createContext()

export function ProposalModeProvider({ children }) {
  const [proposalMode, setProposalMode] = useState(false)

  useEffect(() => {
    // Check URL params for admin/proposal mode
    const params = new URLSearchParams(window.location.search)
    if (params.get('admin') === 'true' || params.get('proposal') === 'true') {
      setProposalMode(true)
    }

    // Keyboard shortcut: Ctrl + Alt + P to toggle
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'p') {
        setProposalMode((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <ProposalModeContext.Provider value={{ proposalMode, setProposalMode }}>
      {children}
    </ProposalModeContext.Provider>
  )
}

export function useProposalMode() {
  const context = useContext(ProposalModeContext)
  if (!context) {
    throw new Error('useProposalMode must be used within a ProposalModeProvider')
  }
  return context
}
