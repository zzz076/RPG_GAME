import type { Choice } from '../types/game'
import './ChoicePanel.css'

interface ChoicePanelProps {
  choices: Choice[]
  onChoose: (choice: Choice) => void
  visible: boolean
}

export function ChoicePanel({ choices, onChoose, visible }: ChoicePanelProps) {
  if (!visible) return null

  return (
    <div className="choice-panel">
      <div className="choice-list">
        {choices.map((choice, index) => (
          <button
            key={choice.nextId}
            className="choice-btn"
            onClick={() => onChoose(choice)}
          >
            <span className="choice-index">{['壹', '貳', '參', '肆'][index]}</span>
            <span className="choice-text">{choice.text}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
