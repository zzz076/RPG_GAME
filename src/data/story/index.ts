import type { GameNode } from '../../types/game'
import chapter01Data from './chapter01.json'

const chapter01 = chapter01Data as Record<string, GameNode>

const allChapters: Record<string, GameNode>[] = [
  chapter01,
]

export const storyNodes: Record<string, GameNode> = Object.assign({}, ...allChapters)

export const STARTING_NODE_ID = 'c01-prologue'
