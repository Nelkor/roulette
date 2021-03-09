export type GameVerification = {
  stringified: string
  encrypted: string
  hashed: string
  key: string
  vector: string
}

export type Game = {
  id: number
  time: number
  result: number
  isOpen: boolean
  verification: GameVerification
}
