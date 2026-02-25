import { useState } from 'react'
import './StartScreen.css'

interface StartScreenProps {
  onStart: (playerName: string) => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [name, setName] = useState('')
  const [showInput, setShowInput] = useState(false)

  const handleBegin = () => {
    if (!showInput) {
      setShowInput(true)
      return
    }
    const finalName = name.trim() || '無名少年'
    onStart(finalName)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBegin()
    }
  }

  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="start-title">江湖行</h1>
        <p className="start-subtitle">東方武俠文字冒險</p>
        <div className="start-divider">───────</div>
        <p className="start-desc">
          雲隱山上，少年習劍。<br />
          一場偶遇，捲入江湖。<br />
          你的選擇，將決定命運的走向。
        </p>
        {showInput && (
          <div className="name-input-area">
            <label className="name-label">請輸入你的名字</label>
            <input
              className="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="留空則為「無名少年」"
              maxLength={10}
              autoFocus
            />
          </div>
        )}
        <button className="start-btn" onClick={handleBegin}>
          {showInput ? '踏入江湖' : '開始'}
        </button>
      </div>
    </div>
  )
}
