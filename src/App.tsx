import { useState, useCallback } from 'react'
import { StartScreen } from './components/StartScreen'
import { GameHeader } from './components/GameHeader'
import { StoryPanel } from './components/StoryPanel'
import { ChoicePanel } from './components/ChoicePanel'
import { HistoryPanel } from './components/HistoryPanel'
import type { HistoryEntry } from './components/HistoryPanel'
import type { Choice } from './types/game'
import { storyNodes, STARTING_NODE_ID } from './data/story'
import './App.css'

type GamePhase = 'start' | 'playing' | 'ended'

function App() {
  const [phase, setPhase] = useState<GamePhase>('start')
  const [currentNodeId, setCurrentNodeId] = useState(STARTING_NODE_ID)
  const [showChoices, setShowChoices] = useState(false)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const currentNode = storyNodes[currentNodeId]

  const handleStart = useCallback(() => {
    setPhase('playing')
    setCurrentNodeId(STARTING_NODE_ID)
    setHistory([])
    setShowChoices(false)
  }, [])

  const handleTextComplete = useCallback(() => {
    if (currentNode?.isEnding) {
      setPhase('ended')
    } else {
      setShowChoices(true)
    }
  }, [currentNode])

  const handleChoose = useCallback((choice: Choice) => {
    setHistory(prev => [
      ...prev,
      { text: currentNode.text, choiceText: choice.text },
    ])
    setShowChoices(false)
    setCurrentNodeId(choice.nextId)
  }, [currentNode])

  const handleRestart = useCallback(() => {
    setPhase('start')
    setShowChoices(false)
    setHistory([])
  }, [])

  if (phase === 'start') {
    return <StartScreen onStart={handleStart} />
  }

  return (
    <div className="game-container">
      <GameHeader
        onShowHistory={() => setShowHistory(true)}
        historyCount={history.length}
      />
      <StoryPanel
        text={currentNode.text}
        isEnding={currentNode.isEnding}
        onTextComplete={handleTextComplete}
        onRestart={handleRestart}
      />
      {currentNode.choices && (
        <ChoicePanel
          choices={currentNode.choices}
          onChoose={handleChoose}
          visible={showChoices}
        />
      )}
      <HistoryPanel
        entries={history}
        visible={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </div>
  )
}

export default App
