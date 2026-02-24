export interface Choice {
  text: string
  nextId: string
}

export interface StoryNode {
  id: string
  text: string
  choices?: Choice[]
  isEnding?: boolean
}

export interface GameState {
  currentNodeId: string
  history: string[]
}
