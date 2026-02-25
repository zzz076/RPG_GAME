import './GameHeader.css'

export type TextSpeed = 1 | 2 | 3 | 0

const SPEED_LABELS: Record<TextSpeed, string> = {
  1: '1x',
  2: '2x',
  3: '3x',
  0: '瞬',
}

interface GameHeaderProps {
  onShowHistory: () => void
  historyCount: number
  roundCount?: number
  textSpeed: TextSpeed
  onSpeedChange: (speed: TextSpeed) => void
}

export function GameHeader({ onShowHistory, historyCount, roundCount, textSpeed, onSpeedChange }: GameHeaderProps) {
  const nextSpeed = (): TextSpeed => {
    const order: TextSpeed[] = [1, 2, 3, 0]
    const idx = order.indexOf(textSpeed)
    return order[(idx + 1) % order.length]
  }

  return (
    <header className="game-header">
      <h1 className="game-title">江湖行</h1>
      <div className="header-right">
        <button className="speed-btn" onClick={() => onSpeedChange(nextSpeed())}>
          {SPEED_LABELS[textSpeed]}
        </button>
        {roundCount !== undefined && roundCount > 0 && (
          <span className="round-count">第 {roundCount} 回</span>
        )}
        {historyCount > 0 && (
          <button className="history-btn" onClick={onShowHistory}>
            回顧 ({historyCount})
          </button>
        )}
      </div>
    </header>
  )
}
