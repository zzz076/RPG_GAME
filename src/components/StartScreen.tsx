import './StartScreen.css'

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
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
        <button className="start-btn" onClick={onStart}>
          踏入江湖
        </button>
      </div>
    </div>
  )
}
