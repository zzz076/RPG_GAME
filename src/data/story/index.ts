import type { GameNode } from '../../types/game'
import chapter01Data from './chapter01.json'
import chapter02Data from './chapter02.json'
import chapter03Data from './chapter03.json'

const chapter01 = chapter01Data as Record<string, GameNode>
const chapter02 = chapter02Data as Record<string, GameNode>
const chapter03 = chapter03Data as Record<string, GameNode>

const allChapters: Record<string, GameNode>[] = [
  chapter01,
  chapter02,
  chapter03,
]

export const storyNodes: Record<string, GameNode> = Object.assign({}, ...allChapters)

export const STARTING_NODE_ID = 'c01-prologue'
