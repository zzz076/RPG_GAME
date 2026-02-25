import type { PlayerStats } from '../types/game'
import './StatsPanel.css'

interface StatsPanelProps {
  stats: PlayerStats
}

const STAT_CONFIG: { key: keyof PlayerStats; label: string; icon: string }[] = [
  { key: '武力', label: '武力', icon: '⚔' },
  { key: '內力', label: '內力', icon: '☯' },
  { key: '敏捷', label: '敏捷', icon: '風' },
  { key: '智謀', label: '智謀', icon: '策' },
  { key: '名聲', label: '名聲', icon: '名' },
  { key: '生命', label: '生命', icon: '命' },
]

const PERSONALITY_CONFIG: { key: keyof PlayerStats; label: string; icon: string }[] = [
  { key: '向武', label: '向武', icon: '🔥' },
  { key: '重情', label: '重情', icon: '交' },
  { key: '世故', label: '世故', icon: '圓' },
  { key: '桀驁', label: '桀驁', icon: '狂' },
  { key: '守正', label: '守正', icon: '方' },
]

export function StatsPanel({ stats }: StatsPanelProps) {
  return (
    <div className="stats-container">
      <div className="stats-panel">
        {STAT_CONFIG.map(({ key, label, icon }) => (
          <div key={key} className={`stat-item ${key === '生命' ? 'stat-life' : ''}`}>
            <span className="stat-icon">{icon}</span>
            <span className="stat-label">{label}</span>
            <span className={`stat-value ${key === '名聲' ? (stats[key] >= 0 ? 'positive' : 'negative') : ''}`}>
              {key === '名聲' && stats[key] > 0 ? '+' : ''}{stats[key]}
            </span>
          </div>
        ))}
      </div>
      <div className="stats-panel personality-panel">
        {PERSONALITY_CONFIG.map(({ key, label, icon }) => (
          <div key={key} className="stat-item personality-item" title="個性數值會影響能觸發的隱藏選項">
            <span className="stat-icon">{icon}</span>
            <span className="stat-label">{label}</span>
            <span className="stat-value text-muted">{stats[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
