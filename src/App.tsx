import { useState, useCallback } from 'react'
import { StartScreen } from './components/StartScreen'
import { GameHeader, type TextSpeed } from './components/GameHeader'
import { StoryPanel } from './components/StoryPanel'
import { ChoicePanel } from './components/ChoicePanel'
import { HistoryPanel } from './components/HistoryPanel'
import { StatsPanel } from './components/StatsPanel'
import { StatChange } from './components/StatChange'
import { CheckResult } from './components/CheckResult'
import type { HistoryEntry } from './components/HistoryPanel'
import type { Choice, PlayerStats, StatEffect, GameNode } from './types/game'
import { isCheckNode, INITIAL_STATS } from './types/game'
import { storyNodes, STARTING_NODE_ID } from './data/story/index'
import './App.css'

type GamePhase = 'start' | 'playing' | 'checking' | 'ended'

function applyEffects(stats: PlayerStats, effects: StatEffect): PlayerStats {
  const newStats = { ...stats }
  for (const [key, value] of Object.entries(effects)) {
    if (value !== undefined) {
      newStats[key as keyof PlayerStats] += value
    }
  }
  newStats.生命 = Math.max(0, Math.min(100, newStats.生命))
  return newStats
}

function App() {
  const [phase, setPhase] = useState<GamePhase>('start')
  const [currentNodeId, setCurrentNodeId] = useState(STARTING_NODE_ID)
  const [stats, setStats] = useState<PlayerStats>({ ...INITIAL_STATS })
  const [showChoices, setShowChoices] = useState(false)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [showHistory, setShowHistory] = useState(false)
  const [pendingEffects, setPendingEffects] = useState<StatEffect | null>(null)
  const [checkInfo, setCheckInfo] = useState<{
    attribute: keyof PlayerStats
    threshold: number
    playerValue: number
    passed: boolean
  } | null>(null)
  const [roundCount, setRoundCount] = useState(0)
  const [textSpeed, setTextSpeed] = useState<TextSpeed>(1)
  const [snapshots, setSnapshots] = useState<Array<{
    nodeId: string
    stats: PlayerStats
    history: HistoryEntry[]
    roundCount: number
  }>>([])

  const currentNode: GameNode | undefined = storyNodes[currentNodeId]

  const handleStart = useCallback(() => {
    setPhase('playing')
    setCurrentNodeId(STARTING_NODE_ID)
    setStats({ ...INITIAL_STATS })
    setHistory([])
    setShowChoices(false)
    setPendingEffects(null)
    setCheckInfo(null)
    setRoundCount(0)
    setSnapshots([])
  }, [])

  const processNode = useCallback((nodeId: string, currentStats: PlayerStats) => {
    const node = storyNodes[nodeId]
    if (!node) return

    if (isCheckNode(node)) {
      const playerValue = currentStats[node.check.attribute]
      const passed = playerValue >= node.check.threshold
      setCheckInfo({
        attribute: node.check.attribute,
        threshold: node.check.threshold,
        playerValue,
        passed,
      })
      setPhase('checking')
    }
  }, [])

  const handleTextComplete = useCallback(() => {
    if (!currentNode) return

    if (isCheckNode(currentNode)) {
      processNode(currentNodeId, stats)
      return
    }

    if (currentNode.autoEffects) {
      const newStats = applyEffects(stats, currentNode.autoEffects)
      setStats(newStats)
      setPendingEffects(currentNode.autoEffects)
    }

    if (currentNode.isEnding) {
      setPhase('ended')
    } else if (currentNode.choices) {
      setShowChoices(true)
    }
  }, [currentNode, currentNodeId, stats, processNode])

  const handleCheckComplete = useCallback(() => {
    if (!checkInfo || !isCheckNode(currentNode)) return

    setSnapshots(prev => [...prev, {
      nodeId: currentNodeId,
      stats: { ...stats },
      history: [...history],
      roundCount,
    }])

    const nextId = checkInfo.passed ? currentNode.passId : currentNode.failId
    const effects = checkInfo.passed ? currentNode.passEffects : currentNode.failEffects

    setHistory(prev => [
      ...prev,
      {
        text: currentNode.text + (checkInfo.passed ? ` ${currentNode.passText}` : ` ${currentNode.failText}`),
      },
    ])

    let newStats = stats
    if (effects) {
      newStats = applyEffects(stats, effects)
      setStats(newStats)
      setPendingEffects(effects)
    }

    setCheckInfo(null)
    setPhase('playing')
    setCurrentNodeId(nextId)
    setRoundCount(prev => prev + 1)

    if (newStats.生命 <= 0) {
      setPhase('ended')
    }
  }, [checkInfo, currentNode, stats])

  const handleChoose = useCallback((choice: Choice) => {
    if (!currentNode || isCheckNode(currentNode)) return

    setSnapshots(prev => [...prev, {
      nodeId: currentNodeId,
      stats: { ...stats },
      history: [...history],
      roundCount,
    }])

    setHistory(prev => [
      ...prev,
      { text: currentNode.text, choiceText: choice.text },
    ])

    let newStats = stats
    if (choice.effects) {
      newStats = applyEffects(stats, choice.effects)
      setStats(newStats)
      setPendingEffects(choice.effects)
    }

    setShowChoices(false)
    setCurrentNodeId(choice.nextId)
    setRoundCount(prev => prev + 1)

    if (newStats.生命 <= 0) {
      setPhase('ended')
    }
  }, [currentNode, stats])

  const handleGoBack = useCallback(() => {
    if (snapshots.length === 0) return
    const prev = snapshots[snapshots.length - 1]
    setSnapshots(s => s.slice(0, -1))
    setCurrentNodeId(prev.nodeId)
    setStats(prev.stats)
    setHistory(prev.history)
    setRoundCount(prev.roundCount)
    setShowChoices(false)
    setPendingEffects(null)
    setCheckInfo(null)
    setPhase('playing')
  }, [snapshots])

  const handleRestart = useCallback(() => {
    setPhase('start')
    setShowChoices(false)
    setHistory([])
    setPendingEffects(null)
    setCheckInfo(null)
    setSnapshots([])
  }, [])

  const handleEffectComplete = useCallback(() => {
    setPendingEffects(null)
  }, [])

  if (phase === 'start') {
    return <StartScreen onStart={handleStart} />
  }

  if (!currentNode) {
    return (
      <div className="game-container">
        <GameHeader onShowHistory={() => {}} historyCount={0} textSpeed={textSpeed} onSpeedChange={setTextSpeed} />
        <div className="error-panel">
          <p>劇情載入錯誤：找不到節點 {currentNodeId}</p>
          <button onClick={handleRestart}>重新開始</button>
        </div>
      </div>
    )
  }

  const displayText = isCheckNode(currentNode)
    ? currentNode.text
    : currentNode.text

  const isEnding = !isCheckNode(currentNode) && currentNode.isEnding
  const isDead = stats.生命 <= 0

  return (
    <div className="game-container">
      <GameHeader
        onShowHistory={() => setShowHistory(true)}
        historyCount={history.length}
        roundCount={roundCount}
        textSpeed={textSpeed}
        onSpeedChange={setTextSpeed}
      />
      <StatsPanel stats={stats} />
      <StoryPanel
        text={isDead ? displayText + '\n\n你的生命歸零，倒在了江湖路上……' : displayText}
        isEnding={isEnding || isDead}
        onTextComplete={isDead ? () => setPhase('ended') : handleTextComplete}
        onRestart={handleRestart}
        speed={textSpeed}
      />
      {!isCheckNode(currentNode) && currentNode.choices && (
        <ChoicePanel
          choices={currentNode.choices}
          onChoose={handleChoose}
          visible={showChoices && !isDead}
          onGoBack={snapshots.length > 0 ? handleGoBack : undefined}
        />
      )}
      {pendingEffects && (
        <StatChange effects={pendingEffects} onComplete={handleEffectComplete} />
      )}
      {checkInfo && phase === 'checking' && (
        <CheckResult
          attribute={checkInfo.attribute}
          threshold={checkInfo.threshold}
          playerValue={checkInfo.playerValue}
          passed={checkInfo.passed}
          onComplete={handleCheckComplete}
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
