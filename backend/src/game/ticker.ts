import { TICK_INTERVAL } from './game-config'
import { startOfNextMinute } from './time-helper'
import { addGame, updatePool } from './games-pool'

let lastGameTime = 0

const tick = () => {
  const now = Date.now()
  const time = startOfNextMinute(now)

  updatePool(now)

  if (time == lastGameTime) {
    return
  }

  lastGameTime = time

  addGame(time)
}

export const startTicking = (): void => {
  setInterval(tick, TICK_INTERVAL)
}
