import { IncomingMessage, ServerResponse } from 'http'

import { getGames } from '@/game/games-pool'

const answer = (res: ServerResponse, data?: unknown) => {
  res.write(JSON.stringify({ data }))
}

export const onHttpRequest = async (
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> => {
  answer(res, getGames())

  res.end()
}
