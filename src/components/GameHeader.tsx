import './GameHeader.css'

interface GameHeaderProps {
  onShowHistory: () => void
  historyCount: number
}

export function GameHeader({ onShowHistory, historyCount }: GameHeaderProps) {
  return (
    <header className="game-header">
      <h1 className="game-title">江湖行</h1>
      {historyCount > 0 && (
        <button className="history-btn" onClick={onShowHistory}>
          回顧 ({historyCount})
        </button>
      )}
    </header>
  )
}
