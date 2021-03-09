import { Game } from './game-types'
import { encrypt } from './cryptographer'

let id = 0

const pool: Game[] = []

const getRandomValue = () => Math.floor(Math.random() * 900) + 100

export const addGame = (time: number): void => {
  id++

  const result = getRandomValue()
  const verification = encrypt(id, time, result)

  pool.push({
    id,
    time,
    result,
    isOpen: false,
    verification,
  })
}
