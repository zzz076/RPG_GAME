import './HistoryPanel.css'

interface HistoryEntry {
  text: string
  choiceText?: string
}

interface HistoryPanelProps {
  entries: HistoryEntry[]
  visible: boolean
  onClose: () => void
}

export function HistoryPanel({ entries, visible, onClose }: HistoryPanelProps) {
  if (!visible) return null

  return (
    <div className="history-overlay" onClick={onClose}>
      <div className="history-panel" onClick={(e) => e.stopPropagation()}>
        <div className="history-header">
          <h2 className="history-title">劇情回顧</h2>
          <button className="history-close" onClick={onClose}>✕</button>
        </div>
        <div className="history-content">
          {entries.map((entry, index) => (
            <div key={index} className="history-entry">
              <p className="history-text">{entry.text}</p>
              {entry.choiceText && (
                <p className="history-choice">▸ {entry.choiceText}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export type { HistoryEntry }
