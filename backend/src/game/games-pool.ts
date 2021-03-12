import { Game, PublicGame } from './game-types'
import { GAME_LIFETIME, OPEN_TIME } from './game-config'
import { encrypt } from './cryptographer'

let id = 0
let games: Game[] = []

const getRandomValue = () => Math.floor(Math.random() * 900) + 100

export const getGames = (): PublicGame[] => games
  .map(game => {
    const { id, time, result, isOpen, verification } = game
    const { stringified, encrypted, hashed } = verification

    return isOpen
      ? { id, time, encrypted, hashed, result, stringified }
      : { id, time, encrypted, hashed }
  })

export const addGame = (time: number): void => {
  id++

  const result = getRandomValue()
  const verification = encrypt(id, time, result)

  games.push({
    id,
    time,
    result,
    isOpen: false,
    verification,
  })
}

export const updatePool = (time: number): void => {
  games = games.filter(game => time - game.time < GAME_LIFETIME)

  games.forEach(game => {
    game.isOpen = game.time - time < OPEN_TIME
  })
}
