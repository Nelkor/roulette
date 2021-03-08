import { Spin } from './game-types'
import { GAME_INTERVAL, TICK_INTERVAL } from './game-config'
import { createSpin } from './spin'

let id = 0
let lastTick = 0
let currentSpin: Spin = null

const yieldNewSpin = time => {
  id++
  lastTick = time
  currentSpin = createSpin(id, lastTick)

  // выдать_закрытую_игру(currentSpin)
}

yieldNewSpin(Date.now())

const tick = () => {
  const now = Date.now()

  if (now - lastTick < GAME_INTERVAL) {
    return
  }

  // выдать_открытую_игру(currentSpin)
  // сохранить_игру_куда_следует(currentSpin)

  yieldNewSpin(now)
}

export const startTicking = (): void => {
  setTimeout(tick, TICK_INTERVAL)
}
