import { useEffect, useState } from 'react'
import type { StatKey } from '../types/game'
import './CheckResult.css'

interface CheckResultProps {
  attribute: StatKey
  threshold: number
  playerValue: number
  passed: boolean
  onComplete: () => void
}

export function CheckResult({ attribute, threshold, playerValue, passed, onComplete }: CheckResultProps) {
  const [phase, setPhase] = useState<'showing' | 'done'>('showing')

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className="check-overlay">
      <div className="check-box">
        <div className="check-title">【屬性檢定】</div>
        <div className="check-detail">
          {attribute} ≥ {threshold}
        </div>
        <div className="check-player">
          你的{attribute}：{playerValue}
        </div>
        <div className={`check-result ${passed ? 'pass' : 'fail'}`}>
          {passed ? '—— 成功 ——' : '—— 失敗 ——'}
        </div>
      </div>
    </div>
  )
}
