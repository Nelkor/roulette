import { createServer } from 'http'

import { Server } from 'ws'

import { PORT } from './core-config'
import { onHttpRequest } from './http-app'
import { onRealtimeConnection } from './ws-app'

export const startServer = (): void => {
  const server = createServer(onHttpRequest)
  const wsServer = new Server({ server })

  wsServer.on('connection', onRealtimeConnection)
  server.listen(PORT, 'localhost')

  console.log(`Started at ${PORT} port`)
}
