export interface PlayerStats {
  武力: number
  內力: number
  敏捷: number
  智謀: number
  名聲: number
  生命: number
}

export type StatKey = keyof PlayerStats

export interface StatEffect {
  武力?: number
  內力?: number
  敏捷?: number
  智謀?: number
  名聲?: number
  生命?: number
}

export interface Choice {
  text: string
  nextId: string
  effects?: StatEffect
  requirement?: {
    attribute: StatKey
    min: number
  }
}

export interface StoryNode {
  id: string
  text: string
  choices?: Choice[]
  isEnding?: boolean
  autoEffects?: StatEffect
}

export interface CheckNode {
  id: string
  text: string
  check: {
    attribute: StatKey
    threshold: number
  }
  passId: string
  failId: string
  passText: string
  failText: string
  passEffects?: StatEffect
  failEffects?: StatEffect
  isCheck: true
}

export type GameNode = StoryNode | CheckNode

export function isCheckNode(node: GameNode): node is CheckNode {
  return 'isCheck' in node && node.isCheck === true
}

export const INITIAL_STATS: PlayerStats = {
  武力: 5,
  內力: 3,
  敏捷: 5,
  智謀: 5,
  名聲: 0,
  生命: 100,
}
