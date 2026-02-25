import { useEffect, useState } from 'react'
import type { StatEffect } from '../types/game'
import './StatChange.css'

interface StatChangeProps {
  effects: StatEffect
  onComplete: () => void
}

export function StatChange({ effects, onComplete }: StatChangeProps) {
  const [visible, setVisible] = useState(true)

  const entries = Object.entries(effects).filter(([, v]) => v !== 0 && v !== undefined) as [string, number][]

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onComplete()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onComplete])

  if (!visible || entries.length === 0) return null

  return (
    <div className="stat-change-overlay">
      <div className="stat-change-list">
        {entries.map(([key, value]) => (
          <div key={key} className={`stat-change-item ${value > 0 ? 'gain' : 'loss'}`}>
            {key} {value > 0 ? '+' : ''}{value}
          </div>
        ))}
      </div>
    </div>
  )
}
