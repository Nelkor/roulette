export type GameVerification = {
  stringified: string
  encrypted: string
  hashed: string
}

export type Game = {
  id: number
  time: number
  result: number
  isOpen: boolean
  verification: GameVerification
}

export type PublicGame = Readonly<{
  id: number
  time: number
  encrypted: string
  hashed: string
  result?: number
  stringified?: string
}>
