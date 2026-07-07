import { useProposalMode } from '../context/ProposalModeContext'

export default function ProposalModeToggle() {
  const { proposalMode, setProposalMode } = useProposalMode()

  return (
    <div className="proposal-toggle-container">
      <button
        className={`proposal-toggle-btn ${proposalMode ? 'proposal-toggle-btn--active' : ''}`}
        onClick={() => setProposalMode(!proposalMode)}
        title="Toggle proposal mode (Ctrl + Alt + P)"
      >
        <span className="proposal-toggle-indicator" />
        <span className="proposal-toggle-text">
          {proposalMode ? 'Internal HPP Mode' : 'Client Mode'}
        </span>
      </button>
    </div>
  )
}
