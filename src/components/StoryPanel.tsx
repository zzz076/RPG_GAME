import { useEffect, useState } from 'react'
import './StoryPanel.css'

interface StoryPanelProps {
  text: string
  isEnding?: boolean
  onTextComplete: () => void
  onRestart?: () => void
  speed?: number
}

export function StoryPanel({ text, isEnding, onTextComplete, onRestart, speed = 1 }: StoryPanelProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsComplete(false)

    if (speed === 0) {
      setDisplayedText(text)
      setIsComplete(true)
      onTextComplete()
      return
    }

    const baseInterval = 40
    const interval = baseInterval / speed
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
        setIsComplete(true)
        onTextComplete()
      }
    }, interval)

    return () => clearInterval(timer)
  }, [text, speed])

  const handleSkip = () => {
    setDisplayedText(text)
    setIsComplete(true)
    onTextComplete()
  }

  return (
    <div className="story-panel" onClick={!isComplete ? handleSkip : undefined}>
      <p className="story-text">{displayedText}</p>
      {!isComplete && (
        <span className="story-cursor">▍</span>
      )}
      {isComplete && isEnding && (
        <div className="ending-section">
          <div className="ending-divider">── 故事結束 ──</div>
          {onRestart && (
            <button className="restart-btn" onClick={onRestart}>
              重新開始
            </button>
          )}
        </div>
      )}
    </div>
  )
}
