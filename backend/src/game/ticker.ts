import { TICK_INTERVAL } from './game-config'
import { ceilTime } from './time-helper'
import { addGame } from './games-pool'

let lastGameTime = 0

const tick = () => {
  const time = ceilTime(Date.now())

  if (time == lastGameTime) {
    return
  }

  lastGameTime = time

  addGame(time)
}

export const startTicking = (): void => {
  setInterval(tick, TICK_INTERVAL)
}
